// Von Client (whiteboard/) und Server (src/) gemeinsam genutzte Typen.
// Import: import type { ... } from "@shared/types"

export type RoomId = string;

export interface Room {
    id: RoomId;
    createdAt: Date;
}

export interface Point {
    x: number;
    y: number;
}

export interface Stroke {
    id: string;
    color: string;
    width: number;
    points: Point[];
}

// Nachrichten Client -> Server
export type ClientMessage =
    { type: "stroke"; stroke: Stroke } | { type: "clear" };

// Nachrichten Server -> Client
export type ServerMessage =
    | { type: "join"; roomId: string; name: string }
    | { type: "init"; strokes: Stroke[] }
    | { type: "stroke"; stroke: Stroke }
    | { type: "clear" }
    | { type: "leave"; roomId: string; name: string };
