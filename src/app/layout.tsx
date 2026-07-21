import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { ProductProvider } from "@/context/ProductContext";
import { OfferProvider } from "@/context/OfferContext";

export const metadata: Metadata = {
  title: "SHOTORUPA JEWELLERS",
  description: "Premium Gold & Diamond Jewellery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            <ProductProvider>
              <OfferProvider>
                {children}
              </OfferProvider>
            </ProductProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
