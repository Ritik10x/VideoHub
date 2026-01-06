import { Outlet } from "react-router-dom"
import MainContainer from "./MainContainer"
import Siderbar from "./Sidebar"

const Body=()=>{

    return(
        <div className="flex">
            <Siderbar/>
            <Outlet/>
        </div>

    )
}
export default Body