import "./login.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"

export default function Login() {
 
  return (
    <div className="cursor" >
      <div className="containerlogin" >
        <img src="https://ih1.redbubble.net/image.2651805639.6874/st,small,507x507-pad,600x600,f8f8f8.jpg" className="fotoInicio" alt="" />
        <div className="v-line">
        </div>
      </div>

      <footer className="footerLogin" >
        <div className="iconosfoterlogin" >
          <a href="https://es-la.facebook.com/" target="_blank"><BsFacebook/></a>
          <a href="https://www.instagram.com" target="_blank" ><BsInstagram/></a>
          <a href="https://twitter.com/" target="_blank" ><BsTwitter/></a>
        </div>
      </footer>


      <input type="checkbox" id="toggle" className="toggle--checkbox" />
      <label htmlFor="toggle" className="toggle--labelLogin">
        <span className="toggle--label-background"></span>
      </label>
      <div className="backgroundlo"></div>

    </div>
  );
}
