/**
 * Create table `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('purchases', (table) => {
    table.uuid('id').primary();
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull().defaultTo(knex.raw('now()'));
    table.string('name').notNull();
    table.timestamp('date').notNull();
    table.enum('purchaser', ['Carol', 'Chad']).defaultTo('Carol');
    table.enum('status', ['active', 'inactive', 'archive']).notNull().defaultTo('active');
    table.boolean('settlement').notNull().defaultTo(false);
    table.enum('split', [true, false]).defaultTo(false);
  });
}

/**
 * Drop `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('purchases');
}
