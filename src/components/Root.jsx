import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;