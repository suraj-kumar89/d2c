
import Header from "@/SharedComponent/Header";
import "./globals.css";


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
         <Header/>
          {children}
       
        </div>

      </body>
    </html>
  );
}