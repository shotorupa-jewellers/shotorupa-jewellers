"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();


  const menu = [
    {
      name: "Dashboard",
      icon: "📊",
      link: "/admin"
    },
    {
      name: "Products",
      icon: "💍",
      link: "/admin/products"
    },
    {
      name: "Add Product",
      icon: "➕",
      link: "/admin/add-product"
    },
    {
      name: "Orders",
      icon: "🛒",
      link: "/admin/orders"
    },
    {
      name: "Customers",
      icon: "👥",
      link: "/admin/customers"
    },
    {
      name: "Settings",
      icon: "⚙️",
      link: "/admin/settings"
    },
  ];



  return (

    <aside className="
      w-72
      min-h-screen
      bg-[#111]
      text-white
      p-6
      hidden
      md:block
    ">


      {/* Logo */}

      <div className="
        text-2xl
        font-serif
        text-[#d4af37]
        mb-10
      ">
        Shotorupa
        <br/>
        Admin
      </div>



      {/* Menu */}

      <nav className="space-y-3">


        {
          menu.map((item)=>(

            <Link
              key={item.name}
              href={item.link}

              className={`
              flex
              items-center
              gap-4
              px-4
              py-3
              rounded-xl
              transition

              ${
                pathname === item.link
                ?
                "bg-[#d4af37] text-black"
                :
                "hover:bg-white/10"
              }

              `}
            >

              <span className="text-xl">
                {item.icon}
              </span>


              <span>
                {item.name}
              </span>


            </Link>


          ))
        }


      </nav>



      {/* Logout */}

      <button

        className="
        mt-10
        w-full
        bg-red-600
        py-3
        rounded-xl
        "

      >

        🚪 Logout

      </button>



    </aside>


  );

}