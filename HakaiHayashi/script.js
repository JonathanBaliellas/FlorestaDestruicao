/*A FLORESTA DA DESTRUIÇÃO
Versão: 0.18.99
Criação: 30/12/2020
*/

/*HISTÓRICO
    06/01/2021: Alpha Ver 0.9.1
        - Correção de bugs na função compraPonto()
        - Inclusão dos Equipamentos Iniciais, Dica Introdutória e Início de Jogo,
          Caixa de Status, Equipamentos

    07/01/2021: Alpha Ver 0.9.2
        - Correção do bug da lista de Equipamentos que a duplicava.

    08/01/2021: Alpha Ver 0.11.7
        - Criação da função para utilização de equipamentos (usarEquip())
        - Criação da lista de todos os equipamentos        
        - Conclusão do início de aventura
        - Criação do ev001() ao ev007()

    11/01/2021: Alpha Ver 0.13.8
        - Criação do Teste de Sorte (func testeSorte)
        - Criação do Sistema de Batalha (func batalha)
        - Criação do ev008() ao ev012()

    12/01/2021: Alpha Ver 0.13.9
        - Configuração do ev012()

    13/01/2021: Alpha Ver 0.14.4
        - Criação da função para remoção de item (removerItem())
        - Conclusão do ev012()
        - Ajuste na mensagem de confirmação de criação de personagem (confirmStats())
        - Criação do ev013()

    14/01/2021: Alpha Ver 0.16.9
        - Criação do ev014() ao ev036()
        - Criação da funçao rolaD6() para obter valor aleatório
        - Novo recurso de batalhas: fuga

    15/01/2021: Alpha Ver 0.16.29
        - Criação do ev037() ao ev057()

    19/01/2021: Alpha Ver 0.16.63
        - Criação do ev058() ao ev090()
        - Correção de bug em ev012()
        - Inclusão de contagem de turnos de batalha

    20/01/2021: Alpha Ver 0.17.2
        - Criação do ev091() ao ev097()
        - Inclusão de Combates Múltiplos no Sistema de Batalha

    21/01/2021: Alpha Ver 0.18.15
        - Criação do ev098() ao ev122()
        - Inclusão do sistema de uso de itens

    22/01/2021: Alpha Ver 0.18.67
        - Criação do ev123() ao ev170()
        - Correção de bugs dos ev009 e ev015
        - Criação de variável BonusAtk e atualização no Sistema de Batalha
        - Inclusão de tooltip nos botões de equipamento
        - Colunas dinâmicas do inventário

    25/01/2021: Alpha Ver 0.18.99
        - Criação do ev171() ao ev202()

    26/01/2021: Alpha Ver 0.18.152
        - Criação do ev203() ao ev255()
        - Adição do Escudo ao Sistema de Batalha

    27/01/2021: Alpha Ver 0.18.168
        - Criação do ev256() ao ev271()
        - Melhoria da função atualizaStats(), incluindo os parâmetros (atrib,val)
        - Inclusão da funcionalidade da Poção de Habilidade com Armas

    28/01/2021: Alpha Ver 0.18.179
        - Criação do ev272() ao ev282()

    29/01/2021: Alpha Ver 0.19.26
        - Criação do ev283() ao ev307()
        - Criação da função para adição de item: adcItem()
        - Substituição da variável bonusAtk pelo objeto stats.bonusAtk

    01/02/2021: Beta Ver 0.20.0
        - Criação do ev308() ao ev400()
        - Fim da fase Alpha
        - Início da Fase de Testes
*/

//ELEMENTOS
let txt = document.querySelector('div#txt')
let intUser = document.querySelector('div#intUser')
let secStatus = document.createElement('section')
secStatus.setAttribute('id','secStatus')
let body = document.getElementsByTagName('body')[0]

//Botões
let btn1 = document.createElement('button')
let btn2 = document.createElement('button')
let btn3 = document.createElement('button')
let btn4 = document.createElement('button')

btn2.style.marginLeft = '20px'
btn3.style.marginLeft = '20px'
btn4.style.marginLeft = '20px'

//btn1.setAttribute('class','Button')

intUser.appendChild(btn1)

//VARIÁVEIS GLOBAIS
let stats = {
    nome:'',
    hab:0,
    energ:0,
    sor:0,
    habAtual:0,
    energAtual:0,
    sorAtual:0,
    ouro:0,
    bonusAtk:0
}

let equips = {
    nome:[],
    quant: [],
}

var custoTot = 0
var vitoria = 0
let bonusAtkTemp = {
    pocHabArmas: [0,1],//[turnos,bonus]
    anelLentidao: [0,-2]
}

//INÍCIO DO JOGO
intro()


/*//TESTE DE EVENTOS

    //Parametros do Teste
    stats.nome='Joaquim'
    stats.hab=12;       stats.habAtual=10
    stats.energ=20;     stats.energAtual=13
    stats.sor=8;        stats.sorAtual=7
    stats.ouro=30

    equips.nome = ['Poção de Força','Poção da Fortuna','Braçadeira da Força','Beladona',
    'Olho de Âmbar','Água Benta','Poeira da Levitação','Sino Pequeno',
    'Rede de Aprisionamento','Cabeça do Martelo de Gillibran','Cabo do Martelo de Gillibran',
    'Luva da Destreza de Arremesso','Poção Curativa','Filtros Nasais','Elmo da Habilidade',
    'Provisões'
    ]
    equips.quant = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    
    cxStatus()
    ev307()
*/

function intro(){ //APRESENTAÇÃO
    txt.innerHTML = `<p>Somente os imprudentes ou os muito corajosos se arriscariam de livre e 
        espontânea vontade a uma jornada pela Floresta de Darkwood, onde trilhas estranhas e 
        tortuosas serpenteiam, penetrando em sinistras profundezas. Quem sabe que criaturas 
        monstruosas espreitam em meio às sombras ameaçadoras, ou que aventuras fatais esperam 
        o viajante desavisado? <strong>VOCÊ</strong> se atreve a entrar? </p>`
    txt.innerHTML += `<p>Numa corrida desesperada contra o tempo, sua missão é encontrar, no 
        interior de Darkwood, os pedaços perdidos do lendário Martelo de Stonebridge, o qual 
        foi fabricado pelos Anões para proteger a pacífica Stonebridge de uma antiga maldição.</p>`
    txt.innerHTML += `<p>Há muitos perigos à sua frente, e seu sucesso não está de modo nenhum 
        garantido. Adversários poderosos estão mobilizados contra você e, muitas vezes, sua 
        única escolha será matar ou morrer!</p>`
    txt.innerHTML += `<p>Ian Livingstone é o co-fundador (com Steve Jackson) da imensamente 
        bem-sucedida cadeia Games Workshop.</p>`

    //BOTÕES
    btn1.innerText = 'Começar'
    btn1.addEventListener('click',start)    
}

