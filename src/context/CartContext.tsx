"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import type { ReactNode } from "react";

import type { Product } from "@/types/product";



export type CartItem = Product & {

  quantity:number;

};





type CartContextType = {

  cart:CartItem[];

  addToCart:(product:Product)=>void;

  removeFromCart:(id:string)=>void;

  increaseQuantity:(id:string)=>void;

  decreaseQuantity:(id:string)=>void;

  clearCart:()=>void;

};






const CartContext = createContext<CartContextType | undefined>(undefined);







export function CartProvider({

children,

}:{

children:ReactNode;

}){



const [cart,setCart] = useState<CartItem[]>([]);






// ===============================
// LOAD CART FROM LOCAL STORAGE
// ===============================


useEffect(()=>{


if(typeof window !== "undefined"){


try{


const savedCart = localStorage.getItem("cart");


if(savedCart){

setCart(JSON.parse(savedCart));

}


}

catch(error){

console.log(
"Cart Load Error:",
error
);

}


}


},[]);









// ===============================
// SAVE CART
// ===============================


useEffect(()=>{


if(typeof window !== "undefined"){


localStorage.setItem(

"cart",

JSON.stringify(cart)

);


}


},[cart]);









// ===============================
// ADD TO CART
// ===============================


const addToCart = (product:Product)=>{


setCart((prev)=>{


const existing = prev.find(

(item)=>

item.id === product.id

);





if(existing){


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


};











// ===============================
// REMOVE FROM CART
// ===============================


const removeFromCart = (id:string)=>{


setCart((prev)=>


prev.filter(

(item)=>

item.id !== id

)


);


};











// ===============================
// INCREASE QUANTITY
// ===============================


const increaseQuantity = (id:string)=>{


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


};











// ===============================
// DECREASE QUANTITY
// ===============================


const decreaseQuantity = (id:string)=>{


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


};











// ===============================
// CLEAR CART
// ===============================


const clearCart = ()=>{


setCart([]);


if(typeof window !== "undefined"){


localStorage.removeItem("cart");


}


};












return(


<CartContext.Provider


value={{

cart,

addToCart,

removeFromCart,

increaseQuantity,

decreaseQuantity,

clearCart

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