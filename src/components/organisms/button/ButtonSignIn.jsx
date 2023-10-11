import Signinbutton from "../../molecules/button/Signinbutton";

const ButtonSignIn = ({onClick}) => {
    return (
        <>
            <Signinbutton title="회원가입" onClick={onClick}/>
        </>
    )
}

export default ButtonSignIn;