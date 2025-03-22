import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lightyear",
  description: "O lugar para suas entregas intergalácticas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${interFont.className} antialiased`}>
        <header className="flex bg-brand-500 px-3 md:px-0 py-4">
          <div className="w-full max-w-[1200px] mx-auto">
            <Image
              src="svg/logo.svg"
              width={220}
              height={160}
              alt="Lightyear logo"
              className="w-[160px] md:w-[220px]"
            />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
