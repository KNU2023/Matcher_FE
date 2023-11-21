import TextArea from "../../atoms/input/TextArea";

const FormInput = ({ id, width, height, placeholder, color, value, onChange, marginTop, marginBottom, padding }) => {
    return (
        <>
            <TextArea
                id={id}
                type="description"
                rows="10"
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
                reSize="none"
            />
        </>
    )
};

export default FormInput;