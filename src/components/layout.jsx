import { Outlet } from "react-router";
import NavBar from "./navBar";
import Footer from "./footer";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
