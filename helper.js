const db = require('./data/db-config.js');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    getById,
    addProjects,
    addResources,
    addTasks
}

function getProjects() {
    return db("projects")
};

function getResources() {
    return db("resources")
}

function getTasks() {
    return db("projects")
        .select("*")
        //.select("tasks.id", "tasks.task_description", "tasks.task_notes", "projects.project_name", "projects.project_desription")
        .join("tasks", "tasks.project_id", "projects.id")
}

function getById(id) {
    return db("projects")
        .where({ id })
        .first()
}

function addProjects(projects) {
    return db("projects")
        .insert(projects)
        .then(([id]) => {
            return getById(id)
        })
}

function addResources(resource) {
    return db("resources")
        .insert(resource)
}

function addTasks(task, project_id) {
    return db("tasks")
        .insert({ ...task, project_id })
        .then(Id => {
            return db("tasks")
                .where({ id: Id[0] })
                .first()
                .then(newTask => newTask)
        })
}