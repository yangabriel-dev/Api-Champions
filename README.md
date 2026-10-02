# Api-Champions ⚽

[![CI](https://github.com/yangabriel-dev/Api-Champions/actions/workflows/ci.yml/badge.svg)](https://github.com/yangabriel-dev/Api-Champions/actions/workflows/ci.yml)

API REST de jogadores e clubes da Champions League, feita com **Node.js**, **Express 5** e **TypeScript**.

Tem CRUD completo de jogadores, listagem de clubes, respostas HTTP padronizadas e testes automatizados de todas as rotas.

## Tecnologias

- Node.js 22 + TypeScript
- Express 5 e CORS
- tsx para rodar em desenvolvimento e tsup para gerar o build
- Testes com o `node:test`, o executor de testes nativo do Node
- GitHub Actions rodando a checagem de tipos e os testes a cada push

## Arquitetura

O código segue uma arquitetura em camadas, em que cada uma tem uma responsabilidade:

```
src/
├── server.ts          # sobe o servidor
├── app.ts             # cria o app Express e registra os middlewares
├── routes.ts          # define as rotas
├── controllers/       # recebe a requisição e devolve a resposta
├── services/          # regras de negócio e escolha do status HTTP
├── repositories/      # acesso aos dados
├── models/            # tipos e interfaces
├── utilidades/        # respostas HTTP padronizadas (200, 201, 400, 404...)
└── data/clubs.json    # dados dos clubes
```

Os jogadores ficam em memória, então as mudanças somem quando o servidor reinicia. Os clubes são lidos do arquivo `clubs.json`.

## Como rodar

```bash
git clone https://github.com/yangabriel-dev/Api-Champions.git
cd Api-Champions
npm install
cp .env.example .env   # opcional, a porta padrão é 3333
npm run start:dev
```

A API fica em `http://localhost:3333/api`.

| Comando | O que faz |
| --- | --- |
| `npm run start:dev` | roda em modo de desenvolvimento |
| `npm run start:watch` | roda e reinicia a cada alteração |
| `npm test` | roda os testes |
| `npm run typecheck` | checa os tipos com o TypeScript |
| `npm run start:dist` | gera o build e roda a versão de produção |

## Rotas

| Método | Rota | Descrição | Respostas |
| --- | --- | --- | --- |
| GET | `/api/players` | lista todos os jogadores | 200 |
| GET | `/api/players/:id` | busca um jogador pelo id | 200, 404 |
| POST | `/api/players` | cadastra um jogador | 201, 400 |
| PATCH | `/api/players/:id` | atualiza as estatísticas de um jogador | 200, 404 |
| DELETE | `/api/players/:id` | remove um jogador | 200, 404 |
| GET | `/api/clubs` | lista os clubes | 200 |

### Exemplos

Buscar um jogador:

```bash
curl http://localhost:3333/api/players/2
```

```json
{
  "id": 2,
  "name": "Cristiano Ronaldo",
  "club": "Manchester United",
  "nationality": "Portugal",
  "position": "Forward",
  "statistics": {
    "Overall": 92,
    "Pace": 89,
    "Shooting": 93,
    "Passing": 82,
    "Dribbling": 88,
    "Defending": 35,
    "Physical": 78
  }
}
```

Atualizar as estatísticas:

```bash
curl -X PATCH http://localhost:3333/api/players/2 \
  -H "Content-Type: application/json" \
  -d '{"Overall":93,"Pace":88,"Shooting":94,"Passing":82,"Dribbling":87,"Defending":35,"Physical":77}'
```

## Próximos passos

- Validar os campos do jogador no cadastro
- Gerar o id automaticamente
- Trocar o armazenamento em memória por um banco de dados

## Autor

Feito por **Yan Gabriel** · [LinkedIn](https://www.linkedin.com/in/yangabrieldev/) · [GitHub](https://github.com/yangabriel-dev)
