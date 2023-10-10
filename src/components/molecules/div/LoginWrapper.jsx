import DivWrapper from "../../atoms/div/DivWrapper";

const LoginWrapper = ({ children }) => {
  return (
    <>
      <DivWrapper margin="11.5px 0px 11.5px 12px">{children}</DivWrapper>
    </>
  );
};

export default LoginWrapper;
