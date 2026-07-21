"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";



export type WishlistProduct = {

  id:string;

  name:string;

  price:number;

  image:string;

  category:string;

  weight:string;

  purity:string;

};





type WishlistContextType = {

  wishlist:WishlistProduct[];

  addToWishlist:(product:WishlistProduct)=>boolean;

  removeFromWishlist:(id:string)=>void;

};







const WishlistContext = 
createContext<WishlistContextType | null>(null);








export function WishlistProvider({

children,

}:{

children:ReactNode;

}){





const [wishlist,setWishlist] = 
useState<WishlistProduct[]>([]);









function addToWishlist(product:WishlistProduct){



const exist = wishlist.find(

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









function clearWishlist(){

setWishlist([]);

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