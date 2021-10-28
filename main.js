// Criando um Objeto:
const linksSocialMedia = {
  // Criando as Variáveis e os Dados que Elas Recebem:
  github: 'Alciomar46',
  youtube: 'channel/UC8hGUtfEgvvnp6IaHSAg1OQ',
  instagram: 'jairmessiasbolsonaro',
  facebook: 'jairmessias.bolsonaro',
  twitter: 'jairbolsonaro'
}

// Criando uma Função P/ Mudar os Links das Redes Sociais:
function changeSocialMedia() {
  // Criando um Laço de Repetição
  // Nesse Laço de Repetição Criou-se uma Variável P/ Conter os Filhos da Lista Não Ordenada de Links das Redes Sociais Pela CLASS "socialLinks"
  for (let li of socialLinks.children) {
    // Criou-se uma Variável P/ Conter os Atributos de CLASS da Variável "li"
    const social = li.getAttribute('class')
    // Os Filhos de cada "li" na Posição 0 (Os Primeiros), ou seja, o "href". Recebe o "Template String" (Todo o Endereço HTTPs Entre Crase `` P/ o Java Entender como Comando) que irá Realizar a Troca das Partes do Endereço HTTPs pelo o que Queremos:
    // A Troca dos Elementos do Endereço HTTPs Ocorre Usando "${}" e  Dentro Colocando a Varável que Contém o Elemento que Deseja Colocar:
    // No Caso do Texto que Contém o Link do Perfil do Usuário Usa-se "[]" e Dentro Colocando a Variável que Contém o nome da Variável que Contém o Nome do Usuário
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

// Execução da Função de Troca dos Links das Redes Sociais
changeSocialMedia()

// Função P/ Pegar Informações do Perfil de Usuário do GitHub Através do JSON (API):
function getGitHubProfileInfos() {
  // Cria-se uma Variável P/ Conter a Troca dos Perfis
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  // Comando P/ ir na URL da API Acima e Pegar o que o JSON do GitHub Respoder
  // A "fetch" vai na Variável 'url' vai Pegar a Resposta e vai P/ o "then"
  fetch(url)
    // O "then" Receberá a Resposta que o "fetch" Pediu ou Seu Antecessor
    // Após Receber a Resposta, Cria-se uma Função simplificada P/ Trasformar a Resposta em Arquivo JSON
    .then(response => response.json())
    // Após Receber os Arquivos em JSON, Abri-se uma Nova Função P/ Inserir Dados do GitHub no Crachá
    .then(data => {
      // Usando o "ID" do Elemento e o Recurso "textContent", Troca-se o Conteúdo do Elemento Selecionado Pelo Dado Escolhido do GitHub
      nameProfile.textContent = data.name
      bioProfile.textContent = data.bio
      linkProfile.href = data.html_url
      imageProfile.src = data.avatar_url
      loginProfile.textContent = data.login
    })
}

getGitHubProfileInfos()
