import classes from "./DialogButton.module.css";

const DialogButton = ({ title }) => {

    return(
        <button className={classes.dialogButton}>
            {title}
        </button>
    )
}

export default DialogButton;