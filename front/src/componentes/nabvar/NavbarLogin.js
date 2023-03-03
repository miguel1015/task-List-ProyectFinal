import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../redux/zustand";
import { loginRequest } from "../redux/axios";
import { usePostUserMutation } from "../redux/api";

export default function NavbarLogin() {
  const navigate = useNavigate();
  const setProfileAuth = useAuthStore((state) => state.setProfile);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  })
  const [mostrarRegister, setMostrarRegister] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const [create, {data, error, isError}] = usePostUserMutation()

  const botonLogin = () => {
    if (mostrarLogin) {
      setMostrarLogin(false);
    } else {
      setMostrarLogin(true);
    }
  };

  const botonRegister = () => {
    if (mostrarRegister) {
      setMostrarRegister(false);
    } else {
      setMostrarRegister(true);
    }
  };

  const onchange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginRequest(dataLogin);
    console.log(data);
    setProfileAuth(data?.data);
    navigate("/home");
  };

  

  const onchangeRegister = (e) => {
    e.preventDefault()
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const register = (e) => {
    e.preventDefault()
    create(registerData)
  }
   
  return (
    <div>
      <div className="navbarLogin" >
        <h1 className="h1login">Organiza tus tareas!!</h1>
        <h2 className="h2login">
          La mejor forma de colocar en orden tus tareas.
        </h2>

        <div>
          <button className="boton-login" onClick={botonLogin}>
            Login
          </button>
          <button className="boton-register" onClick={botonRegister}>
            Registrar
          </button>
        </div>

        {mostrarLogin ? (
          <div>
            <form
              method="get"
              id="login-form"
              className="login-form"
              autoComplete="off"
              role="main"
              onSubmit={handleSubmit}
            >
              <h1 className="a11y-hidden">Login Form</h1>
              <div>
                <label className="label-email">
                  <input
                    type="email"
                    className="text"
                    name="email"
                    placeholder="Email"
                    tabIndex="1"
                    required
                    onChange={onchange}
                  />
                  <span className="required">Email</span>
                </label>
              </div>
              <input
                type="checkbox"
                name="show-password"
                className="show-password a11y-hidden"
                id="show-password"
                tabIndex="3"
              />
              <label className="label-show-password" htmlFor="show-password">
                <span>Show Password</span>
              </label>
              <div>
                <label className="label-password">
                  <input
                    type="text"
                    className="text"
                    name="password"
                    placeholder="Password"
                    tabIndex="2"
                    required
                    onChange={onchange}
                  />
                  <span className="required">Password</span>
                </label>
              </div>
              <input type="submit" value="Log In" className="botonLoginLogin" />
              <div className="email">
                {/* <a href="*">Forgot password?</a> */}
              </div>
              <figure aria-hidden="true">
                <div className="person-body"></div>
                <div className="neck skin"></div>
                <div className="head skin">
                  <div className="eyes"></div>
                  <div className="mouth"></div>
                </div>
                <div className="hair"></div>
                <div className="ears"></div>
                <div className="shirt-1"></div>
                <div className="shirt-2"></div>
              </figure>
            </form>
          </div>
        ) : null}

        {mostrarRegister ? (
          <div>
            <form className="form" onSubmit={register} >
              <div onSubmit={register} className="title">Welcome</div>
              <div className="subtitle">Let's create your account!</div>
              <div className="input-container ic1">
                <input
                  name="email"
                  id="firstname"
                  className="input"
                  type="text"
                  placeholder=" "
                  onChange={onchangeRegister}
                  />
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">
                  Email
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  name="password"
                  id="lastname"
                  className="input"
                  type="password"
                  placeholder=" "
                  onChange={onchangeRegister}
                  />
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">
                  Password
                </label>
              </div>
              <button type="text" className="submit">
                Create
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
    );
}
