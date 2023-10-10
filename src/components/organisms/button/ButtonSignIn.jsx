import Signinbutton from "../../molecules/button/Signinbutton";

const ButtonSignIn = () => {
    const onClickSignIn = () => {
        alert('회원가입 완료!');
    }

    return (
        <>
            <Signinbutton title="회원가입" onClick={onClickSignIn}/>
        </>
    )
}

export default ButtonSignIn;