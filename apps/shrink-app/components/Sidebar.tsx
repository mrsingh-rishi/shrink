"use client";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHome, FaKey, FaUser } from "react-icons/fa";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 font-bold text-xl text-slate-800 pl-20 pt-10">
      <Button
        className="flex gap-1 mr-4 p-2 hover:bg-slate-400 rounded-lg "
        onClick={() => router.push("/home")}
      >
        <span>
          <FaHome />
        </span>
        <span>Home</span>
      </Button>
      <Button
        className="flex gap-1  mr-4 p-2 hover:bg-slate-400 rounded-lg"
        onClick={() => router.push("/user")}
      >
        <span>
          <FaUser />
        </span>
        <span>User</span>
      </Button>
      <Button
        className="flex gap-1 p-2  mr-4 hover:bg-slate-400 rounded-lg"
        onClick={() => router.push("/authkey")}
      >
        <span>
          <FaKey />
        </span>
        <span>Authentication</span>
      </Button>
    </div>
  );
};

export default Sidebar;
