import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as api from "../api/rooms.ts";

function WelcomeScreen() {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();

    const createMutation = useMutation({
        mutationFn: api.createRoom,
        onSuccess: (created_id) => {
            navigate(`/room/${created_id}`);
        },
    });

    return (
        <div>
            <h1>Welcome to Whiteboard</h1>

            <p>Start creating together with your friends!</p>
            <p>Join a room or create your own!</p>

            <input
                type="text"
                placeholder="Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
            />
            <button type="button" onClick={() => navigate(`/room/${roomId}`)}>
                Join
            </button>

            <p>Create your own room</p>
            <button type="button" onClick={() => createMutation.mutate()}>
                Create
            </button>
        </div>
    );
}

export default WelcomeScreen;
