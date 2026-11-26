import {Route, Routes} from "react-router";
import WelcomeScreen from "../pages/WelcomeScreen.tsx";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
            </Routes>
        </>
    )
}

export default AppRouter