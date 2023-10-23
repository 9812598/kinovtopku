import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/context/TemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Тестовое задание",
  description:
    "Веб-приложение, отображающее ТОП-10 самых низкорейтинговых фильмов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <div className="min-h-screen bg-slate-100 text-2xl font-semibold duration-300">
            <div className="mx-auto py-10 max-w-6xl ">{children}</div>
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
