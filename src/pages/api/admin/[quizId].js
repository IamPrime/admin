/** Dynamic API Routing */

import connectDb from "@/data/dbConn"
import { getQuiz, putQuiz, deleteQuiz } from "@/data/controller"

export default async function handler(req, res) {
    connectDb().catch(() => res.status(405).json({ error: "Connection Failed!!" }))

    /** Type of Request */
    const { method } = req

    switch (method) {
        case "GET":
            getQuiz(req, res)
            break;
        case 'PUT':
            putQuiz(req, res)
            break;
        case 'DELETE':
            deleteQuiz(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}