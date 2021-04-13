'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacaoProfissionalSchema extends Schema {
  up () {
    this.table('avaliacoes', (table) => {
      table.foreign('profissional').references('id').inTable('profissionais').onDelete('cascade').onUpdate('cascade');
    })
  }

  down () {
    this.table('avaliacoes', (table) => {
      table.dropForeign('profissional');
    })
  }
}

module.exports = AvaliacaoProfissionalSchema
