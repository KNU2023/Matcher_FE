import Dialogbutton from "../../molecules/button/Dialogbutton";

const ButtonCreate = ({onClick}) => {


    return (
        <Dialogbutton title="생성하기" margin="5px" onClick={onClick} />
    )
}

export default ButtonCreate;