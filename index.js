// array
let participantes = [
  {
    nome: "José Ferreira",
    email: "jose.ferreira@gmail.com",
    dataInscricao: new Date(2024, 3, 1, 19, 00),
    dataCheckIn: new Date(2024, 3, 1, 20,00)
  },
  {
    nome: "Thiago Silva",
    email: "thiago@gmail.com",
    dataInscricao: new Date(2024, 2, 1, 19, 00),
    dataCheckIn: new Date(2024, 2, 1, 20, 00)
  },
  {
    nome: "Ana Souza",
    email: "ana.souza@example.com",
    dataInscricao: new Date(2024, 1, 15, 18, 30),
    dataCheckIn: null
  },
  {
    nome: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    dataInscricao: new Date(2024, 0, 20, 20, 15),
    dataCheckIn: new Date(2024, 0, 20, 21, 30)
  },
  {
    nome: "Maria Santos",
    email: "maria.santos@example.com",
    dataInscricao: new Date(2024, 2, 5, 17, 45),
    dataCheckIn: null
  },
  {
    nome: "Pedro Costa",
    email: "pedro.costa@example.com",
    dataInscricao: new Date(2024, 1, 10, 18, 0),
    dataCheckIn: null
  },
  {
    nome: "Juliana Lima",
    email: "juliana.lima@example.com",
    dataInscricao: new Date(2024, 3, 3, 21, 30),
    dataCheckIn: new Date(2024, 3, 3, 22, 45)
  },
  {
    nome: "Rafaela Vieira",
    email: "rafaela.vieira@example.com",
    dataInscricao: new Date(2024, 0, 25, 19, 45),
    dataCheckIn: new Date(2024, 0, 25, 21, 0)
  },
  {
    nome: "Gustavo Pereira",
    email: "gustavo.pereira@example.com",
    dataInscricao: new Date(2024, 2, 10, 18, 15),
    dataCheckIn: new Date(2024, 2, 10, 19, 30)
  },
  {
    nome: "Fernanda Oliveira",
    email: "fernanda.oliveira@example.com",
    dataInscricao: new Date(2024, 1, 5, 20, 0),
    dataCheckIn: new Date(2024, 1, 5, 21, 15)
  }
]

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>      
    `
  }
  
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>        
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetição = loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
  
  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output

}
atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // verificar se o participante já existe
  const participanteExiste = participantes.find((p) => p.email == participante.email    
  )

  if(participanteExiste) {
    alert('Email já cadastrado')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulário
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
} 

const fazerCheckIn = (event) => {
  // confirmar se realmente quer fazer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  
  if(confirm(mensagemConfirmacao) == false) {
    return
  }
   
  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
}