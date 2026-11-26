import * as rooms from "../controlers/rooms.controller.ts";


export const RoomRoutes = {
    "/api/rooms": { POST: rooms.createRoom },
    "/api/rooms/:id": { GET: rooms.getRoom },
}