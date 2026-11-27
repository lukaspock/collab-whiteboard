import type { Room, ClientMessage, Stroke } from "@shared/types"

export const rooms = new Map<string, Room>();

export const strokes = new Map<string, Stroke[]>();