import SignUpTemplate from "../components/template/SignUpTemplate";
import SignInTemplate from "../components/template/SignInTemplate";
import { useSearchParams } from "react-router-dom";

const AuthPage = () => {
    const [searchParams] = useSearchParams();

    const isLogin = searchParams.get('mode') === 'login';

    return (
        isLogin ? <SignInTemplate /> : <SignUpTemplate />
    )
};

export default AuthPage;