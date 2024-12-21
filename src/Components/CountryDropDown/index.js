import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from '@mui/material/Dialog';

import { FaAngleDown } from "react-icons/fa";
const countryDropDown = () => {
  return (
    <div>
      <Button className="countryDrop ">
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">India</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog  open={true} className="locationModal">
       <h4>Choose Your Delivery Location</h4>
       <p>Enter your address and we will specify the offer for your area.</p>
      </Dialog>
    </div>
  );
};

export default countryDropDown;
