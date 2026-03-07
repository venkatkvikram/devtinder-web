import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { BASE_URL } from "../utils/constants"
import { addUser } from "../utils/user.slice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);
    const fetchUser = async () => {
        if(userData) return;
        try {
            const res = await axios.get(`${BASE_URL}/profile`, {
                withCredentials: true
            })
            console.log("res", res)
            dispatch(addUser(res.data))
        } catch (error) {
            if(error.response.status === 401) {
                navigate("/login");
            }
            console.error("Error fetching user:", error.message)
        }
    }

    useEffect(() => {
            fetchUser()
    }, [])

    return (
        <div>
            <NavBar />
            <Outlet /> {/* any child routes of body will be rendred here */}
            <Footer />
        </div>
    )
}

export default Body;