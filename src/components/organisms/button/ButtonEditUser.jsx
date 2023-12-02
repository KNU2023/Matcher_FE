import Signinbutton from "../../molecules/button/Signinbutton";

const ButtonEditUser = ({onClick}) => {
    return (
        <>
            <Signinbutton title="수정하기" onClick={onClick}/>
        </>
    )
}

export default ButtonEditUser;