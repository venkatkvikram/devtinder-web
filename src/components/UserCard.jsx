const UserCard = ({ user }) => {
    const { firstName, lastName, photoUrl, about, age, gender} = user;
    console.log("user", user)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={photoUrl}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName} {lastName}</h2>
                {age && gender && <p>{age} , {gender}</p>}
                {about && <p>{about}</p>}
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-secondary">Ignore</button>
                    <button className="btn btn-primary">Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard;