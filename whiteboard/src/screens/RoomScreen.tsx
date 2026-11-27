import * as api from "../api/rooms.ts";
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import type { Room } from "@shared/types.ts"


function RoomScreen() {

    const { roomId } = useParams();

    const { data: room, isPending, isError } = useQuery({
        queryKey: ["room", roomId],
        queryFn: () => api.getRoom(roomId!),
        enabled: !!roomId,
    })

    if (isPending) return <h1>Loading...</h1>
    if (isError) return <h1>Error joining room</h1>

    return (
        <>
            <h1>Welcome to your room! joined room: {room.id}</h1>
        </>
    )
}

export default RoomScreen