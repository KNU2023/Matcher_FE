import MyPageContentBox from "../../molecules/box/MyPageContentBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import axios from "axios";

const MyPageReserveContentBox = ({ title, date, reserveId, ownerName }) => {

    const onClickChange = () => {
        confirm('정말로 수정하시겠습니까?');
    }

    const onClickDelete = () => {
        confirm('정말로 삭제하시겠습니까?');
        if (confirm) {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const response = axios.delete(`/api/reservationpost/${reserveId}`, {
                    headers: {
                        'Authorization': accessToken,
                    },
                });

                alert("삭제되었습니다.")
                window.location.reload();
            }
            catch (error) {
                //throw new Error(`예약 데이터를 가져오는 중 오류 발생: ${error.message}`);
                console.log(error);
            }
        }
    }

    return (
        <>
            <MyPageContentBox>
                <ContentWrapper>
                    <TitleboxModalSecondText content={title} size="6" weight="bold" />
                    <TitleboxModalSecondText content={date} size="6" weight="bold" />
                    <TitleboxModalSecondText content={ownerName} size="6" weight="bold" />
                    <IconWrapper>
                        <VscGitPullRequestGoToChanges size="24" cursor="pointer" color="#03C75A" onClick={onClickChange} />
                        <MdOutlineDelete size="24" cursor="pointer" color="#03C75A" onClick={onClickDelete} />
                    </IconWrapper>
                </ContentWrapper>
            </MyPageContentBox>
        </>
    )
}

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export default MyPageReserveContentBox;