import type { WebSocketHandler } from "bun";
import type { ClientMessage, ServerMessage, RoomId } from "@shared/types.ts";

export const websocket: WebSocketHandler<{ roomId: RoomId; name: string }> = {
    open(ws) {
        const { roomId, name } = ws.data;

        ws.send(JSON.stringify({ type: "join", roomId, name }));

        ws.subscribe(`room-${roomId}`);
    },

    message(ws, message) {
        const messageObj: ClientMessage = JSON.parse(message.toString());

        switch (messageObj.type) {
            case "clear": {
                break;
            }
            case "stroke": {
                break;
            }
        }
    },

    close(ws) {
        // Exit message
        const { roomId, name } = ws.data;

        ws.unsubscribe(`room-${roomId}`);

        ws.publish(
            `room-${roomId}`,
            JSON.stringify({ type: "leave", roomId, name }),
        );
    },
};
