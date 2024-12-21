import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
const SearchBox=()=>{

    return(
        <div className="headerSearch ml-3 mr-3">
                        <input type="text" placeholder="Search For Products..."/>
                        <Button><IoSearch/></Button>
                       </div>
    )
}

export default SearchBox