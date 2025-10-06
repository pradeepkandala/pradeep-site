import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Pradeep Kandala | Code with Dharma",
  description: "Personal portfolio of Pradeep Kandala – Senior Java Developer | ISM Vision | Dharma-driven coder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-20"> {/* padding to offset fixed navbar */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
