import React from "react";
import Iconbox from "../../molecules/button/Iconbox";
import { FaUserGroup } from "react-icons/fa6";
import Smalltitle from "../../molecules/text/Smalltitle";
import Iconwrapper from "../../molecules/div/IconWrapper";




const IconboxJob = () => {

    return (
        <>
            <Iconwrapper>
                    <Iconbox>
                        <FaUserGroup size="20" />
                    </Iconbox>
                <Smalltitle content="구인구직" />
            </Iconwrapper>
        </>

    )
};

export default IconboxJob;