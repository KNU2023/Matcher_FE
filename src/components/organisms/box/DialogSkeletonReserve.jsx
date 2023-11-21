import SkeletonBox from "../../molecules/skeleton/SkeletonBox";
import ContentBox from "../../molecules/box/ContentBox";
import styled from "styled-components";
// import { useEffect } from "react";

const DialogSkeletonReserve = ({openModal}) => {
    // console.log("Data in DialogSkeletonReserve:", reserveDataItem.data); // 확인용
    // const { id, title, date, author } = reserveDataItem.data;

    return (
        <>
            <ContentBox onClick={openModal}>
                <ContentBoxWrapper>
                    <SkeletonBox
                        height="15px"
                        width="134px"
                        borderRadius="4px"
                        margin="0px 0px 4px 0px"
                        padding="0px"
                    />
                    <SkeletonBox
                        height="10px"
                        width="50px"
                        borderRadius="3px"
                        margin="0px 0px 4px 0px"
                        padding="0px"
                    />
                    <SkeletonBox
                        height="10px"
                        width="134px"
                        borderRadius="3px"
                        margin="0px 0px 0px 0px"
                        padding="0px"
                    />
                    {/* <p>ID: {id}</p>
                    <p>Title: {title}</p>
                    <p>Date: {date}</p>
                    <p>Author:</p>
                    <ul>
                        <li>Email: {author.email}</li>
                        <li>Name: {author.name}</li>
                        <li>Major: {author.major}</li>
                        <li>Student Number: {author.stdNumber}</li>
                    </ul> */}

                    {/* {isLoading ? (
                        <>
                            <SkeletonBox
                                height="15px"
                                width="134px"
                                borderRadius="4px"
                                margin="0px 0px 4px 0px"
                                padding="0px"
                            />
                            <SkeletonBox
                                height="10px"
                                width="50px"
                                borderRadius="3px"
                                margin="0px 0px 4px 0px"
                                padding="0px"
                            />
                            <SkeletonBox
                                height="10px"
                                width="134px"
                                borderRadius="3px"
                                margin="0px 0px 0px 0px"
                                padding="0px"
                            />
                        </>
                    ) : (
                        <>
                            <p>ID: {id}</p>
                            <p>Title: {title}</p>
                            <p>Date: {date}</p>
                            <p>Author:</p>
                            <ul>
                                <li>Email: {author.email}</li>
                                <li>Name: {author.name}</li>
                                <li>Major: {author.major}</li>
                                <li>Student Number: {author.stdNumber}</li>
                            </ul>
                        </>
                    )} */}
                </ContentBoxWrapper>
            </ContentBox>
        </>
    );
};

const ContentBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0px 20px 0px;
`;

export default DialogSkeletonReserve;
