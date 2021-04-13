'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profissional extends Model {
    static get table(){
        return 'profissionais';
    }
}

module.exports = Profissional
