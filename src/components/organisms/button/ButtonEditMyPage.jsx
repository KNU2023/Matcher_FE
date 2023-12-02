import Dialogbutton from "../../molecules/button/Dialogbutton";

const ButtonEditMyPage = ({onClick}) => {
    return (
        <>
            <Dialogbutton title="수정하기" onClick={onClick}/>
        </>
    )
}

export default ButtonEditMyPage;