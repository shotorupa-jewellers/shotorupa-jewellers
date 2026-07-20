import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

import AdminGuard from "@/components/admin/AdminGuard";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <AdminGuard>


      <div className="min-h-screen flex bg-[#f5f5f5]">


        {/* Sidebar */}
        <Sidebar />



        {/* Right Side */}
        <div className="flex-1 flex flex-col">


          <Header />



          <main className="p-8">

            {children}

          </main>



        </div>



      </div>


    </AdminGuard>

  );


}