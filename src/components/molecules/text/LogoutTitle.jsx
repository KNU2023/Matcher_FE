import Text from "../../atoms/text/Text";

const LogoutTitle = ({ content, size, weight }) => {
  return (
    <>
      <Text
        size={size}
        color="#000000"
        weight={weight}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        textAlign="center"
        margin="0px 4px 0px 0px"
      >
        {content}
      </Text>
    </>
  );
};

export default LogoutTitle;
