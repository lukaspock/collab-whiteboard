import { request } from "./helper.ts";
import type { Room, RoomId } from "@shared/types.ts";

function getRoom(roomId: string) {
    return request<Room>(`/api/rooms/${roomId}`);
}

function createRoom() {
    return request<RoomId>("/api/rooms", { method: "POST" });
}

export { getRoom, createRoom };
