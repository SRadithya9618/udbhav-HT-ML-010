import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/api/status', (_req, res) => {
  res.json({
    message: 'Backend is running on port 5000 and ready to serve insights.'
  })
})

app.listen(PORT, () => {
  console.log(`Cardio360 backend listening on http://localhost:${PORT}`)
})

