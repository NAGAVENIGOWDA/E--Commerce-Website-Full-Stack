
import { IoIosMenu } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineBakeryDining } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
const Navigation =()=>{

    return(
        <nav>
        <div className="container ">
            <div className="row d-flex align-items-center">
                <div className="col-sm-3 navPart1">
                    <Button className="allCatTab align-items-center">
                        <span className="icon1 mr-2"><IoIosMenu/></span>
                        <span className="text"> ALL CATEGORIES</span>
                        <span className="icon2 ml-2"><FaAngleDown/></span>
                    </Button>
                </div>
                <div className="col-sm-9 navPart2 ">

                    <ul className="list list-inline">
                        <li className="list-inline-item"><Link to="/"> <CiHome/>HOME</Link></li>
                        <li className="list-inline-item"><Link to="/"><CiShop/>SHOP</Link></li>
                        <li className="list-inline-item"><Link to="/"><IoFastFoodOutline/>MEATS & SEAFOOD</Link></li>
                        <li className="list-inline-item"><Link to="/"><MdOutlineBakeryDining/>BAKERY</Link></li>
                        <li className="list-inline-item"><Link to="/"><MdEmojiFoodBeverage/>BEVERAGES</Link></li>
                        <li className="list-inline-item"><Link to="/"><FaBlog/>BLOG</Link></li>
                        <li className="list-inline-item"><Link to="/"><IoCallOutline/>CONTACT  US</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>
    )
}

export default Navigation