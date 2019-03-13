const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();
const port = 3001;

//Altere para os dados do seu banco
const host = 'localhost'
const user = 'root'
const password = ''
const database = 'testes'

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

var connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: 'testes'
});

connection.connect();

app.get('/', function (req, res) {
    res.send('Hello Word');
})

app.post("/login", function (req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    connection.query(
        "SELECT * FROM usuarios WHERE email = '" + email + "'",
        function (err, rows, fields) {
            if (err) {
                throw err;
                res.send(err)
            }
            console.log(rows);

            res.send(rows)
        }
    );

});

app.post("/adicionar-usuario", function (req, res) {
    var id = uuid();
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var data_nascimento = req.body.data_nascimento;
    var instituicao = req.body.instituicao;
    var profissao = req.body.profissao;

    connection.query(
        "INSERT INTO `usuarios`(`id`,  `nome`,`email`, `senha`, `data_nascimento`, `instituicao`, `profissao`) VALUES ('" +
        id +
        "','" +
        nome +
        "','" +
        email +
        "','" +
        senha +
        "','" +
        data_nascimento +
        "','" +
        instituicao +
        "','" +
        profissao +
        "')",
        function (err, result) {
            if (err) throw err;
            console.log([{
                id: id,
                nome: nome,
                email: email,
                senha: senha,
                data_nascimento: data_nascimento
            }]);
            res.send("Dado adicionado com sucesso");
        }
    );
});

app.get("/exibir-usuarios", function (req, res) {
    connection.query("SELECT * FROM usuarios ORDER BY nome", function (err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
});

app.post("/exibir-usuario", function (req, res) {
    var id = req.body.id;
    connection.query("SELECT * FROM usuarios WHERE id = '" + id + "'", function (err, row, field) {
        if (err) {
            throw err
            res.send('ERRO')
        } else {
            res.send(row)
        }
        console.log(row)
    })

});

app.put("/editar-usuario", function (req, res) {
    var id = req.body.id;
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var data_nascimento = req.body.data_nascimento;
    var instituicao = req.body.instituicao;
    var profissao = req.body.profissao;

    connection.query(
        "UPDATE `usuarios` SET id='" + id + "',  nome='" + nome + "',email='" + email + "', senha='" + senha + "', data_nascimento='" + data_nascimento + "', instituicao='" + instituicao + "', profissao='" + profissao + "' where id = '" + id + "' ",
        function (err, result) {
            if (err) throw err;
            console.log([{
                id: id,
                nome: nome,
                email: email,
                senha: senha,
                data_nascimento: data_nascimento
            }]);
            res.send("Dado alterado com sucesso");
        }
    );
});

app.post("/deletar-usuario", function (req, res) {
    var email = req.body.email;
    connection.query("DELETE FROM usuarios WHERE email = '" + email + "'", function (err, row, field) {
        if (err) {
            throw err
            res.send('ERRO')
        } else {
            res.send('OK')
        }

    })

});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));