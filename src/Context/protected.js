import { useContext, useNavigate } from "react";
import {UserContext} from "./usercontext";


function Protect(){
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    if (!user){
        navigate("/")
    }
}

export default Protect