function start(){ //INICIALIZAÇÃO
    custoTot = 0
    vitoria = 0
    stats.bonusAtk = 0
    bonusAtkTemp.pocHabArmas[0] = 0
    bonusAtkTemp.anelLentidao[0] = 0
    equips.nome = []
    equips.quant = []

    txt.innerHTML = `<h2>Criação de Personagem</h2>`
    txt.innerHTML += `<p>Antes de embarcar na sua aventura, você deve primeiro nomear seu 
        personagem e determinar suas forças e fraquezas. Você tem em sua posse uma espada 
        e uma mochila contendo provisões (comida e bebida) para a viagem. Você vem se 
        preparando para sua missão, treinando o manuseio da espada e se exercitando 
        vigorosamente para aumentar sua energia.</p>`
    txt.innerHTML += `<p>Para ver o quanto sua preparação foi eficiente, você deve 
        determinar seus índices iniciais de HABILIDADE, ENERGIA e SORTE. Você pode COMPRAR 
        PONTOS ou designar valores ALEATÓRIOS.</p>`  
    txt.innerHTML += `<p>Nome do personagem: <input type="text" id="txtNome"></input></p>`
    
    let txtNome = document.getElementById('txtNome')
    txtNome.focus()

    btn1.removeEventListener('click',start)
    btn1.innerHTML = 'Comprar pontos'
    btn1.addEventListener('click',chamaCompraP)    

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Usar valores aleatórios'
    btn2.addEventListener('click',chamaAleat)

    function chamaCompraP(){
        let validaNome = txtNome.value
        
        if (validaNome.length == 0) {
            window.alert('Por favor, insira um nome para o Personagem')
        } else {
            stats.nome = validaNome
            btn1.removeEventListener('click',chamaCompraP)
            btn2.removeEventListener('click',chamaAleat)  
            compraPonto()
        }        
    }

    function chamaAleat(){
        let validaNome = txtNome.value
        
        if (validaNome.length == 0) {
            window.alert('Por favor, insira um nome para o Personagem')
        } else {
            stats.nome = validaNome
            btn1.removeEventListener('click',chamaCompraP)
            btn2.removeEventListener('click',chamaAleat)
            randomSkill()
        }        
    }
    
}

function restart(){ //REINICIA O JOGO APÓS GAME-OVER
    btn1.removeEventListener('click',restart)
    body.removeChild(secStatus)
    start()
}

function compraPonto(){ //COMPRA DE PONTOS
    //VARIÁVEIS    
    intUser.removeChild(btn2)
    
    txt.innerHTML = `<h2>Compra de Pontos de Atributos</h2>`
    txt.innerHTML += `<p>Você possui 14 pontos com os quais poderá comprar valores para os 
        atributos HABILIDADE, ENERGIA e SORTE.</p>`  
    txt.innerHTML += `<p>Seu índice de HABILIDADE reflete a sua capacidade como espadachim 
        e domínio geral das técnicas de luta. Quanto mais alto, melhor.</p>`
    txt.innerHTML += `<p>Seu índice de ENERGIA reflete sua constituição física global, sua 
        determinação de sobreviver, força de vontade e aptidão geral. Quanto mais alto seu 
        índice de ENERGIA, mais tempo você será capaz de sobreviver.</p>`
    txt.innerHTML += `<p>Seu índice de SORTE indica o quanto você é, naturalmente, uma 
        pessoa de sorte. Sorte - e magia - são fatos da vida no reino da fantasia que você 
        está prestes a explorar.</p>`
    txt.innerHTML += `<p>A tabela da esquerda informa o custo para compra dos pontos; a da 
        direita é onde os pontos serão comprados. Ao todo serão comprados 4 pontos: 1 para 
        HABILIDADE, 2 para ENERGIA e 1 para SORTE:</p>`

    //TABELAS
    let divL = document.createElement('div')
    let divR = document.createElement('div')
    txt.appendChild(divL)
    txt.appendChild(divR)

    txt.style.height = '600px'
    divL.style.float = 'left'
    divR.style.float = 'left'
    divR.style.marginLeft = '10px'

    //Tabela de Preços
    let tabPrecoPontos = document.createElement('table')
    let cabTabPrecoPontos = document.createElement('thead')
    let corpoTabPrecoPontos = document.createElement('tbody')
    tabPrecoPontos.appendChild(cabTabPrecoPontos)
    tabPrecoPontos.appendChild(corpoTabPrecoPontos)
    divL.appendChild(tabPrecoPontos)
        cabTabPrecoPontos.innerHTML = '<th>Valor</th><th>Custo</th>'
        corpoTabPrecoPontos.innerHTML = `<tr><td>1</td><td>0</td></tr>
            <tr><td>2</td><td>1</td></tr>
            <tr><td>3</td><td>2</td></tr>
            <tr><td>4</td><td>3</td></tr>
            <tr><td>5</td><td>5</td></tr>
            <tr><td>6</td><td>7</td></tr>`
    
    //Tabela de Compra
    let tabCompraPontos = document.createElement('table')
    let cabTabCompra = document.createElement('thead')
    let corpoTabCompra = document.createElement('tbody')
    tabCompraPontos.appendChild(cabTabCompra)
    tabCompraPontos.appendChild(corpoTabCompra)    
    divR.appendChild(tabCompraPontos)
    tabCompraPontos.style.width = '400px'    
        cabTabCompra.innerHTML = `<th>Atributo</th><th>Compra</th><th>Total</th><th>Custo`
        corpoTabCompra.innerHTML = `<tr><td>Habilidade</td>
            <td><input type="number" name="" value="1" id="txtHab" min="1" max="6" onchange="custoCompra()"> + 6</td>
            <td id="lblHabTot">7</td><td id="lblHabCusto">0</td></tr>        

            <tr><td>Energia</td>
            <td><input type="number" name="" value="1" id="txtEnerg1" min="1" max="6" onchange="custoCompra()"> + 
            <input type="number" name="" value="1" id="txtEnerg2" min="1" max="6" onchange="custoCompra()"> + 12</td>
            <td id="lblEnergTot">14</td><td id="lblEnergCusto">0</td></tr>            
            
            <tr><td>Sorte</td><td>
            <input type="number" name="" value="1" id="txtSor" min="1" max="6" onchange="custoCompra()"> + 6</td>
            <td id="lblSorTot">7</td><td id="lblSorCusto">0</td></tr>`

    //Pontos restantes
    let divPontos = document.createElement('div')
    divPontos.id = 'divPontos'
    divPontos.innerHTML = `Pontos: 0 / 14`
    divPontos.style.textAlign = 'center'
    divR.appendChild(divPontos)

    //BOTÃO
    btn1.innerHTML = 'Confirmar'
    btn1.addEventListener('click',confirmar)

    function confirmar(){
        if(custoTot < 14){
            var res = window.confirm(`Você não gastou todos os seus pontos.
            Clique em OK para confirmar e perder os pontos.
            Clique em Cancelar para retornar.`)
            
            if (res == true){
                window.alert(`${14 - custoTot} pontos foram perdidos.`)
                if (stats.hab == 0) {
                    stats.hab = 7
                    stats.habAtual = 7
                }

                if (stats.energ == 0) {
                    stats.energ = 14
                    stats.energAtual = 14
                }

                if (stats.sor == 0) {
                    stats.sor = 7
                    stats.sorAtual = 7
                }
                
                btn1.removeEventListener('click',confirmar)
                equipInic()
                confirmStats()
            }
        } else {
            btn1.removeEventListener('click',confirmar)
            equipInic()
            confirmStats()
        }
    }
}

