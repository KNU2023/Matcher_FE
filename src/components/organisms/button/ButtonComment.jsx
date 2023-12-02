import Dialogbutton from "../../molecules/button/Dialogbutton";

const ButtonComment = ({ onClick, type }) => {


    return (
        <Dialogbutton type={type} title="작성하기" margin="5px" onClick={onClick} />
    )
}

export default ButtonComment;