import Iconbox from "../../molecules/button/Iconbox";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Smalltitle from "../../molecules/text/Smalltitle";
import IconWrapper from "../../molecules/div/IconWrapper";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsActive } from "../../../store/reserveCategorySlice";

const IconboxReserve = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isActive = useSelector((state) => state.reserveCategory.isActive);

    useEffect(() => {
        if (location.pathname === "/") {
            dispatch(setIsActive(true));
        } else {
            dispatch(setIsActive(false));
        }
    }, [location]);


    return (
        <>
            <IconWrapper>
                <NavLink to="/">
                    <Iconbox>
                        <BsFillCalendarCheckFill size="20" color={isActive ? '#2F9B79' : undefined} />
                    </Iconbox>
                </NavLink>
                <Smalltitle content="자리 예약" />
            </IconWrapper>
        </>
    )
};

export default IconboxReserve;