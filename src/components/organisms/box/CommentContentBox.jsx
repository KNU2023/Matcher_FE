import CommentBox from "../../molecules/box/CommentBox";
import Smalltitle from "../../molecules/text/Smalltitle";
import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";
import { useState, useEffect } from 'react';
import axios from "axios";

const CommentContentBox = ({ content, date, author, id, jopPostId, closeModal }) => {
    //console.log("id", id);
    const jpi = jopPostId;
    const cid = id;
    // console.log("props값", jpi);
    // console.log("id값", id);

    const originalDate = date;
    const regex = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})/;
    const match = originalDate.match(regex);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                //console.log(accessToken);
                // 데이터를 가져오는 API 호출
                const response = await axios.get('/api/user', {
                    headers: {
                        'Authorization': accessToken,
                    },
                });

                // 가져온 데이터를 state에 저장
                setUserEmail(response.data.email);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        // 컴포넌트가 마운트될 때 데이터를 가져오도록 useEffect에서 호출
        fetchUserData();
    }, []);

    const onClickDelete = async () => {
        const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');

        if (confirmDelete) {
            try {
                // 서버로 DELETE 요청 보내기

                const accessToken = localStorage.getItem("accessToken");
                const response = await axios.delete(`/api/jobpost/${jpi}/comment/${cid}`, {
                    headers: {
                        'Authorization': accessToken,
                    },
                });

                // 응답 확인
                // console.log(response.data);

                // 삭제 성공 시 추가 동작 수행
                alert('메시지가 성공적으로 삭제되었습니다.');
                //window.location.replace("/jobpost");
                closeModal();
                return response.data;
                // 모달 닫기 등 다른 동작 수행
            } catch (error) {
                // 오류가 발생했을 때 처리
                console.error('Error deleting message:', error);
                alert('댓글 삭제 중 오류가 발생했습니다.');
            }
        }
    }

    return (
        <CommentBox>
             {userEmail === author.email ? (
                <CommentWrapper>
                    <Smalltitle content={author.email} />
                    <Smalltitle content={content} />
                    <DateWrapper>
                        <Smalltitle content={match[1]} margin="0px 10px 0px 0px" />
                        <MdOutlineDelete size="12" cursor="pointer" color="#03C75A" onClick={onClickDelete} />
                    </DateWrapper>
                </CommentWrapper>
            ) : (
                <CommentWrapper>
                    <Smalltitle content={author.email} />
                    <Smalltitle content={content} />
                    <Smalltitle content={match[1]} />
                </CommentWrapper>
            )
            }
        </CommentBox >
    )
};
const CommentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const DateWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export default CommentContentBox;