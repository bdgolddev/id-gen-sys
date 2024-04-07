// "use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import cardBack from "@/public/assets/cardBack.jpg";
import profile from "@/public/assets/p.jpg";
import { FiPrinter } from "react-icons/fi";
import { useQRCode } from "next-qrcode";
import { useReactToPrint } from "react-to-print";





const ProfileCard = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
}) => {
  const onPrint = () => {
    window.print();
  };
  const { Canvas } = useQRCode();

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => alert("Print success")
  })

  // const {name, username, email, phone, website, address } = userInfo;
  return (
    <div ref={componentRef} className="w-[2480px] h-[3508px] bg-slate-400">
      <div className="w">
        <div className="w-[680px] p-10 ">
          {/* <h2 className="text-2xl font-semibold uppercase">Preview Card</h2> */}
          <div className="relative hero">
            <Image
              src={cardBack}
              width={600}
              alt="Card"
              className="brightness-[1.05]"
            />
            <div className="hero-content text-left text-neutral-content">
              <div className="absolute max-w-[1011px] m-12 mt-24 h-full text-black text-left flex gap-7">
                <div className="w-1/2">
                  <div className="p-2">
                    <Image src={profile} width={150} alt="Card" />
                  </div>
                  <div className=" m-1 font-semibold text-red-600 flex flex-col justify-center border-2 border-red-600">
                    <div className="p-0.5 bg-red-600 text-white text-lg text-center">
                      Customer ID
                    </div>
                    <div className="p-0.5 text-xl text-center font-bold">
                      {address.zipcode.slice(0, 2)}
                      {id}
                    </div>
                  </div>
                  <Canvas
                    text={`http://localhost:3000/user/${id}`}
                    options={{
                      errorCorrectionLevel: "M",
                      margin: 3,
                      scale: 4,
                      width: 130,
                      color: {
                        dark: "#000000",
                        light: "#ffffff",
                      },
                    }}
                  />
                </div>
                <div className="w-100">
                  <ul className="font-medium text-lg">
                    <li className="">
                      <span className="font-bold">Name :</span> {name}
                    </li>
                    <li className="">
                      <span className="font-bold">Shop :</span> {email}
                    </li>
                    <li className="">
                      <span className="font-bold">Phone :</span> {phone}
                    </li>
                    <li className="">
                      <span className="font-bold">NID No :</span> {username}
                    </li>
                    <li className="">
                      <span className="font-bold">Address :</span>{" "}
                      {address.street}, {address.suite}, {address.city}
                    </li>
                  </ul>
                  <div className="flex">
                    <div className="text-center mt-5 text-sm text-black border-t-4 border-stone-700">
                      <p className="font-bold mt-2 text-xs mb-2 italic">
                        This card is non-transferable, If the card is lost,
                        Kindly notify Bangladesh Gold Authority within 24 hours.
                      </p>
                      <p className="font-bold uppercase">
                        IF FOUND PLEASE RETURN THE CARD TO THE OFFICE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => handlePrint} className=" my-5">
            <FiPrinter />
          Print
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
