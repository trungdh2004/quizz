import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import Modal from "@/components/modal/modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizz",
  description: "Làm bài tập quizz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={font.className}>
          {children}
          <Modal />
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
