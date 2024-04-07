// "use client";
import Image from "next/image";
import React from "react";
import cardBack from "@/public/assets/cardBack.jpg";
import profile from "@/public/assets/p.jpg";
import Link from "next/link";
import { getAllUsersData } from "../caller/api";


const users = await getAllUsersData();
const Card = () => {
  return (
    <>
      <div className="w-[680px] p-10">
        {users.map((user) => (
          <Link
            href={`/user/${user.id}`}
            className="block p-3 hover:bg-green-600 bg-green-500 text-white my-1"
            key={user.id}
          >
            {user.name} <span className="font-extrabold">&#8811;</span>
          </Link>
        ))}
      </div>
    </>
  );
};

{
  /* <div className="w-[680px] p-10 bg-slate-50">
  <h2 className="text-2xl font-semibold uppercase">Preview Card</h2>
  <div className="relative hero">
    <Image src={cardBack} width={600} alt="Card" />
    <div className="hero-overlay bg-opacity-5"></div>
    <div className="hero-content text-left text-neutral-content">
      <div className="absolute max-w-[1011px] m-12 mt-24 h-full text-black text-left flex gap-7">
        <div className="">
          <div className="bg-white p-2">
            <Image src={profile} width={120} alt="Card" />
          </div>
          <div className=" m-1 font-semibold text-red-600 flex flex-col justify-center border-2 border-red-600">
            <div className="p-0.5 bg-red-600 text-white text-lg">
              CustomerID
            </div>
            <div className="p-0.5 text-xl text-center">4810</div>
          </div>
        </div>
        <div className="">
          <ul className="font-medium text-lg">
            <li className="">
              <span className="font-semibold">Name :</span> Mintu Saha
            </li>
            <li className="">
              <span className="font-semibold">Shop :</span> Joy Ma Tara Shorno
              Shilpaloy
            </li>
            <li className="">
              <span className="font-semibold">Phone :</span> 01745678911
            </li>
            <li className="">
              <span className="font-semibold">NID No :</span> 91415421545
            </li>
            <li className="">
              <span className="font-semibold">Address :</span> Katherpul ,Shibu
              Market Fotullah, Narayangonj
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="bg-white p-2">
          <Image src={profile} width={120} alt="Card" />
        </div>
        <div className="text-base text-black mt-36 mx-6">
          <p className="font-semibold">
            This card is non-transferable, If the card is lost, Kindly notify
            Bangladesh Gold Authority within 24 hours.
          </p>
          <p className="font-bold uppercase">
            IF FOUND PLEASE RETURN THE CARD TO THE OFFICE.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
export default Card;
