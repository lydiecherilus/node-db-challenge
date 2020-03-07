const express = require("express")

const db = require("../data/db-config")

const Projects = require("../helper")

const router = express.Router()

// return a list of all projects in the database
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            projects.map(project => {
                project.project_completed = project.project_completed == ! false
            })
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});


// return a given projet by id
router.get("/:id", async (req, res, next) => {
    try {
        const projects = await db("projects")
            .where("id", req.params.id)
            .first()

        if (!projects) {
            return res.status(404).json({
                message: "Projects not found",
            })
        }
        res.json(projects)
    } catch (err) {
        next(err)
    }
})


// add/create a new project
router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProjects(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});


// add/create a resource
router.post('/:id/resources', (req, res) => {
    const resource = req.body;
    Projects.addResources(resource)
        .then(() => {
            Projects.getResources()
                .then(resources => {
                    res.status(201).json(resources);
                })
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});


// add/create a task for a project
router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params;
    Projects.getById(id)
        .then(project => {
            if (project) {
                Projects.addTasks(taskData, id)
                    .then(task => {
                        res.status(201).json(task);
                    })
            } else {
                res.status(404).json({ message: 'Could not find project with given id' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new task' });
        });
});

module.exports = router