import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskMaster",
  description: "Simple task management app with priorities and due dates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
