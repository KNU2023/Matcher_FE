import React, { useState, useEffect } from "react";
import Iconbox from "../../molecules/button/Iconbox";
import { FaUserGroup } from "react-icons/fa6";
import Smalltitle from "../../molecules/text/Smalltitle";
import Iconwrapper from "../../molecules/div/IconWrapper";
import { NavLink, useLocation } from "react-router-dom";

const IconboxJob = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/jobpost") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [location]);

    return (
        <Iconwrapper>
            <NavLink to="/jobpost">
                <Iconbox>
                    <FaUserGroup size="20" color={isActive ? '#2F9B79' : undefined} />
                </Iconbox>
            </NavLink>
            <Smalltitle content="구인구직" />
        </Iconwrapper>
    );
};

export default IconboxJob;
