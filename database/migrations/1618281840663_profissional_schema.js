'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfissionalSchema extends Schema {
  up () {
    this.create('profissionais', (table) => {
      table.increments()
      table.timestamps()
      table.string('nome')
      table.integer('idade')
    })
  }

  down () {
    this.drop('profissionais')
  }
}

module.exports = ProfissionalSchema
