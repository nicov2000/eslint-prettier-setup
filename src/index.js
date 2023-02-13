import "./loadEnv.js"
import express from "express"

const app = express()
const port = process.env.port || 3000

app.listen(3000, () => {
	console.log(`Server listening on http://localhost:${port}`)
})
