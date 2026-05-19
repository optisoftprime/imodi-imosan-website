// // app/layout.tsx

// import type { Metadata } from "next";
// import "./globals.css";

// import Navbar from "./components/Navbar";
// import Footer from "./components/footer";

// export const metadata: Metadata = {
//   title: "Imodi Imosan",
//   description:
//     "Modern Next.js website built with TypeScript and Tailwind CSS.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-white text-black antialiased">

//         {/* Navbar */}
//         {/* <Navbar /> */}

//         {/* Main Content */}
//         {/* <main>{children}</main> */}
//         <main className="min-h-screen">
//           <div className="relative overflow-hidden pb-20">
//             <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-b from-[#B6CCFF] to-transparent blur-3xl" />
//             <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
//               {/* <SiteHeader /> */}
//               <Navbar />
//               {children}

//             </div>
//           </div>
//           {/* <Footer /> */}
//         </main>

//         {/* Footer */}
//         <Footer />
//       </body>
//     </html>
//   );
// }

// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Imodi Imosan",
  description:
    "Modern Next.js website built with TypeScript and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white text-black antialiased">
        <div className="flex min-h-screen flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1">
            <div className="relative overflow-hidden">
              {/* Background Glow */}
              {/* <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-[#e5f8f9] blur-3xl" /> */}
              {/* Page Content */}
              {children}
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}