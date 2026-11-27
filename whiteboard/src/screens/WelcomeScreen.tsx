
import { useState } from "react"
import { useNavigate, useParams} from "react-router"
import { useQuery } from "@tanstack/react-query"

function WelcomeScreen() {

    const [roomId, setRoomId] = useState("")
    const navigate = useNavigate()

    return (
        <div>
            <h1>Welcome to Whiteboard</h1>

            <p>Start creating together with your friends!</p>
            <p>Join a room or create your own!</p>

            <input type="text" placeholder="Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
            <button type="button" onClick={() => navigate(`/room/${roomId}`)}>Join</button>

            <p>Create your own room</p>
            <button type="button" onClick={() => navigate("/room/create")}>Create</button>
        </div>
    )
}

export default WelcomeScreen


function checkRoomId(roomId: string) {

}
