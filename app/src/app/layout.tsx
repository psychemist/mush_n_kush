import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Mush n'Kush - Nature's Finest",
  description: "Landing Page",
  author: "Serenity Vortex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-gray-500`}>
        <main className="mx-auto w-11/12 lg:w-10/12">{children}</main>
      </body>
    </html>
  );
}
