import Dialogbutton from "../../molecules/Dialogbutton";

const ButtonCreate = () => {
    const handleButtonClick = () => {
        alert('생성되었습니다.');
    };

    return (
        <Dialogbutton title="생성하기" onClick={handleButtonClick} />
    )
}

export default ButtonCreate;