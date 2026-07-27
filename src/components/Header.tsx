"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";


export default function Header() {


  const [open, setOpen] = useState(false);


  const { cart } = useCart();

  const { wishlist } = useWishlist();



  return (
    <header className="
    fixed
    top-0
    left-0
    right-0
    z-50
    bg-[#F6F3EC]/90
    backdrop-blur-md
    border-b
    border-black/10
    ">


      <div className="
      max-w-[1240px]
      mx-auto
      px-8
      py-5
      flex
      items-center
      justify-between
      ">


        {/* LOGO */}

        <Link
          href="/"
          className="
          font-serif
          text-xl
          tracking-[0.15em]
          "
        >
          SHOTORUPA
        </Link>





        {/* DESKTOP MENU */}

        <nav className="
        hidden
        md:flex
        gap-10
        "
        >

          <Link
          href="/"
          className="text-xs uppercase tracking-widest hover:text-[#A6875A]"
          >
            Home
          </Link>


          <Link
          href="/shop"
          className="text-xs uppercase tracking-widest hover:text-[#A6875A]"
          >
            Shop
          </Link>


          <Link
          href="/about"
          className="text-xs uppercase tracking-widest hover:text-[#A6875A]"
          >
            About
          </Link>


          <Link
          href="/contact"
          className="text-xs uppercase tracking-widest hover:text-[#A6875A]"
          >
            Contact
          </Link>


        </nav>







        {/* ICONS */}


        <div className="
        flex
        items-center
        gap-5
        ">



          <span className="
          hidden
          sm:block
          text-[11px]
          tracking-widest
          ">
            EN / BDT
          </span>






          {/* WISHLIST */}


          <Link
          href="/wishlist"
          className="
          relative
          hover:text-[#A6875A]
          "
          >


            <Heart 
            size={19} 
            strokeWidth={1.4}
            />



            {
              wishlist.length > 0 &&

              <motion.span

              initial={{
                scale:0
              }}

              animate={{
                scale:1
              }}

              transition={{
                type:"spring",
                stiffness:500
              }}

              className="
              absolute
              -top-3
              -right-3
              bg-[#A6875A]
              text-white
              text-[10px]
              w-5
              h-5
              rounded-full
              flex
              items-center
              justify-center
              shadow-lg
              "
              >

                {wishlist.length}

              </motion.span>

            }


          </Link>









          {/* CART */}


          <Link

          href="/cart"

          className="
          relative
          hover:text-[#A6875A]
          "

          >


            <ShoppingBag 
            size={19} 
            strokeWidth={1.4}
            />



            {
              cart.length > 0 &&


              <motion.span

              initial={{
                scale:0,
                opacity:0
              }}

              animate={{
                scale:1,
                opacity:1
              }}

              transition={{
                type:"spring",
                stiffness:500
              }}

              className="
              absolute
              -top-3
              -right-3
              bg-[#A6875A]
              text-white
              text-[10px]
              w-5
              h-5
              rounded-full
              flex
              items-center
              justify-center
              shadow-lg
              "
              >

                {cart.length}

              </motion.span>


            }


          </Link>








          {/* MOBILE MENU BUTTON */}

          <button

          onClick={()=>setOpen(!open)}

          className="
          md:hidden
          "

          >

            {
              open
              ?
              <X size={24}/>
              :
              <Menu size={24}/>
            }

          </button>



        </div>


      </div>









      {/* MOBILE MENU */}


      {
        open && (

          <motion.div

          initial={{
            height:0,
            opacity:0
          }}

          animate={{
            height:"auto",
            opacity:1
          }}

          className="
          md:hidden
          bg-[#F6F3EC]
          border-t
          border-black/10
          px-8
          py-6
          flex
          flex-col
          gap-5
          "

          >


            <Link href="/" onClick={()=>setOpen(false)}>
              Home
            </Link>


            <Link href="/shop" onClick={()=>setOpen(false)}>
              Shop
            </Link>


            <Link href="/about" onClick={()=>setOpen(false)}>
              About
            </Link>


            <Link href="/contact" onClick={()=>setOpen(false)}>
              Contact
            </Link>


          </motion.div>

        )
      }



    </header>
  );
}