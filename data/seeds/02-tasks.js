
exports.seed = async function (knex) {
  await knex("tasks").insert([
      {
        task_description: 'Evaluate current job satisfaction',
        task_notes: "Identify what you like and dislike",
        project_id: 1
      },
      {
        task_description: 'Assess your interests, values, and skills',
        task_notes: "Review past successful roles",
        project_id: 1
      },
      {
        task_description: 'Consider alternative careers',
        task_notes: "Research career options",
        project_id: 1
      },
      {
        task_description: 'Check out job options',
        task_notes: "Evaluate different fields",
        project_id: 1
      },
      {
        task_description: 'Upgrade your skills',
        task_notes: "Learn new skills, take a class",
        project_id: 1
      },
      {
        task_description: 'Change Career',
        task_notes: "Enjoy!",
        project_id: 1
      },
      {
        task_description: 'Answer why you want to learn coding',
        task_notes: "Think about what you hope to get out of it",
        project_id: 2
      },
      {
        task_description: 'Choose the right languages',
        task_notes: "Java, Python, Ruby, HTML, CSS",
        project_id: 2
      },
      {
        task_description: 'Choose the right resources',
        task_notes: "Online courses, textbooks, videos",
        project_id: 2
      },
      {
        task_description: 'Sign Up For Lambda School',
        task_notes: "It worth it!",
        project_id: 2
      },
      {
        task_description: 'Set up the boilerplate application',
        task_notes: "Brainstorm",
        project_id: 3
      },
      
      {
        task_description: 'Create the app',
        task_notes: "Enjoy your newly creqated App!",
        project_id: 3
      },
      {
        task_description: 'Find an oganizational system',
        task_notes: "Deal with dust, take out the trash",
        project_id: 4
      },
      ]);
      };