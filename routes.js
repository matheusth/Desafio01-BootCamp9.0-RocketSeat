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
  projects[id].title = req.body.title;
  return res.json(projects[id]);
});

module.exports = router;
