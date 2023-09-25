import classes from "./Dialog.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Dialog = ({ children }) => {
    return (
        <div className={classes.container}>
            <div className={classes.container__X}><AiFillCloseCircle size="24" color="22CE6E"/></div>
            {children}
        </div>
    )
}

export default Dialog;