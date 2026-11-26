
import * as roomService from "../services/room.service.ts";
import type {Room, RoomId} from "@shared/types.ts";

export function createRoom(req: Bun.BunRequest<"api/rooms">) {
    const createdRoomId: RoomId = roomService.createRoom();

    return Response.json(createdRoomId);
}

export function getRoom(req: Bun.BunRequest<"api/rooms/:id">){
    const roomId: RoomId = req.params.id;

    const room = roomService.getRoom(roomId);

    return Response.json(room, {status: room ? 200 : 404});
}