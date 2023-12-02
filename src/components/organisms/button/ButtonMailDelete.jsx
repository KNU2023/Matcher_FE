import Dialogbutton from "../../molecules/button/Dialogbutton";

const ButtonMailDelete = ({ onClick }) => {
    return (
        <Dialogbutton title="삭제하기" margin="5px" onClick={onClick} />
    )
}

export default ButtonMailDelete;