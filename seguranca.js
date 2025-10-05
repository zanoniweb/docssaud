// Dados dos usuários para login
        const users = [
            { username: "jzanoniweb", password: "senha123adm", page: "geracaodocumentosadm.html" },
            { username: "recepcionista", password: "admin456", page: "geracaodocumentosadm.html" },
            { username: "visitante", password: "visadm", page: "geracaodocumentosadm.html" },
            { username: "financeirofin", password: "fin456", page: "geracaodocumentosfinanceiros.html" },
            { username: "jzanoniweb", password: "senha123fin", page: "geracaodocumentosfinanceiros.html" },
            { username: "visitante", password: "visfin", page: "geracaodocumentosfinanceiros.html" },
            { username: "medico1", password: "senha123", page: "geracaodocumentosmedicos.html" },
            { username: "jzanoniweb", password: "senha123med", page: "geracaodocumentosmedicos.html" },
            { username: "visitante", password: "vismed", page: "geracaodocumentosmedicos.html" },
            { username: "recursoshumanosrh", password: "rh456", page: "geracaodocumentosrh.html" },
            { username: "jzanoniweb", password: "senha123rh", page: "geracaodocumentosrh.html" },
            { username: "visitante", password: "visrh", page: "geracaodocumentosrh.html" },
        ];

        function login() {
            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            // Limpa a mensagem de erro
            errorMessage.textContent = "";

            // Encontra o usuário correspondente no array
            const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

            if (user) {
                // Se o usuário e a senha estiverem corretos, redireciona para a página apropriada
                window.location.href = user.page;
            } else {
                // Se o login falhar, exibe uma mensagem de erro
                errorMessage.textContent = "Usuário ou senha incorretos!";
            }

        }
