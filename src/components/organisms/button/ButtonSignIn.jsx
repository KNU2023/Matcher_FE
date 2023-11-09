import Signinbutton from "../../molecules/button/Signinbutton";

const ButtonSignIn = ({onClick}) => {
    return (
        <>
            <Signinbutton title="로그인" onClick={onClick}/>
        </>
    )
}

export default ButtonSignIn;