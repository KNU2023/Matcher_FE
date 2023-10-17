import Iconbox from "../../molecules/button/Iconbox";
import { ImBubble } from "react-icons/im";
import Smalltitle from "../../molecules/text/Smalltitle";
import IconWrapper from "../../molecules/div/IconWrapper";
import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsActive } from "../../../store/mailCategorySlice";

const IconboxMail = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isActive = useSelector((state) => state.mailCategory.isActive);

    useEffect(() => {
        if (location.pathname === "/mail") {
            dispatch(setIsActive(true));
        } else {
            dispatch(setIsActive(false));
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

export default IconboxMail;