function custoCompra(){ //COMPRA DE PONTOS: APOIO
    let custoPontos = [0,1,2,3,5,7]            

    //Atualiza os valores na tabela
    let habTot = Number(txtHab.value) + 6        
    lblHabTot.innerHTML = habTot
    custoHab = custoPontos[txtHab.value - 1]
    lblHabCusto.innerHTML = custoHab
    
    let energTot1 = Number(txtEnerg1.value) + 6
    let energTot2 = Number(txtEnerg2.value) + 6
    lblEnergTot.innerHTML = energTot1 + energTot2
    custoEnerg = custoPontos[txtEnerg1.value - 1] + custoPontos[txtEnerg2.value - 1]
    lblEnergCusto.innerHTML = custoEnerg
        
    let sorTot = Number(txtSor.value) + 6
    lblSorTot.innerHTML = sorTot
    custoSor = custoPontos[txtSor.value - 1]
    lblSorCusto.innerHTML = custoSor
    custoTot = custoHab + custoEnerg + custoSor

    //Atualiza o valor máximo disponível para compra
    txtHab.setAttribute('max',max())
    txtEnerg1.setAttribute('max',max())
    txtEnerg2.setAttribute('max',max())
    txtSor.setAttribute('max',max())

    function max(){
        if(custoTot < 14){
            return 6
        } else {
            return 15 - custoTot
        }
    }
    
    //Exibe os pontos gastos
    divPontos.innerHTML = `Pontos: ${custoTot} / 14`

    //Atualiza os status com os valores comprados
    stats.hab = habTot
    stats.energ = energTot1 + energTot2
    stats.sor = sorTot
    stats.habAtual = stats.hab
    stats.energAtual = stats.energ
    stats.sorAtual = stats.sor
}

function randomSkill(){ //PONTOS ALEATÓRIOS
    hab = Math.random() * (7 - 1) + 1
    stats.hab = parseInt(hab) + 6
    energ = (Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1)
    stats.energ = parseInt(energ) + 12
    sor = Math.random() * (7 - 1) + 1
    stats.sor = parseInt(sor) + 6

    stats.habAtual = stats.hab
    stats.energAtual = stats.energ
    stats.sorAtual = stats.sor

    txt.innerHTML = `<p>Você recebeu os seguintes atributos:</p>`
    txt.innerHTML += `<p>Habilidade: ${stats.hab}<br>Energia: ${stats.energ}<br>Sorte: ${stats.sor}</p>`

    intUser.removeChild(btn2)
    btn1.innerHTML = 'OK'
    btn1.addEventListener('click',confirmStats)
}

function confirmStats(){//Confirmando dados    
    window.alert(`${stats.nome} foi criado com sucesso!\n
    Atributos:
    Habilidade: ${stats.hab}
    Energia: ${stats.energ}
    Sorte: ${stats.sor}`)

    txt.style.height = 'auto'
    equipInic()
}

function equipInic(){ //CRIAR: EQUIPAMENTO INICIAL    
    //BOTÃO 
    btn1.innerHTML = 'Confirmar'
    btn1.removeEventListener('click',confirmStats)
    btn1.addEventListener('click',pocConfirm)      
        
    function pocConfirm(){
        let pocao = document.getElementsByName('Pocao')
        
        if(pocao[0].checked){
            window.alert('Você obteve a Poção da Habilidade!')
            adcItem('Poção da Habilidade',1)
        } else if(pocao[1].checked){
            window.alert('Você obteve a Poção de Força!')
            adcItem('Poção de Força',1)
        } else {
            window.alert('Você obteve a Poção da Fortuna!')
            adcItem('Poção da Fortuna',1)
        }
        
        adcItem('Provisões',10)
        btn1.removeEventListener('click',pocConfirm)
        dicaIntro()
    }

    //TEXTO
    txt.innerHTML = `<h2>Equipamentos</h2>
    <p>Você está armado com uma espada e vestido com uma armadura de 
    couro. Você tem uma mochila para guardar suas Provisões e quaisquer tesouros que 
    possa vir a encontrar.</p>

    <p>Você carrega Provisões suficientes para dez refeições. Você pode descansar e comer a 
    qualquer momento, exceto quando estiver empenhado numa batalha. Comer uma refeição 
    repõe 4 pontos de ENERGIA.</p>
    
    <p>Além disso, você pode levar uma garrafa de uma poção mágica, que o ajudará na sua 
    missão. Você poderá escolher qualquer uma das seguintes poções:</p>`
        
        //TABELA DE POÇÕES
        txt.innerHTML += `<p><table id="tabPocao">
            <tr><td class="col1"><input type="radio" name="Pocao" id="pHab" checked>
            <label for="pHab"><strong>Poção da Habilidade</strong></label></td>
            <td class="col2">Repõe os pontos de HABILIDADE</td></tr>
            <tr><td class="col1"><input type="radio" name="Pocao" id="pEnerg">
            <label for="pEnerg"><strong>Poção de Força</strong></label></td>
            <td class="col2">Repõe os pontos de ENERGIA</td></tr>
            <tr><td class="col1"><input type="radio" name="Pocao" id="pSor">
            <label for="pSor"><strong>Poção da Fortuna</strong></td></label>
            <td class="col2">Repõe os pontos de SORTE<br>Acrescenta 1 ao valor de SORTE Total</td></tr>
            </table></p>`
    
    //Continuação do Texto
    txt.innerHTML += `<p>Estas poções podem ser tomadas a qualquer momento durante a sua 
        aventura (a não ser quando você estiver empenhado em uma Batalha). Tomar uma dose 
        de poção fará com que seu índice de HABILIDADE, ENERGIA ou SORTE retorne ao nível 
        Inicial.</p>`
}

