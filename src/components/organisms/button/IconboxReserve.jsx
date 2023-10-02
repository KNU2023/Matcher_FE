import Iconbox from "../../molecules/button/Iconbox";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Smalltitle from "../../molecules/text/Smalltitle";
import IconWrapper from "../../molecules/div/IconWrapper";

const IconboxReserve = () => {
    return (
        <>
            <IconWrapper>
                <Iconbox>
                    <BsFillCalendarCheckFill size="20" />
                </Iconbox>
                <Smalltitle content="자리 예약" />
            </IconWrapper>
        </>
    )
};

export default IconboxReserve;