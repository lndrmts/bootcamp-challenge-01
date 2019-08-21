const express = require("express");
const server = express();

server.use(express.json());

let numberOfRequests = 0;
const projects = [
  {
    id: "1",
    title: "Projeto 01",
    tasks: []
  },
  {
    id: "2",
    title: "Projeto 02",
    tasks: []
  }
];

// Count Requests
CountRequests = (req, res, next) => {
  numberOfRequests++;
  console.log(`Number of Requests: ${numberOfRequests}`);
  return next();
};

CheckProjectExist = (req, res, next) => {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  if (!project) {
    return res
      .status(400)
      .json({ error: `There are no Projects with ID ${id}` });
  }
  return next();
};

// Listing Projects
server.get("/projects", (req, res) => {
  return res.json(projects);
});

// Create a new Project
server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const newProject = {
    id,
    title,
    tasks: []
  };

  projects.push(newProject);

  return res.json(projects);
});

// Edit Project
server.put("/projects/:id", CheckProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

// Create a New Task
server.post("/projects/:id/tasks", CheckProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

// Delete a Project
server.delete("/projects/:id/delete", CheckProjectExist, (req, res) => {
  const { id } = req.params;

  const deleteProject = projects.findIndex(p => p.id == id);

  projects.splice(deleteProject, 1);

  return res.send();
});

server.listen(3000);
