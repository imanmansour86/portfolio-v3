const router = require("express").Router();
const { Employment, Project, Skill } = require("../models");

// GET all projects
router.get("/projects", async (req, res) => {
  try {
    //all projects
    const dBprojectData = await Project.findAll({});
    const projects = dBprojectData.map((project) =>
      project.get({ plain: true })
    );

    //all skills
    // const dBskillData = await Skill.findAll({});
    // const skills = dBskillData.map((skill) => skill.get({ plain: true }));

    //all employment
    // const dBemploymenttData = await Employment.findAll({});
    // const employments = dBemploymenttData.map((employment) =>
    //   employment.get({ plain: true })
    // );
    // console.log("all", projects, skills, employments);

    // res.render("homepage", {
    //   projects,
    //   skills,
    //   employments,
    // });

    res.json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all skills
router.get("/skills", async (req, res) => {
  try {
    const dBskillData = await Skill.findAll({});
    const skills = dBskillData.map((skill) => skill.get({ plain: true }));

    res.json(skills);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET all employment
router.get("/employment", async (req, res) => {
  try {
    const dBemploymenttData = await Employment.findAll({});
    const employments = dBemploymenttData.map((employment) =>
      employment.get({ plain: true })
    );

    res.json(employments);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
