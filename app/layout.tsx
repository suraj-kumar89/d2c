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
      <body className="text-white relative overflow-x-hidden">

        {/* 🔥 BACKGROUND LIGHT */}
        <div className="bg-blobs-layer">
          <div className="bg-blob bg-blob--1"></div>
          <div className="bg-blob bg-blob--2"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-20">
          <Header />
          {children}
          <PopupCTA />
        </div>

      </body>
    </html>
  );
}