function dicaIntro(){ //DICA INTRODUTÓRIA
    //BOTÃO
    btn1.innerHTML = 'Vamos lá!'
    btn1.addEventListener('click',inicGame)

    //TEXTO
    txt.innerHTML = `<p>Existe um caminho seguro para atravessar a Floresta de Darkwood, e 
    você precisará fazer várias tentativas até encontrá-lo.</p>

    <p>Tome nota e faça um mapa na medida em que vai explorando. Esse 
    mapa será inestimável em aventuras futuras e permitirá que você progrida 
    rapidamente através de áreas inexploradas.</p>

    <p>Nem todas as áreas contêm tesouros. Muitas guardam apenas 
    armadilhas e criaturas com as quais você certamente entrará em conflito.</p>

    <p>Há muitas passagens que resultam em buscas infrutíferas, e, 
    embora você de fato possa conseguir avançar até o seu destino final, não é de 
    modo nenhum garantido que encontrará o que está procurando.</p>

    <p>O único caminho seguro envolve um mínimo de riscos, e qualquer 
    jogador, por mais que os índices iniciais sejam fracos, deverá ser capaz de chegar 
    ao destino com bastante facilidade.</p>



    <p>Que a sorte dos deuses o acompanhe na aventura à sua frente!</p>`
    
} 

function inicGame(){ //INICIANDO O JOGO
    cxStatus()

    //BOTÃO
    btn1.innerHTML = 'Avançar'
    btn1.removeEventListener('click',inicGame)
    btn1.addEventListener('click',avancar1)
    
    //TEXTO
    txt.innerHTML = `<p>Você é um aventureiro, um espadachim de aluguel, e tem estado 
        perambulando pelas áreas fronteiriças do norte de seu reino. Tendo sempre desprezado a 
        monotonia da vida de aldeia, você agora vagueia pela região em busca de riqueza e 
        perigo. Apesar das longas caminhadas e da dureza da vida ao ar livre, você está 
        satisfeito com seu destino incerto. Não há nada no mundo que possa lhe inspirar medo, 
        uma vez que você é um guerreiro habilidoso, com muita prática na arte de eliminar 
        homens e animais cruéis com sua espada de confiança. Nem uma só vez, durante os 
        últimos dez dias em que esteve viajando nas áreas fronteiriças do norte, você avistou 
        alguma outra pessoa. Isso não o preocupa em nada, uma vez que você fica feliz na 
        companhia de si mesmo e aprecia os dias lentos e ensolarados, caçando, comendo e 
        dormindo.</p>
        
        <p>É noite e, tendo degustado um jantar de coelho assado no espeto numa fogueira 
        ao ar livre, você se instala para dormir embaixo de seu cobertor de pele de 
        carneiro. Há uma lua cheia, e a luz cintila na lâmina de sua espada de lâmina 
        larga, cravada no chão a seu lado. Você fica olhando para ela, imaginando quando 
        será a próxima vez em que terá que limpar o sangue de alguma criatura abjeta de 
        sua lâmina afiada. Estas são terras estranhas, habitadas por feras repulsivas e 
        fantásticas - Goblins, Trolls e até mesmo Dragões.</p>
        
        <p>Enquanto a chama do fogo de seu acampamento vai morrendo aos poucos, você começa 
        a cair no sono, e imagens de Trolls de rostos esverdeados que gritam cruzam 
        velozmente sua mente. De repente, nas moitas à sua esquerda, você ouve um estalo 
        alto de um galho que se quebra sob um pé desajeitado. Você salta de pé e pega sua 
        espada no chão. Fica de pé, imóvel, mas alerta, pronto para investir contra o seu 
        adversário ainda fora de vista. Em seguida, você ouve um gemido, seguido pelo 
        ruído seco de um corpo caindo ao chão. Será uma armadilha? Lentamente, você caminha 
        na direção da moita de onde o barulho está vindo e cuidadosamente afasta os galhos. 
        Ao olhar para baixo, você vê um velhinho bem pequeno com uma grande barba cerrada, 
        seu rosto contorcido em dores. Você se agacha para retirar o elmo de ferro que 
        cobre sua cabeça já meio calva e repara nas duas setas de besta que estão cravadas 
        no seu tronco gorducho e protegido por uma cota de malha de ferro. Erguendo-o, você 
        o carrega até perto do fogo e aviva as brasas já quase apagadas. Depois de cobri-lo 
        com o cobertor de pele de carneiro, você consegue que o velho beba um pouco de 
        água. Ele tosse e geme. Senta-se então rigidamente, os olhos fixos à sua frente, e 
        começa a gritar.</p>
        
        <p>- Vou pegá-los! <strong>Vou pegá-los!</strong> Não se preocupe, Gillibran, Perna 
        Grande está vindo para lhe trazer o martelo. Ah, sim, sem dúvida que estou. Ah Sim...</p>
    `
    
    function avancar1(){        
        txt.innerHTML = `<p>O anão, cujo nome você presume que seja Perna Grande, está 
        obviamente delirando por causa dos dardos de ponta envenenada alojados em seu 
        estômago. Você fica observando, enquanto ele desaba novamente no chão, depois 
        sussurra o nome dele em seu ouvido. Seus olhos o encaram fixamente, e ele começa de 
        novo a gritar.</p>
        
        <p>- Emboscada! Emboscada! Cuidado! Aaaaaah! O martelo! Leve o martelo a Gillibran! 
        Salve os anões!</p>
        
        <p>Seus olhos ficam meio fechados, e a dor parece diminuir um pouco. À medida que o 
        delírio vai se acalmando, ele fala com você de novo num murmúrio baixo.</p>
        
        <p>- Ajude-nos, amigo... leve o martelo para Gillibran... somente o martelo unirá o 
        nosso povo contra os Trolls... Nós estávamos a caminho de Darkwood em busca do 
        martelo... emboscados pelo povo pequeno... outros mortos... o mapa no meu alforje o 
        levará à casa de Yaztromo, o mago mais poderoso dessa região... ele tem grandes 
        mágicas para vender que o protegerão das criaturas de Darkwood. Leve meu ouro... eu 
        imploro a você que encontre o martelo e o leve a Gillibran, meu Senhor de 
        Stonebridge... você será recompensado...</p>
        
        <p>Perna Grande abre a boca para começar outra frase, mas não emite nada, a não ser 
        seu último suspiro antes de morrer. Você senta e analisa as palavras de Perna 
        Grande. Quem é Gillibran? Quem é Yaztromo? Por que tanto alvoroço por causa do 
        martelo dos anões? Você estende a mão até o corpo inerte de Perna Grande e retira o 
        alforje do cinto de couro em volta da cintura. No interior dele, você encontra 30 
        Peças de Ouro e um mapa.</p>

        `
        
        btn1.removeEventListener('click',avancar1)
        btn1.addEventListener('click',avancar2)        
    }

    function avancar2(){                
        atualizaStats('ouro',30)

        txt.innerHTML = `<p>Com as moedas tilintando na sua mão, você fica pensando nas 
        possíveis recompensas que podem estar esperando por você somente por trazer de 
        volta um martelo a uma aldeia de anões. Você resolve tentar encontrar o martelo 
        na Floresta de Darkwood. Já se passaram algumas semanas desde sua última boa 
        batalha e, ainda mais importante, você provavelmente será bem pago por essa.</p>

        <p>Tendo se decidido, você se instala para dormir, depois de pegar a pele de 
        carneiro de volta do pobre Perna Grande. De manhã, você enterra o velho anão e 
        reúne suas posses. Você examina o mapa, olha para o sol e estabelece sua 
        posição. Assobiando alegremente, você parte na direção do sul em boa 
        velocidade, ansioso para encontrar este homem Yaztromo e ver o que ele tem para 
        oferecer.</p>`

        btn1.removeEventListener('click',avancar2)
        btn1.addEventListener('click',ev001)
    }
}

