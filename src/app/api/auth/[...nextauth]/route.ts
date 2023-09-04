import { compare } from 'bcrypt'
import {prisma} from '../../../../../lib/prisma'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@prisma/client'
import { toast } from 'react-hot-toast'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
            return null
          }
  
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })
  
          if (!user) {
            return null
          }

          if (!user.verified) {
            toast.error('You must activate your account via email')
          }
  
          const isPasswordValid = await compare(
            credentials.password,
            user.password
          )
  
          if (!isPasswordValid) {
            return null
          }
  
          return {
            id: user.id + '',
            email: user.email,
            name: user.firstName,
            // user properties to send to session
          }
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          // add any properties I want to add to user object
        }
      }
    },
    jwt: ({ token, user }) => {
      console.log('JWT Callback', { token, user })
      if (user) {
        const u = user as unknown as User
        return {
          ...token,
          id: u.id,
          // add any properties I want to send to client from server from
          // Prisma User
        }
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }