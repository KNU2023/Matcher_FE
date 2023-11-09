import Input from "../../atoms/input/Input";

const FormInput = ({ id, type, placeholder, color, value, onChange }) => {
    return (
        <>
            <Input
                id={id}
                type={type}
                width="228px"
                height="5px"
                fontSize="14px"
                placeholder={placeholder}
                padding="15px"
                color={color}
                borderRadius="15px"
                border="1px solid #B2B2B2"
                marginTop="22px"
                marginBottom="22px"
                value={value}
                onChange={onChange}
            />
        </>
    )
};

export default FormInput;