import Iconbox from "../../molecules/button/Iconbox";
import { ImBubble } from "react-icons/im";
import Smalltitle from "../../molecules/text/Smalltitle";
import IconWrapper from "../../molecules/div/IconWrapper";



const IconboxJob = () => {
    return (
        <IconWrapper>
            <Iconbox>
                <ImBubble size="20" />
            </Iconbox>
            <Smalltitle content="쪽지함" />
        </IconWrapper>
    )
};

export default IconboxJob;