function cxStatus(){ //GERA A CAIXA DE STATUS DO PERSONAGEM
    let altSecStatus = '170px'
    let largSecStatus = '220px'

    body.insertBefore(secStatus,secPrinc)
    secStatus.style.width = '220px'
    secStatus.style.height = altSecStatus
    secStatus.innerHTML = `<p><strong>${stats.nome}</strong></p>`
    secStatus.style.textAlign = 'center'
    let divCxStats = document.createElement('div')
    let divMenu = document.createElement('div')
    let invent = document.createElement('div')
    
    divCxStats.style.float = 'left'
    divMenu.style.float = 'left'
    divMenu.style.marginLeft = '10px'

    secStatus.appendChild(divCxStats)
    secStatus.appendChild(divMenu)

    divCxStats.innerHTML += `<table id="tabCxStats">
        <tr><td class="colAtrib">Habilidade</td><td>${stats.habAtual} / ${stats.hab}</td></tr>
        <tr><td class="colAtrib">Energia</td><td>${stats.energAtual} / ${stats.energ}</td></tr>
        <tr><td class="colAtrib">Sorte</td><td>${stats.sorAtual} / ${stats.sor}</td></tr>
        <tr><td class="colAtrib">Ouro</td><td>${stats.ouro}</td></tr>
        `
    
    //TABELA
    var tabEquip = document.createElement('table')
    let cabTabEquip = document.createElement('thead')
    let corpoTabEquip = document.createElement('tbody')
    
    tabEquip.appendChild(cabTabEquip)
    tabEquip.appendChild(corpoTabEquip)
    //cabTabEquip.innerHTML = `<th>Item</th><th>Qnt</th><th></th>`

    let thCod = []
    var trCod = []
    var tdCod = []
    
    //BOTÃO
    let btnEquip = document.createElement('button')
    btnEquip.innerHTML = 'Equip'
    btnEquip.title = 'Abre/Fecha o inventário'
    btnEquip.setAttribute('id','btnEquip')
    divMenu.appendChild(btnEquip)
    let lblBAtk = document.createElement('p')
    lblBAtk.innerHTML = `Atk: ${stats.bonusAtk}`
    divMenu.appendChild(lblBAtk)
    
    let cmdBnt = 0
    btnEquip.addEventListener('click',abreInvent)
    

    function abreInvent(){
        if(cmdBnt == 0){
            var listEquip = equips.nome.length

            invent.style.float = 'left'
            invent.style.borderStyle = 'inset'
            invent.style.marginTop = '10px'
            invent.style.width = '300px'
            invent.style.background = 'white'
            secStatus.style.width = '305px'
            
            secStatus.appendChild(invent)
            invent.appendChild(tabEquip)

            thCod = []
            trCod = []
            tdCod = []
            btnCod = []

            let possuiItemUsavel = false
            for(let i=1;i <= listEquip;i++){
                if(usarEquip(equips.nome[i-1],true) == true){
                    possuiItemUsavel = true
                }
            }

            let colsTab = 2
            if(possuiItemUsavel == true){
                colsTab = 3
            }

            for(let i=0; i < colsTab;i++){
                thCod.push(document.createElement('th'))
                cabTabEquip.appendChild(thCod[i])
                if(i==0){
                    thCod[0].innerHTML = 'Item'
                }else if(i==1){
                    thCod[1].innerHTML = 'Qnt'
                }else{
                    thCod[2].innerHTML = 'Uso'
                }
            }

            for(let i=1; i <= listEquip;i++){                    
                trCod.push(document.createElement('tr'))
                corpoTabEquip.appendChild(trCod[trCod.length - 1])
                
                for(let j=1;j <= colsTab;j++){
                    tdCod.push(document.createElement('td'))
                    corpoTabEquip.appendChild(tdCod[tdCod.length - 1])
                    
                    if (j == 1){
                        tdCod[tdCod.length - 1].innerHTML = `${equips.nome[i-1]}`
                        tdCod[tdCod.length - 1].style.textAlign = 'left'                       
                    } else if (j == 2){
                        tdCod[tdCod.length - 1].innerHTML = `${equips.quant[i-1]}`
                    } else {
                        if(usarEquip(equips.nome[i-1],true) == true){
                            btnCod[i-1] = document.createElement('button')
                            btnCod[i-1].innerHTML = 'Usar'
                            btnCod[i-1].title = usarEquip(equips.nome[i-1],true,true)
                            btnCod[i-1].addEventListener('click',function(){usarEquip(equips.nome[i-1],false)})
                            tdCod[tdCod.length - 1].appendChild(btnCod[i-1])                            
                        }
                    }
                }
            }

            tabEquip.style.width = '300px'
            secStatus.style.height = (185 + tabEquip.offsetHeight) + 'px'
            
            cmdBnt = 1
        }else{//Fecha inventário
            
            for(let i=1;i <= tdCod.length;i++){                
                corpoTabEquip.removeChild(tdCod[tdCod.length - i])
            }
            
            for(let i=1;i<=trCod.length;i++){
                corpoTabEquip.removeChild(trCod[trCod.length - i])
            }

            for(let i=1;i <= thCod.length;i++){
                cabTabEquip.removeChild(thCod[thCod.length - i])
            }
            
            invent.removeChild(tabEquip)            
            secStatus.removeChild(invent)
            cmdBnt = 0       
            secStatus.style.height = altSecStatus
            secStatus.style.width = largSecStatus
        }
    }
}

