import { ApolloWrapper } from "../../lib/apollo-wrapper";
import ProvidersWrapper from "./ProviderWrapper";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ApolloWrapper>
          <ProvidersWrapper>{children}</ProvidersWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
