import Header from "@/components/Header";
import { ApolloWrapper } from "../../lib/apollo-wrapper";
import ProvidersWrapper from "./ProviderWrapper";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { MyContextProvider } from "./context/store";

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
          <ProvidersWrapper>
            <MyContextProvider>
              <div className="bg-white ">
                {" "}
                <Header />
                {children}
                <Footer />
              </div>
            </MyContextProvider>
          </ProvidersWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
