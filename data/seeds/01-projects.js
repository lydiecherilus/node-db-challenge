
exports.seed = async function (knex) {
  await knex("projects").insert([
    { project_name: "Change Career", project_desription: "Evaluate pros and cons of major life decisions" },
    { project_name: "Learn How to Code", project_desription: "Help choosing best ways to gain coding skills" },
    { project_name: "Create a React App", project_desription: "Fun way to test coding skills" },
    { project_name: "Clean Work Station", project_desription: "Increase productivity" },
  ]);
};