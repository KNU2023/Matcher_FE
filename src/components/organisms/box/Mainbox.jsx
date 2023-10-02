import classes from "./MainBox.module.css";

const Mainbox = ({children}) => {
    return(
        <div className={classes.Mainbox}>
            {children}
        </div>
    )
}

export default Mainbox;