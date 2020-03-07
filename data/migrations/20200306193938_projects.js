
exports.up = async function (knex) {
    await knex.schema.createTable('projects', table => {
        table.increments();
        table.text('project_name', 128).notNullable().unique()
        table.text('project_desription')
        table.boolean('project_completed').defaultTo(false)
    })

    await knex.schema.createTable('tasks', table => {
        table.increments();
        table.text('task_description').unsigned().notNullable()
        table.text('task_notes')
        table.boolean('task_completed').defaultTo(false)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })

    await knex.schema.createTable('resources', table => {
        table.increments();
        table.text('resource_name').notNullable()
        table.text('resource_description')
    })

    await knex.schema.createTable('projects_resources', table => {
        table.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table.integer('resource_id')
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table.primary(['project_id', 'resource_id'])
    })
};


exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('projects_resources')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('projects')
};
