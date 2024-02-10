import { ReactComponent as LogoDark } from "../assets/images/logos/logo.svg";
import { Link } from "react-router-dom";
import logo from '../assets/logo/Logo.png';


const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt='Dashboard-logo'/>

      {/* <LogoDark /> */}
    </Link>
  );
};

export default Logo;
