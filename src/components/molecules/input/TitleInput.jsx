import Input from "../../atoms/input/Input";

const TitleInput = () => {
    return(
        <>
            <Input
                type="text"
                placeholder="검색어를 입력하세요"
                fontSize="20px"
                width="361px"
                height="24px"
                border="none"
            />
        </>
    )
}

export default TitleInput;