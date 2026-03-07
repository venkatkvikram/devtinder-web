import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import Alert from "./Toast";
import { addUser } from "../utils/user.slice";
import Toast from "./Toast";

const EditProfile = ({ user }) => {
    console.log("user inside edit profile", user)
    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');
    const [age, setAge] = useState(user?.age || '');
    const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || '');
    const [about, setAbout] = useState(user?.about || '');
    const [gender, setGender] = useState(user?.gender || '');
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    console.log("showToast", showToast)
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveProfile = async () => {
        setError('');
        try {
            const res = await axios.patch(`${BASE_URL}/profile/edit`, {
                firstName,
                lastName,
                age,
                photoUrl,
                about,
                gender
            }, {
                withCredentials: true
            })
            console.log("res", res)
            dispatch(addUser(res.data.user))
            setShowToast(true)
            setToastMessage('Profile updated successfully')
            setTimeout(() => {
                setShowToast(false)
            }, 3000)
            // navigate('/dashboard')
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to update profile');
        }
    }
    return (
        <>
        <div className="flex justify-center my-10">
            <div className="flex justify-center mx-10">
                <div className="card card-dash bg-base-300 w-96">
                    <div className="card-body">
                        <h2 className="card-title flex justify-center my-2">Edit Profile</h2>
                        <fieldset className="fieldset">
                            <label className="fieldset-label my-2">Profile Image</label>
                            {/* <input type="file" className="input" value={photoUrl} placeholder="Upload Image" onChange={(e) => setPhotoUrl(e.target.value)} /> */}
                            <label className="fieldset-label my-2">First Name</label>
                            <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <label className="fieldset-label my-2">Last Name</label>
                            <input type="text" className="input" value={lastName} placeholder="Enter your Last Name" onChange={(e) => setLastName(e.target.value)} />
                            <label className="fieldset-label my-2">Age</label>
                            <input type="number" className="input" value={age} placeholder="Enter your age" onChange={(e) => setAge(e.target.value)} />
                            <label className="fieldset-label my-2">Profile URL</label>
                            <input type="text" className="input" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
                            <label className="fieldset-label my-2">Gender</label>
                            <input type="text" className="input" value={gender} onChange={(e) => setGender(e.target.value)} />
                            <label className="fieldset-label my-2">About</label>
                            <textarea className="textarea" value={about} placeholder="Tell us about yourself" onChange={(e) => setAbout(e.target.value)} />
                        </fieldset>
                        {/* {error && <p className="text-error">{error}</p>} */}
                        <div className="card-actions justify-center m-2">
                            <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <UserCard user={{ firstName, lastName, age, gender, about,photoUrl }} />
        </div>
        {showToast && <Toast message={toastMessage} />}
        </>
    )
}

export default EditProfile;