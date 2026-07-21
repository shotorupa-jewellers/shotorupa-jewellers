"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
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






const CartContext = createContext<CartContextType | null>(null);








export function CartProvider({

children,

}:{

children:ReactNode;

}){



const [cart,setCart] = useState<CartItem[]>([]);







// Load cart

useEffect(()=>{


if(typeof window !== "undefined"){


const savedCart = localStorage.getItem("cart");


if(savedCart){

try{

setCart(JSON.parse(savedCart));

}

catch{

setCart([]);

}


}


}


},[]);










// Save cart

useEffect(()=>{


if(typeof window !== "undefined"){


localStorage.setItem(

"cart",

JSON.stringify(cart)

);


}


},[cart]);









// Add Product

function addToCart(product:Product){



setCart((prev)=>{


const existing = prev.find(

(item)=>item.id === product.id

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



}











// Remove Product

function removeFromCart(id:string){



setCart((prev)=>


prev.filter(

(item)=>item.id !== id

)


);


}











// Increase Quantity

function increaseQuantity(id:string){



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











// Decrease Quantity

function decreaseQuantity(id:string){



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











// Clear Cart

function clearCart(){


setCart([]);


if(typeof window !== "undefined"){


localStorage.removeItem("cart");


}


}









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
