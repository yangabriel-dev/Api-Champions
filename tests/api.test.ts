import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { AddressInfo } from "node:net";
import { Server } from "node:http";
import creatApp from "../src/app";

let server: Server;
let baseUrl: string;

before(() => {
    server = creatApp().listen(0);
    const { port } = server.address() as AddressInfo;
    baseUrl = `http://localhost:${port}/api`;
});

after(() => {
    server.close();
});

test("GET /players lista os jogadores", async () => {
    const res = await fetch(`${baseUrl}/players`);
    assert.equal(res.status, 200);
    const players = await res.json();
    assert.ok(players.length > 0);
});

test("GET /players/:id devolve o jogador certo", async () => {
    const res = await fetch(`${baseUrl}/players/2`);
    assert.equal(res.status, 200);
    const player = await res.json();
    assert.equal(player.name, "Cristiano Ronaldo");
});

test("GET /players/:id devolve 404 quando o jogador não existe", async () => {
    const res = await fetch(`${baseUrl}/players/999`);
    assert.equal(res.status, 404);
});

test("POST /players cadastra um jogador", async () => {
    const res = await fetch(`${baseUrl}/players`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: 100,
            name: "Vinícius Júnior",
            club: "Real Madrid",
            nationality: "Brazil",
            position: "Forward",
            statistics: { Overall: 90, Pace: 95, Shooting: 84, Passing: 81, Dribbling: 92, Defending: 29, Physical: 69 },
        }),
    });
    assert.equal(res.status, 201);

    const created = await fetch(`${baseUrl}/players/100`);
    assert.equal(created.status, 200);
});

test("POST /players sem corpo devolve 400", async () => {
    const res = await fetch(`${baseUrl}/players`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
    });
    assert.equal(res.status, 400);
});

test("PATCH /players/:id atualiza as estatísticas", async () => {
    const statistics = { Overall: 99, Pace: 99, Shooting: 99, Passing: 99, Dribbling: 99, Defending: 99, Physical: 99 };
    const res = await fetch(`${baseUrl}/players/1`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(statistics),
    });
    assert.equal(res.status, 200);
    const player = await res.json();
    assert.deepEqual(player.statistics, statistics);
});

test("PATCH /players/:id devolve 404 quando o jogador não existe", async () => {
    const res = await fetch(`${baseUrl}/players/999`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Overall: 1 }),
    });
    assert.equal(res.status, 404);
});

test("DELETE /players/:id remove o jogador e devolve 404 na segunda vez", async () => {
    const first = await fetch(`${baseUrl}/players/3`, { method: "DELETE" });
    assert.equal(first.status, 200);

    const second = await fetch(`${baseUrl}/players/3`, { method: "DELETE" });
    assert.equal(second.status, 404);
});

test("GET /clubs lista os clubes", async () => {
    const res = await fetch(`${baseUrl}/clubs`);
    assert.equal(res.status, 200);
    const clubs = await res.json();
    assert.equal(clubs[0].name, "Real Madrid");
});

test("as respostas trazem o cabeçalho de CORS", async () => {
    const res = await fetch(`${baseUrl}/clubs`);
    assert.equal(res.headers.get("access-control-allow-origin"), "*");
});
