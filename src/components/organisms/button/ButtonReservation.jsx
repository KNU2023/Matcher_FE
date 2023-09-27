import Dialogbutton from "../../molecules/Dialogbutton";

const ButtonReservation = () => {
    const handleButtonClick = () => {
        alert('예약되었습니다.');
    };

    return(
        <Dialogbutton title="예약하기" onClick={handleButtonClick}/>
    )
}

export default ButtonReservation;