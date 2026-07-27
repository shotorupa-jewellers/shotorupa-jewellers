import Link from "next/link";


export default function Footer() {

  return (

    <footer className="
    border-t
    border-black/10
    bg-[#F6F3EC]
    px-8
    py-16
    ">


      <div className="
      max-w-[1240px]
      mx-auto
      grid
      md:grid-cols-4
      gap-10
      ">



        {/* BRAND */}

        <div className="relative">


          <div className="
          font-serif
          text-xl
          tracking-[0.15em]
          mb-5
          ">
            SHOTORUPA
          </div>



          <div className="
          font-serif
          text-sm
          tracking-[0.4em]
          text-[#A6875A]
          mb-5
          ">
            JEWELLERS
          </div>



          <p className="
          text-sm
          text-[#9C8F7C]
          leading-relaxed
          max-w-[260px]
          ">
            Crafting timeless jewellery with pure gold,
            diamonds and artistry. Every piece carries
            a story of elegance, purity and everlasting beauty.
          </p>





          {/* ADMIN ICON */}

          <Link

          href="/admin/login"

          className="
          absolute
          top-0
          right-0

          w-12
          h-12

          rounded-full

          bg-gradient-to-r
          from-[#D4AF37]
          to-[#A6875A]

          text-white

          flex
          items-center
          justify-center

          shadow-xl

          hover:scale-110

          transition

          "

          >

          ⚜️

          </Link>



        </div>









        {/* SHOP */}


        <div>


          <h4 className="
          text-xs
          uppercase
          tracking-widest
          text-[#9C8F7C]
          mb-5
          ">
            Shop
          </h4>



          <ul className="
          space-y-3
          text-sm
          ">


            <li>

              <Link
              href="/shop?category=Rings"
              className="hover:text-[#A6875A]"
              >

                Rings

              </Link>

            </li>



            <li>

              <Link
              href="/shop?category=Necklaces"
              className="hover:text-[#A6875A]"
              >

                Necklaces

              </Link>

            </li>



            <li>

              <Link
              href="/shop?category=Earrings"
              className="hover:text-[#A6875A]"
              >

                Earrings

              </Link>

            </li>



            <li>

              <Link
              href="/shop?category=Bracelets"
              className="hover:text-[#A6875A]"
              >

                Bracelets

              </Link>

            </li>


          </ul>


        </div>







        {/* COMPANY */}


        <div>


          <h4 className="
          text-xs
          uppercase
          tracking-widest
          text-[#9C8F7C]
          mb-5
          ">
            Company
          </h4>



          <ul className="
          space-y-3
          text-sm
          ">


            <li>

              <Link
              href="/about"
              className="hover:text-[#A6875A]"
              >

                About

              </Link>

            </li>



            <li>

              <Link
              href="/contact"
              className="hover:text-[#A6875A]"
              >

                Contact

              </Link>

            </li>


          </ul>


        </div>
                {/* NEWSLETTER */}

        <div>


          <h4 className="
          text-xs
          uppercase
          tracking-widest
          text-[#9C8F7C]
          mb-5
          ">
            Stay in Light
          </h4>




          <div className="
          flex
          border-b
          border-black
          pb-2
          ">



            <input

            type="email"

            placeholder="Email address"

            className="
            bg-transparent
            outline-none
            flex-1
            text-sm
            "

            />




            <button

            className="
            text-xs
            uppercase
            tracking-widest
            text-[#A6875A]
            "

            >

              Join

            </button>



          </div>



        </div>




      </div>









      {/* BOTTOM */}



      <div className="

      max-w-[1240px]

      mx-auto

      mt-12

      pt-6

      border-t

      border-black/10


      flex

      flex-col

      md:flex-row


      items-center

      justify-between


      gap-5


      text-xs


      text-[#9C8F7C]

      ">






        <span>

          © 2026 Shotorupa Jewellers. All Rights Reserved.

        </span>







        <div className="

        flex

        items-center

        gap-6

        ">




          <span>

            BD · Magura · Sadar

          </span>





        </div>





      </div>




    </footer>


  );

}
