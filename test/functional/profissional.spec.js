const Suite = use('Test/Suite')('Post')

const { before, beforeEach, after, afterEach } = Suite;
const { test, trait } = Suite;

const Database = use('Database')

beforeEach(async () => {
  try{
    const trx = await Database.beginTransaction()
  
    await trx.raw('SET FOREIGN_KEY_CHECKS = 0;');
    await trx.raw('TRUNCATE table profissionais;');
    await trx.raw('TRUNCATE table avaliacoes;');
    await trx.raw('SET FOREIGN_KEY_CHECKS = 1;');
    
    await trx.commit()

  }catch(e){
    console.log(e);
  }
})

trait('Test/ApiClient')

const d = { nome : 'Walace', idade: 26}; 

function criar(client, data){
  return client.post('/profissionais').send( data ).end();
}

function listar(client){
  return client.get('/profissionais').end()
}

test('listagem 1 - vazia', async ({ client }) => {
  const response = await listar(client);

  response.assertStatus(200);
  response.assertJSON([]);
});

test('criação', async ({ client }) => {
  const r = await criar(client, d);

  r.assertStatus(200);
  r.assertJSONSubset(d);
});

test('listagem 2 - 1 elemento', async ({ client }) => {
  await criar(client, d);

  //listagem
  const r = await listar(client);

  r.assertStatus(200);
  r.assertJSONSubset([d]);
});

test('atualização', async ({ client }) => {
  const {body} = await criar(client, d);

  //atualização
  const d2 = { nome : 'Dev Walace', idade: 2600}; 
  const r = await client.put(`/profissionais/${body.id}`).send(d2).end();

  r.assertStatus(200);
  r.assertJSONSubset(d2);
});

test('exclusão', async ({ client }) => {
  const {body} = await criar(client, d);

  //exclusão
  await client.delete(`/profissionais/${body.id}`).end();

  //listagem
  const r = await listar(client);

  r.assertStatus(200);
  r.assertJSON([]);
});
