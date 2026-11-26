
import { routes } from "./src/routers/index.ts"

const server = Bun.serve({
    port: 3001,

    routes,


    fetch(req, server) {
        const url = new URL(req.url)

        if (url.pathname === "/ws") {
            if (server.upgrade(req)) return // Upgrade erfolgreich, keine Response nötig
            return new Response("Upgrade failed", { status: 400 })
        }

        if (url.pathname === "/api/health") {
            return Response.json({ ok: true })
        }

        return new Response("Not found", { status: 404 })
    },

    websocket: {
        open(ws) {
            console.log("client connected")
        },
        message(ws, message) {
            ws.send(`echo: ${message}`)
        },
        close(ws) {
            console.log("client disconnected")
        },
    },
})

console.log(`Server running on :${server.port}`)