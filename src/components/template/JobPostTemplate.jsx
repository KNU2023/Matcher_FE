import MainBox from "../molecules/box/MainBox";
import TitleMainBox from "../molecules/div/TitleMainBox";
import TitleMainBoxText from "../molecules/text/TitleMainBoxText";
import Alarm from "../organisms/Alarm";
import Category from "../organisms/Category";
import Login from "../organisms/Login";
import styled from "styled-components";
import DialogSkeleton from "../organisms/box/DialogSkeleton";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../store/authSlice";
import LoginComplete from "../organisms/LoginComplete";
import { MdOutlineReadMore } from "react-icons/md";
import axios from "axios";
import TitleboxModalSecondText from "../molecules/text/TitleboxModalSecondText";
import JobPostSearch from "../organisms/input/JobPostSearch";

const JobPostTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userData, setUserData] = useState([]);
    const [pageNum, setPageNum] = useState(0); // Initialize pageNum to 0 for the first page
    const accessToken = useSelector(selectAccessToken);
    const [searchData, setSearchData] = useState("");

    const onClickCreate = () => {
        navigate("/jobpost/create");
    };

    const onClickJob = () => {
        navigate("/jobpost");
    };

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const fetchUserData = async (page, title) => {
        try {
            const response = await axios.get(`/api/jobpost?page=${page}&title=${title}`, {
                headers: {
                    Authorization: accessToken,
                },
            });

            setUserData((prevData) => [...prevData, ...response.data.data]);
            console.log("jobPostArray", response.data)
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleSearch = () => {
        setUserData([]);
        setPageNum(0);

        fetchUserData(pageNum, searchData);
    };

    useEffect(() => {
        fetchUserData(pageNum, searchData);
    }, [pageNum, accessToken]);

    const handleLoadMore = () => {
        setPageNum((prevPageNum) => prevPageNum + 1);
    };
    //console.log("userData", userData)



    return (
        <>
            <Wrapper>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    <MainBox>
                        <TitleMainBox>
                            <TitleMainBoxText
                                content="구인구직"
                                onClick={onClickJob}
                                cursor="pointer"
                                active={location.pathname === "/jobpost"}
                            />
                            <TitleMainBoxText
                                content="구인구직 생성"
                                margin="0px 0px 0px 27px"
                                onClick={onClickCreate}
                                cursor="pointer"
                                active={location.pathname === "/jobpost/create"}
                            />
                        </TitleMainBox>
                        <JobPostSearch
                            onChange={(e) => setSearchData(e.target.value)}
                            onClick={handleSearch}
                        />
                        <ContentBoxWrapper>
                            {userData.length > 0 ? (
                                userData.map((item) => (
                                    <DialogSkeleton
                                        key={item.id}
                                        id={item.id}
                                        data={item}
                                    />
                                ))
                            ) : (
                                null
                            )}
                            {userData.length > 0 ? (
                                <ReLoad>
                                    <MdOutlineReadMore size="30" color="#03C75A" cursor="pointer" onClick={handleLoadMore} />
                                    <TitleboxModalSecondText content="Click And Get More Post!" />
                                </ReLoad>
                            ) : (null)}
                        </ContentBoxWrapper>
                    </MainBox>
                </motion.div>
                <ContentWrapper>
                    <Category />
                    {accessToken ? <LoginComplete /> : <Login />}
                    <Alarm />
                </ContentWrapper>
            </Wrapper>
        </>
    );
};

export default JobPostTemplate;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    `;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    `;

const ContentBoxWrapper = styled.div`
    height: 483px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin-top: 39px;
    row-gap: 15px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px;
        height: 0px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c0c0c0;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
    `;



const ReLoad = styled.div`
        width:146px;
        height:124px;
        padding: 13px 16px 10px 17px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;