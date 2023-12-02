import Input from "../../atoms/input/Input";

const ImageInput = ({ id, width, height, color, value, onChange, marginTop, marginBottom, padding, borderRadius }) => {
    return (
        <>
            <Input
                id={id}
                type="file"
                width={width}
                height={height}
                padding={padding}
                color={color}
                marginTop={marginTop}
                marginBottom={marginBottom}
                value={value}
                borderRadius="0px"
                onChange={onChange}
            />
        </>
    )
};

export default ImageInput;