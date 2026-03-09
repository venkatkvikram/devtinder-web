import axios from "axios"
import { useEffect } from "react"
import { BASE_URL } from "../utils/constants"
import UserCard from "./UserCard"
import { useDispatch, useSelector } from "react-redux"
import { addConnection } from "../utils/connections.slice"

const Connections = () => {
    const dispatch = useDispatch()
    const connection = useSelector(state => state.connections)

    const fetchConnections = async () => {
        if (connection) return;
        try {
            const res = await axios.get(`${BASE_URL}/user/requests/connections`, {
                withCredentials: true
            })
            console.log("res inside connections", res.data.data)
            dispatch(addConnection(res.data.data))
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        fetchConnections()
    }, [])

    console.log("connections:", connection)

    return (
        <div>
            <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-xl font-bold">Connections</h1>

                {connection && connection.map((connection) => {
                    const { firstName, lastName, gender, age, photoUrl } = connection;
                    return (
                        <div className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2">
                            <div>
                                <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl} />
                            </div>
                            <div className="text-left mx-4">
                                <h2>{firstName} {lastName}</h2>
                                <p>{gender}</p>
                                <p>{age}</p>
                            </div>
                        </div>
                    )
                    return <UserCard key={connection._id} user={connection} />
                })}
            </div>
        </div>
    )
}

export default Connections