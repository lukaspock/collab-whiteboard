
async function request<T>(url: string, init?: RequestInit): Promise<T> {
    const res = await fetch(url, init)
    if (!res.ok) throw new Error(`${res.status}`)
    return res.json()
}

export { request }