import CategoryBox from "../molecules/box/CategoryBox";
import CategoryTitleBox from "./box/CategoryTitleBox";
import IconboxJob from "./button/IconboxJob";
import IconboxReserve from "./button/IconboxReserve";
import IconboxMail from "./button/IconboxMail";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-left: 12px;
`;

const CategoryWrapper = styled.div`
    width: 324px;
    height: 99px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Category = () => {
    return (
        <Wrapper>
            <CategoryBox>
                <CategoryTitleBox />
                <CategoryWrapper>
                    <IconboxReserve />
                    <IconboxJob />
                    <IconboxMail />
                </CategoryWrapper>
            </CategoryBox>
        </Wrapper>
    )
}

export default Category;