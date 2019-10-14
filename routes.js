const router = require("express").Router();
const projects = [];
/*
  Middleware that checks if the project id exists to create a task,
  delete or edit a project.
*/
function checkProject(req, res, next) {
  const { id } = req.params;
  if (!projects.find(element => element.id == id)) {
    return res.status(400).json({ error: "Project does not exists" });
  } else {
    next();
  }
}

router.post("/projects", (req, res) => {
  const { id, title } = req.body;
  projects.push({ id, title, tasks: [] });
  return res.json(projects);
});
router.get("/projects", (req, res) => {
  return res.json(projects);
});
router.put("/projects/:id", checkProject, (req, res) => {
  const { id } = req.params;
  projects.find(value => value.id == id).title = req.body.title;
  return res.json(projects);
});

router.delete("/projects/:id", checkProject, (req, res) => {
  const { id } = req.params;
  index = projects.findIndex(element => element.id == id);
  projects.splice(index, 1);
  return res.json(projects);
});

router.post("/projects/:id/tasks", checkProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  projects.find(element => element.id == id).tasks.push(title);
  return res.json(projects);
});
module.exports = router;
