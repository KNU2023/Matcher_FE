import Input from "../../atoms/input/Input";

const CommentInput = ({ id, type, placeholder, color, value, onChange }) => {
    return (
        <>
            <Input
                id={id}
                type={type}
                width="280px"
                height="3px"
                fontSize="14px"
                placeholder={placeholder}
                padding="15px"
                color={color}
                borderRadius="15px"
                border="1px solid #B2B2B2"
                marginRight="20px"
                value={value}
                onChange={onChange}
            />
        </>
    )
};

export default CommentInput;