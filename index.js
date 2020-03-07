const express = require("express")
const helmet = require("helmet")
const projectRouter = require("./projects/project-router")
const resourceRouter = require("./resources/resource-router")
const taskRouter = require("./tasks/task-router")


const server = express()
const port = process.env.PORT || 8000

server.use(helmet())
server.use(express.json())

server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/tasks", taskRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})

server.get('/', (req, res) => {
	res.send('<h3>node-db-challenge</h3>');
});