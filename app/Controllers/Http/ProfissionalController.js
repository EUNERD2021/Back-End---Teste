'use strict'

const Profissional = use('App/Models/Profissional');

class ProfissionalController {
  /**
   * Show a list of all profissionals.
   * GET profissionals
   */
  async index ({ request, response, view }) {
    return Profissional.all();
  }

  /**
   * Create/save a new profissional.
   * POST profissionals
   */
  async store ({ request, response }) {
    const dados = request.only(["nome", "idade"]);
    await Profissional.create(dados);
  }

  /**
   * Display a single profissional.
   * GET profissionals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Profissional.findOrFail(params.id);
  }

  /**
   * Update profissional details.
   * PUT or PATCH profissionals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = request.only(['nome', 'idade']);

    const profissional = await Profissional.findOrFail(params.id);
    profissional.fill({
      id: profissional.id,
      ...dados
    });

    await profissional.save();
  }

  /**
   * Delete a profissional with id.
   * DELETE profissionals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const profissional = await Profissional.findOrFail(params.id);
    await profissional.delete();
  }
}

module.exports = ProfissionalController
