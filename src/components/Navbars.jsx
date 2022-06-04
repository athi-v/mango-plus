import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from '../context/AuthContext'


const Navbars = () => {
  const {user, logOut} =UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex justify-between p-4 z-[100] w-full absolute">
     <Link to='/'>
     <h1 className="text-red text-4xl font-bold cursor-pointer text-white">Mango+</h1>
     </Link>

      {user?.email ? <div>
      <Link to="/Account">
      <button className="text-white pr-4 cursor-pointer">Account</button>
      </Link>

      <button onClick={handleLogout} className="bg-teal-600 px-6 py-2 rounded text-white cursor-pointer">Logout</button>

      </div> : <div>
      <Link to="/login">
      <button className="text-white pr-4 cursor-pointer">Login</button>
      </Link>

      <Link to="/signup">
      <button className="bg-teal-600 px-6 py-2 rounded text-white cursor-pointer">Sign Up</button>

      </Link>
      </div>}
    </div>
  );
};

export default Navbars;
