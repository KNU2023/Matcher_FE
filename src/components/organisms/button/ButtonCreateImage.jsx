import Dialogbutton from "../../molecules/button/Dialogbutton";

const ButtonCreate = ({ onClick, type }) => {


    return (
        <Dialogbutton type={type} title="생성하기" margin="5px" onClick={onClick} />
    )
}

export default ButtonCreate;