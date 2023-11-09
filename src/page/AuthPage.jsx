import SignUpTemplate from "../components/template/SignUpTemplate";
import SignInTemplate from "../components/template/SignInTemplate";
import { motion } from "framer-motion"
import { useSearchParams } from "react-router-dom";

const AuthPage = () => {
    const [searchParams] = useSearchParams();

    const isLogin = searchParams.get('mode') === 'login';

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            {isLogin ? <SignInTemplate /> : <SignUpTemplate />}
        </motion.div>
    )
};

export default AuthPage;