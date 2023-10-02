import classes from "./Categorybox.module.css";
import Iconbox from "../../atoms/Iconbox";
import { HiMenu } from "react-icons/hi"
import { BsCalendarCheck } from "react-icons/bs"
import { FaUserGroup } from "react-icons/fa6"
import { BsFillChatFill } from "react-icons/bs"

const Categorybox = () => {
    return (
        <div className={classes.Categorybox}>
            <div className={classes.Categorybox__title}>
                <h3>카테고리 선택하기</h3>
                <HiMenu size="20" color="2F9B79" />
            </div>
            <div className={classes.Categorybox__icon}>
                <ul className={classes.Categorbox__list}>
                    <li>
                        <Iconbox><BsCalendarCheck size="20" /></Iconbox>
                        <h5 className={classes.Categorybox__content}>자리 예약</h5>
                    </li>
                    <li>
                        <Iconbox><FaUserGroup size="20" /></Iconbox>
                        <h5 className={classes.Categorybox__content}>구인 구직</h5>
                    </li>
                    <li>
                        <Iconbox><BsFillChatFill size="20" /></Iconbox>
                        <h5 className={classes.Categorybox__content}>쪽지함</h5>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Categorybox;