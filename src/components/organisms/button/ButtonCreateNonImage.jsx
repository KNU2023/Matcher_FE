import Dialogbutton from "../../molecules/button/Dialogbutton";

const ButtonCreateNonImage = ({ onClick, type }) => {


    return (
        <Dialogbutton type={type} title="이미지 제외생성" margin="5px" onClick={onClick} />
    )
}

export default ButtonCreateNonImage;