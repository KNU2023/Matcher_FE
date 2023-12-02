import Dialogbutton from "../../molecules/button/Dialogbutton";
import { useNavigate } from "react-router-dom";

const ButtonCreate = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        alert('생성되었습니다.');
        navigate("/jobpost");
    };

    return (
        <Dialogbutton title="생성하기" margin="5px" onClick={handleButtonClick} />
    )
}

export default ButtonCreate;