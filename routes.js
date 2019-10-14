const router = require("express").Router();
const projects = [];

router.post("/projects", (req, res) => {
  const { id, title } = req.body;
  projects.push({ id, title, tasks: [] });
  return res.json(projects);
});
router.get("/projects", (req, res) => {
  return res.json(projects);
});
router.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  projects.find(value => value.id == id).title = req.body.title;
  return res.json(projects);
});

router.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  index = projects.findIndex(element => element.id == id);
  projects.splice(index, 1);
  return res.json(projects);
});

router.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  projects.find(element => element.id == id).tasks.push(title);
  return res.json(projects[id]);
});
module.exports = router;
