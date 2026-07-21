"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Offer = {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  description: string;
  image: string;
};

type OfferContextType = {
  offers: Offer[];
  addOffer: (offer: Offer) => void;
  removeOffer: (id: string) => void;
};

const OfferContext = createContext<OfferContextType | undefined>(undefined);

export function OfferProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [offers, setOffers] = useState<Offer[]>([]);

  function addOffer(offer: Offer) {
    setOffers((prev) => [offer, ...prev]);
  }

  function removeOffer(id: string) {
    setOffers((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <OfferContext.Provider
      value={{
        offers,
        addOffer,
        removeOffer,
      }}
    >
      {children}
    </OfferContext.Provider>
  );
}

export function useOffers() {
  const context = useContext(OfferContext);

  if (!context) {
    throw new Error("useOffers must be used inside OfferProvider");
  }

  return context;
}
