"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";


export type Product = {

  id:number;

  name:string;

  price:number;

  category:string;

  weight:string;

  purity:string;

  image:string;

};



export type DeletedProduct = Product & {

  deletedAt:string;

};





type ProductContextType = {

  products:Product[];

  deletedProducts:DeletedProduct[];

  addProduct:(product:Product)=>void;

  deleteProduct:(id:number)=>void;

  restoreProduct:(id:number)=>void;

  updateProduct:(product:Product)=>void;

};







const ProductContext =

createContext<ProductContextType | undefined>(undefined);







export function ProductProvider({

children

}:{

children:ReactNode;

}){



const [products,setProducts]=useState<Product[]>([]);


const [deletedProducts,setDeletedProducts]=useState<DeletedProduct[]>([]);



const [loaded,setLoaded]=useState(false);







// Load Data

useEffect(()=>{


try{


const savedProducts =
localStorage.getItem("products");


const savedDeleted =
localStorage.getItem("deletedProducts");




if(savedProducts){

setProducts(
JSON.parse(savedProducts)
);

}




if(savedDeleted){

setDeletedProducts(
JSON.parse(savedDeleted)
);

}



}

catch(error){

console.log(error);

}



setLoaded(true);



},[]);









// Save Data

useEffect(()=>{


if(!loaded) return;




localStorage.setItem(

"products",

JSON.stringify(products)

);





localStorage.setItem(

"deletedProducts",

JSON.stringify(deletedProducts)

);



},[products,deletedProducts,loaded]);









// Add Product

function addProduct(product:Product){


setProducts((prev)=>[

...prev,

product

]);


}








// Delete Product

function deleteProduct(id:number){



const product =

products.find(

(item)=>item.id===id

);





if(product){



setDeletedProducts((prev)=>[

...prev,

{

...product,

deletedAt:new Date().toLocaleString()

}

]);



}






setProducts((prev)=>

prev.filter(

(item)=>item.id!==id

)

);



}









// Restore Product

function restoreProduct(id:number){



const product =

deletedProducts.find(

(item)=>item.id===id

);





if(!product) return;





const {

deletedAt,

...restoreProductData

}=product;





setProducts((prev)=>[

...prev,

restoreProductData

]);





setDeletedProducts((prev)=>

prev.filter(

(item)=>item.id!==id

)

);



}










// Update Product

function updateProduct(product:Product){



setProducts((prev)=>

prev.map((item)=>

item.id===product.id

?

product

:

item

)

);



}









return(


<ProductContext.Provider


value={{

products,

deletedProducts,

addProduct,

deleteProduct,

restoreProduct,

updateProduct

}}


>


{children}


</ProductContext.Provider>



);



}









export function useProducts(){



const context =

useContext(ProductContext);





if(!context){


throw new Error(

"useProducts must be used inside ProductProvider"

);


}



return context;



}