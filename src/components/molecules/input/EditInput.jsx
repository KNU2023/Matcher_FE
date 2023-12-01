import Input from "../../atoms/input/Input";

const EditInput = ({ id, type, placeholder, color, value, onChange }) => {
    return (
        <>
            <Input
                id={id}
                type={type}
                width="220px"
                height="5px"
                fontSize="14px"
                placeholder={placeholder}
                padding="15px"
                color={color}
                borderRadius="15px"
                border="1px solid #B2B2B2"
                marginTop="11px"
                marginBottom="11px"
                value={value}
                onChange={onChange}
            />
        </>
    )
};

export default EditInput;