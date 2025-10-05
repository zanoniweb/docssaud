// login.js - salve este código em um único arquivo JavaScript

const users = [
    // Acesso Administrativo
    { username: "jzanoniweb", password: "senha123adm", pages: ["geracaodocumentosadm.html", "geracaodocumentosfinanceiro.html", "geracaodocumentosmedicos.html", "geracaodocumentosrh.html"] },

    // Acesso por Módulo
    { username: "recepcionista", password: "admin456", pages: ["geracaodocumentosadm.html"] },
    { username: "financeirofin", password: "fin456", pages: ["geracaodocumentosfinanceiro.html"] },
    { username: "medico1", password: "senha123", pages: ["geracaodocumentosmedicos.html"] },
    { username: "recursoshumanosrh", password: "rh456", pages: ["geracaodocumentosrh.html"] }
];

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("loggedIn", "true");

        // Define a URL de redirecionamento com base no acesso do usuário
        // Se o usuário tiver acesso a apenas uma página, redireciona para ela.
        // Se tiver acesso a mais de uma (caso do admin), você pode definir uma página padrão.
        const redirectUrl = user.pages[0];
        
        if (redirectUrl) {
            window.location.href = redirectUrl;
        } else {
            errorMessage.textContent = "Acesso negado. Nenhuma página encontrada para este usuário.";
        }
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
}