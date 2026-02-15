import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Egzont Demiri - Site Under Maintenance",
  description:
    "This site is currently under maintenance. We will be back soon with an improved experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GTM && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        )}
        {children}
      </body>
    </html>
  );
}
