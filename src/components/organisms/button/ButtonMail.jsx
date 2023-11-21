import Dialogbutton from "../../molecules/button/Dialogbutton";
import { useNavigate } from "react-router-dom";

const ButtonMail = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/mail/write");
    };

    return (
        <Dialogbutton title="쪽지보내기" margin="5px" onClick={handleButtonClick} />
    )
}

export default ButtonMail;