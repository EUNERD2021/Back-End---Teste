'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacaoSchema extends Schema {
  up () {
    this.create('avaliacoes', (table) => {
      table.increments()
      table.timestamps()
      table.integer('estrelas')
      table.string('comentario')
    })
  }

  down () {
    this.drop('avaliacoes')
  }
}

module.exports = AvaliacaoSchema
