import Dialogbutton from "../../molecules/button/Dialogbutton";

const ButtonMail = ({ onClick }) => {
    return (
        <Dialogbutton title="삭제하기" margin="5px" onClick={onClick} />
    )
}

export default ButtonMail;