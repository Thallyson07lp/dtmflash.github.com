// Importando o objeto de autenticação inicializado no Firebase e a função de criação de usuário com email e senha do Firebase Auth
import { auth } from "./Js_Seng/Init.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Selecionando os campos de entrada (email e senha) do formulário no HTML
const InputEmail = document.querySelector("input[class=email]");
const InputSenha = document.querySelector("input[class=senha]");

// Selecionando o botão de cadastro no HTML
const buttonBnt = document.querySelector("button[name=btn]");

// Adicionando um evento de clique ao botão de cadastro
buttonBnt.addEventListener("click", () => {
  // Função do Firebase para criar um usuário com email e senha
  createUserWithEmailAndPassword(auth,InputEmail.value, InputSenha.value)
    .then((result) => {
       // Se a criação for bem-sucedida, exibe uma mensagem de sucesso
      alert("Conta Criada!");
    })
    .catch((error) => {
      // Se houver um erro, exibe a mensagem de erro
      alert(`Erro: ${error.message}`);
    });
});

