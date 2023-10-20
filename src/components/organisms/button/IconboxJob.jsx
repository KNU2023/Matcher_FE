import React, { useEffect } from "react";
import Iconbox from "../../molecules/button/Iconbox";
import { FaUserGroup } from "react-icons/fa6";
import Smalltitle from "../../molecules/text/Smalltitle";
import Iconwrapper from "../../molecules/div/IconWrapper";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsActive } from "../../../store/jobPostCategorySlice";

const IconboxJob = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isActive = useSelector((state) => state.jobPostCategory.isActive);

    useEffect(() => {
        if (location.pathname === "/jobpost") {
            dispatch(setIsActive(true));
        } else if (location.pathname === "/jobpost/create") {
            dispatch(setIsActive(true));
        } else {
            dispatch(setIsActive(false));
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
