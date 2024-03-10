import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "./usercontext";


function Protect(){
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    if (!user){
        navigate("/")
    }
}

export default Protect