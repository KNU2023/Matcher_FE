import Input from "../../atoms/input/Input";

const FormInput = ({ id, width, height, placeholder, color, value, onChange, marginTop, marginBottom, padding }) => {
    return (
        <>
            <Input
                id={id}
                type="text"
                width={width}
                height={height}
                fontSize="14px"
                placeholder={placeholder}
                padding={padding}
                color={color}
                borderRadius="15px"
                border="1px solid #B2B2B2"
                marginTop={marginTop}
                marginBottom={marginBottom}
                value={value}
                onChange={onChange}
            />
        </>
    )
};

export default FormInput;