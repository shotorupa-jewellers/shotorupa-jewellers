"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";


import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";


import { db } from "@/lib/firebase";





export type Product = {

  id:string;

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


addProduct:(product:Omit<Product,"id">)=>void;


deleteProduct:(id:string)=>void;


restoreProduct:(id:string)=>void;


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









// Firebase থেকে Product Load

useEffect(()=>{



const unsubscribe = onSnapshot(

collection(db,"products"),

(snapshot)=>{


const data = snapshot.docs.map((item)=>(


{

id:item.id,

...item.data()

}


)) as Product[];




setProducts(data);



}



);



return ()=>unsubscribe();



},[]);












// Add Product Firebase

async function addProduct(

product:Omit<Product,"id">

){



await addDoc(

collection(db,"products"),

product

);



}












// Delete Product

async function deleteProduct(

id:string

){



await deleteDoc(

doc(

db,

"products",

id

)

);



}











// Update Product

async function updateProduct(

product:Product

){



const productRef = doc(

db,

"products",

product.id

);





await updateDoc(

productRef,

{


name:product.name,


price:product.price,


category:product.category,


weight:product.weight,


purity:product.purity,


image:product.image



}

);



}












// Restore (future use)

function restoreProduct(id:string){


console.log(
"Restore product:",
id
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



const context = useContext(ProductContext);




if(!context){


throw new Error(

"useProducts must be used inside ProductProvider"

);


}



return context;



}