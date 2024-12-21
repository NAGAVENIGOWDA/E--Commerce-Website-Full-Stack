import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CountryDropDown from "../CountryDropDown";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to <b>Heavy Rain</b> ,orderes may be processed with a slight
              delay
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex flex-column align-items-center justify-content-around col-sm-2">
                <Link to={"/"} className="mb-1">
                  <img src={Logo} alt="Logo" />
                </Link>
                <span className="tagline">Online Grocery Shopping Center</span>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropDown />
                <SearchBox />

                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle ">
                    <FiUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ml-2">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <Navigation/>
        
      </div>
    </>
  );
};

export default Header;
