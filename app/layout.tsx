import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Modal from "@/components/modal/modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Quizz giao bài tập",
  description: "Trang web giúp mọi người tạo các bài trắc nghiệm",
  openGraph: {
    title: "Quizz giao bài tập",
    description: "Trang web giúp mọi người tạo các bài trắc nghiệm",
    url: "https://quizz-fawn.vercel.app",
    siteName: "Quizz.Js",
    images: [
      {
        url: "/logo.svg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://quizz-fawn.vercel.app",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
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
          <Toaster position="top-right" richColors />
        </body>
      </ClerkProvider>
    </html>
  );
}
