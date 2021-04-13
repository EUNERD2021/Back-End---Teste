'use strict'

const Avaliacao = use('App/Models/Avaliacao');

class AvaliacaoController {
  /**
   * Show a list of all avaliações.
   * GET avaliações
   */
  async index ({ request, response, view }) {
    return Avaliacao.all();
  }

   /**
   * Create/save a new avaliacao.
   * POST avaliações
   */
  async store ({ request, response }) {
    const dados = request.only(['estrelas', 'comentario', 'profissional']);
    await Avaliacao.create(dados);
  }

  /**
   * Display a single avaliacao.
   * GET avaliações/:id
   */
  async show ({ params, request, response, view }) {
    return await Avaliacao.findOrFail(params.id);
  }

  /**
   * Update avaliacao details.
   * PUT or PATCH avaliações/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const avaliacao = await Avaliacao.findOrFail(params.id);
    const dados = request.only(['estrelas', 'comentario', 'profissional']);
    
    avaliacao.fill({
      id : avaliacao.id,
      ...dados
    })

    await avaliacao.save();
  }

  /**
   * Delete a avaliacao with id.
   * DELETE avaliações/:id
   */
  async destroy ({ params, request, response }) {
    const avaliacao = await Avaliacao.findOrFail(params.id);
    await avaliacao.delete();
  }
}

module.exports = AvaliacaoController
