import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Body = () => {
    return (
        <div>
            <NavBar />
            <Outlet /> {/* any child routes of body will be rendred here */}
            <Footer />
        </div>
    )
}

export default Body;