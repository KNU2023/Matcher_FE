import Input from "../../atoms/input/Input";

const CommentInput = ({ id, type, placeholder, color, value, onChange}) => {
    return (
        <>
            <Input
                id={id}
                type={type}
                width="300px"
                height="2px"
                fontSize="14px"
                placeholder={placeholder}
                padding="15px"
                color={color}
                borderRadius="10px"
                border="1px solid #B2B2B2"
                marginRight="50px"
                value={value}
                onChange={onChange}
            />
        </>
    )
};

export default CommentInput;