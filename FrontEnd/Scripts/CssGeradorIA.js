let botao = document.querySelector(".botao-gerar")
// let chave = "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"
let endereco = "https://api.groq.com/openai/v1/chat/completions"



async function gerarCodigo() {
    let textoUsuario = document.querySelector(".caixa-texto").value
    let blocoCodigo = document.querySelector(".bloco-codigo")
    let resultadoCodigo = document.querySelector(".resultado-codigo")
    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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",
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{
                //Quem é a IA
                role: "system",
                //Oque quero que ela faz, como ela ira responder
                content: "Você um gerador de código HTML e CSS, Reponda SOMENTE com código puro, Nunca use crases, markdow ou explicações. Formato: primeiro o <style> com CSS, depois o HTML. Siga Exatamente o que o usuário pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate."
            }, {
                //O que o usuario manda
                role: "user",
                //Oque o usuario pede
                content: textoUsuario
            }]
        })    
    })//Armazena a respoda da IA


    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    blocoCodigo.textContent = resultado//Ira mostrar só o código em linha
    resultadoCodigo.srcdoc = resultado//Ira mostra uma previa do código em linha funcionando no modo visual 

}


botao.addEventListener("click", gerarCodigo)