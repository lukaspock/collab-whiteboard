import {Route, Routes} from "react-router";
import WelcomeScreen from "../screens/WelcomeScreen.tsx";
import RoomScreen from "../screens/RoomScreen.tsx";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/room/:roomId" element={<RoomScreen />} />
                <Route path="*" element={<WelcomeScreen />} />
            </Routes>
        </>
    )
}

export default AppRouter