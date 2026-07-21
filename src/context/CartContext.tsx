"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";


type Product = {

  id:string;

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





// Load Cart

useEffect(()=>{


const savedCart = localStorage.getItem("cart");


if(savedCart){

setCart(JSON.parse(savedCart));

}


},[]);






// Save Cart

useEffect(()=>{


localStorage.setItem(

"cart",

JSON.stringify(cart)

);


},[cart]);








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








function removeFromCart(id:string){


setCart((prev)=>


prev.filter(

(item)=>item.id !== id

)


);


}









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









function clearCart(){


setCart([]);


localStorage.removeItem("cart");


}









return(


<CartContext.Provider


value={{


cart,


addToCart,


removeFromCart,


increaseQuantity,


decreaseQuantity,


clearCart,


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