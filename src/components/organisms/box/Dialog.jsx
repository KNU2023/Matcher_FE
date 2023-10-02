import classes from "./Dialog.module.css";

const Dialog = ({ children }) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}

export default Dialog;