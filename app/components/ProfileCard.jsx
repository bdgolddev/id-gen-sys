// "use client";
import { Roboto } from "next/font/google";
import React, { useRef, useState } from "react";
import Image from "next/image";
import coscard from "@/public/assets/coscard.jpg";
import cardBack from "@/public/assets/cardBack.jpg";
import profile from "@/public/assets/p.jpg";
import bdgoldLogo from "@/public/assets/bdgoldLogo.png";
import bajusLogo from "@/public/assets/bajusLogo.png";
import { FiPrinter } from "react-icons/fi";
import { useQRCode } from "next-qrcode";
import { useReactToPrint } from "react-to-print";
import "@/app/components/stylesheet/profileCardCss.css";
import { FaRegPenToSquare } from "react-icons/fa6";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
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

  // const componentRef = useRef();

  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  // const {name, username, email, phone, website, address } = userInfo;
  return (
    <>
      <div ref={contentToPrint} className="h-cm w-cm bg-slate-50">
        <div className="ms-cm-31">
          {/* ===========================================================================================================Back Side */}
          <div className="">
            {/* <h2 className="text-2xl font-semibold uppercase">Preview Card</h2> */}
            <div className="card-w card-h pt-cm-1 relative hero marginBottom">
              <Image
                src={cardBack}
                width={600}
                alt="Card"
                className="brightness-[1.05]"
              />
              <div className="hero-content text-left text-neutral-content">
                <div className="absolute h-full text-black ">
                  <div className="m-2 mx-3 flex gap-1 overflow-hidden">
                    <div className="">
                      <div className="p-0.5 bg-white">
                        <Image src={profile} width={80} alt="Card" />
                      </div>
                      <div className="m-0.5 font-semibold text-red-600 flex flex-col justify-center border-2 border-red-600">
                        <div
                          style={{ fontSize: "0.15cm", padding: "0.05cm" }}
                          className="bg-red-600 text-white text-center"
                        >
                          Customer ID
                        </div>
                        <div
                          style={{ fontSize: "0.3cm" }}
                          className="text-center font-bold"
                        >
                          {address.zipcode.slice(0, 2)}22
                          {id}
                        </div>
                      </div>
                      <Canvas
                        text={`http://localhost:3000/user/${id}/${username}`}
                        options={{
                          errorCorrectionLevel: "M",
                          margin: 3,
                          scale: 4,
                          width: 75,
                          color: {
                            dark: "#000000",
                            light: "#ffffff",
                          },
                        }}
                      />
                    </div>
                    <div className="relative w-100 my-1 me-1">
                      <div class="relative overflow-x-auto">
                        <ul
                          style={{ fontSize: "0.25cm" }}
                          className="font-medium"
                        >
                          <li className="">
                            <span className="font-bold">Name :</span> {name}
                          </li>
                          <li className="">
                            <span className="font-bold">Shop :</span> {email}{" "}
                            Shorno Shilpaloy
                          </li>
                          <li className="">
                            <span className="font-bold">Phone :</span> {phone}
                          </li>
                          <li className="">
                            <span className="font-bold">NID No :</span>{" "}
                            {username}
                          </li>
                          <li className="">
                            <span className="font-bold">Address :</span>{" "}
                            {address.street}, {address.suite}, {address.city}
                            {address.street}, {address.suite}, {address.city}
                          </li>
                        </ul>
                      </div>
                      <div className="flex absolute bottom-0">
                        <div
                          style={{ fontSize: "0.2cm" }}
                          className="text-left mt-1 text-black border-t border-stone-700 bottom-0"
                        >
                          <p className="font-bold mt-1 mb-1 italic">
                            This card is non-transferable, If the card is lost,
                            Kindly notify Bangladesh Gold authority as soon as
                            possible.
                          </p>
                          <p className="font-extrabold uppercase">
                            IF FOUND PLEASE RETURN THE CARD TO THE OFFICE.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===========================================================================================================Front Side */}
          <div className="">
            <div className=" card-w card-h mt-cm-18">
              <Image
                src={coscard}
                width={600}
                alt="Card"
                className="brightness-[1.05]"
              />
              <div className="hero-content text-left text-neutral-content">
                <div className="h-full text-black ">{/* Text */}</div>
              </div>
            </div>
          </div>
          {/* <div className="card-w ps-10 ">
            <Image
              src={cardFront}
              width={500}
              alt="Card"
              className="brightness-[1.05]"
            />
          </div> */}
        </div>
      </div>

      <button
        onClick={() => {
          handlePrint(null, () => contentToPrint.current);
        }}
        className="btn btn-primary  mt-12 ms-10 m-2"
      >
        <FiPrinter />
        Print
      </button>

      <button className="btn bg-red-500  mt-12 m-2">
        <FaRegPenToSquare />
        Update
      </button>
    </>
  );
};
export default ProfileCard;