function atualizaStats(atrib,val){ //ALTERA ATRIBUTOS E ATUALIZA A CAIXA DE STATUS
    if(atrib == 'hab'){
        stats.habAtual += val
        if(stats.habAtual > stats.hab){
            stats.habAtual = stats.hab
        }
    }else if(atrib == 'energ'){
        stats.energAtual += val
        if(stats.energAtual > stats.energ){
            stats.energAtual = stats.energ
        }
    }else if(atrib == 'sor'){
        stats.sorAtual += val
        if(stats.sorAtual > stats.sor){
            stats.sorAtual = stats.sor
        }
    }else if(atrib == 'ouro'){
        stats.ouro += val
    }else if(atrib == 'atk'){
        stats.bonusAtk += val
    }

    if(stats.habAtual < 0){
        stats.habAtual = 0
    }

    if(stats.energAtual < 0){
        stats.energAtual = 0
    }

    if(stats.sorAtual < 0){
        stats.sorAtual = 0
    }

    if(stats.ouro < 0){
        stats.ouro = 0
    }

    body.removeChild(secStatus)
    cxStatus()
}

function usarEquip(nomeItemUsado,menu,tooltip){ //GERA O EFEITO DO ITEM
    //Criar lista de todos os itens do Jogo
    let itensUsaveis = [
        'Poção da Habilidade', //0
        'Poção de Força', //1
        'Poção da Fortuna', //2
        'Provisões', //3
        'Poção de Cura' //4
    ]

    let indiceEquip = equips.nome.indexOf(nomeItemUsado)
    let codItem = itensUsaveis.indexOf(nomeItemUsado)

    let tooltips = [
        //Poção da Habilidade
        'Restaura o valor de HABILIDADE para o máximo',
        //Poção de Força
        'Restaura o valor de ENERGIA para o máximo',
        //Poção da Fortuna
        'Aumenta o valor máximo de SORTE em 1 ponto e restaura a SORTE para o máximo',
        //Provisões
        'Recupera 4 pontos de ENERGIA',
        //Poção de Cura
        'Recupara 5 pontos de ENERGIA'
    ]
    
    if(menu == true){
        if(tooltip == true){
            return tooltips[codItem]
        }else{
            if(itensUsaveis.indexOf(nomeItemUsado) == -1){
                return false
            }else{
                return true
            }
        }
    }else{
        let usouItem = true
        switch (codItem){
            case 0: //Poção da Habilidade
                if(stats.habAtual == stats.hab){
                    window.alert('Seu valor de HABILIDADE já está no máximo!')
                    usouItem = false
                }else{
                    window.alert(`Você bebeu a Poção da Habilidade e recuperou ${stats.hab - stats.habAtual} pontos de HABILIDADE!`)
                    stats.habAtual = stats.hab
                }
                break
            case 1: //Poção de Força
                if(stats.energAtual == stats.energ){
                    window.alert('Seu valor de ENERGIA já está no máximo!')
                    usouItem = false
                }else{
                    window.alert(`Você bebeu a Poção de Força e recuperou ${stats.energ - stats.energAtual} pontos de ENERGIA!`)
                    stats.energAtual = stats.energ
                }
                break
            case 2: //Poção da Fortuna
                if(stats.sorAtual == stats.sor){
                    let resp = window.confirm('Seu valor de SORTE já está no máximo!\nDeseja beber a Poção da Fortuna mesmo assim?')
                    if(resp == true){
                        bebePocFortuna()
                    }else{
                        usouItem = false
                    }
                }else{
                    bebePocFortuna()
                }

                function bebePocFortuna(){
                    window.alert(`Você bebeu a Poção da Fortuna e recuperou ${stats.sor - stats.sorAtual} pontos de SORTE! E mais: seu valor máximo de SORTE aumentou em 1 ponto!!`)
                    stats.sor++
                    stats.sorAtual = stats.sor
                }
                break
            case 3: //Provisões
                if(stats.energAtual == stats.energ){
                    window.alert('Seu valor de ENERGIA já está no máximo!')
                    usouItem = false
                }else{
                    let cura = 0
                    if(stats.energAtual + 4 > stats.energ){
                        cura = stats.energ - stats.energAtual
                        stats.energAtual += cura
                    }else{
                        cura = 4
                        stats.energAtual += cura
                    }
                    window.alert(`Você descansou e se alimentou de uma de suas Provisões e recuperou ${cura} pontos de ENERGIA!`)
                }
                break
            case 4: //Poção de Cura
                if(stats.energAtual == stats.energ){
                    window.alert('Seu valor de ENERGIA já está no máximo!')
                    usouItem = false
                }else{
                    let cura = 0
                    if(stats.energAtual + 5 > stats.energ){
                        cura = stats.energ - stats.energAtual
                        stats.energAtual += cura
                    }else{
                        cura = 5
                        stats.energAtual += cura
                    }
                    window.alert(`Você bebeu a Poção de Cura e recuperou ${cura} pontos de ENERGIA!`)
                }
                break
        }

        //Remove item do inventário
        if(usouItem == true){
            equips.quant[indiceEquip]--
            if(equips.quant[indiceEquip] < 1){
                equips.nome.splice(indiceEquip,1)
                equips.quant.splice(indiceEquip,1)
            }
        }
        atualizaStats()
    }
}

function adcItem(item,quant){
    if(equips.nome.indexOf(item) == -1){
        equips.nome.push(item)
        equips.quant.push(quant)
    }else{
        equips.quant[equips.nome.indexOf(item)] += quant
    }
}

function removerItem(quantRemove,chamaEv){ //REMOVE ITEM DO INVENTÁRIO
    let chkPagaItem = []
    let lblPagaItem = []
    var quantEquip = equips.nome.length

    for(let i=0;i < quantEquip;i++){
        chkPagaItem.push(document.createElement('input'))
        chkPagaItem[i].setAttribute('type','checkbox')
        chkPagaItem[i].setAttribute('id','chk'+i)
        txt.appendChild(chkPagaItem[i])            
        lblPagaItem.push(document.createElement('label'))
        lblPagaItem[i].setAttribute('for','chk'+i)
        lblPagaItem[i].setAttribute('id','lbl'+i)
        lblPagaItem[i].textContent = equips.nome[i]
        txt.appendChild(lblPagaItem[i])
        txt.innerHTML += `<br>`            
    }
    
    btn1.innerHTML = 'Confirmar'
    btn1.addEventListener('click',confirmar)

    function confirmar(){
        let quantChkSelec = 0
        let itemRemov = []
        for (let i=quantEquip-1;i >= 0;i--){
            chkPagaItem[i] = document.getElementById('chk'+i)
            lblPagaItem[i] = document.getElementById('lbl'+i)
            
            if (chkPagaItem[i].checked == true){
                quantChkSelec++
            }
        }
        
        if(quantChkSelec == quantRemove) {
            for (let i=quantEquip-1;i >= 0;i--){
                if (chkPagaItem[i].checked == true){
                    itemRemov.unshift(equips.nome[i])
                    equips.nome.splice(i,1)
                    equips.quant.splice(i,1)
                }                
                txt.removeChild(chkPagaItem[i])
                txt.removeChild(lblPagaItem[i])
            }
            
            atualizaStats()
            btn1.removeEventListener('click',confirmar)

            switch(chamaEv){
                case 12:
                    ev012(1,itemRemov)
                    break
                case 14:
                    ev014(1,itemRemov)
                    break
                case 218:
                    ev218(1,itemRemov)
                    break
                case 242:
                    ev242(1,itemRemov)
                    break
                case 271:
                    ev271(1,itemRemov)
                    break
                case 32:
                    ev032(1,itemRemov)
                    break
            }
            
        } else {
            if(quantRemove > 1){
                window.alert(`Você deve selecionar ${quantRemove} itens de seu inventário`)
            } else{
                window.alert(`Você deve selecionar 1 item de seu inventário`)
            }
        }
    }
}

