// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "@/data/dbConn"

export default async function handler(req, res) {
  try {
    await connectDb()
    res.status(200).json({ name: 'Connected to Blueblood DB' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}