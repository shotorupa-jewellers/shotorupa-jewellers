export default function ShopLocation() {


  return (

    <section className="max-w-7xl mx-auto px-6 py-14">


      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">


        <div className="grid md:grid-cols-2">


          {/* Contact Info */}

          <div className="p-8">


            <h2 className="text-4xl font-serif text-[#6b4d1f]">

              Visit Our Store

            </h2>



            <p className="mt-5 text-gray-600 leading-7">

              Experience premium gold and diamond jewellery
              collections at our showroom.

            </p>





            <div className="mt-8 space-y-4">


              <p>

                📍 <b>Address:</b><br />

                Harinath Dutta Road,
                Magura-1, Bangladesh

              </p>



              <p>

                ☎️ <b>Phone:</b><br />

                01721636573

              </p>




              <p>

                🕒 <b>Opening Hours:</b><br />

                Saturday - Thursday<br />

                10:00 AM - 8:00 PM

              </p>



            </div>






            <button className="mt-8 bg-[#9b7a3d] text-white px-8 py-3 rounded-lg">


              Get Direction

            </button>



          </div>







          {/* Google Map */}

          <div className="h-[400px]">


            <iframe

              src="https://maps.google.com/maps?q=Magura%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"

              width="100%"

              height="100%"

              loading="lazy"

              className="border-0"

            >


            </iframe>



          </div>



        </div>


      </div>


    </section>


  );

}