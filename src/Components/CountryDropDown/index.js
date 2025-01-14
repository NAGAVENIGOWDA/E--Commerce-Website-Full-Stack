import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import React from "react";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const context = useContext(MyContext);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    setCountryList(context.countryList);
  }, []);


  const selectCountry = (index,country) => {
    setSelectedTab(index);
    setisOpenModal(false);
    context.setSelectedCountry(country);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if(keyword !=""){
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(list);
    }
    else{
      setCountryList(context.countryList);
    }
   
    
  };
  return (
    <div>
      <Button
        className="countryDrop"
        onClick={() => setisOpenModal(!isOpenModal)}
      >
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">{`${context.selectedCountry ? context.selectedCountry?.substr(0,10) : 'Select Location'}`}</span>

        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <h4 className="mb-1">Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setisOpenModal(!isOpenModal)}>
          <MdClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search your area ..."
            onChange={filterList}
          />
          <Button>
            <IoSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li>
                  <Button
                    onClick={() => selectCountry(index,item.country)}
                    key={index}
                    className={`${selectedTab === index}?'active' : ''`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </div>
  );
};

export default CountryDropDown;
