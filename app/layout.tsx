import "./globals.css";
import { Lato } from "next/font/google";

const inter = Lato({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Kristianto & Stephanie",
  description: "Kristianto & Stephanie Wedding Invitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
