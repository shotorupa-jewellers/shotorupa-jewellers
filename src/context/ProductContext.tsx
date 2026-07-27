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









const ProductContext = createContext<ProductContextType | undefined>(undefined);









export function ProductProvider({

children

}:{

children:ReactNode;

}){





const [products,setProducts] = useState<Product[]>([]);



const [deletedProducts,setDeletedProducts] = useState<DeletedProduct[]>([]);












// =============================
// LOAD PRODUCTS FROM FIREBASE
// =============================


useEffect(()=>{



const unsubscribe = onSnapshot(


collection(db,"products"),



(snapshot)=>{



const data = snapshot.docs.map((item)=>{



const p = item.data();



return {


id:item.id,


name:p.name || "",


price:Number(p.price) || 0,


category:p.category || "Gold",


weight:p.weight || "",


purity:p.purity || "",


image:p.image || "/images/default.jpg"



};


});





setProducts(data);



}




);



return ()=>unsubscribe();



},[]);











// =============================
// ADD PRODUCT
// =============================


async function addProduct(


product:Omit<Product,"id">


){



await addDoc(


collection(db,"products"),


{


name:product.name,


price:Number(product.price),


category:product.category,


weight:product.weight,


purity:product.purity,


image:product.image


}



);



}












// =============================
// DELETE PRODUCT
// =============================


async function deleteProduct(


id:string


){



const product = products.find(

p=>p.id===id

);




if(product){


setDeletedProducts(prev=>[

...prev,

{

...product,

deletedAt:new Date().toISOString()

}

]);


}







await deleteDoc(


doc(

db,

"products",

id

)


);



}











// =============================
// UPDATE PRODUCT
// =============================


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


price:Number(product.price),


category:product.category,


weight:product.weight,


purity:product.purity,


image:product.image



}



);



}











// =============================
// RESTORE PRODUCT
// =============================


function restoreProduct(


id:string


){



const deleted = deletedProducts.find(

p=>p.id===id

);




if(!deleted) return;





addProduct({

name:deleted.name,

price:deleted.price,

category:deleted.category,

weight:deleted.weight,

purity:deleted.purity,

image:deleted.image

});





setDeletedProducts(prev=>

prev.filter(

p=>p.id!==id

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



const context = useContext(ProductContext);




if(!context){


throw new Error(

"useProducts must be used inside ProductProvider"

);


}





return context;



}