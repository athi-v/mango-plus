import React from "react";

const Navbars = () => {
  return (
    <div className="flex justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red text-4xl font-bold cursor-pointer text-white">Mango+</h1>

      <div>
      <button className="text-white pr-4 cursor-pointer">Login</button>
      <button className="bg-teal-600 px-6 py-2 rounded text-white cursor-pointer">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbars;
