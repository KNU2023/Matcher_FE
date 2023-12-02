import Logoutbutton from "../../molecules/button/Logoutbutton";
import LogoutWrapper from "../../molecules/div/LogoutWrapper";
import LogoutTitle from "../../molecules/text/LogoutTitle";
import { HiOutlineLogout } from 'react-icons/hi';

const ButtonReservation = () => {
    const handleButtonClick = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        alert('로그아웃되었습니다.');
        window.location.reload();
    };

    return (
        <Logoutbutton onClick={handleButtonClick}>
            <LogoutWrapper>
                <LogoutTitle content="로그아웃" />
                <HiOutlineLogout size="13"/>
            </LogoutWrapper>
        </Logoutbutton>
    )
}

export default ButtonReservation;