import BoxTitle from "../../atoms/box/BoxTitle";

const TitleBox = ({ children }) => {
    return (
        <>
            <BoxTitle
                width="298px"
                height="26px"
                borderRadius="8px 8px 0px 0px"
                borderBottom="2px solid #E3E5E8"
                backgroundColor="#FFFFFF"
                padding="10px 8px 10px 18px"
            >
                {children}
            </BoxTitle>
        </>
    )
}

export default TitleBox;