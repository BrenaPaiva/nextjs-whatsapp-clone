import React from "react";
import Image from "next/image";

function login() {
  return <div className="flex justify-center items-center bg-panel-header-background h-screen flex-col gap-6 ">
    <div className="flex items-center justify-center gap-2 text-white">
      <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300} />
      <span>Whatsapp</span>

    </div>
  </div>;
}

export default login;