function batalha(nomeInimigo,habInimigo,energInimigo,chamaEv,fuga,turnoFuga){ //SISTEMA DE BATALHAS
    //Bloqueia o uso de equipamentos
    atualizaStats()
    btnEquip.disabled = true    
    
    //Controle de turnos
    var turnos = 1
    txt.innerHTML = `<p><strong>Turno</strong>: <span id="spnTurnos">${turnos}</span></p>`

    //Controle de inimigos
    let time = nomeInimigo.length    
    let inimigosDerrotados = 0
    let optAlvo = []
    let lblAlvo = []
    let divBattle = []
    var progress = [] 
    let acertoMob = 0
    
    if(time > 1){

    }else{
        time = 1
    }

    //Stats do inimigo
    for(let i = 0;i <= time-1;i++){
        divBattle[i] = document.createElement('div')
        divBattle[i].style.padding = '5px'
        txt.appendChild(divBattle[i])

        optAlvo[i] = document.createElement('input')
        optAlvo[i].setAttribute('name','optAlvo')
        optAlvo[i].setAttribute('id','optAlvo'+i)
        optAlvo[i].setAttribute('type','radio')
        optAlvo[0].checked = true
        lblAlvo[i] = document.createElement('label')
        lblAlvo[i].setAttribute('for','optAlvo'+i)
        lblAlvo[i].innerHTML = `${nomeInimigo[i]}<br>`
        divBattle[i].appendChild(optAlvo[i])
        divBattle[i].appendChild(lblAlvo[i])
        
        progress.push(document.createElement('progress'))
        progress[i].setAttribute('max',energInimigo[i])
        progress[i].setAttribute('value',energInimigo[i])
        divBattle[i].appendChild(progress[i])
        progress[i].setAttribute('lable','HP')        
    }    
    
    //BOTÕES
    btn1.addEventListener('click',ataque)
    btn1.innerHTML = 'Atacar'
    
    btn2.innerHTML = 'Fugir'
    btn2.addEventListener('click',fugir)
    intUser.appendChild(btn2)

    if (fuga != true || turnoFuga > 0){
        btn2.disabled = true
    }

    function ataque(){
        //Controle de turnos
        turnos++
        spnTurnos.innerHTML = `${turnos}`
        if (turnos - 1 == turnoFuga){
            btn2.disabled = false
        }

        //ROLAGEM DE ATAQUE
        let atkMob = []
        let atkPlayer = []        
        for(let i = 0; i <= time-1;i++){
            let rolAtkMob = (Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1)
            atkMob[i] = parseInt(rolAtkMob) + habInimigo[i]
            let rolAtkPlayer = (Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1)
            atkPlayer[i] = parseInt(rolAtkPlayer) + stats.habAtual + stats.bonusAtk

            if (atkPlayer[i] > atkMob[i]){//Player atinge o monstro
                if (optAlvo[i].checked == true){
                    let res = window.confirm(`Você feriu ${nomeInimigo[i]} causando 2 pontos de dano!\nPressione 'OK' para tentar causar dano extra utilizando seus pontos de SORTE ou 'Cancelar' para manter a rolagem atual`)
        
                    if (res == true) {
                        let rolSorte = testeSorte()
                        if (rolSorte == true){
                            window.alert(`Você causou dano crítico causando 2 pontos de dano extra! ${nomeInimigo[i]} sofre 4 pontos de dano no total!`)
                            energInimigo[i] -= 4
                            progress[i].setAttribute('value',energInimigo[i])
                        } else {
                            window.alert(`Seu golpe não foi muito efetivo... ${nomeInimigo[i]} sofre apenas 1 ponto de dano.`)
                            energInimigo[i] -= 1
                            progress[i].setAttribute('value',energInimigo[i])
                        }
                    } else {
                        energInimigo[i] -= 2
                        progress[i].setAttribute('value',energInimigo[i])    
                    }    
                }else if(energInimigo[i]>0){
                    window.alert(`Você escapou dos golpes de ${nomeInimigo[i]}`)
                }
            } else if (atkMob[i] > atkPlayer[i] && energInimigo[i] > 0){//Player é atingido pelo monstro. energInimigo usado nos casos de combates múltiplos
                let res = false

                if(equips.nome.indexOf('Escudo do Imperador') != -1){
                    res = window.confirm(`Você foi ferido por ${nomeInimigo[i]}, mas graças ao seu Escudo do Imperador, sofre apenas 1 ponto de dano!\nPressione 'OK' para tentar reduzir o dano sofrido utilizando seus pontos de SORTE ou 'Cancelar' para manter a rolagem atual`)
                    acertoMob++
                    var escudo = true
                }else{
                    res = window.confirm(`Você foi ferido por ${nomeInimigo[i]} e sofre 2 pontos de dano!\nPressione 'OK' para tentar reduzir o dano sofrido utilizando seus pontos de SORTE ou 'Cancelar' para manter a rolagem atual`)
                    acertoMob++
                }
                    
                if (res == true){
                    let rolSorte = testeSorte()
                    if (rolSorte == true){
                        if(escudo == true){
                            window.alert(`Por sorte o escudo impediu o ferimento!`)
                        }else{
                            window.alert(`Por sorte o ferimento não foi tão grave. Você recebe apenas 1 ponto de dano!`)
                            stats.energAtual -= 1
                        }
                    } else {
                        if(escudo == true){
                            window.alert(`A sorte não estava ao seu lado e você sofre um dano crítico... Você perde 2 pontos de ENERGIA...`)
                            stats.energAtual -= 2
                        }else{
                            window.alert(`A sorte não estava ao seu lado e você sofre um dano crítico... Você perde 3 pontos de ENERGIA...`)
                            stats.energAtual -= 3
                        }
                    }
                } else {                    
                    if(escudo == true){
                        stats.energAtual -= 1
                    }else{
                        stats.energAtual -= 2
                    }
                }
            } else if (energInimigo[i] > 0){//energInimigo usado nos casos de combates múltiplos
                window.alert(`Você e ${nomeInimigo[i]} escaparam dos golpes um do outro! Ninguém sofre dano!`)
            }

            //Combate com Demônio de Fogo (ev107)
            if(chamaEv == 107){
                let chicote = rolaD6()
                if(chicote < 3){
                    let res = window.confirm(`${nomeInimigo} te acerta com um chicote!\nVocê sofre 1 ponto de dano!\nPressione 'OK' para usar a SORTE e tentar evitar o ferimento ou 'Cancelar' para manter o dano.`)
                    if(res == true){
                        let rolSorte = testeSorte()
                        if(rolSorte == true){
                            window.alert('Você evitou o chicote!')
                        }else{
                            window.alert('O chicote te acertou em cheio e você sofre 2 pontos de dano!')
                            stats.energAtual -= 2
                        }
                    }else{
                        stats.energAtual--
                    }
                    //atualizarStatus() Observar possíveis bugs. Se tudo OK, remover código
                }else{
                    window.alert('Você se esquiva do chicote!')
                }
            }

            //Combate com o Carniçal (ev227): Paralisia
            if(chamaEv == 227 && acertoMob == 4){
                window.alert('VOCÊ FOI PARALISADO!!')
                ev002()
            }
            
            atualizaStats()
            btnEquip.disabled = true
        }
        
        //--- RESULTADOS DO COMBATE ---
        //Player perde
        if (stats.energAtual <= 0){
            btn1.innerHTML = 'Reiniciar Jogo'
            btn1.removeEventListener('click',ataque)
            btn1.addEventListener('click',restart)
          
            btn2.removeEventListener('click',fugir)
            intUser.removeChild(btn2)        

            txt.innerHTML = `<p>Infelizmente você não resiste aos ferimentos e morre...</p>`
            txt.innerHTML += `<h2>FIM DE JOGO</h2>`

            stats.energAtual = 0
            atualizaStats()
        }
        
        //Monstro perde
        for(let i=0;i<=time-1;i++){
            if(energInimigo[i] <= 0 && optAlvo[i].disabled == false){
                window.alert(`${nomeInimigo[i]} foi derrotado.`)
                optAlvo[i].disabled = true
                inimigosDerrotados++
                for(let j=time-1;j>=0;j--){
                    if(optAlvo[j].disabled == false){
                        optAlvo[j].checked = true
                    }
                }
            }
        }

        //Fim do Combate
        if (inimigosDerrotados == time){
            btn1.removeEventListener('click',ataque)
            btn2.removeEventListener('click',fugir)
            intUser.removeChild(btn2)
            btnEquip.disabled = false
            btn2.disabled = false

            vitoria++

            //Modificadores temporários
            if(bonusAtkTemp.pocHabArmas[0] > 0){
                bonusAtkTemp.pocHabArmas[0]--
                if(bonusAtkTemp.pocHabArmas[0] == 0){
                    atualizaStats('atk',bonusAtkTemp.pocHabArmas[1]*-1)
                }
            }

            if(bonusAtkTemp.anelLentidao[0] > 0){
                bonusAtkTemp.anelLentidao[0]--
                if(bonusAtkTemp.anelLentidao[0] == 0){
                    atualizaStats('atk',bonusAtkTemp.anelLentidao[1]*-1)
                    window.alert('O Anel da Lentidão se rompeu!\nVocê não está mais sob o efeito do anel.')
                    let indAnel = equips.nome.indexOf('Anel da Lentidão')
                    equips.nome.splice(indAnel,1)
                    equips.quant.splice(indAnel,1)
                }
            }
            
            //Retorna para o evento
            switch (chamaEv){
                case 7:
                    ev007()
                    break
                case 9:                    
                    ev176()
                    break
                case 15:
                    ev217()
                    break
                case 29:
                    ev029(false)
                    break
                case 43:
                    ev043(false)
                    break
                case 49:
                    ev049()
                    break
                case 71:
                    ev071()
                    break
                case 79:
                    ev079()
                    break
                case 84:
                    ev084(false)
                    break
                case 96:
                    ev096()
                    break
                case 104:
                    ev104()
                    break
                case 107:
                    ev107()
                    break
                case 117:
                    ev117()
                    break
                case 118:
                    ev118()
                    break
                case 123:
                    ev123(false)
                    break
                case 128:
                    ev128()
                    break
                case 153:
                    ev153(false)
                    break
                case 165:
                    ev165()
                    break
                case 167:
                    ev167()
                    break
                case 181:
                    ev181()
                    break
                case 186:
                    ev186()
                    break
                case 193:
                    ev193()
                    break
                case 203:
                    ev203()
                    break
                case 212:
                    ev212(false)
                    break
                case 227:
                    ev227()
                    break
                case 231:
                    ev231(false)
                    break
                case 241:
                    ev241()
                    break
                case 265:
                    ev265()
                    break
                case 276:
                    ev276()
                    break
                case 285:
                    ev285()
                    break
                case 286:
                    ev286()
                    break
                case 290:
                    ev290(false)
                    break
                case 298:
                    ev298()
                    break
                case 303:
                    ev303()
                    break
                case 310:
                    ev310()
                    break
                case 317:
                    ev317(false)
                    break
                case 330:
                    ev330()
                    break
                case 347:
                    ev347()
                    break
                case 352:
                    ev352(false)
                    break
                case 377:
                    ev377(false)
                    break
            }
            
        }  

    }    
    
    function fugir(){
        btn1.removeEventListener('click',ataque)
        btn2.removeEventListener('click',fugir)
        intUser.removeChild(btn2)

        switch (chamaEv){
            case 29:
                ev029(true)
                break
            case 43:
                ev043(true)
                break
            case 84:
                ev084(true)
                break
            case 123:
                ev123(true)
                break
            case 153:
                ev153(true)
                break
            case 212:
                ev212(true)
                break
            case 231:
                ev231(true)
                break
            case 290:
                ev290(true)
                break
            case 317:
                ev317(true)
                break   
            case 352:
                ev352(true)         
                break
            case 377:
                ev377(true)
                break
        }
    }
}

function testeSorte(){ //SISTEMA DE ROLAGEM DA SORTE
    let rolSorte = (Math.random() * (7 - 1) + 1) + (Math.random() * (7 - 1) + 1)
    rolSorte = parseInt(rolSorte)

    if (rolSorte <= stats.sorAtual) {
        stats.sorAtual --
        atualizaStats()
        return true
    } else {
        stats.sorAtual --
        atualizaStats()
        return false
    }    
}

function rolaD6(){ //SIMULA A ROLAGEM DE DADO
    let rolaD6 = Math.random() * (7 - 1) + 1
    return parseInt(rolaD6)
}