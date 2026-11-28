import { routes } from "./src/routers/index.ts";
import { websocket } from "./src/ws.ts";

const server = Bun.serve({
    port: 3001,

    routes,

    fetch(req: Request, server) {
        const url = new URL(req.url);

        if (url.pathname === "/ws") {
            const roomId = url.searchParams.get("roomId");
            const name = url.searchParams.get("name");

            if (!roomId || !name) {
                return new Response("Missing RoomId / Name", { status: 400 });
            }

            if (server.upgrade(req, { data: { roomId, name } })) return;
            return new Response("Upgrade failed", { status: 400 });
        }

        if (url.pathname === "/api/health") {
            return Response.json({ ok: true });
        }

        return new Response("Not found", { status: 404 });
    },

    websocket,
});

console.log(`Server running on :${server.port}`);
