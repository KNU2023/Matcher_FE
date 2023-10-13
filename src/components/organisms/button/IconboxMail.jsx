import Iconbox from "../../molecules/button/Iconbox";
import { ImBubble } from "react-icons/im";
import Smalltitle from "../../molecules/text/Smalltitle";
import IconWrapper from "../../molecules/div/IconWrapper";
import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";



const IconboxJob = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/mail") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [location]);

    return (
        <IconWrapper>
            <NavLink to="/mail">
                <Iconbox>
                    <ImBubble size="20" color={isActive ? '#2F9B79' : undefined} />
                </Iconbox>
            </NavLink>
            <Smalltitle content="쪽지함" />
        </IconWrapper>
    )
};

export default IconboxJob;