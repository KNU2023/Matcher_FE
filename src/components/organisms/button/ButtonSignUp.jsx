import Signinbutton from "../../molecules/button/Signinbutton";

const ButtonSignUp = ({onClick}) => {
    return (
        <>
            <Signinbutton title="회원가입" onClick={onClick}/>
        </>
    )
}

export default ButtonSignUp;