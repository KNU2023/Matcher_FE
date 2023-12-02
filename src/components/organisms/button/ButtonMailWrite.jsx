import Dialogbutton from "../../molecules/button/Dialogbutton";

const ButtonMailWrite = ({onClick}) => {

    return (
        <Dialogbutton title="쪽지보내기" margin="5px" onClick={onClick} />
    )
}

export default ButtonMailWrite;