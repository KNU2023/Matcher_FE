import Iconbox from "../../molecules/button/Iconbox";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Smalltitle from "../../molecules/text/Smalltitle";
import IconWrapper from "../../molecules/div/IconWrapper";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const IconboxReserve = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setIsActive(true);
        } else {
            setIsActive(false);
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