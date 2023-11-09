import SkeletonBox from "../../molecules/skeleton/SkeletonBox";
import ContentBox from "../../molecules/box/ContentBox";
import styled from "styled-components";

const ContentBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0px 20px 0px;
`;

const DialogSkeletonReserve = () => {
    return (
        <>
            <ContentBox>
                <ContentBoxWrapper>
                    <SkeletonBox
                        height="20px"
                        width="134px"
                        borderRadius="4px"
                        margin="0px 0px 4px 0px"
                        padding="0px"
                    />
                    <SkeletonBox
                        height="15px"
                        width="50px"
                        borderRadius="3px"
                        margin="0px 0px 4px 0px"
                        padding="0px"
                    />
                    <SkeletonBox
                        height="15px"
                        width="134px"
                        borderRadius="3px"
                        margin="0px 0px 0px 0px"
                        padding="0px"
                    />
                </ContentBoxWrapper>
            </ContentBox>
        </>
    );
};

export default DialogSkeletonReserve;
