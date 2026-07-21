"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode
} from "react";



export type Product = {

  id:string;

  name:string;

  price:number;

  image:string;

  category:string;

  weight:string;

  purity:string;

};






type WishlistContextType = {

  wishlist:Product[];

  addToWishlist:(product:Product)=>boolean;

  removeFromWishlist:(id:string)=>void;

};






const WishlistContext =
createContext<WishlistContextType | null>(null);









export function WishlistProvider({

children

}:{

children:ReactNode;

}){



const [wishlist,setWishlist] =
useState<Product[]>([]);










function addToWishlist(product:Product){



const exist = wishlist.some(

(item)=>item.id === product.id

);




if(exist){

return false;

}





setWishlist((prev)=>[

...prev,

product

]);



return true;


}









function removeFromWishlist(id:string){


setWishlist((prev)=>


prev.filter(

(item)=>item.id !== id

)


);



}









return(


<WishlistContext.Provider


value={{


wishlist,

addToWishlist,

removeFromWishlist


}}


>


{children}


</WishlistContext.Provider>


);



}









export function useWishlist(){


const context = useContext(WishlistContext);



if(!context){


throw new Error(

"useWishlist must be used inside WishlistProvider"

);


}



return context;


}