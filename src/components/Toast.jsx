const Toast = ({ message }) => {
    console.log("toast rendered")
    return (
        <div className="toast toast-top toast-center">

            <div className="alert alert-success">
                <span>{message}</span>

            </div>
        </div>
    )
}

export default Toast