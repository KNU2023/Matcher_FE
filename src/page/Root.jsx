import Header from "../components/organisms/Header";
import { Outlet, useNavigation } from "react-router-dom";

const RootLayout = () => {
    const navigation = useNavigation();

 
    return (
        <>
            <Header/>
            <main>
                {navigation.state === 'loading' && <p>Loading...</p>}
                <Outlet />
            </main>
        </>
    )

};

export default RootLayout;