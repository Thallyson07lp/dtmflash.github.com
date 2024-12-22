// Importando os módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Importando a configuração do Firebase de outro arquivo
import{firebaseConfig} from "./FireConfig.js"

// Inicializando o Firebase com a configuração importada e Inicializando o serviço de autenticação do Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 

// Exportando o objeto de autenticação para uso em outros arquivos
export{auth}