import MyPageContentBox from "../../molecules/box/MyPageContentBox";
import TitleboxModalSecondText from "../../molecules/text/TitleboxModalSecondText";
import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import axios from "axios";
import EditReserveBox from "../input/EditReserveBox";
import { useState } from "react";
import EditJobBox from "../input/EditJobBox";

const MyPageJobContentBox = ({ title, date, jobPostId, author }) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    }

    const openModal = async () => {
        setModalOpen(true);
    }

    const onClickDelete = () => {
        confirm('정말로 삭제하시겠습니까?');
        if (confirm) {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const response = axios.delete(`/api/jobpost/${jobPostId}`, {
                    headers: {
                        'Authorization': accessToken,
                    },
                });

                alert("삭제되었습니다.")
                window.location.reload();
            }
            catch (error) {
                throw new Error(`구인구직 데이터를 가져오는 중 오류 발생: ${error.message}`);
                console.log(error);
            }
        }
    }

    return (
        <>
            <MyPageContentBox>
                <ContentWrapper>
                    <TitleboxModalSecondText content={title} size="8" weight="bold" />
                    <TitleboxModalSecondText content={date} size="8" weight="bold" />
                    <TitleboxModalSecondText content={author.name} size="8" weight="bold" />
                    <IconWrapper>
                        <VscGitPullRequestGoToChanges size="24" cursor="pointer" color="#03C75A" onClick={openModal} />
                        <MdOutlineDelete size="24" cursor="pointer" color="#03C75A" onClick={onClickDelete} />
                    </IconWrapper>
                </ContentWrapper>
            </MyPageContentBox>
            {isModalOpen && (
                <ModalWrapper>
                    <EditJobBox id={jobPostId} closeModal={closeModal} />
                </ModalWrapper>
            )}
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

const ModalWrapper = styled.div`
 position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export default MyPageJobContentBox;