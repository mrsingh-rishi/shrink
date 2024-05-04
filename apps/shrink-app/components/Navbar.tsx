"use client";
import { Button } from "@repo/ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-slate-400 text-xl font-bold">
      <div className="flex gap-12 m-2 p-2">
        <div>Product</div>
        <div>Docs</div>
        <div>Pricing</div>
        <div>Company</div>
      </div>
      <div className="flex gap-6">
        <Button
          onClick={() => {
            alert("hello 1");
          }}
          className="bg-slate-300 rounded-xl p-2 m-2"
        >
          SignIn
        </Button>
        <Button
          onClick={() => {
            alert("hello 2");
          }}
          className="bg-slate-300 rounded-xl p-2 m-2"
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
