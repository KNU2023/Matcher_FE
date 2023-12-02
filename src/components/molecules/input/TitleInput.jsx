import Input from "../../atoms/input/Input";

const TitleInput = ({ value, onChange }) => {
    return (
        <>
            <Input
                type="text"
                placeholder="제목을 입력하세요."
                fontSize="20px"
                width="361px"
                height="24px"
                border="none"
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default TitleInput;