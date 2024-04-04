fronteditor.dev/nlw-unite
# HTML

*Hypertext*
- inserção de links:
  <a href="https://google.com">google.com</a>

*Markup*
- Tag
- width="100%" = largura

*Language*


#CSS
Cascading StyleSheet


#JavaScript
```js
//const mensagem = "oi, tudo bem?"

//alert(mensagem)

// objeto javascript
const participante = {
  nome: "José Ferreira",
  email: "jose.ferreira@gmail.com",
  dataInscricao: new Date(2024, 3, 1, 19, 00),
  dataCheckIn: new Date(2024, 3, 1, 20,00)
}

// array
let participantes = [
  {
    nome: "José Ferreira",
    email: "jose.ferreira@gmail.com",
    dataInscricao: new Date(2024, 3, 1, 19, 00),
    dataCheckIn: new Date(2024, 3, 1, 20,00)
  }
]

 // estrutura de repetição = loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }


  alert(dadosDoFormulario.get('nome'))
