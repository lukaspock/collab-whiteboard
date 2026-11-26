
import { rooms } from "../store/room.store.ts";
import type {Room, RoomId} from "@shared/types.ts";

export function createRoom(): RoomId {
    const id = crypto.randomUUID();
    const createdAt = new Date();

    rooms.set(id, {id, createdAt});

    return id;
}

export function getRoom(id: string) : Room | undefined {
    return rooms.get(id);
}