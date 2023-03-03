import React from "react";
import "./Navbar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../redux/zustand";
import NavbarLogin from "./NavbarLogin";
import { GiExitDoor } from "react-icons/gi"

export default function Navbar() {
  const navigate = useNavigate()
  const profileAuth = useAuthStore((state) => state.profile);


  const setLogOut = useAuthStore((state) => state.logOut);
  const onClick = () => {
    setLogOut("", null);
    navigate("/");
  };
  return (
    <>
      {profileAuth == null ? (
        <NavbarLogin/>
      ) : (
        <div className="cabecera">
          <nav className="containerCabecera">
            <ul>
              <div className="losLi">
                <li>
                  <div className="background-one">
                    <div className="link-container">
                      <Link className="link-one" to="/home">
                        Home
                      </Link>
                    </div>
                  </div>
                </li>

                <div className="background-two link-container">
                  <li>
                    <Link className="link-two" to="/about">
                      About
                    </Link>
                  </li>
                </div>

                <div className="background-three link-container">
                  <li>
                    <Link className="link-three" to="/taskList">
                      Task-List
                    </Link>
                  </li>
                </div>
                
                <div className="background-three link-container">
                  <li>
                    <button className="botonsalidanavbar" onClick={onClick}>
                      <GiExitDoor/>
                    </button>
                  </li>
                </div>

              </div>
            </ul>
          </nav>
          <Outlet />
        </div>
      )}
    </>
  );
}
