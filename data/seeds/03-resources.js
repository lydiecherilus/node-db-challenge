
exports.seed = async function (knex) {
  await knex("resources").insert([
    { resource_name: 'Internet', resource_description: "Internet accces" }, // p1 - p2 - p3
    { resource_name: 'Material', resource_description: "Books, journal, pens, paper" }, // p1 - p2 - p3
    { resource_name: 'Technology', resource_description: "Computer" }, // p2 - p3
    { resource_name: 'Assecories', resource_description: "Speaker, headphone" }, // p2
    { resource_name: 'Products', resource_description: "Wipes, trash bags" } // p4
  ]);
};