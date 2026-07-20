"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";


type Product = {

  id:number;

  name:string;

  price:number;

  image:string;

  category:string;

  weight:string;

  purity:string;

};



type CartItem = Product & {

  quantity:number;

};




type CartContextType = {

  cart:CartItem[];

  addToCart:(product:Product)=>void;

  removeFromCart:(id:number)=>void;

  increaseQuantity:(id:number)=>void;

  decreaseQuantity:(id:number)=>void;

};





const CartContext = createContext<CartContextType | null>(null);






export function CartProvider({

children,

}:{

children:ReactNode;

}){





const [cart,setCart] = useState<CartItem[]>([]);







function addToCart(product:Product){



setCart((prev)=>{


const exist = prev.find(

(item)=>item.id === product.id

);





if(exist){



return prev.map((item)=>

item.id === product.id

?

{

...item,

quantity:item.quantity + 1

}

:

item

);



}





return [

...prev,

{

...product,

quantity:1

}

];



});



}









function removeFromCart(id:number){


setCart((prev)=>


prev.filter(

(item)=>item.id !== id

)


);


}









function increaseQuantity(id:number){


setCart((prev)=>


prev.map((item)=>

item.id === id

?

{

...item,

quantity:item.quantity + 1

}

:

item

)


);



}









function decreaseQuantity(id:number){


setCart((prev)=>


prev.map((item)=>

item.id === id && item.quantity > 1

?

{

...item,

quantity:item.quantity - 1

}

:

item

)


);



}









return(


<CartContext.Provider


value={{

cart,

addToCart,

removeFromCart,

increaseQuantity,

decreaseQuantity,

}}


>


{children}


</CartContext.Provider>


);



}








export function useCart(){


const context = useContext(CartContext);



if(!context){


throw new Error(

"useCart must be used inside CartProvider"

);


}



return context;



}