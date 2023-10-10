import TitleInput from "../../molecules/input/TitleInput"
import styled from "styled-components"
import { BiSearch } from "react-icons/bi"
import { AiOutlineFileMarkdown } from "react-icons/ai"

const SearchWrapper = styled.div`
    width: 500px;
    height: 24px;
    border-radius: 20px;
    border: 2px solid #2F9B79;
    padding: 15px 0px 15px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const IconWrapper = styled.div`
    margin: ${props => props.margin || '0px'}; /* margin을 prop으로 받아 설정 */
`;

const ReservationSearch = () => {
    return (
        <>
            <SearchWrapper>
                <IconWrapper margin="0px 10px 0px 0px"> {/* 아이콘 간격을 조절할 margin 값을 설정 */}
                    <AiOutlineFileMarkdown size="25px" color="#2F9B79" />
                </IconWrapper>
                <TitleInput />
                <IconWrapper margin="0px 0px 0px 25px"> {/* 아이콘 간격을 조절할 margin 값을 설정 */}
                    <BiSearch size="25px" color="#2F9B79" />
                </IconWrapper>
            </SearchWrapper>
        </>
    )
}

export default ReservationSearch