"use client";

import { useState } from "react";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "@/lib/firebase";



declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier | null;
  }
}



export default function PhoneAuth(){


const [phone,setPhone]=useState("");

const [otp,setOtp]=useState("");

const [confirmation,setConfirmation]=useState<any>(null);

const [message,setMessage]=useState("");





function sendOTP(){


try{


if(!phone){

setMessage("Enter phone number ❌");

return;

}





if(!window.recaptchaVerifier){


window.recaptchaVerifier = new RecaptchaVerifier(

auth,

"recaptcha-container",

{

size:"invisible",

}

);


}





signInWithPhoneNumber(

auth,

phone,

window.recaptchaVerifier

)

.then((result)=>{


setConfirmation(result);


setMessage("OTP sent successfully ✅");


})

.catch((error)=>{


setMessage(error.message);


});



}

catch(error:any){


setMessage(error.message);


}


}










function verifyOTP(){


if(!confirmation){

setMessage("Send OTP first ❌");

return;

}



confirmation.confirm(otp)

.then(()=>{


setMessage("Phone verified successfully ✅");


})

.catch(()=>{


setMessage("Wrong OTP ❌");


});


}








return(

<div>


<h2 className="text-xl font-bold mb-4">

Phone Verification

</h2>





<input

placeholder="+8801712345678"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

className="w-full border p-3 rounded-lg mb-3"

/>





<button

onClick={sendOTP}

className="w-full bg-[#9b7a3d] text-white py-3 rounded-lg"

>

Send OTP

</button>





<div id="recaptcha-container"></div>







{

confirmation &&

<>


<input

placeholder="Enter OTP"

value={otp}

onChange={(e)=>setOtp(e.target.value)}

className="w-full border p-3 rounded-lg mt-4"

/>





<button

onClick={verifyOTP}

className="w-full bg-black text-white py-3 rounded-lg mt-3"

>

Verify OTP

</button>



</>


}







{

message &&

<p className="mt-4 text-center">

{message}

</p>


}




</div>


);


}