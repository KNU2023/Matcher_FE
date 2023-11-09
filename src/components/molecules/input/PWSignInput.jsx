import Input from "../../atoms/input/Input";

const PWSignInput = ({value, onChange}) => {
    return (
        <>
            <Input
                type="text"
                placeholder="패스워드"
                fontSize="16px"
                height="26px"
                width="240px"
                value={value} // value prop을 받아 Input 컴포넌트에 전달
                onChange={onChange}
            />
        </>
    )
}

export default PWSignInput;