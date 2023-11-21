import Dialogbutton from "../../molecules/button/Dialogbutton";
import { useNavigate } from "react-router-dom";

const ButtonMailWrite = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        alert("메시지 전송이 완료되었습니다.")
        navigate("/mail");
    };

    return (
        <Dialogbutton title="쪽지보내기" margin="5px" onClick={handleButtonClick} />
    )
}

export default ButtonMailWrite;