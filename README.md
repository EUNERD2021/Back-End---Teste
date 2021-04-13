# Desafio Técnico
Este é o resultado do desafio proposto. Devido a limitações de tempo:
- Desenvolvi apenas alguns testes, que obviamente não cobrem todos os casos.
- Não desenvolvi as validações dos dados, tramento das excessões e feedbacks adequados.

### Tecnologias
* [AdonisJs]
* [NodeJs]

### URL de Teste
* [walaceleal.com.br]

### Instalação
Preencha os dados do .env
```js
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis
SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt
```
Instale as dependências, execute as migrações.
```sh
$ npm install
$ adonis migration:run
$ adonis serve --dev
```
Rodar servidor
```sh
$ adonis serve --dev
```
Rodar os testes
```sh
$ adonis test
```

### Rotas
O arquivo 'Rotas_Insomnia.json' possui as rotas desenvolvidas no Insomnia.

[AdonisJs]: <http://adonisjs.com/>
[NodeJs]: <https://nodejs.org/>
[walaceleal.com.br]: <http://walaceleal.com.br:3335/>