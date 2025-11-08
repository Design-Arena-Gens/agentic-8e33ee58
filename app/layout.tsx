import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "صبح کی بانگ",
  description: "پنجابی دیہات کی صبح کی خوشبو اور محنت بھرے دن کا آغاز۔"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ur" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
