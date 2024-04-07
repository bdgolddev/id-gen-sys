"use client"
import { getSingleUserData } from "@/app/caller/api";
import React from "react";
import ProfileCard from "../../components/ProfileCard";
import Link from "next/link";

const page = async ({ params }) => {
  const { id } = params;
  const userInfo = await getSingleUserData(id);
  return (
    <div>
      {/* <div className="flex justify-around">
        <h1 className="text-2xl font-semibold m-5">
          This is <span className="text-green-600">{userInfo.name}</span>
        </h1>
        <Link
          className="m-5 px-5 py-3 text-lg text-white font-semibold bg-green-500 hover:bg-green-600"
          href={"/user"}
        >
          Go Back
        </Link>
      </div> */}
      {/* =====
      ==================================================================== */}
      

      <ProfileCard {...userInfo}/>        

      {/* ========================================================================= */}
    </div>
  );
};

export default page;
