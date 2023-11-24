import Dialogbutton from "../../molecules/button/Dialogbutton";

const ButtonComment = ({ onClick }) => {

    return (
        <Dialogbutton title="댓글 작성하기" margin="5px" onClick={onClick} />
    )
}

export default ButtonComment;