import { builder } from './builder';
import "./types/User"
import "./types/Car"
import "./types/Trip"
import "./types/VerificationToken"

export const schema = builder.toSchema()
