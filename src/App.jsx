import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthProvider";
import LoadingSpinner from "./components/LoadingSpinner";



function App() {
  
  const { loading } = useContext(AuthContext);
  return (
    <>
      {
        loading ? <LoadingSpinner /> :
        <div>
      <Navbar />
      <div className="min-h-screen">
      <Outlet />
      </div>
      <MyFooter />
      </div>
      }
      
    </>
  );
}

export default App;
