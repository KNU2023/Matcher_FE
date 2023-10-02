import Dialogbutton from "../../molecules/Dialogbutton";

const ButtonSend = () => {
    const handleButtonClick = () => {
        alert('전송되었습니다.');
    };

    return(
        <Dialogbutton title="쪽지 보내기" onClick={handleButtonClick}/>
    )
}

export default ButtonSend;