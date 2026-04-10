import PopupCTA from "@/SharedComponent/PopUpCTA";
import "./globals.css";
import Header from "@/SharedComponent/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white">
        <Header />
        {children}
        <PopupCTA/>
      </body>
    </html>
  );
}