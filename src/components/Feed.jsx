import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import { useEffect } from "react";
import axios from "axios";

const Feed = () => {
    const feed = useSelector((state) => state.feed)
    const dispatch = useDispatch()

    const getFeed = async () => {
        if (feed) return;
        try {
            const res = await axios.get(`${BASE_URL}/user/feed`, {
                withCredentials: true
            });
            dispatch(addFeed(res.data))
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getFeed();
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {feed?.map((user) => (
                <UserCard key={user._id} user={user} />
            ))}
        </div>
    )
}

export default Feed;