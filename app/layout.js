import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';
import { OrderProvider } from "./context/OrderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodify",
  description: "food app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right"/>
        <OrderProvider>
          <AuthProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </AuthProvider>
        </OrderProvider>
      </body>
    </html>
  );
}
