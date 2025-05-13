import { ITask } from "./types/tasks"

const baseUrl = "http://localhost:3001"


export const getAllToold =async(): Promise<ITask>=>{
    const res = await fetch(`${baseUrl}/tasks`)
    const todos = await res.json()
    return todos
}
