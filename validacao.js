        async function validar() {
            const texto = document.getElementById("texto").value;
            const chave = document.getElementById("chave").value.trim();
            const resultado = document.getElementById("resultado");

            // Limpa classes anteriores e conteúdo
            resultado.innerHTML = "";
            resultado.className = "";

            if (!texto || !chave) {
                resultado.innerHTML = "❌ Preencha os dois campos!";
                resultado.classList.add("invalido");
                return;
            }

            // Recalcula o hash do texto original
            const msgUint8 = new TextEncoder().encode(texto);
            const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashBase64 = btoa(String.fromCharCode.apply(null, hashArray)).substring(0, 32);

            if (hashBase64 === chave) {
                resultado.innerHTML = "✅ Assinatura VÁLIDA!";
                resultado.classList.add("valido");
            } else {
                resultado.innerHTML = "❌ Assinatura INVÁLIDA!";
                resultado.classList.add("invalido");
            }
        }