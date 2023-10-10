import TitleBox from "../../molecules/box/TitleBox"
import { HiMenu } from "react-icons/hi"
import TitleBoxWrapper from "../../molecules/div/TitleBoxWrapper";
import TitleboxText from "../../molecules/text/TitleboxText";

const CategoryTitleBox = () => {
    return (
        <>
            <TitleBox>
                <TitleBoxWrapper>
                    <TitleboxText content="카테고리 선택하기" />
                    <HiMenu size="24" color="2F9B79" />
                </TitleBoxWrapper>
            </TitleBox>
        </>
    )
}

export default CategoryTitleBox;