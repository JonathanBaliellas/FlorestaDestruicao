let ativaEventos = []

//EVENTOS DO JOGO

//001-009
function ev001(){ //Início; Chamado por ev098???
    //BOTÕES
    btn1.innerHTML = 'Subir as escadas atrás dele'    
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev261()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Desembainhar a espada para atacá-lo'    
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev054()
    }

    //TEXTO
    txt.innerHTML = `
    <p>Sua caminhada até a casa de Yaztromo leva um pouco mais da metade de um dia, e você 
    chega à torre de pedra onde ele habita sujo e com fome. Como a torre fica afastada na 
    periferia de Darkwood, a uns cinqüenta metros de distância da trilha que você estava 
    seguindo, não é fácil encontrá-la. Finalmente, você chega junto à imensa porta de 
    carvalho, de certa forma aliviado por descobrir que de fato a torre existe, e que Perna 
    Grande não estava falando loucuras em seu delírio. Um grande sino de metal e um gongo 
    pendem do arco de pedra. Ao tocar o sino, um calafrio percorre a sua espinha, e você se 
    dá conta de que o som alto invade um silêncio profundo no qual você não tinha reparado 
    antes. Não se ouvem ruídos de animais ou pássaros. Você espera ansiosamente junto à 
    porta e ouve passadas lentas que descem escadas vindas da torre acima. Uma pequena 
    portinhola de madeira se abre, e dois olhos aparecem, examinando você.</p>
    <p>- Bem, quem é você? - pergunta uma voz aborrecida através do orifício.</p>
    <p>Você responde que é um aventureiro em busca do poderoso mago Yaztromo, tendo a intenção de adquirir alguns artigos mágicos dele para combater as criaturas da Floresta de Darkwood.</p>
    <p>- Ah, bem, nesse caso, se você está interessado em comprar algumas mercadorias minhas, é melhor subir. Eu sou Yaztromo.</p>
    <p>Ele então se volta e sobe lentamente os degraus de pedra.</p>    
    `
}

function ev002(){//Chamado por ev227
    btn1.innerHTML = 'Reiniciar Jogo'    
    btn1.addEventListener('click',restart)

    txt.innerHTML = `
    <p>Sua aventura termina aqui, quando sua carne fresca e saborosa está prestes a se tornar um apetitoso festim para o vitorioso Carniçal.</p>
    <h2>FIM DE JOGO</h2>
    `
    
}

function ev003(){//Chamado por ev247
    //BOTÕES
    btn1.innerHTML = 'Avançar'    
    btn1.addEventListener('click',avancar1)

    txt.innerHTML = `
    <p>Você segue mais cinco setas até o tronco de uma velha árvore já morta, mas ainda enraizada no solo. Você vê que o tronco é oco, e que o buraco continua pelo chão adentro, formando um túnel. Está escuro no buraco, e você não consegue ver a que distância está o fundo.</p>
    `

    function avancar1(){
        let checaItem = equips.nome.indexOf('Anel de Luz')
        if (checaItem == -1){            
            btn1.removeEventListener('click',avancar1)
            ev120()
        } else {
            window.alert('Você utiliza o seu Anel de Luz!')
            btn1.removeEventListener('click',avancar1)
            ev322()
        }
    }
}

function ev004(){ //Chamado por ev081()
    window.alert('Você sofre 4 pontos de dano!')
    atualizaStats('energ',-4)    

    if (stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Entrar na caverna'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)
            ev049()
        }

        btn2.innerHTML = 'Arrastar-se de volta para a encruzilhada'
        intUser.appendChild(btn2)        
        btn2.addEventListener('click',alt2)
        function alt2(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)
            ev093()
        }            

        //TEXTO
        txt.innerHTML = `<p>Você consegue arrancar a flecha de seu ombro, ainda que a dor cause grande agonia. </p>`

    } else {
        txt.innerHTML = `<p>Você não resiste aos ferimentos e acaba morrendo</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }

}

function ev005(){//Chamado por ev152
    //BOTÃO
    btn1.innerHTML = 'Colocar a coroa de ouro sobre sua cabeça'    
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev333()
    }

    btn2.innerHTML = 'Sair do nicho e subir o restante dos degraus até o teto da caverna'
    btn2.addEventListener('click',alt2)
    intUser.appendChild(btn2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev249()
    }
    

    //TEXTO
    txt.innerHTML = `<p>Sentado no trono ornamentado, você se sente estranhamente desconfortável. Os Dois Guerreiros-Clones rastejam no chão à sua frente em completa subserviência. Será que eles esperam que você se torne o novo senhor deles?</p>`
}

function ev006(){//Chamado por ev187
    //BOTÃO
    btn1.innerHTML = 'Avançar'    
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)        
        ev148()
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você passa andando pelo Goblin, ele rosna de uma maneira que você jamais havia ouvido antes, um rosnado que você não esperaria que viesse de um Goblin. Sentindo-se um pouco nervoso, você segue rapidamente para o norte.</p>`
}

function ev007(){ //Chamado por ev092; Combate sem Fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você puxa sua espada e se prepara para enfrentar os agressores de 
            corpos listrados em preto e amarelo. São ABELHAS ASSASSINAS.</p>
            <p>Você enfrentará 3 grupos delas! Prepare-se para o primeiro!
            `    
            break
        case 1:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu o primeiro grupo de Abelhas! Prepare-se para mais!</p>`
            break
        case 2:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu o segundo grupo de Abelhas! Prepare-se para mais!</p>`
            break
        case 3:
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev023()
    }

    function battle(){
        /*Chamar funcão de batalha com os parâmetros:
            INIMIGO                         HAB     ENERG
            Primeiras  ABELHAS ASSASSINAS:  7       3 
            Segundas  ABELHAS ASSASSINAS:   8       4 
            Terceiras  ABELHAS ASSASSINAS:  7       4 
            Se você vencer, vá para 23. 
        */
        btn1.removeEventListener('click',battle)     
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }   
        
        switch (vitoria){
            case 0:
                inimigo.nome = ['Abelhas Assassinas 1'];inimigo.hab = [7];inimigo.energ = [3]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,7,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 1:
                inimigo.nome = ['Abelhas Assassinas 2'];inimigo.hab = [8];inimigo.energ = [4]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,7,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 2:
                inimigo.nome = ['Abelhas Assassinas 3'];inimigo.hab = [7];inimigo.energ = [4]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,7,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
        
    }
    
}

function ev008(){//Chamado por ev160 ev343
    //BOTÃO
    btn1.innerHTML = 'Ir ao encontro das vozes'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev317()
    }

    btn2.innerHTML = 'Esconder-se e deixar que passem'    
    intUser.appendChild(btn2)
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev392()
    }

    //TEXTO
    txt.innerHTML = `<p>Seguindo ao longo da trilha, você ouve passos e 
    vozes que discutem adiante.</p>`
}

function ev009(){ //Chamado por ev085(); Combate sem Fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você destranca a porta e dá um passo atrás, desembainhando sua 
            espada caso o Goblin tente lhe atacar. Ele apanha um banco de madeira e, brandindo o 
            objeto no ar, abre a porta com um pontapé e avança sobre você aos gritos. Você terá 
            que lutar.</p>`            
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev176()        
    }

    function battle(){
        /*Chamar funcão de batalha com os parâmetros:
            INIMIGO     HAB     ENERG
            GOBLIN:     5       4 
            
            Se você vencer, vá para ev176. 
        */
        btn1.removeEventListener('click',battle)
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        inimigo.nome = ['Goblin'];inimigo.hab = [5];inimigo.energ = [4]
        batalha(inimigo.nome,inimigo.hab,inimigo.energ,9,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
    }
}

//010-019
function ev010(){//Chamado por ev137()
    //BOTÃO
    btn1.innerHTML = 'Avançar'    
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)        
        ev290()
    }

    //TEXTO
    txt.innerHTML = `<p>Você apanha uma pedra de bom tamanho do chão e faz pontaria. Em seguida, lança a pedra com toda a sua força no Ogro, mas fica decepcionado ao vê-la passar voando por sobre sua cabeça e se espatifar contra a parede do outro lado da caverna. Você solta um palavrão, mas resolve, ainda assim, avançar pela caverna para atacar o Ogro.</p>`
}

function ev011(){//Chamado por ev342
    //BOTÃO
    btn1.innerHTML = 'Avançar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev353()
    }

    //TEXTO
    txt.innerHTML = `<p>Você começa a perder o equilíbrio, à medida que a ilusão vai distorcendo sua mente. Você fecha os olhos e segura a cabeça nas mãos, mas não adianta nada. Você gira às cegas pelo aposento e depois cai no chão inconsciente.</p>`
}

function ev012(itemPago,itemRemov){ //(itemPago = retorno da func, itemRemov = nome do item); Chamado por 192
//Chamado por ev046()
    if (itemPago != 1){
        //BOTÃO
        btn1.innerHTML = 'Pagar 10 PO'        
        btn1.addEventListener('click',pagaPO)

        btn2.innerHTML = 'Pagar dois tesouros'
        btn2.addEventListener('click',pagaTesouro)
        intUser.appendChild(btn2)

        //TEXTO
        txt.innerHTML = `<p>Você diz ao Gnomo que talvez tenha sido um pouco precipitado ao 
        desembainhar a espada, mas tinha de estar preparado para tudo nos limites da cruel 
        Floresta de Darkwood. Ele replica que isso não é desculpa para puxar uma arma diante 
        de um velho indefeso, e que, se você quiser sua espada de volta, isso custará 10 Peças 
        de Ouro ou dois artigos do tesouro da sua mochila.</p>` 

        if (equips.nome.length < 2 && stats.ouro >= 10){
            txt.innerHTML += `<p>Como você não possui tesouros suficientes, você paga 10 PO</p>`
            atualizaStats('ouro',-10)            
            avancar()
        } else if (equips.nome.length > 1 && stats.ouro < 10){
            txt.innerHTML += `<p>Como você não possui dinheiro suficiente, terá de pagar com dois tesouros</p>`
            btn1.removeEventListener('click',pagaPO)
            btn2.removeEventListener('click',pagaTesouro)
            intUser.removeChild(btn2)            
            removerItem(2,12)        
        } else if (equips.nome.length < 2 && stats.ouro < 10){
            txt.innerHTML += `<p>Como você não possui tesouro ou itens suficientes, você entrega 
            tudo o que tem</p>`
            stats.ouro = 0
            equips.nome = []
            equips.quant = []
            atualizaStats()
            avancar()
        }

        //AÇÕES
        function pagaPO(){
            txt.innerHTML += `<p>Você paga a ele 10 PO e, para seu alívio, sua espada 
            adorada é devolvida.</p>`
            atualizaStats('ouro',-10)
            avancar()
        }

        function pagaTesouro(){
            btn1.removeEventListener('click',pagaPO)
            btn2.removeEventListener('click',pagaTesouro)
            intUser.removeChild(btn2)
            removerItem(2,12)
        }    
    } else {
        txt.innerHTML = `<p>Você o paga com ${itemRemov} e, para seu alívio, sua espada 
        adorada é devolvida.</p>`
        intUser.appendChild(btn2)
        avancar()
    }

    function avancar(){
        btn1.innerHTML = 'Continuar a conversa'
        btn1.removeEventListener('click',pagaPO)
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)
            ev271()
        }        
    
        btn2.innerHTML = 'Já basta de gnomos! Seguir pela trilha para o oeste'
        btn2.removeEventListener('click',pagaTesouro)
        btn2.addEventListener('click',alt2)
        function alt2(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)
            ev067()
        }        
    }
}

function ev013(){ //Chamado por ev013()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev149()
    }

    //TEXTO
    txt.innerHTML = `<p>As vibrações atingem seu corpo como ondas de choque que o 
    martelassem. Suas pernas parecem chumbo, e você não consegue mexê-las. De repente, a 
    cabana desaba e vem ao chão. O céu escurece, um vento começa a uivar à sua volta. 
    Venta cada vez mais forte, chegando a atingir a força de uma tempestade e acabando por 
    derrubar você ao chão. Você se agarra na varanda e protege o rosto da sujeira e dos 
    detritos que a tempestade faz voar pelo ar.</p>

    <p>Mais alto do que o ruído ensurdecedor do vento, você ouve uma risada, seguida por 
    uma voz profunda que exulta:</p>
    
    <p>- “Estou livre! Estou livre”! Você libertou um <strong>ELEMENTAL 
    DA TERRA</strong> no mundo - e perde, por isso, 3 pontos de SORTE. 
    
    <p>Gradualmente, o vento uivante vai morrendo, e o céu clareia. Levantando-se em meio 
    aos destroços, você caminha lentamente de volta à trilha para prosseguir rumo ao norte.</p>`

    //Efeitos
    atualizaStats('sor',-3)
}

function ev014(itemPago,itemRemov){ //Chamado por ev319
    //(itemPago = retorno da func, itemRemov = nome do item)
    if (itemPago != 1){
        //BOTÃO
        btn1.innerHTML = 'Pagar 3 PO'
        btn1.addEventListener('click',pagaPO)

        btn2.innerHTML = 'Pagar 1 tesouro'
        btn2.addEventListener('click',pagaTesouro)
        intUser.appendChild(btn2)    

        //TEXTO
        txt.innerHTML = `<p>O fosso é circular com lados lisos, e você está fraco demais para 
        sair escalando. Você grita por ajuda, mas ninguém vem para socorrer. Você senta e 
        analisa a sua situação. Depois de uma hora de espera mais ou menos, você ouve um 
        barulho lá no alto. Você olha para cima e vê o rosto barbado de um homem robusto com um 
        chapéu de pele. Ele parece aborrecido. Trata-se de um caçador de animais de pele 
        valiosa, e você arruinou a armadilha dele. Ele grita para você lá de cima que, se 
        espera que ele jogue uma corda para que você suba, isso vai custar 3 Peças de Ouro. Em 
        substituição a essa quantia, ele aceitará qualquer artigo mágico que você queira ceder 
        a ele dentre os que estão em sua mochila.</p>`
        
        if (equips.nome.length < 1 && stats.ouro >= 3){
            txt.innerHTML += `<p>Como você não possui tesouros suficientes, você paga 3 PO</p>`
            atualizaStats('ouro',-3)
            avancar()
        } else if (equips.nome.length > 0 && stats.ouro < 3){
            txt.innerHTML += `<p>Como você não possui dinheiro suficiente, terá de pagar 
            com dois tesouros</p>`
            btn1.removeEventListener('click',pagaPO)
            btn2.removeEventListener('click',pagaTesouro)
            intUser.removeChild(btn2)            
            removerItem(1,14) //(quantidade,evento)
        } else if (equips.nome.length < 2 && stats.ouro < 10){
            txt.innerHTML += `<p>Como você não possui tesouro ou itens suficientes, 
            você entrega tudo o que tem</p>`
            stats.ouro = 0
            equips.nome = []
            equips.quant = []
            atualizaStats()
            avancar()
        }

        //AÇÕES
        function pagaPO(){
            txt.innerHTML += `<p>Depois que você concorda em pagar ao zangado caçador, ele 
            joga uma corda para que você possa subir e sair do poço. Você paga a ele 3 PO e 
            encara o caçador pouco amigável com raiva antes de prosseguir para o norte, 
            descendo a garganta.</p>`
            atualizaStats('ouro',-3)
            avancar()
        }

        function pagaTesouro(){
            btn1.removeEventListener('click',pagaPO)
            btn2.removeEventListener('click',pagaTesouro)
            intUser.removeChild(btn2)
            removerItem(1,14) //(quantidade,evento)
        }    
    } else {
        txt.innerHTML = `<p>Depois que você concorda em pagar ao zangado caçador, ele 
        joga uma corda para que você possa subir e sair do poço. Você entrega ${itemRemov} 
        e encara o caçador pouco amigável com raiva antes de prosseguir para o norte, 
        descendo a garganta.`        
        avancar()
    }

    function avancar(){
        btn1.innerHTML = 'Continuar'
        btn1.removeEventListener('click',pagaPO)
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev255()
        }        
        
        btn2.removeEventListener('click',pagaTesouro)        
        intUser.removeChild(btn2)        
    }
}

function ev015(){ //Chamado por ev125() ; Combate sem Fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>A encosta é íngreme, e você escorrega na gosma, rolando pelo buraco 
            até o fundo de uma grande caverna barrenta. Você salta de pé e fica alarmado ao ver a 
            ponta brilhante do ferrão venenoso na extremidade da cauda de um enorme VERME DE PEÇONHA 
            que está vindo na sua direção. O Verme de Peçonha tem uns cinco metros de comprimento, 
            e seus segmentos amarelos são imensos, mas você está preocupado em proteger-se do 
            ferrão. Não há tempo para fugir para fora do buraco - você tem que desembainhar sua 
            espada e lutar.</p>`            
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev217()        
    }

    function battle(){
        /*Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            VERME DE PEÇONHA:   8       7
            
            Se você vencer, vá para ev217. 
        */
        btn1.removeEventListener('click',battle)        
        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }        
        
        inimigo.nome = ['Verme de Peçonha'];inimigo.hab = [8];inimigo.energ = [7]
        batalha(inimigo.nome,inimigo.hab,inimigo.energ,15,false) //'Nome',hab,energ,evento,fugir,turnoFuga)
    }
}

function ev016(){ //Chamado por ev069() ev282
    btn1.innerHTML = 'Continuar'

    //TEXTO
    txt.innerHTML = `<p>Você grita para os três humanóides que estão cuidando de um roçado 
    de fungos de topo vermelho. Outra vez eles ignoram sua presença, continuando o trabalho 
    deles. Você pega um dos fungos, parte um pedaço do topo e começa a comer. O gosto é 
    bom, mas uma dor terrível invade seu estômago. O fungo é venenoso.</p>`

    //EVENTOS    
    let checaItem = equips.nome.indexOf('Poção Antiveneno')

    if (checaItem != -1){    
        //BOTÃO        
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev211()
        }        
        txt.innerHTML += `<p>Você procura em seu inventário e vê que possui uma Poção Antiveneno!</p>`
    }else{
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev345()
        }    
        txt.innerHTML += `<p>Você procura em seu inventário, mas não encontra nada que possa ajudar</p>`
    }
}

function ev017(){//Chamado por ev233()
    //BOTÃO
    btn1.innerHTML = 'Jogar uma PO no poço para fazer um pedido'    
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev089()
    }

    btn2.innerHTML = 'Descer a escada para olhar o túnel'
    intUser.appendChild(btn2)
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev256()
    }

    btn3.innerHTML = 'Retornar à trilha para seguir para o oeste'
    intUser.appendChild(btn3)
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev238()
    }

    //TEXTO
    txt.innerHTML = `<p>Uma escada desce pelo interior do poço até a água lá embaixo. 
    Contudo, parece haver um túnel logo acima da superfície da água, o qual segue para o 
    norte. É circular, e tem o diâmetro de um metro.</p>`
}

function ev018(){
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev198()
    }

    //TEXTO
    txt.innerHTML = `<p>Seu plano funciona e a febre diminui. Felizmente, os pêlos nas costas de suas mãos desaparecem, e você cai de novo em sono profundo, exausto. De manhã, você reúne seus pertences e parte para o norte pela trilha, na direção das montanhas.</p>`
}

function ev019(){//Chamado por ev
    //TEXTO
    txt.innerHTML = `<p>Embora fraco por causa da febre, você consegue sentar. Segura 
    então sua espada e, apertando os dentes, você corta a si mesmo no lugar onde foi a 
    mordida do Lobisomem. O sangue corre rapidamente do ferimento e, com sorte, leva com 
    ele a doença.</p>
    <p>Você perde 1 ponto de ENERGIA devido à perda de sangue.</p>`

    atualizaStats('energ',-1)

    if(stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev018()
        }
    }else{
        txt.innerHTML += `<p>Infelizmente devido aos seus graves ferimentos, você não 
        resiste à hemorragia e morre...</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'        
        btn1.addEventListener('click',restart)        
    }
}
    
//020-029
function ev020(){//Chamado por ev148
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev277()
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando para o leste, você se depara com uma ramificação da 
    trilha que segue para o sul. Você decide ignorar isso e continua para o leste.</p>`
}

function ev021(){//Chamado por ev336
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev226()
    }

    //TEXTO
    txt.innerHTML = `<p>A dor aumenta, e você rapidamente procura em sua mochila e retira a 
    pequena garrafa com o rótulo de Poção Antiveneno. Você engole o conteúdo. Seu corpo 
    relaxa, os efeitos do veneno vão sumindo. Você fica imaginando o que mais está reservado 
    para você nessa floresta e volta-se para o norte, subindo a trilha.</p>`
}

function ev022(){//Chamado por ev126()
    //TEXTO
    txt.innerHTML = `<p>O gás é tóxico, e seus olhos começam a lacrimejar. Você tosse e 
    prende a respiração, correndo em volta da caverna para tentar escapar da nuvem de gás que 
    envolve seu rosto. Seus pulmões parecem estar explodindo, e você é forçado a inspirar.</p>`

    //Perde 2 pontos de HAB e 1d6 de ENERG
    atualizaStats('hab',-2)
    let dano = rolaD6()
    atualizaStats('energ',- dano)

    txt.innerHTML += `<p>Você sente que perdeu um pouco sua destreza, sua HABILIDADE é 
    reduzida em 2 pontos<br>
    Você perde ${dano} pontos de ENERGIA</p>`

    if (stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Continuar'        
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev358()
        }

        //TEXTO
        txt.innerHTML += `<p>Você fica aliviado ao ver a nuvem de gás 
        ir se dissipando. Você coloca a caixa de prata na sua mochila e sai da caverna 
        imediatamente para continuar na direção do norte em sua missão.</p>`
    } else {
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
        
        txt.innerHTML += `<p>Devido aos seus ferimentos, você não resiste à toxina do gás e morre</p>
        <h2>FIM DE JOGO</h2>`
    }
    atualizaStats()
}

function ev023(){
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev339()
    }

    //TEXTO
    txt.innerHTML = `<p>Você enxuga o suor da sua testa e fica imaginando o que mais essas 
    terras cruéis terão reservado para você. Você senta e descansa um pouco. Depois, parte 
    na direção do som de água corrente.</p>`
}

function ev024(){//Chamado por ev197
    //BOTÃO
    btn1.innerHTML = 'Desembainhar a espada e perseguir os Pigmeus'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev377()
    }

    btn2.innerHTML = 'Continuar para o norte pela trilha'
    intUser.appendChild(btn2)
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev092()
    }

    //TEXTO
    txt.innerHTML = `<p>Os músculos do seu pescoço começam a endurecer, e você sente os 
    efeitos do veneno dos dardos percorrendo seu corpo. Você procura rapidamente na sua 
    mochila e retira a pequena garrafa com o rótulo Poção Antiveneno, depois engole o 
    conteúdo. Seu corpo relaxa, e os efeitos do veneno vão sumindo. Ao ver isso, os 
    Pigmeus voltam-se e fogem para o mato.</p>`
}

function ev025(){ //Chamado por ev074() ev140() ev196() ev267() ev287()
    //BOTÃO
    btn1.innerHTML = 'Continuar para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev369()
    }

    btn2.innerHTML = 'Ir para o oeste'
    intUser.appendChild(btn2)
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev056()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha acaba por se tornar plana, e você se vê no fundo de um 
    vale. A trilha também continua para o norte, mas há um novo caminho que leva na direção 
    do oeste.</p>`
}

function ev026(){ //Chamado por ev047() ev353
    //BOTÃO
    btn1.innerHTML = 'Apanhar o livro'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev091()
    }

    btn2.innerHTML = 'Desistir da busca e retornar à trilha para o norte'
    btn2.addEventListener('click',alt2)
    intUser.appendChild(btn2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev220()
    }
    

    //TEXTO
    txt.innerHTML = `<p>Você resolve começar sua busca pelas estantes de madeira. Todos os 
    livros estão escritos em uma língua que você não conhece e contêm estranhos diagramas. 
    Os mapas e pergaminhos também são ininteligíveis para você. Você abre os armários e 
    gavetas, mas tudo que você encontra são mais livros, empoeirados e encadernados em couro.</p>
    <p> Você está prestes a desistir de sua busca no 
    aposento quando repara em ainda mais um livro no chão, servindo de apoio para uma 
    perna de mesa quebrada.</p>`
}

function ev027(){//Chamado por ev123()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev329()
    }

    //TEXTO
    txt.innerHTML = `<p>Limpando a seiva-sangue verde e grossa da sua espada, você parte 
    para o norte mais uma vez. Fica aliviado ao ver que as árvores estão finalmente 
    começando a se tornar mais esparsas e parecer menos ameaçadoras.</p>`
}

function ev028(){//Chamado por ev209
    if (equips.nome.indexOf('Braçadeira da Força') != -1){
        ev052()
    } else {
        ev266()
    }
}

function ev029(fugiu){ //Combate com Fuga
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê corre de volta para a trilha e prossegue para o norte')
        ev254()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'                
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>Numa pequena clareira em meio às árvores, você vê duas 
                pequenas criaturas de pele cheia de verrugas, vestindo armaduras de couro. 
                Eles parecem estar discutindo sobre quem deveria se encarregar do coelho que 
                está sendo assando ao fogo num espeto. Ao verem você, eles interrompem a 
                discussão e puxam suas espadas curtas. 
                Você terá que lutar contra os ORCS que avançam na sua direção.</p>`
                break
            case 1:
                btn1.innerHTML = 'Batalhar!'
                btn1.addEventListener('click',battle)
                txt.innerHTML = `<p>Você venceu o primeiro Orc! Prepare-se para mais!</p>`        
                break
            case 2:
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                ev383()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO         HAB     ENERG
                Primeiro ORC:   5       5
                Segundo ORC:    5       6             
                Se você vencer, vá para ev383;
                Fugir: ev254
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Orc 1'];inimigo.hab = [5];inimigo.energ = [5]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,29,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
                case 1:
                    inimigo.nome = ['Orc 2'];inimigo.hab = [5];inimigo.energ = [6]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,29,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break            
            }        
        }
    }
}

//030-039
function ev030(){//Chamado por ev295
    //TEXTO
    window.alert('Você perde 2 pontos de ENERGIA por causa do profundo corte na sua testa.')
    atualizaStats('energ',-2)    

    if (stats.energAtual > 0){
        ev225()
    } else {
        txt.innerHTML = `<p>Devido aos graves ferimentos que sofreu, você não resiste e morre</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
}

function ev031(){//Chamado por ev110 ev257
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev362()
    }

    //TEXTO
    txt.innerHTML = `<p>Você engatinha para fora do túnel e segue caminhando pela escada na 
    parede do poço. Você sobe para fora do poço e retorna à trilha.</p>`
}

function ev032(itemPago,itemRemov){ //Chamado por ev346
    if (itemPago != 1){
        //TEXTO
        if (equips.nome.length < 2 && stats.ouro >= 10){
            txt.innerHTML += `<p>Como você não possui tesouros suficientes, você paga 10 PO</p>`
            atualizaStats('ouro',-10)
            avancar()
        } else if (equips.nome.length > 1 && stats.ouro < 10){
            txt.innerHTML += `<p>Como você não possui dinheiro suficiente, você paga somente com dois tesouros</p>`
            removerItem(2,32)        
        } else if (equips.nome.length < 2 && stats.ouro < 10){
            txt.innerHTML += `<p>Como você não possui tesouro ou itens suficientes, você entrega 
            tudo o que tem</p>`
            stats.ouro = 0
            equips.nome = []
            equips.quant = []
            atualizaStats()
            avancar()
        }else{
            txt.innerHTML = `<p>Escolha os itens que você entregará a Arragon:</p>`
            atualizaStats('ouro',-10)
            removerItem(2,32)
        }

    } else {
        txt.innerHTML = `<p>Você o paga com ${itemRemov} e, para seu alívio, sua espada 
        adorada é devolvida.</p>`
        intUser.appendChild(btn2)
        avancar()
    }

    function avancar(){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev150()
        }

        //TEXTO
        txt.innerHTML = `<p>Você enfia a mão em sua mochila e entrega 10 Peças de Ouro e dois 
        objetos a Arragon.</p>
        <p>Então ele ordena que você vá embora, e você sai rápido da casa e 
        volta à encruzilhada na trilha.</p>
        <p>Você perde por isso, 1 ponto de SORTE...</p>`

        atualizaStats('sor',-1)
    }
}

function ev033(){//Chamado por ev243
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev390()
    }

    //TEXTO
    txt.innerHTML = `<p>O frade sacode a cabeça, dizendo:</p>
    <p>- Não parece mais existir caridade no mundo.</p>
    <p>Com um meneio de ombros, ele parte de novo para o sul. Você fica olhando enquanto 
    ele desaparece, antes de continuar sua jornada para o norte.</p>`
}

function ev034(){//Chamado por ev356
    //BOTÃO
    btn1.innerHTML = 'Restaurar'
    btn1.addEventListener('click',restauraStat)    

    //TEXTO
    txt.innerHTML = `<p>Quando você esfrega a lâmpada, uma fumaça verde começa a subir 
    lentamente do pavio e toma forma. Delineando o perfil de um velho gordo e careca 
    sentado em uma almofada. Sua boca se abre lentamente e, com uma voz profunda, ele diz:</p>
    <p>- Bem, o que você quer?</p>
    <p>Você conta a ele sobre sua missão, mas ele diz que não pode oferecer ganho ou 
    riquezas materiais. Só pode oferecer bem-estar pessoal.</p>
    <p>Escolha 1 atributo para restaurar seu valor para o máximo:</p>`

    //ELEMENTOS
    for (let i=1;i<=3;i++){
        let opt = document.createElement('input')
        opt.setAttribute('type','radio')
        txt.appendChild(opt)        
        opt.setAttribute('name','opt')
        opt.setAttribute('id','opt'+i)

        let lbl = document.createElement('label')
        lbl.setAttribute('for','opt'+i)        
        txt.appendChild(lbl)
        switch (i){
            case 1:
                lbl.innerHTML = 'Habilidade'
                break
            case 2:
                lbl.innerHTML = 'Energia'
                break
            case 3:
                lbl.innerHTML = 'Sorte'
                break
        }
        txt.innerHTML += `<br>`
    }    

    let opts = document.getElementsByName('opt')
    opts[0].checked = true

    function restauraStat(){        
        if(opts[0].checked == true){
            stats.habAtual = stats.hab
            window.alert(`Seu valor de HABILIDADE foi restaurado para ${stats.hab}!`)
        } else if (opts[1].checked == true){
            stats.energAtual = stats.energ
            window.alert(`Seu valor de ENERGIA foi restaurado para ${stats.energ}!`)
        } else {
            stats.sorAtual = stats.sor
            window.alert(`Seu valor de SORTE foi restaurado para ${stats.sor}!`)
        }
        
        atualizaStats()
        txt.innerHTML = `<p>Logo que você faz sua escolha, o gênio desaparece e a lanterna 
        se torna negra. Você a atira ao chão e segue para o norte.</p>`

        btn1.innerHTML = 'Continuar'
        btn1.removeEventListener('click',restauraStat)        
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev231()
        }
    }
}

function ev035(){ //Chamado por ev057()
    //TEXTO
    window.alert('O ferimento causado pela terrível queimadura faz com que você perca 4 pontos de ENERGIA.')
    atualizaStats('energ',-4)
    
    if (stats.energAtual > 0){
        ev132()
    } else {
        txt.innerHTML = `<p>Você não resiste ao ferimento e morre...</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
}

function ev036(){//Chamado por ev344
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev187()
    }

    //TEXTO
    txt.innerHTML = `<p>Pensando a respeito do estranho de vestes longas, você se sente 
    um pouco desconfortável. Havia alguma coisa na sua maneira de ser que não inspirava 
    confiança. Você pára para dar uma olhada na sua mochila e fica aborrecido ao descobrir 
    que algumas coisas desapareceram. O homem era um ladrão!</p>`

    if(stats.ouro > 0){
        if(equips.nome.length > 0){            
            let roubaEquipOuPO = rolaD6() //Determina se roubará PO ou Equip
            if(roubaEquipOuPO > 3){
                rouboPO()
            } else {
                rouboEquip()
            }            
        } else {
            rouboPO()
        }        
    } else {
        rouboEquip()
    }

    txt.innerHTML += `<p>Você fica em dúvida se deve ou não sair correndo atrás do ladrão, 
    mas pressente que ele não estará onde disse que iria. Você xinga o gatuno e prossegue 
    na direção norte.</p>`

    function rouboPO(){
        stats.ouro = 0
        atualizaStats()
        txt.innerHTML += `<p>O ladrão roubou todo o seu dinheiro!</p>`        
    }

    function rouboEquip(){
        let listRoubo = []
        for(let i = 1;i <=2; i++){
            let rouboEquip = Math.random() * (equips.nome.length)
            rouboEquip = parseInt(rouboEquip)
            listRoubo.push(equips.nome[rouboEquip])
            equips.nome.splice(rouboEquip,1)
            equips.quant.splice(rouboEquip,1)            
        }
        txt.innerHTML += `<p>O ladrão roubou seus equipamentos!
        Você sente a falta de: ${listRoubo}</p>`
    }

}

function ev037(){//Chamado por ev239
    //BOTÃO
    btn1.innerHTML = 'Cuspir o pedaço e continuar subindo a tilha para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)        
        ev266()
    }

    btn2.innerHTML = 'Engolir o fruto'
    intUser.appendChild(btn2)
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)        
        ev336()
    }

    //TEXTO
    txt.innerHTML = `<p>Você estica a mão e pega um fruto com forma de pêra de cor roxa. 
    Você tira uma pequena mordida, o gosto é muito amargo.</p>`
}

function ev038(){//Chamado por ev147()
    //BOTÃO
    btn1.innerHTML = 'Entrar na cabana'
    btn1.removeEventListener('click',ev038)
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev315()
    }

    btn2.innerHTML = 'Retornar à trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev220()
    }
    intUser.appendChild(btn2)

    //TEXTO
    txt.innerHTML = `<p>Você dá uma olhada pela pequena janela suja da cabana e vê uma 
    velha com roupas rotas, rosto enrugado e nariz cheio de verrugas, lendo um dos diversos 
    livros que estão junto à lareira da parede do outro lado da cabana. Um servo corcunda 
    está trazendo mais livros para ela, das estantes atulhadas de livros velhos, mapas e 
    pergaminhos.</p>`
}

function ev039(){//Chamado por ev196
    //BOTÃO
    btn1.innerHTML = 'Continuar'    
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev287()
    }

    //TEXTO
    txt.innerHTML = `<p>Você estica a rede e, em seguida, a faz girar em torno de sua 
    cabeça. Você a lança na direção do Troll da Caverna e fica observando enquanto ela voa 
    silenciosamente pelo ar e aterrissa sobre o seu alvo imóvel. Ela se enrosca em torno do 
    Troll da Caverna, que acorda rapidamente de seu sono, rosna alto e tenta se livrar da 
    rede. Você corre na direção da cadeira de pedra e toma a bolsa de couro do furioso 
    Troll da Caverna.</p>
    <p>Você sai correndo da caverna, deixando o Troll da Caverna ocupado na sua luta para 
    se desvencilhar da rede.</p>`
}

//040-049
function ev040(){//Chamado por ev358
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev274()
    }

    //TEXTO
    txt.innerHTML = `<p>Você se levanta e xinga, limpando a poeira de suas roupas com as mãos. Fica tentado a esperar por ali para descobrir quem colocou a armadilha, mas acaba resolvendo não fazer isso.</p>`
}

function ev041(){//Chamado por ev317
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev239()
    }

    //TEXTO
    txt.innerHTML = `<p>Você corre de volta para a encruzilhada pela trilha, onde o corvo 
    ainda está pousado sobre o letreiro. Você vira para a esquerda e corre para o leste, 
    gritando: - Boa tarde! - para o corvo enquanto passa por ele.</p>`
}

function ev042(){//Chamado por ev315
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev342()
    }

    //TEXTO
    txt.innerHTML = `<p>A velha atira a cabeça para trás e solta uma gargalhada no momento 
    em que você inicia a conversa. Ela é uma Bruxa. Você perde 1 ponto de SORTE e 
    desembainha sua espada.</p>`

    atualizaStats('sor',-1)
}

function ev043(fugiu){ //Chamado por ev210 ev348; Combate com Fuga
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê corre de volta para a trilha e prossegue para o norte')
        ev188()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'                
                btn1.addEventListener('click',battle)                
    
                //TEXTO
                txt.innerHTML = `<p>Você puxa sua espada e avança contra os Montanheses Selvagens, 
                que param de discutir e se voltam na sua direção, gritando e brandindo seus machados.</p>`
                break
            case 1:
                btn1.innerHTML = 'Batalhar!'
                btn1.addEventListener('click',battle)
                txt.innerHTML = `<p>Você venceu o primeiro Montanhês Selvagem! Prepare-se para mais!</p>`
                break
            case 2:
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                ev050()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO                         HAB     ENERG
                Primeiro MONTANHÊS SELVAGEM:    7       5
                Segundo MONTANHÊS SELVAGEM:     6       4             
                Se você vencer, vá para ev050;
                Fugir: ev188
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Montanhês Selvagem 1'];inimigo.hab = [7];inimigo.energ = [5]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,43,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
                case 1:
                    inimigo.nome = ['Montanhês Selvagem 2'];inimigo.hab = [6];inimigo.energ = [4]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,43,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break            
            }        
        }
    }
}

function ev044(){ //Chamado por ev060()
    
    //TEXTO
    txt.innerHTML = `<p>Você 
    encontra seus Filtros Nasais em um bolso lateral de sua mochila e velozmente os 
    introduz nas narinas. Você inspira lentamente o ar venenoso à sua volta, mas tudo 
    está bem, e você consegue respirar livremente.</p>
    <p>Depois de algum tempo, a nuvem de gás se dissipa. Porém, não parece haver muito 
    motivo para ficar aqui por mais tempo, e você caminha no rumo dos degraus na parede 
    do outro lado.</p>`

    window.alert('Você perde 2 pontos de ENERGIA!')
    atualizaStats('energ',-2)

    if(stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev293()
        }
    } else {
        txt.innerHTML = `<p>Devido aos ferimentos e à inalação do gás tóxico, você não resiste e morre.</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.removeEventListener('click',alt1)
        btn1.addEventListener('click',restart)
    }
}

function ev045(){//Chamado por ev229
    //TEXTO
    window.alert('Você não é rápido o bastante e o Gremlin te acerta!\nVocê perde 2 pontos de ENERGIA')
    atualizaStats('energ',-2)

    if(stats.energAtual > 0){        
        ev165()
    } else {
        txt.innerHTML = `<p>Você não resiste aos ferimentos e morre...</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
}

function ev046(){//Chamado por ev192
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev012()
    }

    //TEXTO
    txt.innerHTML = `<p>A cenoura sai voando pelo ar mas, antes de chegar ao Gnomo, 
    ela se transforma numa borboleta e se afasta, esvoaçando na brisa. O Gnomo começa a 
    cortar lascas de um pedaço de madeira com uma faca pequena, tendo no rosto uma 
    expressão enfastiada.</p>
    <p>Você perde 2 pontos de SORTE.</p>
    <p>Resolve então que deveria tratá-lo com um pouco mais de respeito e pede desculpas 
    ao Gnomo.</p>`

    atualizaStats('sor',-2)
}

function ev047(){//Chamado por ev158()
    //BOTÃO
    btn1.innerHTML = 'Vasculhar a cabana em busca de algo útil'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1);
        btn2.removeEventListener('click',alt2);
        intUser.removeChild(btn2);
        ev026()
    }

    btn2.innerHTML = 'Sair da cabana e retornar à trilha'
    btn2.addEventListener('click',alt2)
    intUser.appendChild(btn2)
    function alt2(){
        btn1.removeEventListener('click',alt1);
        btn2.removeEventListener('click',alt2);
        intUser.removeChild(btn2);
        ev220()
    }

    //TEXTO
    txt.innerHTML = `<p>Enquanto sua atenção é desviada pelo servo, a Bruxa berra umas 
    palavras estranhas no ar. De repente, ela desaparece num raio brilhante e reaparece 
    na forma de um pequeno morcego que sai voando pela porta aberta. Ao ver isso, o 
    corcunda se atira ao chão e começa a chorar.</p>`
}

function ev048(){//Chamado por ev372
    let dano = rolaD6()

    //TEXTO
    txt.innerHTML = `<p>Você ergue a arca acima de sua cabeça e a atira de encontro ao chão. 
    Ela se espatifa e abre, expondo um grande ovo azul-claro, com quase um metro de 
    circunferência, em meio à madeira despedaçada</p>
    <p> Você toca o ovo com o dedo. É frio e duro, como se fosse mármore. Subitamente, aparece 
    uma rachadura e, antes que você tenha tempo de se mexer, o ovo explode, espalhando 
    fragmentos da casca, afiados como lâminas, em todas as direções.</p>
    <p>${dano} estilhaços atingem você! Você sofre ${dano} pontos de dano</p>`

    atualizaStats('energ',- dano)    

    if(stats.energAtual > 0){
        txt.innerHTML += `<p>Você cambaleia para fora do aposento e continua para o norte pela trilha.</p>`
        
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev288()
        }
    }else {
        txt.innerHTML += `<p>Infelizmente você não resiste ao ferimento e morre...</p>
        <h2>FIM DE JOGO</h2>`

        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)        
    }
}

function ev049(){ //Chamado por ev004() ev081(). Combate sem Fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você prossegue, descendo pelo túnel até a entrada da caverna. O 
            teto da caverna não é mais alto do que o túnel, e você não consegue ficar de pé. A 
            caverna é muito pequena e cheia de minúsculas peças de mobiliário, além de uma 
            variedade de objetos e curiosidades.</p>
            <p>De pé, no meio da caverna, há duas criaturas de pele verde que possuem corpos 
            pequenos e cabeças grandes. Têm orelhas pontudas e narizes compridos. Suas roupas são 
            feitas de sacos. Parecem muito alarmadas e avançam na sua direção com punhais. Você 
            terá que lutar contra os GREMLINS, pois não tem como dar meia volta e fugir.</p>
            <p>Sua força de ataque é reduzida em 3 pontos para este combate, pois você
            está lutando de gatinhas.</p>`
            
            //Para esta luta, a Força será reduzida em 3 pontos
            atualizaStats('atk',-3)
            break
        case 1:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu o primeiro Gremlin! Prepare-se para o outro!</p>`
            break
        case 2:
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            //Restaurando o valor de Força, que foi reduzida durante o combate
            atualizaStats('atk',3)
            ev371()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Primeiro Gremlin:   4       3
            Segundo Gremlin:    3       2
            Se você vencer, vá para 371.
        */
        btn1.removeEventListener('click',battle)
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){
            case 0:
                inimigo.nome = ['Gremlin 1'];inimigo.hab = [4];inimigo.energ = [3]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,49,false) //'Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 1:
                inimigo.nome = ['Gremlin 2'];inimigo.hab = [3];inimigo.energ = [2]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,49,false) //'Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
        
    }    
}

//050-059
function ev050(){ //Chamado por ev043()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev188()
    }

    //TEXTO
    txt.innerHTML = `<p>Em volta do pescoço de um dos Montanheses Selvagens, você encontra 
    uma pequena chave de prata presa a um cordão de couro. Você desamarra o cordão e põe a 
    chave na sua mochila. Em seguida, parte novamente para o norte.</p>`
    
    adcItem('Chave dos Montanheses',1)
}

function ev051(){ //Chamado por ev334
    //BOTÃO
    btn1.innerHTML = 'Ir para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev199()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev397()
    }

    //TEXTO
    txt.innerHTML = `<p>Você vai andando pelo vale verdejante até chegar a uma encruzilhada na trilha.</p>`
}

function ev052(){ //chamado por ev028()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev078()
    }

    //TEXTO
    txt.innerHTML = `<p>Quin explica que ele apostará uma quantidade de Poeira da Levitação contra algum artigo ou moedas no valor de 10 Peças de Ouro. Ao sentar-se à mesa defronte a ele, agilmente coloca a Braçadeira da Força em seu braço. Você põe seu cotovelo na mesa e as mãos dos dois se entrelaçam. O aperto dele é como o de uma garra de ferro, e seus olhos escuros e oblíquos parecem confiantes. Seus bíceps crescem, ele dá o sinal para que a contenda comece. Você começa a empurrar o braço dele para baixo e fica admirado com sua própria força. O suor começa a brotar na testa dele, e você pode reparar na dor e na incredulidade estampadas no seu rosto. Você empurra mais forte e força o braço dele na direção da mesa até derrotá-lo.</p>`
}

function ev053(){ //Chamado por ev197
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev092()
    }

    //TEXTO
    txt.innerHTML = `<p>Os músculos do seu pescoço começam a endurecer, e você sente o efeito do veneno dos dardos que percorre seu corpo. Arranca os dardos de seu pescoço, mas é tarde demais. Você cai de joelhos e depois tomba inconsciente.</p>
    <p>Quando desperta, descobre que sua espada e seus pertences ainda estão com você, mas todo o seu ouro foi levado. Os Pigmeus roubaram tudo. Você sacode o punho contra os ladrões já fora de sua visão e começa a caminhar para o norte de novo, ao longo da trilha.</p>`

    stats.ouro = 0
    atualizaStats()
}

function ev054(){ //Chamado por ev001()
    //BOTÃO
    btn1.innerHTML = 'Atacá-lo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev399()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Segui-lo'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev261()
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você desembainha a espada, Yaztromo se volta para você e o 
    aconselha, sem se alterar, a não ser tolo, pois a magia dele é poderosa.</p>`
}

function ev055(){ //Chamado por ev137
    //BOTÃO
    btn1.innerHTML = 'Olhar a criatura da gaiola mais de perto'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev168()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Examinar os objetos que a caverna contém'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev313()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Sair da caverna e continuar para o norte'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>Você remexe em sua mochila e retira a luva de seda roxa. Ela serve 
    perfeitamente na sua mão. Em seguida, você se abaixa e apanha uma pedra de bom tamanho. 
    Faz mira e atira esta pedra, com toda a força, no Ogro, ela voa como uma flecha para 
    atingi-lo no lado da cabeça, derrubando-o inconsciente. A criatura na jaula pula para 
    todos os lados ainda mais freneticamente do que antes.</p>`
}

function ev056(){ //Chamado por ev
    //BOTÃO
    btn1.innerHTML = 'Continuar para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev233()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev163()
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando pelo tranqüilo fundo do vale, você chega a uma encruzilhada na trilha. Você vê que o caminho para o sul leva de volta para as montanhas, por isso decide descartar esta opção.</p>`
}

function ev057(){ //Chamado por ev103()
    //BOTÃO
    btn1.innerHTML = 'Tentar esquivar (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let esquiva = testeSorte()

        if(esquiva == true){
            window.alert('Você se esquiva:\nO jato de fogo não o atinge e explode a seus pés!')
            ev132()
        }else{
            window.alert('Você foi atingido!\nO jato de fogo se abate sobre suas costas, derrubando-o no chão.')
            ev035()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você caminha para investigar o covil mas, subitamente, se dá conta 
    de que uma sombra escura se espalha por toda parte à sua volta. Você ouve um rugido 
    alto, acima de você e levanta os olhos, avistando uma criatura semelhante a um dragão, 
    com duas pernas e pele verde coberta de escamas, que desce voando para seu covil. 
    Um jato de fogo parte de sua boca na direção em que você se encontra.</p>`
}

function ev058(){ //Chamado por ev173
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev112()
    }

    //TEXTO
    txt.innerHTML = `<p>Você remexe na sua mochila e tira a pequena garrafa de Água Benta. 
    Retirando rapidamente a rolha, você joga a água no Carniçal que avança. Uma fumaça espessa 
    sobe pelo ar, saída das marcas de queimaduras causadas pela Água Benta na carne 
    putrefata da criatura. O Carniçal parece estar sofrendo dores atrozes, mas não se ouve um só 
    som saído de sua boca escancarada. Ele se arrasta até um canto do aposento, desesperado 
    para escapar de sua terrível arma.</p>
    <p>Você caminha até o caixão e olha lá dentro. Fica exultante ao ver, além de 25 Peças 
    de Ouro, um objeto que o Carniçal estava usando como descanso para a cabeça - uma cabeça 
    de martelo de bronze com a letra G inscrita nela. Você coloca seus achados alegremente 
    na mochila e caminha de volta, subindo as escadas, para deixar a cripta e retornar à 
    trilha, seguindo para o norte.</p>`

    adcItem('Cabeça do Martelo de Gillibran',1)
    atualizaStats('ouro',25)
}

function ev059(){ //Chamado por ev068 ev141 ev340 ev363
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev171()
    }

    //TEXTO
    txt.innerHTML = `<p>Você chega a outra encruzilhada na trilha. Ignorando o caminho para o sul, você continua para o leste.</p>`
}

//060-069
function ev060(){ //Chamado por ev367
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let filtrosNasais = testeSorte()
        
        if(filtrosNasais == true){
            txt.innerHTML = `<p>Você rapidamente encontra os filtros e os insere no nariz.</p>`            
            btn1.addEventListener('click',avancar1)
        }else{
            txt.innerHTML = `<p>Você leva um tempo muito grande para encontrar seus filtros.</p>`
            btn1.addEventListener('click',avancar2)
        }
    }

    function avancar1(){
        btn1.removeEventListener('click',avancar1)
        ev183()
    }

    function avancar2(){
        btn1.removeEventListener('click',avancar2)
        ev044()
    }

    //TEXTO
    txt.innerHTML = `<p>Você prende a respiração e remexe na sua mochila, procurando 
    freneticamente por seus Filtros Nasais.</p>`
}

function ev061(){ //Chamado por ev121()
    //BOTÃO
    btn1.innerHTML = 'Engatinhar de volta para o poço ao sul'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        intUser.removeChild(btn2)
        ev398()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev151()
    }

    //TEXTO
    txt.innerHTML = `<p>Logo você está de volta à primeira encruzilhada.</p>`
}

function ev062(){ //Chamado por ev093()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev208()
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você retira sua espada de seu último oponente, o corcel branco galopa se afastando para o leste pela trilha até se perder na distância. Você se volta e parte para o oeste de novo.</p>`
}

function ev063(){ //Chamado por ev
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev178()
    }

    //TEXTO
    txt.innerHTML = `<p>Ao ver a flecha voar passando por você, o Centauro empina sobre as patas traseiras e em seguida avança num galope direto na sua direção. Você é obrigado a saltar para trás a fim de não ser atropelado. Ele passa por você galopando numa nuvem de poeira e pára a uns dez metros de distância na trilha pela qual você acabou de chegar.</p>
    <p>Talvez lutar contra o nobre Centauro não seja uma idéia tão boa no fim das contas. Você põe a espada na bainha e resolve atravessar o rio a pé.</p>`
}

function ev064(){ //Chamado por ev138
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        equips.nome.splice(equips.nome.indexOf('Poção de Controle de Planta'),1)
        atualizaStats()
        ev142()
    }

    //TEXTO
    txt.innerHTML = `<p>Antes que a Erva Enredante possa arrastá-lo para o chão, você consegue apanhar a garrafa que contém a Poção de Controle das Plantas, na sua mochila, e engole o líquido. Como se tacada por fogo, a Erva Enredante solta seus membros e se afasta para fora da trilha. Você resolve correr velozmente pela trilha enquanto os efeitos da poção ainda duram.</p>`
}

function ev065(){ //Chamado por ev299 ev339
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev330()
    }

    //TEXTO
    txt.innerHTML = `<p>A ponte está em lamentável estado de conservação, mas você consegue atravessá-la em segurança. Você está no sopé de umas colinas, e está ficando cada vez mais escuro à medida que a noite cai. Você acampa atrás de umas rochas à esquerda da trilha e se instala para dormir com sua espada a seu lado.</p>`
}

function ev066(){ //Chamado por ev394
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev325()
    }

    //TEXTO
    txt.innerHTML = `<p>Você pisa cuidadosamente pelas pedras escorregadias até o outro lado do rio. Você vê que a trilha continua para o norte pelas colinas adentro, mas, como já está ficando escuro, decide acampar, à noite, sob uma grande árvore solitária à direita da trilha. Você acende um fogo bem grande e se instala para dormir com sua espada a seu lado.</p>`
}

function ev067(){ //Chamado por ev012() ev297 ev378
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev113()
    }

    //TEXTO
    txt.innerHTML = `<p>Você chega a outra encruzilhada na trilha. O caminho para o sul 
    conduz de volta para as colinas, por isso você o ignora e continua para o oeste.</p>`
}

function ev068(){ //Chamado por ev363
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev059()
    }

    //TEXTO
    txt.innerHTML = `<p>Você bebe o líquido claro da garrafa lentamente. O gosto é muito 
    amargo, e você fica apreensivo com o que está fazendo. Mas, em seguida, um bem-estar se 
    irradia pelo seu corpo e você se sente revigorado.</p>
    <p>Você bebeu uma poção da saúde! Você recupera 3 opntos de ENERGIA!</p>
    <p>Você parte para o leste pela trilha.</p>`

    atualizaStats('energ',3)
}

function ev069(){ //Chamado por ev136() ev214() ev304
    //BOTÃO
    btn1.innerHTML = 'Atacar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        btn4.removeEventListener('click',alt4)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        intUser.removeChild(btn4)
        ev264()
    }

    btn2.innerHTML = 'Cortar um dos fungos'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        btn4.removeEventListener('click',alt4)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        intUser.removeChild(btn4)
        ev143()
    }

    btn3.innerHTML = 'Pedir para comer um fungo de topo verde'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        btn4.removeEventListener('click',alt4)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        intUser.removeChild(btn4)
        ev269()
    }

    btn4.innerHTML = 'Pedir para comer um fungo de topo vermelho'
    btn4.addEventListener('click',alt4)
    function alt4(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        btn4.removeEventListener('click',alt4)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        intUser.removeChild(btn4)
        ev016()
    }

    intUser.appendChild(btn2)
    intUser.appendChild(btn3)
    intUser.appendChild(btn4)

    //TEXTO
    txt.innerHTML = `<p>O túnel vai cada vez mais fundo no subsolo, dirigindo-se para o oeste por uns sessenta metros antes de se alargar numa vasta caverna com paredes verdes de limo. Um raio de luz do dia penetra pelo teto da caverna, iluminando o chão. Humanóides pequenos, de pele pálida, estão espalhados por toda parte e parecem estar cuidando de plantações de fungos de diferentes cores. Um riacho corre através da caverna. Degraus de pedra sobem, passando por nichos na parede do outro lado, até um buraco no teto por onde a luz do dia penetra.</p>
    <p>Você puxa sua espada e se aproxima de um dos pequenos humanóides. Quando você chega mais perto, nota que eles não têm cabelo e que seus olhos são vazios. Parecem não estar nada interessados em sua presença, caminhando lentamente entre suas fileiras de fungos e se abaixando ocasionalmente para afastar insetos indesejáveis e ervas daninhas da plantação.</p>`

}

//070-079
function ev070(){ //Chamado por ev182
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev334()
    }

    //TEXTO
    txt.innerHTML = `<p>A espada é magnífica e foi, evidentemente, feita por um mestre 
    artesão. Dá uma sensação de poder em suas mãos.</p>
    <p>Você recupera 2 pontos HABILIDADE por causa da sua espada encantada.</p>
    <p>Desferindo golpes no ar com sua nova arma, você parte para o norte, descendo pela garganta.</p>`

    atualizaStats('hab',2)
}

function ev071(){ //Chamado por ev151 ; Combate sem Fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Ao puxar a cortina de lado, você vê uma minúscula criatura de pele 
            verde com uma cabeça enorme. Tem um nariz comprido e orelhas pontudas, vestido com 
            roupas de lona marrom. Um medalhão grande pende de seu pescoço numa corrente de prata. 
            A criatura está sentada a uma mesa, examinando uma figura de argila vermelha, 
            representando uma mão humana. Ao ver você entrar, ele pega um martelo de pedra e esmaga 
            a mão de argila. Ele é um chefe GREMLIN e salta de pé para enfrentar você com seu 
            martelo. Você terá que lutar contra ele.</p>`
            
            //Para esta luta, a Força será reduzida em 3 pontos
            atualizaStats('atk',-3)
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            //Restaurando o valor de Força, que foi reduzida durante o combate
            atualizaStats('atk',3)
            ev273()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO          HAB     ENERG
            Chefe Gremlin:   5       5
            Se você vencer, vá para 273.
        */
        btn1.removeEventListener('click',battle)
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }  
        
        switch (vitoria){
            case 0:
                inimigo.nome = ['Chefe Gremlin'];inimigo.hab = [5];inimigo.energ = [5]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,71,false) //'Nome',hab,energ,evento,fugir,turnoFuga)
                break            
        }        
    }    
}

function ev072(){ //Chamado por ev109() ev252
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev138()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha termina em uma encruzilhada. O caminho para o sul leva de volta para a floresta, por isso você resolve se dirigir ao norte.</p>`
}

function ev073(){ //Chamado por ev379
    //BOTÃO
    btn1.innerHTML = 'Derrubar a porta (SORTE + HABILIDADE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.innerHTML = 'Continuar'
        btn1.removeEventListener('click',alt1)
        let derrubar = rolaD6()
        derrubar += rolaD6()

        if(derrubar <= stats.sorAtual && derrubar <= stats.habAtual){
            txt.innerHTML += `<p>A porta se abre!!</p>`
            btn1.addEventListener('click',avancar1)
        } else {
            txt.innerHTML += `<p>Você se choca contra a porta e é atirado de volta, esfregando o ombro machucado. Você resolve não se arriscar a sofrer mais ferimentos e retorna à trilha para seguir para o norte.</p>`
            btn1.addEventListener('click',avancar2)
        }
    }

    function avancar1(){btn1.removeEventListener('click',avancar1);ev327()}
    function avancar2(){btn1.removeEventListener('click',avancar2);ev112()}

    //TEXTO
    txt.innerHTML = `<p>Você recua e, em seguida, dá carga contra a porta.</p>`
}

function ev074(){ //Chamado por ev376
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev025()
    }

    //TEXTO
    txt.innerHTML = `<p>Você tira a bolsa de couro das costas da cadeira de pedra e sai da 
    caverna na ponta dos pés. Do lado de fora, você pára para examinar o conteúdo da bolsa. 
    No interior, você acha 5 Peças de Ouro e um pequeno sino de metal. Você coloca essas 
    coisas na sua mochila e caminha de volta à encruzilhada na trilha e prossegue para o 
    norte.</p>`
    
    adcItem('Sino Pequeno',1)
    atualizaStats('ouro',5)
}

function ev075(){ //Chamado por ev299 ev339
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev330()
    }

    //TEXTO
    txt.innerHTML = `<p>Suas pernas dão a sensação de serem muito vulneráveis, e você espera ser mordido a qualquer momento por alguma criatura do rio fora de sua visão. Porém, nada acontece, e você consegue atravessar em segurança. Você está agora no sopé de umas colinas, e está ficando escuro à medida que a noite cai. Você resolve acampar atrás de umas rochas à esquerda da trilha e se instala para dormir com sua espada a seu lado.</p>`
}

function ev076(){ //Chamado por ev289
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev206()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha faz uma curva repentina para a direita e prossegue na direção norte, penetrando na vegetação baixa e densa.</p>`
}

function ev077(){ //Chamado por ev309
    //BOTÃO
    btn1.innerHTML = 'Desembainhar a espada e correr para o mato para perseguí-los'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev377()
    }

    btn2.innerHTML = 'Continuar para o norte ao longo da trilha'
    btn2.addEventListener('click',alt2)
    intUser.appendChild(btn2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev092()
    }

    //TEXTO
    txt.innerHTML = `<p>Os Pigmeus rapidamente dão meia volta e correm para o mato.</p>`
}

function ev078(){ //Chamado por ev052()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev349()
    }

    //TEXTO
    txt.innerHTML = `<p>Quin fica de pé e caminha silenciosamente até uma arca de madeira 
    nos fundos da cabana. Ele levanta a tampa e retira um pequeno frasco de vidro. Ele dá 
    isso a você e anda de volta para a mesa, onde desaba na cadeira, parecendo totalmente 
    arrasado. O pó no frasco cintila na luz, e você o coloca na sua mochila e sai da cabana. 
    Lá fora, você caminha de volta para a encruzilhada na trilha.</p>`

    adcItem('Poeira da Levitação',1)
}

function ev079(){ //Chamado por ev325 ; Combate sem Fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você fica de pé com as costas contra a árvore e se prepara 
            para lutar contra os Morcegos Vampiros. Você lutará contra um de cada vez, à 
            medida que eles mergulham para atacá-lo do alto.</p>`
            break
        case 1:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu o primeiro Morcego Vampiro! Prepare-se para o outro!</p>`
            break
        case 2:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu o segundo Morcego Vampiro! Prepare-se para o outro!</p>`
            break
        case 3:
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev386()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO                     HAB     ENERG
            Primeiro MORCEGO VAMPIRO    5       5 
            Segundo MORCEGO VAMPIRO     6       5 
            Terceiro MORCEGO VAMPIRO    5       7 
            Se você vencer, vá para 386.
        */
        btn1.removeEventListener('click',battle)
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){
            case 0:
                inimigo.nome = ['Morcego Vampiro 1'];inimigo.hab = [5];inimigo.energ = [5]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,79,false) //'Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 1:
                inimigo.nome = ['Morcego Vampiro 2'];inimigo.hab = [6];inimigo.energ = [5]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,79,false) //'Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 2:
                inimigo.nome = ['Morcego Vampiro 3'];inimigo.hab = [5];inimigo.energ = [7]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,79,false) //'Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
        
    }    
}

//080-089
function ev080(){ //Chamado por ev143()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev293()
    }

    //TEXTO
    txt.innerHTML = `<p>Não parece haver muito motivo para ficar aqui por mais tempo e você caminha na direção dos degraus na parede do outro lado.</p>`
}

function ev081(){ //Chamado por ev121() ev284()
    //BOTÃO
    btn1.innerHTML = 'Continuar (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let esquiva = testeSorte()

        if (esquiva == true){
            window.alert('A flecha passa assobiando pela sua cabeça, mas não te atinge!')
            ev049()
        } else {
            window.alert('A flecha crava no seu ombro!')
            ev004()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>À frente, você ouve vozes de timbre agudo que chamam uma à outra freneticamente. O túnel termina na entrada de uma pequena caverna. De repente, uma flecha parte da caverna na sua direção.</p>`
}

function ev082(){ //Chamado por ev250
    let checaItem = equips.nome.indexOf('Poção da Imobilidade')
    if (checaItem != -1){
        if(equips.quant[checaItem] > 1){
            equips.quant[checaItem]--
        }else{
            equips.quant.splice(checaItem,1)
            equips.nome.splice(checaItem,1)
        }
        ev235()
    } else {
        ev013()
    }
}

function ev083(){ //Chamado por ev155
    //TEXTO
    txt.innerHTML = `<p>Você procura na sua mochila e tira a beladona. É venenosa, mas seu efeito impedirá que você mesmo se torne um Lobisomem.</p>
    <p>Você perde 2 pontos de ENERGIA por causa dos efeitos do veneno.</p>`

    atualizaStats('energ',-2)
    if(stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev139()
        }
    }else{
        txt.innerHTML = `<p>Você não resiste aos efeitos do veneno e morre...</p>
        <h2>FIM DE JOGO</h2>`
        //BOTÃO
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)        
    }
}

function ev084(fugiu){ //Chamado por ev288 ; Combate com fuga em 3 turnos
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê corre de volta para a trilha para descer para o vale.')
        ev245()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'                
                btn1.addEventListener('click',battle)                
    
                //TEXTO
                txt.innerHTML = `<p>Ao se aproximar do rochedo, você fica ainda mais 
                surpreso ao vê-lo subitamente se levantar sobre o que parecem ser duas 
                pernas grossas de pedra. Depois, dois braços de pedra com punhos enormes 
                em forma de clava projetam-se de seus lados. Você fica olhando incrédulo 
                enquanto o rochedo se desloca na sua direção e ergue um de seus grandes 
                punhos de pedra. Você sai num relance do seu estupor e desembainha sua 
                espada para lutar contra o BICHO ROCHEDO!</p>`
                break
            case 1:                
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                ev146()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO             HAB     ENERG
                BICHO ROCHEDO:      8       11
                -------------------------------------
                Se você vencer, vá para ev146;
                Fugir em 3 turnos: ev245
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Bicho Rochedo'];inimigo.hab = [8];inimigo.energ = [11]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,84,true,3) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
            }        
        }
    }
}

function ev085(){ //Chamado por ev169 ev313 ev338
    //BOTÃO
    btn1.innerHTML = 'Destrancar a porta da jaula'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev009()
    }

    btn2.innerHTML = 'Ignorar a criatura e sair da caverna'
    btn2.addEventListener('click',alt2)
    intUser.appendChild(btn2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>Dentro da jaula, uma criatura pequena, mas vigorosa, de pele 
    coberta de escamas marrons, está pulando para cima e para baixo. É um GOBLIN, e possui 
    uma vara preta e brilhante que pende de um cordão de couro em volta de seu pescoço.</p>`
}

function ev086(){ //Chamado por ev361
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev208()
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você se agacha no mato alto, ouve o som de cascos a galope 
    em meio aos latidos. Depois, você vê as patas de quatro cães e de um cavalo passarem 
    por você em disparada, em meio a uma nuvem de poeira. O som da caçada rapidamente 
    desaparece na distância, e você retorna à trilha. Pensando na pobre e velha raposa, 
    você parte para o oeste mais uma vez.</p>`
}

function ev087(){ //Chamado por ev198
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev090()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha conduz ao longo de um espinhaço da colina e chega a outra 
    encruzilhada. Você vê que o caminho leva de volta ao rio, por isso, resolve se dirigir 
    ao norte de novo.</p>`
}

function ev088(){ //Chamado por ev201 ev248 ev293 ev389
    //BOTÃO
    btn1.innerHTML = 'Entrar no nicho'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev212()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar subindo'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev107()
    }

    //TEXTO
    txt.innerHTML = `<p>Subindo os degraus, você logo atinge o segundo nicho. Você vê formas vagas no escuro e ouve o som de pés que se arrastam.</p>`
}

function ev089(){ //Chamado por ev017() ev172()
    //BOTÃO
    btn1.innerHTML = 'Descer a escada para olhar mais abaixo no túnel'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev256()
    }

    btn2.innerHTML = 'Retornar à trilha para seguir para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev281()
    }

    btn3.innerHTML = 'Retornar à trilha para seguir para o oeste'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev238()
    }

    intUser.appendChild(btn2)
    intUser.appendChild(btn3)

    //TEXTO
    txt.innerHTML = `<p>A moeda cai na água com um ruído suave. Você formula o desejo de mais Peças de Ouro, mas nada acontece – 
    isso não é um poço dos desejos.</p>`
    
    atualizaStats('ouro',-1)
}

//090-099
function ev090(){ //Chamado por ev087() ev119()
    //BOTÃO
    btn1.innerHTML = 'Continuar (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let esquiva = testeSorte()
        if(esquiva == true){
            window.alert('A flecha passou voando pela sua cabeça e não te atingiu!')
            ev210()
        }else{
            window.alert('A flecha se aloja no seu ombro e você sofre 3 pontos de dano!')
            atualizaStats('energ',-3)
            if(stats.energAtual > 0){
                ev348()
            }else{
                txt.innerHTML = `<p>O ferimento no ombro é tão grave que você não resiste e morre...</p>
                <h2>FIM DE JOGO</h2>`

                btn1.innerHTML = 'Reiniciar Jogo'
                btn1.addEventListener('click',restart)
            }
        }
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha prossegue para o norte, descendo a colina, entre grandes 
    rochedos e pedras. Você tem uma sensação desagradável de estar sendo observado. Em 
    seguida, vindos de trás de um dos grandes rochedos à esquerda da trilha, surgem dois 
    homens musculosos com barba e cabelos compridos. Estão vestindo peles de animais e 
    parecem ameaçadores. Um deles ajusta uma flecha no arco e a dispara.</p>`
}

function ev091(){
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev220()
    }

    //TEXTO
    txt.innerHTML = `<p>Você abre o livro e fica surpreso ao ver que as páginas são escavadas no meio. No interior da cavidade, há uma pequena jóia numa corrente de prata. Ao lado dela está um pergaminho que diz:</p>`
    let secPerg = document.createElement('section')
    secPerg.style.width = '350px'
    secPerg.style.textAlign = 'center'
    secPerg.style.margin = 'auto'
    secPerg.innerHTML = `<p>OLHO DE ÂMBAR<br>
    <span id="spnItalic">Instruções para uso</span><br><br>
    Coloque o colar em volta de seu pescoço e interrogue aqueles que você teme;<br>
    Eles, não importa quanto o esforço, somente a verdade a você dirão sempre </p>`    
    txt.appendChild(secPerg)

    txt.innerHTML += `<p>Você coloca o colar em volta de seu pescoço e imagina que esse achado acabará por ser útil nessa floresta cruel!</p>
    <p>Você recuperou 1 ponto de SORTE!</p>
    <p>Saindo da cabana, você retorna à trilha e se dirige ao norte</p>`

    adcItem('Olho de Âmbar',1)
    atualizaStats('sor',1)
}

function ev092(){ //Chamado por ev024() ev053() ev077() ev205()
    let pocControleInseto = equips.nome.indexOf('Poção de Controle dos Insetos')

    //BOTÃO
    btn1.innerHTML = 'Correr para a água e mergulhar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        if(pocControleInseto != -1){
            btn3.removeEventListener('click',alt3)
            intUser.removeChild(btn3)
        }
        ev299()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ficar e lutar'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        if(pocControleInseto != -1){
            btn3.removeEventListener('click',alt3)
            intUser.removeChild(btn3)
        }
        ev007()
    }

    if(pocControleInseto != -1){
        intUser.appendChild(btn3)
        btn3.innerHTML = 'Beber a Poção de Controle dos Insetos'
        btn3.addEventListener('click',alt3)
        function alt3(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            btn3.removeEventListener('click',alt3)
            intUser.removeChild(btn2)
            intUser.removeChild(btn3)
            ev100()
        }
    }    

    //TEXTO
    txt.innerHTML = `<p>À medida que a trilha prossegue para o norte, a vegetação vai 
    ficando mais baixa, o terreno começa a subir suavemente. À frente você ouve o som de 
    água corrente. Porém, muito mais assustador, você escuta outro som, acima de você, no 
    céu - um ruído forte de zumbidos. Repentinamente, um enxame de abelhas grandes, cada 
    uma com dez centímetros de comprimento, está pairando diretamente sobre você.</p>`
}

function ev093(){ //Chamado por ev004() ev371
    //BOTÃO
    btn1.innerHTML = 'Ir para o leste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        ev061()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o sul'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev270()
    }

    //TEXTO
    txt.innerHTML = `<p>De volta à encruzilhada:</p>`
}

function ev094(){ //Chamado por ev120() ev322
    //BOTÃO
    btn1.innerHTML = 'Descer pela corda'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev136()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Retornar à trilha para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev144()
    }

    //TEXTO
    txt.innerHTML = `<p>Você pega a Corda de Escalada na sua mochila. Como se soubesse o 
    que fazer, ela se enrosca em volta do topo do tronco da árvore e desce pelo buraco, 
    penetrando no túnel lá embaixo, num convite para que você desça.</p>`
}

function ev095(){ //Chamado por ev292
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Poeira da Levitação') != -1){        
            equips.quant.splice(equips.nome.indexOf('Poeira da Levitação'),1)
            equips.nome.splice(equips.nome.indexOf('Poeira da Levitação'),1)
            ev173()
        }else{
            ev368()
        }
    }    
    
    //TEXTO
    txt.innerHTML = `<p>Você tenta com todas as suas forças deslocar a tampa de pedra, mas 
    ela nem se mexe.</p>`

    
}

function ev096(){ //Chamado por ev396; Combate múltiplo sem Fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Quando você ergue o braço para golpear o cão, ele rosna 
            ferozmente e salta sobre você!</p>`
            break
        case 1:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu o Cão de Caça! Outros 3 se aproximam junto de 
            seu dono!</p>
            <p>Prepare-se para lutar!</p>`
            break
        case 2:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu o primeiro time! Prepare-se para o outro!</p>`
            break
        case 3:
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev062()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Cão de Caça         7       6

            1º par
            Cão de Caça         6       6
            Cão de Caça         5       6

            2º par
            Cão de Caça         6       5
            Homem Mascarado     8       7
            
            Se você vencer, vá para 62.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Cão de Caça 1'];inimigo.hab = [7];inimigo.energ = [6]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,96,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 1:
                inimigo.nome = ['Cão de Caça 2','Cão de Caça 3'];inimigo.hab = [6,5];inimigo.energ = [6,6]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,96,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 2:
                inimigo.nome = ['Cão de Caça 4','Homem Mascarado'];inimigo.hab = [6,8];inimigo.energ = [5,7]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,96,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
        
    }    
}

function ev097(){ //Chamado por ev148 ev382
    //BOTÃO
    btn1.innerHTML = 'Sentar-se na cadeira para descansar e comer'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev328()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Seguir adiante na direção do norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev118()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha conduz sempre para o norte, mas, finalmente, as árvores começam a ser mais esparsas e parecem menos ameaçadoras, à medida que a luz do dia passa a penetrar entre elas. No lado direito da trilha, você vê uma velha cadeira de carvalho coberta de musgo.</p>`
}

function ev098(){ //Chamado por ev381
    //BOTÃO
    btn1.innerHTML = 'Fugir (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let fuga = testeSorte()
        if (fuga == true){
            window.alert('Você consegue fugir sem ser atingido pela chuva de flechas que cai por toda parte à sua volta!')
            ev001()
        }else{
            txt.innerHTML = `<p>Você escorrega e cai, ferido por muitas flechas. Sua aventura termina aqui...</p>
            <h2>FIM DE JOGO</h2>`
            btn1.innerHTML = 'Reiniciar Jogo'
            btn1.addEventListener('click',restart)
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Na sua longa caminhada contornando a Floresta de Darkwood, você é 
    atacado por um bando numeroso de Montanheses Selvagens, provavelmente os mesmos que 
    atacaram Perna Grande e seu grupo dois dias antes.</p>`
}

function ev099(){ //Chamado por ev208 ev323
    //BOTÃO
    btn1.innerHTML = 'Entrar na cabana'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev209()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Retornar à encruzilhada na trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev349()
    }

    //TEXTO
    txt.innerHTML = `<p>À sua frente, você vê que a trilha termina na porta de uma cabana grande, feita de lama seca. Possui um telhado em forma de domo, e uma única janela. Você dá uma olhada pela janela e vê um homem grande, de pele escura, sentado a uma mesa no meio da cabana. Tem o tronco nu e está flexionando os músculos de seus braços.</p>`
}

//100-109
function ev100(){ //Chamado por ev092
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev339()
    }

    //TEXTO
    txt.innerHTML = `<p>Ao remexer na sua mochila, você se dá conta, com horror, que os 
    grandes insetos que zumbem acima de você são ABELHAS ASSASSINAS. Você pega a garrafa em 
    que está escrito Poção do Controle dos Insetos e engole seu conteúdo. As Abelhas 
    Assassinas mergulham para atacar você, mas são subitamente repetidas, como se tivessem 
    se chocado contra uma tela invisível. Elas pairam por toda parte à sua volta, mas não 
    mordem.</p>
    <p>Com o coração aliviado, você puxa sua espada e a gira pelo ar. Você atinge uma 
    das Abelhas Assassinas, que cai no chão. Você pisa nela com sua sandália de couro. As 
    outras então voam, se afastando na distância. Você continua na direção norte, 
    aproximando-se do som de água corrente.</p>`
}

function ev101(){ //Chamado por ev310 ev321
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev025()
    }

    //TEXTO
    txt.innerHTML = `<p>Você ergue a sacola de couro da cadeira de pedra e caminha para fora. Examinando o conteúdo da sacola, você encontra 5 Peças de Ouro e um pequeno sino de metal. Você coloca essas coisas na sua mochila e caminha de volta para a encruzilhada na trilha, a fim de prosseguir para o norte.</p>`
    
    adcItem('Sino Pequeno',1)
    atualizaStats('ouro',5)
}


function ev102(){ //Chamado por ev323 ev349
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev105()
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando pela trilha, você nota que há marcas no chão feitas pelos cascos de um cavalo indo na direção leste. Você logo chega a outra encruzilhada na trilha. As marcas de cascos levam para o sul, de volta à floresta. Você resolve seguir para o norte.</p>`
}

function ev103(){ //Chamado por ev112() ev332
    //BOTÃO
    btn1.innerHTML = 'Olhar mais de perto'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev057()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Apressar-se pela trilha para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev360()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha se alarga e forma uma pequena clareira. À sua direita, você vê uma pilha de galhos, mato e pedaços de restos de comida, o covil de alguma criatura de grande porte. Entre os resíduos e ossos velhos espalhados por toda parte, você avista alguma coisa que reluz.</p>`
}

function ev104(){ //Chamado por ev360 ; Combate múltiplo sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>A mulher BANDIDA dá um passo adiante com a espada erguida, gritando:</p>
            <p>- Morte ao intruso!</p>
            <p>Ela é a chefe deles, e você terá que lutar contra ela primeiro!</p>`
            break
        case 1:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu a chefe! Outros 4 bandidos te atacam em pares!</p>
            <p>Prepare-se para lutar!</p>`
            break
        case 2:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu o primeiro time! Prepare-se para o outro!</p>`
            break
        case 3:
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev311()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Bandida Chefe       8       6

            1º par
            Bandido 1           7       6
            Bandido 2           6       4

            2º par
            Bandido 3           7       5
            Bandido 4           5       6
            
            Se você vencer, vá para 311.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Bandida Chefe'];inimigo.hab = [8];inimigo.energ = [6]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,104,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 1:
                inimigo.nome = ['Bandido 1','Bandido 2'];inimigo.hab = [7,6];inimigo.energ = [6,4]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,104,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 2:
                inimigo.nome = ['Bandido 3','Bandido 4'];inimigo.hab = [7,5];inimigo.energ = [5,6]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,104,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
        
    }    
}

function ev105(){ //Chamado por ev102() ev180()
    //BOTÃO
    btn1.innerHTML = 'Sair da trilha para ver o que está despertando o interesse dos abutres'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev384()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ignorar os abutres e continuar caminhando para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev394()
    }

    //TEXTO
    txt.innerHTML = `<p>Na distância, à direita da trilha, você vê pássaros grandes que descrevem círculos no céu. Ao se aproximar, reconhece que são abutres.</p>`
}

function ev106(){ //Chamado por ev175 ev294
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev288()
    }

    //TEXTO
    txt.innerHTML = `<p>Há uma chaleira de cobre já escurecida pelo fogo em meio às cinzas, 
    a qual você apanha para inspecionar. Você retira a tampa e encontra um anel de ouro com 
    uma grande esmeralda incrustada nele. Vale 15 Peças de Ouro.</p>
    <p>Você tem uma ótima estrela e acrescenta 2 pontos à sua SORTE!</p>
    <p>Feliz com seu novo tesouro, você resolve ignorar a arca de madeira e sai do aposento 
    para continuar para o norte.</p>`

    adcItem('Anel de Ouro com Esmeralda (15 PO)',1)
    atualizaStats('sor',2)
}

function ev107(){ //Chamado por ev088() ev212(); Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>No momento em que você chega nos últimos degraus antes do nicho seguinte, um jato de chamas se projeta para barrar seu caminho. Em seguida, um enorme vulto escuro sai do nicho, soltando fogo pelas narinas. Uma fumaça. Negra sobe pelo ar em anéis. A fera tem a forma de um homem, mas possui asas e carrega uma espada de fogo em uma das mãos e um chicote na outra. Traz uma coroa de ouro sobre a cabeça. Ela fica encarando você imóvel nos degraus acima. De repente, ela estala seu chicote e ergue a espada flamejante. A única saída dessa caverna está à sua frente no alto da escada. Para chegar lá, você terá que lutar contra o DEMÔNIO DE FOGO, senhor dos clones!</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev152()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Demônio de Fogo     10      10
            ---------------------------------
            Se você vencer, vá para 152.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Demônio de Fogo'];inimigo.hab = [10];inimigo.energ = [10]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,107,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev108(){ //Chamado por ev336
    //BOTÃO
    
    //TEXTO
    txt.innerHTML = `<p>A dor aumenta e se torna quase insuportável. Você aperta o estômago 
    com as mãos e cai de joelhos, com a boca espumando. Depois de algum tempo, a dor vai 
    diminuindo, mas você está fraco demais depois desse sofrimento, e perde 3 pontos de 
    ENERGIA. Você fica imaginando o que mais ainda estaria reservado para você nesta 
    floresta e decide rumar para o norte, subindo a trilha.</p>`

    atualizaStats('energ',-3)
    if(stats.energAtual > 0){
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev226()
        }
    }else{
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)

        txt.innerHTML += `<p>Você não resiste e acaba morrendo...</p>
        <h2>FIM DE JOGO</h2>`
    }    
}

function ev109(){ //Chamado por ev156 ev207 ev274 302
    //BOTÃO
    btn1.innerHTML = 'Ir para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev124()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev072()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Continuar para o norte'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev309()
    }

    //TEXTO
    txt.innerHTML = `<p>Logo a trilha conduz para fora das árvores a uma planície ampla com mato alto. Além dela, você vê que o terreno se eleva, e, mais adiante, há umas colinas baixas. A trilha se divide em três caminhos diferentes.</p>`
}

//110-119
function ev110(){ //Chamado por ev193
    //BOTÃO
    btn1.innerHTML = 'Revistar a mochila de couro do Gremlin'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev257()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair do túnel'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev031()
    }

    //TEXTO
    txt.innerHTML = `<p>O Gremlin jaz morto a sua frente.</p>`
}

function ev111(){ //Chamado por ev346
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev150()
    }

    //TEXTO
    txt.innerHTML = `<p>A expressão no rosto de Arragon se transforma de confiança em medo. 
    Talvez ele não seja tanto quanto finge que é. Subitamente, ele pede desculpas por ter 
    sido tão agressivo, mas explica que estas terras estão cheias de bandidos e assassinos, 
    e que ele precisa se proteger, fingindo para isso ser um mágico de poderes supremos. 
    Ele implora seu perdão e oferece 5 Peças de Ouro se você o  deixar em paz e não disser 
    a ninguém sobre o disfarce dele. Você aceita a oferta dele e sai da casa. Você caminha 
    de volta para a encruzilhada na trilha e segue para o norte.</p>`

    atualizaStats('ouro',5)
}

function ev112(){ //Chamado por ev058() e ev073() ev200() 292() ev306() ev312 ev327 ev351 ev368 ev379
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev103()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha segue na direção norte em meio às árvores densas. Depois, faz uma curva acentuada para a direita e uma para o leste. A trilha está coberta de mato de tal maneira que você é obrigado a usar sua espada em alguns pontos. Seu caminho para o leste é longo e cansativo.</p>
    <p>Finalmente, você chega a uma encruzilhada na trilha. Olhando para o mapa de Perna Grande, você resolve seguir para o norte de novo, na direção de Stonebridge, e ignorar a trilha estreita que continua para o leste.</p>`
}

function ev113(){ //Chamado por ev067() ev334
    //BOTÃO
    btn1.innerHTML = 'Investigar a cabana'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev324()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ignorar e continuar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev149()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha faz uma curva repentina para a direita e ruma para o norte, cruzando o fundo do vale. À esquerda da trilha, você vê um lago grande com uma pequena cabana de madeira, de teto de palha, às suas margens.</p>`
}

function ev114(){ //Chamado por ev277
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Cápsulas de Fogo') != -1){
            ev350()
        }else{
            ev123()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>O Homem-Árvore avança lentamente na sua direção sobre suas raízes grandes e espalhadas.</p>`
}

function ev115(){ //Chamado por ev179 ev220 ev275
    //BOTÃO
    btn1.innerHTML = 'Ir para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev382()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev277()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha logo chega a uma encruzilhada.</p>`
}

function ev116(){ //Chamado por ev330
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev314()
    }

    //TEXTO
    txt.innerHTML = `<p>Você acaba conseguindo voltar a dormir depois de algum tempo, mas acorda cedo. Na luz da manhã, você repara que há uma coleira de couro com aplicações em ouro em volta do pescoço do Lobo maior. Deve valer umas 15 Peças de Ouro. Pondo a coleira na sua mochila, você fica imaginando quem será o dono do Lobo. Você recolhe seus pertences e ruma para o norte ao longo da trilha.</p>`
    adcItem('Coleira com Ouro (15 PO)',1)
}

function ev117(){ //Chamado por ev168; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você destranca a porta e recua, desembainhando sua espada para o caso do Goblin tentar atacar você. Ele pega um banco de madeira e, sacudindo-o no ar, dá um pontapé na porta para abri-la e avança sobre você aos berros. Você terá que lutar.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev232()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Goblin              5       4
            ---------------------------------
            Se você vencer, vá para 232.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Goblin'];inimigo.hab = [5];inimigo.energ = [4]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,117,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev118(){ //Chamado por ev097()
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>A trilha acaba por emergir das árvores para uma vasta planície. Além dela, você vê que o terreno se eleva, conduzindo a umas colinas baixas. A vegetação chega até a altura da cintura em ambos os lados da trilha e balança suavemente ao vento. Tudo está tranqüilo, e os perigos à sua frente não parecem ter importância.</p>
            <p>ocê está desfrutando de sua caminhada quando, subitamente, o silêncio é quebrado pelo som de guinchos e grunhidos à direita da trilha. Você vê que um animal ainda invisível está abrindo um caminho pelo mato, deslocando-se rapidamente na sua direção. Você desembainha sua espada e fica alerta.</p>
            <p>Poucos metros à sua frente, uma criatura grande de cor marrom e aparência de porco, surge na trilha e estaca. Tem duas longas presas que se projetam a partir de um focinho curto e grosso. Do seu corpo suado, sobe um vapor pelo ar. Seus olhos pequenos o encaram antes que abaixe a cabeça e avance na sua direção.</p>
            <p>Você tem que lutar contra o JAVALI SELVAGEM!</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev174()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Javali Selvagem     6       5
            ---------------------------------
            Se você vencer, vá para 232.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Javali Selvagem'];inimigo.hab = [6];inimigo.energ = [5]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,118,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev119(){ //Chamado por ev268 ev386
    //BOTÃO
    btn1.innerHTML = 'Descer a colina e continuar para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev090()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Rumar para o oeste pela nova ramificação'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev216()
    }

    //TEXTO
    txt.innerHTML = `<p>O terreno é bastante íngreme, enquanto a trilha vai serpenteando por entre as colinas. Quando você chega no alto, o sol está bem quente. Por toda a volta, na distância, você vê o círculo verde da Floresta de Darkwood. Ainda há névoa pairando sobre o mato alto atrás de você, mas, à sua frente, você vê um vale banhado pela luz do sol. Tudo está quieto. Quando você começa a descer pelo outro lado da colina, vê uma encruzilhada na trilha.</p>`
}

//120-129
function ev120(){ //Chamado por ev003()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Corda de Escalada') != -1){
            ev094()
        }else{
            ev380()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você deixa cair uma pedra pelo tronco oco da árvore, descendo pelo túnel abaixo. Deve haver uns cinco metros até o fundo.</p>`
}

function ev121(){ //Chamado por ev242 ev270
    //BOTÃO
    btn1.innerHTML = 'Ir para o leste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev061()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev081()
    }

    //TEXTO
    txt.innerHTML = `<p>Você se vê de volta à encruzilhada.</p>`
}

function ev122(){ //Chamado por ev256
    //BOTÃO
    btn1.innerHTML = 'Arrastar-se pelo túnel'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev135()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Subir de volta pela rampa e retornar à trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev362()
    }

    //TEXTO
    txt.innerHTML = `<p>No fundo da rampa, você vê que o túnel se estende por uma certa distância para o norte. Você fica surpreso ao ver que ele é iluminado por tochas a espaços regulares por toda a sua extensão.</p>`
}

function ev123(fugiu){ //Chamado por ev114(); Combate com Fuga
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê corre de volta para a encruzilhada na trilha')
        ev234()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'
                btn1.removeEventListener('click',ev029)
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>O Homem-Árvore desfere um golpe contra você com dois de 
                seus galhos principais, e você salta para atacar.</p>`
                break
            case 1:
                btn1.innerHTML = 'Batalhar!'
                btn1.addEventListener('click',battle)
                txt.innerHTML = `<p>Você conseguiu destruir um dos galhos principais. Mas 
                ainda resta o outro para que o Homem-Árvore morra... Prepare-se para a 
                batalha!</p>`        
                break
            case 2:
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                ev027()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO         HAB     ENERG
                Homem-Árvore    8       8
                -----------------------------
                Se você vencer, vá para ev027;
                Fugir: ev234
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Homem-Árvore'];inimigo.hab = [8];inimigo.energ = [8]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,123,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
                case 1:
                    inimigo.nome = ['Homem-Árvore'];inimigo.hab = [8];inimigo.energ = [8]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,123,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break            
            }        
        }
    }
}

function ev124(){ //Chamado por ev109() ev331
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev180()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha termina em uma outra encruzilhada. O caminho para o sul conduz de volta à floresta, por isso você resolve rumar para o norte.</p>`
}

function ev125(){ //Chamado por ev157
    //BOTÃO
    btn1.innerHTML = 'Subir de volta e sair do buraco'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev337()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Prosseguir descendo pelo buraco'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev015()
    }

    //TEXTO
    txt.innerHTML = `<p>Ao descer pelo buraco, você nota grandes quantidades de gosma secreta por alguma criatura enorme.</p>`
}

function ev126(){ //Chamado por evev263
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Filtros Nasais') != -1){
            ev365()
        }else{
            ev022()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você levanta delicadamente a tampa da caixa, mas, ao fazê-lo, um gás amarelo escapa e envolve seu rosto.</p>`
}

function ev127(){ //Chamado por ev366
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev298()
    }

    //TEXTO
    txt.innerHTML = `<p>Você sobe no lombo do Centauro, ele se volta e caminha, entrando no rio. A água tem uma cor verde-escuro, e você fica imaginando que tipo de criaturas podem estar espreitando nas suas profundezas. Logo você chega do outro lado e paga ao Centauro as 3 Peças de Ouro. Ele agradece e acena um adeus, desejando-lhe boa sorte.</p>
    <p>Você está agora no sopé de umas colinas, e está começando a escurecer. Você vê a trilha que serpenteia na direção do norte, penetrando nas colinas. Você resolve acampar embaixo de um grande e velho carvalho à direita da trilha e se instala para dormir com sua espada a seu lado.</p>`

    atualizaStats('ouro',-3)
}

function ev128(){ //Chamado por ev384 ; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você corta as cordas grossas que prendem o Bárbaro. Ele grunhe e senta, esfregando os pulsos e tornozelos. Olha para você e ri com desprezo. Está delirante ou é ingrato, pois ele arranca uma das estacas de madeira do chão e se volta para atacar você!</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev272()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Bárbaro              9       7
            ---------------------------------
            Se você vencer, vá para 272.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Bárbaro'];inimigo.hab = [9];inimigo.energ = [7]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,128,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev129(){ //Chamado por ev266
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev349()
    }

    //TEXTO
    txt.innerHTML = `<p>Seu braço está dolorido do esforço e a perda do ouro para Quin faz 
    você ficar deprimido.</p>
    <p>Você perde 2 pontos de SORTE.</p>
    <p>Em seguida, sai da cabana e se afasta do sorridente Quin. Lá fora, você caminha de 
    volta para a encruzilhada na trilha.</p>`

    atualizaStats('sor',-2)
}

//130-139
function ev130(){ //Chamado por ev149()
    //BOTÃO
    btn1.innerHTML = 'Desembainhar a espada e lutar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev153()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Correr'
    btn2.addEventListener('click',alt2)
    function alt2(){
        atualizaStats('sor',-1)
        window.alert('Você perde 1 ponto de SORTE')

        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        
        ev355()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha se insinua por entre árvores retorcidas e moitas de 
    espinhos. Você ouve um rosnado acima de você e olha para o alto, vendo uma criatura que 
    parece ser meio-gato e meio-mulher em um galho sobre a trilha. Tem um pêlo curto, preto 
    e reluzente como o de uma pantera, possui patas na extremidade de seus braços e pernas 
    com garras afiadas. O rosto tem feições humanas, com olhos repuxados e dentes compridos.
    Parece estar pronta para dar o bote.</p>`
}

function ev131(){ //Chamado por ev
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev325()
    }

    //TEXTO
    txt.innerHTML = `<p>Você se esforça até sair da água na margem do outro lado do rio. Você vê que a trilha continua para o norte e penetra nas montanhas, mas, como está ficando escuro, decide acampar por esta noite sob uma grande árvore solitária à direita da trilha. Você acende um fogo bem forte e se instala para dormir com a espada a seu lado.</p>`
}

function ev132(){ //Chamado por ev035() e ev057()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Flauta') != -1){
            ev258()
        }else{
            ev167()
        }
        
    }

    //TEXTO
    txt.innerHTML = `<p>A criatura que está pousando à sua frente é um DRAGÃO ALADO. Ele olha para você e abre sua enorme boca para soltar mais um rugido abrasador. Tem uns dez metros de comprimento, e suas escamas grossas parecem difíceis de ser penetradas por sua espada.</p>`
}

function ev133(){ //Chamado por ev305 ev374
    //Checar qual evento traz a este: Observar como registrar o Anel da Lentidão nos equips
    //BOTÃO
    btn1.innerHTML = 'Experimentar a luva'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev374()
    }
    
    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ignorar a luva'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev360()
    }

    //TEXTO
    txt.innerHTML = `<p>Ao colocar o anel em seu dedo médio, você é subitamente acometido 
    por uma dor lancinante. A dor acaba sumindo depois de algum tempo, mas você não 
    consegue tirar o anel do dedo. Você está usando um Anel da Lentidão, o qual é 
    amaldiçoado e forçará você a subtrair 2 pontos de todas as jogadas de Ataque durante 
    um combate.</p>`
    
    bonusAtkTemp.anelLentidao[0] = 1
    atualizaStats('atk',bonusAtkTemp.anelLentidao[1])
    adcItem('Anel da Lentidão',1)
    ativaEventos.push('ev133')
}

function ev134(){ //Chamado por ev199
    //BOTÃO
    btn1.innerHTML = 'Esfregar lama quente nos ferimentos'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev283()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Partir para o norte pela trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev303()
    }

    //TEXTO
    txt.innerHTML = `<p>Você enuncia um desejo, mas nada acontece.</p>
    <p>Você perde 1 ponto de SORTE.</p>`
    atualizaStats('sor',-1)
}

function ev135(){ //Chamado por ev122() ev225()
    //BOTÃO
    btn1.innerHTML = 'Engatinhar para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev284()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Arrastar-se para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev151()
    }

    //TEXTO
    txt.innerHTML = `<p>O túnel continua para o norte até que, finalmente, você chega a uma encruzilhada.</p>`
}

function ev136(){ //Chamado por ev094()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev069()
    }

    //TEXTO
    txt.innerHTML = `<p>Você desce pela corda para o túnel abaixo. Logo seus olhos se acostumam à escuridão, e você vê que o túnel só tem um metro de altura. Você terá que engatinhar por ele para poder explorá-lo.</p>`
}

function ev137(){ //Chamado por ev230
    if(equips.nome.indexOf('Luva da Destreza de Arremesso') != -1){
        ev055()
    }else{
        ev010()
    }
}

function ev138(){ //Chamado por ev072() ev300
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Poção de Controle de Planta') != -1){
            window.alert('Você possui uma Poção de Controle de Planta!')
            ev064()
        }else{
            ev159()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Enquanto caminha pela trilha, através do mato da altura de sua cintura, você observa o mato que balança no vento. Logo, você tem a desagradável impressão de que o mato tem vontade própria e está se mexendo independentemente do vento. Subitamente, um feixe de mato se estica sobre a trilha e se enrosca em torno de seu tornozelo. Outros feixes de mato tentam prender seus braços e pernas. Você se dá conta de que está cercado por ERVAS ENREDANTES.</p>`
}

function ev139(){ //Chamado por ev083()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev198()
    }

    //TEXTO
    txt.innerHTML = `<p>Os efeitos da beladona e da mordida do Lobisomem vão diminuindo, e você finalmente consegue voltar a dormir. De manhã, você recolhe seus pertences e ruma para o norte pela trilha, penetrando nas montanhas.</p>`
}

//140-149
function ev140(){ //Chamado por ev298
    //BOTÃO
    btn1.innerHTML = 'Continuar descendo a colina para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev025()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o leste pela nova trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev267()
    }

    //TEXTO
    txt.innerHTML = `<p>Você contorna a massa bulbosa da Aranha Gigante e se instala novamente para um sono nervoso. Acorda de manha cedo e parte para o norte pela trilha. O terreno é bastante íngreme, à medida em que a trilha vai serpenteando e penetrando nas colinas. Quando você chega ao cume, o sol está bem quente. Por toda a sua volta, na distância, você vê o círculo verde compacto da Floresta de Darkwood. A névoa ainda paira sobre o mato alto atrás de você, mas à frente você vê o fundo do vale banhado pela luz do sol. Tudo está quieto.</p>
    <p>Quando você começa a descer pelo outro lado da colina, vê uma encruzilhada na trilha.</p>`
}

function ev141(){ //Chamado por ev340
    //BOTÃO
    btn1.innerHTML = 'Atacar Trumble'
    btn1.addEventListener('click',alt1a)
    function alt1a(){
        btn1.removeEventListener('click',alt1a)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev347()
    }

    function alt1b(){
        btn1.removeEventListener('click',alt1b)
        ev059()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Dizer que não tem condições de ajudá-lo'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1a)
        btn1.addEventListener('click',alt1b)
        btn1.innerHTML = 'Continuar'
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        txt.innerHTML = `<p>Você diz adeus e continua para o leste, pela trilha.`
    }

    //TEXTO
    txt.innerHTML = `<p>Você pergunta ao Anão se ele é de Stonebridge. Ele olha para você com raiva e salta de pé, apanhando seu machado. Diz que odeia os anões de Stonebridge, e que está em busca do martelo de guerra de Gillibran, na floresta de Darkwood, para levá-lo para sua aldeia, Mirewater, no oeste.</p>
    <p>le diz a você que o nome dele é Trumble, e que a águia favorita dele se perdeu na tentativa de se apossar do martelo de guerra de Gillibran.</p>
    <p>ocê compreende que está falando com um inimigo de Stonebridge; por isso, perde 1 ponto de SORTE.</p>`
    atualizaStats('sor',-1)
}

function ev142(){ //Chamado por ev064
    //BOTÃO
    btn1.innerHTML = 'Conversar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev366()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Contornar a criatura para atravessar o rio'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev178()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Desembainhar a espada e atacar'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev251()
    }

    //TEXTO
    txt.innerHTML = `<p>À medida em que a trilha vai seguindo na direção norte, o mato vai ficando mais baixo, e o terreno começa a se elevar suavemente. À sua frente, você ouve o som de água corrente. Logo, você chega às margens de um rio que corre tranqüilamente. Não há ponte, mas você vê que a trilha continua para o norte do outro lado do rio.</p>
    <p>Diante de você, orgulhosamente ereto, está um animal branco magnífico, meio-homem, meio-cavalo. Traz um arco e um carcais de flechas a tiracolo. É um CENTAURO.</p>`
}

function ev143(){ //Chamado por ev069() 
    
    //TEXTO
    txt.innerHTML = `<p>Sua espada corta o fungo de um metro de altura tão facilmente 
    quanto se fosse manteiga. Uma grande nuvem de esporos se espalha saída do caule, 
    dificultando a respiração, Você começa a tossir e engasgar, perdendo 2 pontos de 
    ENERGIA.</p>`
    atualizaStats('energ',-2)

    if(stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev080()
        }
    }else{
        txt.innerHTML += `<p>Você não resiste à falta de ar e acaba morrendo...</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
        
    }
}

function ev144(){ //Chamado por ev094() ev164 ev247 ev380
    //BOTÃO
    btn1.innerHTML = 'Rumar para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev213()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Seguir para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev387()
    }

    //TEXTO
    txt.innerHTML = `<p>Continuando por seu caminho através do vale, você vê a muralha escura da Floresta de Darkwood se erguer diante de você mais uma vez. A trilha conduz diretamente para a vegetação baixa e cerrada, e logo você está caminhando entre árvores altas e moitas espessas e espinhosas. Está escuro e quieto. A trilha não demora a se bifurcar.</p>`
}

function ev145(){ //Chamado por ev291
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev285()
    }

    //TEXTO
    txt.innerHTML = `<p>Você desamarra o barco e começa a remar, atravessando o rio para a outra margem. Você está mais ou menos na metade do caminho quando nota que o fundo do barco está começando a se encher de água. Aparecem vazamentos em toda parte. O barco está podre e começa a afundar. Você agarra seus pertences e nada para o outro lado.</p>
    <p>Você sobe a ribanceira e sai do outro lado do rio, mas fica desolado ao ver que todas as Provisões restantes na sua mochila se dissolveram na água. Está ficando escuro com a chegada da noite, e você resolve acampar atrás de umas rochas à direita da trilha. Você acende um grande fogo e se instala para dormir com a espada a seu lado.</p>`    
}

function ev146(){ //Chamado por ev084()
    //BOTÃO
    btn1.innerHTML = `Guardar um pedaço da pedra que fez parte<br>do Bicho Rochedo para exame posterior`
    btn1.addEventListener('click',alt1a)
    function alt1a(){
        btn1.removeEventListener('click',alt1a)        
        intUser.removeChild(btn1)
        btn2.innerHTML = 'Continuar'
        txt.innerHTML = `<p>Você guarda um pedaço da pedra na mochila e retorna à trilha e ruma para o norte</p>`
        adcItem('Pedra do Bicho Rochedo',1)
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Retornar à trilha e rumar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1a)
        btn2.removeEventListener('click',alt2)
        intUser.appendChild(btn1)
        intUser.removeChild(btn2)
        ev245()
    }

    //TEXTO
    txt.innerHTML = `<p>Você olha para a pilha de rochas partidas a seus pés e fica imaginando como um bicho desses algum dia chegou a existir - talvez a partir do poder mal utilizado por um alquimista cruel? Você nunca saberá.</p>`
}

function ev147(){ //Chamado por ev289
    //BOTÃO
    btn1.innerHTML = 'Olhar pela janela da cabana'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev038()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar caminhando para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev220()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha segue para o norte, entrando na floresta espessa. Em uma das poucas clareiras entre as árvores, você vê fumaça que sobe de uma chaminé sobre uma cabana de madeira à sua direita.</p>`
}

function ev148(){ //Chamado por ev006 ev308 ev373
    //BOTÃO
    btn1.innerHTML = 'Continuar para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev097()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev020()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha continua para o norte, e logo você chega a uma outra encruzilhada.</p>`
}

function ev149(){//Chamado por ev013() ev113() ev185() ev235() ev324 ev341
    //BOTÃO
    btn1.innerHTML = 'Prosseguir para o leste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev130()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev306()
    }

    //TEXTO
    txt.innerHTML = `<p>Na sua caminhada através do vale, você vê a muralha verde e escura da Floresta de Darkwood se erguer diante de você. A trilha conduz diretamente para a vegetação baixa e cerrada, e logo você está caminhando entre árvores altas e moitas de espinhos. Está escuro e quieto. A trilha se bifurca.</p>`
}

//150-159
function ev150(){//Chamado por ev032() ev111() ev223() ev236() ev375
    //BOTÃO
    btn1.innerHTML = 'Caminhar para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev357()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'rumar para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev171()
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando para o norte através do verde vale, você vê a muralha verde e escura da Floresta de Darkwood erguer-se diante de você. A trilha leva diretamente para a vegetação baixa e espessa, e logo você está andando entre árvores altas e moitas de espinhos. Está escuro e quieto, e a trilha termina abruptamente em uma encruzilhada.</p>`
}

function ev151(){ //Chamado por ev061() ev135()
    //BOTÃO
    btn1.innerHTML = 'Puxar a cortina e entrar na caverna'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev071()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Dar meia volta e retornar à encruzilhada no túnel'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev296()
    }

    //TEXTO
    txt.innerHTML = `<p>O túnel termina numa entrada para uma caverna. Há uma cortina que tapa a entrada, e você não consegue ver lá dentro.</p>`
}

function ev152(){ //Chamado por ev107()
    //BOTÃO
    btn1.innerHTML = 'Colocar a coroa na cabeça'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev333()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sentar-se no trono'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev005()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Pular por cima do Demônio do Fogo e subir para o teto'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev249()
    }

    //TEXTO
    txt.innerHTML = `<p>Nos seus estertores da morte, o negro Demônio do Fogo é tragado por seu próprio fogo. Você dá um passo adiante e pega a coroa dele no momento em que a criatura desaba no chão, transformado em massa fumegante.</p>
    <p>Seu covil no nicho é frio e úmido. Lá dentro, há um trono magnífico, na frente do qual se encolhem dois Guerreiros-Clones, curvando-se diante de você em adoração. Você derrotou o senhor deles.</p>`
}

function ev153(fugiu){ //Chamado por ev130(); Combate com fuga
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê corre para o leste ao longo da trilha')
        ev355()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'
                btn1.removeEventListener('click',ev029)
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>A Mulher-Gato rosna e ruge antes de saltar da árvore para atacá-lo. Você recua e se prepara para lutar.</p>`
                break
            case 1:
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                ev202()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO         HAB     ENERG
                Mulher-Gato     8       5
                -----------------------------
                Se você vencer, vá para ev202;
                Fugir: ev355
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Mulher-Gato'];inimigo.hab = [8];inimigo.energ = [5]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,153,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break     
            }        
        }
    }
}

function ev154(){ //Chamado por ev395
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev231()
    }

    //TEXTO
    txt.innerHTML = `<p>Você se levanta e vê que a Lanterna está com uma cor preta fosca. Você resolve não se importar mais com ela e parte para o norte pela trilha.</p>`
}

function ev155(){ //Chamado por ev388
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Beladona') != -1){
            ev083()
        }else{
            ev259()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você se instala para dormir de novo, mas começa a tremer e ter calafrios. O suor brota de seu corpo, embora você sinta muito frio.</p>`
}

function ev156(){ //Chamado por ev195 ev352
    //TEXTO
    txt.innerHTML = `<p>Cair no chão está se tornando uma espécie de mau costume! Além disso, está começando a machucar.</p>
    <p>Você perde 3 pontos de ENERGIA por causa das contusões.</p>`

    atualizaStats('energ',-3)
    if(stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev109()
        }
    }else{
        txt.innerHTML += `<p>Você não resiste à queda e morre...</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
}

function ev157(){ //Chamado por ev301 ev392
    //BOTÃO
    btn1.innerHTML = 'Descer pelo buraco'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev125()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar caminhando para o norte pela trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev337()
    }

    //TEXTO
    txt.innerHTML = `<p>À esquerda da trilha, você repara num grande buraco no chão com um diâmetro de uns três metros. Caminhando até a borda do buraco, você vê que ele vai descendo para as profundezas da terra.</p>`
}

function ev158(){ //Chamado por ev342
    //BOTÃO
    btn1.innerHTML = 'Esquivar (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let esquiva = testeSorte()
        if(esquiva == true){
            window.alert('Você esquivou da cadeira!')
            ev047()
        }else{
            window.alert('Você não foi rápido o suficiente e a cadeira te atinge!\nVocê perdeu os sentidos...')
            ev353()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você começa a perder o equilíbrio, à medida em que a ilusão vai distorcendo sua mente. Você fecha os olhos e enfia a mão na sua mochila, tirando a Faixa de Cabeça da Concentração, a qual você rapidamente coloca na cabeça. A sensação de tontura na sua cabeça desaparece, e você abre os olhos de novo para ver a velha que agora você se dá conta de que é uma <strong>BRUXA</strong>.</p>
    <p>Para impedir que você a alcance, o servo joga uma cadeira de madeira em você.</p>`
}

function ev159(){ //Chamado por ev138
    
    //TEXTO
    txt.innerHTML = `<p>A despeito de seus esforços, a Erva Enredante consegue agarrar seus membros e arrastá-lo para o chão. Você vê o mato começar a se enroscar em volta de seu pescoço e apertar. Você sufoca e tosse. Então você se dá conta de que a Erva Enredante não está tentando estrangular você - está apenas tentando fazer tanto contato quanto possível com sua pele exposta para poder sugar seu sangue!</p>
    <p>Horrorizado, você vê centenas de minúsculas perfurações circundadas por sangue nos seus braços e pernas. Finalmente, a erva, tendo bebido o suficiente, afrouxa o aperto.</p>
    <p>Você perdeu 3 pontos de ENERGIA.</p>`

    atualizaStats('energ',-3)
    if(stats.energAtual > 0){
        txt.innerHTML += `<p>Aliviado por estar vivo, você começa a caminhar para o norte de novo.</p>`
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev142()
        }
    }else{
        txt.innerHTML += `<p>Você não resiste aos ferimentos e morre...</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
}

//160-169
function ev160(){ //Chamado por ev177
    //BOTÃO
    btn1.innerHTML = 'Pagar pela informação'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        atualizaStats('ouro',-1)
        ev343()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ignorar e seguir para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev008()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Ignorar e seguir para o leste'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev239()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha estreita continua cortando através da floresta cerrada. Animais estranhos soltam gritos, e roídos ecoam pelas árvores. Finalmente, a trilha se alarga até aproximadamente um metro de um lado a outro. Logo, você chega a um poste de sinalização de madeira coberto de musgo, sobre o qual está pousado um corvo grande. Os dois braços do poste de sinalização dizem "Norte" e "Leste".</p>
    <p>Enquanto você está decidindo para que lado ir, ouve:</p>
    <p>- Boa tarde.</p>
    <p>Você olha na direção de onde veio a voz e vê o corvo olhando para você inquisitivamente.</p>
    <p>- Boa tarde. - você responde lentamente, sentindo-se meio bobo. O corvo fala de novo, perguntando para que lado você está indo. Você responde que está procurando dois goblins, criaturas pequenas e musculosas de pele marrom escamosa.</p>
    <p>- Minha informação custa 1 Peça de Ouro. - declara o corvo com firmeza.</p>`
}

function ev161(){ //Chamado por ev324
    //BOTÃO
    btn1.innerHTML = 'Retirar a mão do vaso'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev185()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Tatear por dentro para descobrir o que há no vaso'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev341()
    }

    //TEXTO
    txt.innerHTML = `<p>Quando sua mão penetra na escuridão absoluta do vaso, é acometida por uma dor intensa. Primeiro, você tem a sensação de que ela está sendo esmagada, depois que está em chamas.</p>`
}

function ev162(){ //Chamado por ev181
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev285()
    }

    //TEXTO
    txt.innerHTML = `<p>Não há nada de valor ou que tenha uso na caverna do Homem-Peixe, portanto você caminha até a parede do lado norte. Há degraus que levam de volta através da cachoeira, subindo pela parede norte da garganta até o topo.</p>
    <p>Você está no sopé de umas colinas e pode ver a trilha que sobe em meio a elas para o norte. Está ficando escuro, e a noite está chegando, por isso, você resolve acampar atrás de umas rochas à direita da trilha. Você faz um fogo grande e se instala para dormir com sua espada a seu lado.</p>`
}

function ev163(){ //Chamado por ev056() ev245() ev281 ev397
    //TEXTO
    txt.innerHTML = `<p>Embora seja um dia claro e ensolarado, uma minúscula nuvem cinza aparece no céu. Está bem baixa e dá a impressão de estar se deslocando na sua direção. Ao se aproximar, você vê que ela está se deslocando muito rápido. Finalmente, ela paira acima de você a uns cinco metros do chão. De repente, um raio parte da nuvem, atingindo você no ombro.</p>
    <p>Você perde 3 pontos de ENERGIA.</p>`

    atualizaStats('energ',-3)
    if(stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev375()
        }

        txt.innerHTML += `<p>Você vê a nuvem disparar para o oeste em alta velocidade. Você se recompõe e parte para o norte mais uma vez.</p>`
    }else{
        txt.innerHTML += `<p>Você não resiste aos ferimentos e morre...</p>
        <h2>FIM DE JOGO</h2>`

        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
}

function ev164(){ //Chamado por ev249
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev144()
    }

    //TEXTO
    txt.innerHTML = `<p>Você sobe os últimos degraus e sai da caverna, chegando à rica grama verde do fundo do vale. A leste, você vê o tronco oco da árvore pelo qual você desceu há algum tempo atrás. Você passa por ele e retorna à trilha, onde ruma para o norte de novo.</p>`
}

function ev165(){ //Chamado por ev045 ev229; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>O pequeno Gremlin é ágil, sendo capaz de correr à sua volta, enquanto você tem dificuldades para se movimentar de gatinhas. Você se encosta numa parede e desembainha sua espada.</p>`
            atualizaStats('atk',-3)
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            atualizaStats('atk',3)
            ev242()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Gremlin              5       3
            ---------------------------------
            Se você vencer, vá para 242.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Gremlin'];inimigo.hab = [5];inimigo.energ = [3]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,165,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev166(){ //Chamado por ev243
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev390()
    }

    //TEXTO
    txt.innerHTML = `<p>O frade sorri e diz:</p>
    <p>- Te abençoe.</p>
    <p>Ele se inclina e parte para o sul pela trilha, assobiando enquanto vai andando.</p>
    <p>Você recuperou 2 pontos de SORTE!</p>
    <p>Você ruma para o norte.</p>`

    atualizaStats('sor',2)
}

function ev167(){ //Chamado por ev132
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>A longa cauda do Dragão Alado chicoteia de um lado para o 
            outro, e a fumaça sobe de suas narinas. Você desembainha sua espada e se 
            prepara para lutar contra este temível monstro.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev305()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Dragão Alado        10      11
            ---------------------------------
            Se você vencer, vá para 305.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Dragão Alado'];inimigo.hab = [10];inimigo.energ = [11]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,167,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev168(){ //Chamado por ev055() ev385
    //BOTÃO
    btn1.innerHTML = 'Destrancar a porta da jaula'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev117()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair da caverna e continuar na direção norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>Dentro da jaula, uma criatura pequena e musculosa de pele marrom coberta de escamas pula de um lado para o outro - é um GOBLIN. Do seu pescoço pende uma vara preta e brilhante, presa a um cordão de couro.</p>`
}

function ev169(){ //Chamado por ev240
    let perdaEnerg = rolaD6()
    //TEXTO
    txt.innerHTML = `<p>O gás é tóxico, e seus olhos começam a lacrimejar. Você tosse e prende a respiração, enquanto corre pela caverna na tentativa de escapar da nuvem de gás que o envolve. Seus pulmões parecem estar prestes a estourar, e você é forçado a inspirar.</p>
    <p>Você perde 2 pontos de HABILIDADE e ${perdaEnerg} potos de ENERGIA!</p>`

    atualizaStats('hab',-2)
    atualizaStats('energ',perdaEnerg)

    if(stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Caminhar até a criatura que está na jaula'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)
            ev085()
        }

        intUser.appendChild(btn2)
        btn2.innerHTML = 'Sair da caverna e continuar na direção norte'
        btn2.addEventListener('click',alt2)
        function alt2(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)
            ev358()
        }

        txt.innerHTML += `<p>Você vê a nuvem de gás se dissipar. Você coloca a caixa de prata na sua mochila.</p>`
    }else{
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)

        txt.innerHTML += `<p>Você não resiste à toxicidade do gás e morre...</p>
        <h2>FIM DE JOGO</h2>`
    }
}

//170-179
function ev170(){ //Chamado por ev236
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Olho de Âmbar') != -1){
            ev223()
        }else{
            ev346()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você entra num quarto bem mobiliado ornamentado com belos objetos e 
    tapetes felpudos. Sentado numa escrivaninha, junto à parede do outro lado do quarto, há 
    um homem velho, usando vestes roxas e um chapéu cônico. Ele se levanta da cadeira e diz:</p>
    
    <p>- Eu sou Arragon, e você é um insignificante mortal. Você teve a petulância de entrar 
    na minha morada sem ser convidado, sem dúvida para me roubar e se apossar de minhas 
    riquezas e tesouros. Você está enganado, estrangeiro, pois eu é que o privarei de suas 
    riquezas. A não ser que você me dê 10 Peças de Ouro e dois objetos de sua mochila para 
    serem incorporados à minha coleção de curiosidades, eu o transformarei em pedra.</p>`
}

function ev171(){ //Chamado por ev059 ev150
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev190()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha chega a uma outra encruzilhada. O caminho para o sul leva de volta ao vale, por isso você resolve ficar na floresta e seguir para o norte.</p>`
}

function ev172(){ //Chamado por ev359
    //BOTÃO
    btn1.innerHTML = 'Jogar 1 PO no poço e formular um desejo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev089()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Descer a escada para dar uma olhada no túnel'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev256()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Retornar à trilha para rumar para o leste'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev281()
    }

    //TEXTO
    txt.innerHTML = `<p>Uma escada desce pelo interior do poço até a água lá embaixo. Porém, parece existir um túnel logo acima da superfície da água, o qual conduz para o norte. É circular e tem o diâmetro de um metro.</p>`
}

function ev173(){ //Chamado por ev095()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Água Benta') != -1){
            equips.quant.splice(equips.nome.indexOf('Água Benta'),1)
            equips.nome.splice(equips.nome.indexOf('Água Benta'),1)
            ev058()
        }else{
            ev227()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você tira de sua mochila o frasco de vidro contendo a poeira 
    cintilante e pulveriza-a sobre a tampa de pedra. Lentamente, a laje de pedra começa a 
    subir pelo ar. Você dá uma olhada na caixa e fica horrorizado ao ver um cadáver em 
    decomposição estirado lá. Roupas em farrapos cobrem um corpo de esqueleto com pedaços 
    de carne solta pendentes. Você retirou a tampa de um caixão contendo alguma criatura 
    amaldiçoada, um morto-vivo, e salta para trás aterrorizado ao ver os olhos do monstro 
    se abrirem de supetão. Você está em uma cripta tornada a abjeta moradia de algum 
    desconhecido ser das trevas. Vagarosamente, a criatura se ergue, saindo do caixão, 
    e avança na sua direção com braços estendidos.</p>`

    

    
}

function ev174(){ //Chamado por ev118()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev323()
    }

    //TEXTO
    txt.innerHTML = `<p>Ao retirar sua espada da carcaça do Javali Selvagem, você fica imaginando o que fez com que ele o atacasse. Na distância, você ouve o som de cães latindo. Talvez ele estivesse sendo caçado e, encurralado, jogou sua última cartada contra você.</p>
    <p>Preso ao focinho do Javali, você vê um grande anel de ouro que você solta de lá e coloca na sua mochila. Vale 10 Peças de Ouro.</p>
    <p>Você recupera 1 ponto de SORTE</p>`

    adcItem('Anel de Ouro (10 PO)',1)

    atualizaStats('sor',1)
}

function ev175(){ //Chamado por ev294
    //BOTÃO
    btn1.innerHTML = 'Erguer a arca e atirá-la ao chão'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev372()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Deixá-la de lado e fazer uma busca na lareira'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev106()
    }

    //TEXTO
    txt.innerHTML = `<p>A fechadura de ferro da arca está velha e enferrujada, por isso não abre.</p>`
}

function ev176(){ //Chamado por ev009
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>Você se inclina sobre o corpo sem vida do Goblin louco e examina a vara presa a seu pescoço: Ela é feita de ébano, e há uma rosca de tarraxa numa das extremidades. Você fica excitado ao ver a letra G nitidamente gravada na outra extremidade do que deve ser o cabo do martelo de guerra dos anões.</p>
    <p>Você põe seu achado na mochila e sai da caverna para continuar para o norte em sua missão.</p>`

    adcItem('Cabo do Martelo de Gillibran',1)
}

function ev177(){ //Chamado por ev261
    //BOTÃO
    btn1.innerHTML = 'Ir para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev289()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev160()
    }

    //TEXTO
    txt.innerHTML = `<p>Do lado de fora, na luz intensa, você repara mais uma vez na quietude morta. Uma trilha estreita conduz para o norte a partir do mato alto que circunda a torre de Yaztromo, penetrando na vegetação densa da Floresta de Darkwood. Com poucos passos, você se vê cercado pela floresta escura e espessa; pedras e raízes nodosas parecem se esconder nas sombras, e você quase chega a acreditar que elas estão tentando fazer com que você tropece.</p>
    <p>A luz diminui rapidamente, e o ar se torna úmido e desagradável. Você vai entrando cada vez mais fundo na penumbra. Finalmente, a trilha se divide em dois ramos pelos lados de uma enorme árvore velha.</p>`
}

function ev178(){ //Chamado por ev063() ev142() ev260 ev366
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev298()
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você entra no rio para cruzá-lo, o Centauro sai galopando para o sul pela trilha. A água é de um verde escuro, e você fica imaginando se há criaturas à espreita nas suas profundezas. Embora a água apenas chegue até a sua cintura, ela é muito fria, e suas pernas ficam dormentes. Você acha que alguma coisa está tocando suas pernas, talvez plantas, mas é difícil dizer.</p>
    <p>Finalmente, você chega à outra margem e sai da água. Você olha para suas pernas e fica horrorizado ao ver uma Sanguessuga negra e estufada, de uns vinte centímetros de comprimento, grudada na sua coxa. Você pega a sua mochila e tira o sal de suas Provisões para esfregar na pavorosa Sanguessuga. Ela se contorce e se solta de sua perna. Você perde uma porção de suas Provisões. Chuta a contorcida Sanguessuga de volta para o rio e olha à sua volta.</p>
    <p>Você está agora no sopé de umas montanhas, e está começando a escurecer. Você vê que a trilha serpenteia para o norte, penetrando nas colinas, e resolve acampar sob um velho e enorme carvalho à direita da trilha. Mais tarde, se instala para dormir com sua espada a seu lado.</p>`
}

function ev179(){ //Chamado por ev275
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev115()
    }

    //TEXTO
    txt.innerHTML = `<p>Você coloca o elmo na sua cabeça. Um impulso de força começa 
    percorrer seu corpo, fazendo com que você se sinta forte e destemido. O elmo possui 
    propriedades mágicas e permitirá que você acrescente um ponto sua própria Força de 
    Ataque durante combates, contanto que o esteja usando.</p>
    <p>Você começa a caminhar para o norte de novo, satisfeito com seu novo equipamento.</p>`

    atualizaStats('atk',1)
    adcItem('Elmo da Habilidade',1)
}

//180-189
function ev180(){ //Chamado por ev124() ev329
    //BOTÃO
    btn1.innerHTML = 'Continuar caminhando para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev105()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o oeste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev361()
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando rapidamente pela trilha, através de mato que chega até a cintura, você chega a uma outra encruzilhada da trilha.</p>`
}

function ev181(){ //Chamado por ev335 ; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você caminha pelos degraus, atravessando a cachoeira e entrando numa grande caverna, onde há um lago de água parada. Os degraus contornam as margens do lago, e há, do outro lado, uma mesa e uma cadeira, ambas de pedra. Você vai até a mesa e vê restos de peixe sobre ela.</p>
            <p>De repente, você ouve um ruído de água atrás de você. Uma estranha criatura sai do lago e avança na sua direção, armada com um tridente. Tem pernas como as de um homem, mas seu rosto e tronco se assemelham a um grande peixe verde com olhos arregalados. Os braços dele são como os seus, mas estão cobertos por escamas grandes. Trata-se de um HOMEM-PEIXE, e você terá que lutar contra ele.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev162()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Homem-Peixe         7       6
            ---------------------------------
            Se você vencer, vá para 162.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Homem-Peixe'];inimigo.hab = [7];inimigo.energ = [6]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,181,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev182(){ //Chamado por ev255
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(testeHab == true){
            ev070()
        }else{
            ev334()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você segura a espada e coloca o pé na rocha.</p>`

    let testeHab = rolaD6() + rolaD6()
    if(testeHab <= stats.habAtual){
        testeHab = true
        txt.innerHTML += `<p>A espada desliza vagarosamente e se solta da rocha.</p>`
    }else{
        testeHab = false
        txt.innerHTML += `<p>A espada não se mexe. Você se cansa e é forçado a desistir, continuando para o norte pela garganta.</p>`
    }
}

function ev183(){ //Chamado por ev060()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev293()
    }

    //TEXTO
    txt.innerHTML = `<p>Você lentamente inspira o ar venenoso à sua volta, mas tudo está bem, e você pode respirar livremente. Depois de algum tempo, a nuvem de gás se dissipa. Porém, não parece haver muito sentido em ficar aqui mais tempo, e você caminha até os degraus na parede do outro lado.</p>`
}

function ev184(){ //Chamado por ev191
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev390()
    }

    //TEXTO
    txt.innerHTML = `<p>Você explica ao frade que você pegou um sino de metal de um Troll da Caverna nas colinas. Você o mostra a ele, e ele pula de alegria, gritando:</p>
    <p>- Misericórdia, que boa sorte, que boa sorte.</p>
    <p>Ele põe a mão numa sacola de couro presa ao cinto de corda, em torno de sua cintura e tira um pequeno frasco de vidro. Você dá o sino de metal a ele e recebe o frasco de vidro. Você desarrolha o frasco e bebe o conteúdo.</p>
    <p>Você recupera 4 pontos de ENERGIA!</p>
    <p>O frade aperta sua mão, agradecendo repetidamente. Finalmente, vocês se separam, com você continuando para o norte e o frade caminhando para o sul.</p>`

    atualizaStats('energ',4)

    equips.quant.splice(equips.nome.indexOf('Sino Pequeno'),1)
    equips.nome.splice(equips.nome.indexOf('Sino Pequeno'),1)
}

function ev185(){ //Chamado por ev161
    //BOTÃO
    btn1.innerHTML = 'Largar o vaso no chão para arrebentá-lo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev250()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Colocá-lo na varanda e retornar à trilha para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev149()
    }

    //TEXTO
    txt.innerHTML = `<p>Você fica surpreso ao não ver nenhuma marca ou sinal de contusão na sua mão. Você tenta colocar sua mão no vaso de volta, mas uma barreira invisível bloqueia a entrada e impede que você o faça.</p>`
}

function ev186(){ //Chamado por ev394 ; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você entra na água e começa a atravessar o rio. A água é bastante turva, e, embora o nível só chegue até a sua cintura, você se sente, de certa forma, vulnerável aos ataques das criaturas que possam habitar o rio. Subitamente, seus medos se tornam realidade - você sente dentes afiados penetrando na sua coxa. Você abaixa a mão e sente, dentro da água, o corpo fino e comprido de uma ENGUIA HEMATÓFAGA preso à sua perna. Você desembainha sua espada e começa a golpear a água.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev131()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Enguia Hematófaga   5       4
            ---------------------------------
            Se você vencer, vá para 131.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Enguia Hematófaga'];inimigo.hab = [5];inimigo.energ = [4]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,186,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev187(){ //Chamado por ev036() ev206() ev253
    //BOTÃO
    btn1.innerHTML = 'Desembainhar a espada e atacar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev286()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Tentar iniciar uma conversa'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev203()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Ignorar e continuar caminhando para o norte'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev006()
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando pela trilha sinuosa, você vê uma criatura pequena e musculosa, de pele marrom coberta de escamas, sentada em um tronco à direita da trilha. Ela tem uma expressão mal-humorada no rosto, enquanto joga lentamente uma vara preta e brilhante de uma mão para outra. Talvez ela seja um dos Goblins que você está procurando.</p>`
}

function ev188(){ //Chamado por ev043() ev050() ev210() ev348
    //BOTÃO
    btn1.innerHTML = 'Seguir para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev221()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Rumar para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev359()
    }

    //TEXTO
    txt.innerHTML = `<p>Descendo a colina, você vê o vale que se estende à sua frente e, além dele, uma sinistra muralha de árvores - Darkwood! Do outro lado das árvores está Stonebridge, o fim de sua jornada. Ao chegar ao fundo do vale, você vê que a trilha atinge uma encruzilhada.</p>`
}

function ev189(){ //Chamado por ev264
    //BOTÃO
    btn1.innerHTML = 'Comer um pouco de fungo verde'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev269()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair da caverna pelos degraus na parede do outro lado'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev293()
    }

    //TEXTO
    txt.innerHTML = `<p>Os fungos de topo verde estão sendo regados por dois humanóides.</p>`
}

//190-199
function ev190(){ //Chamado por ev171 ev390
    //BOTÃO
    btn1.innerHTML = 'Enfrentar o animal que se aproxima'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev265()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Esconder-se fora da trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev318()
    }

    //TEXTO
    txt.innerHTML = `<p>À sua frente, você ouve o baque de passadas e o ruído de galhos se partindo. Parece que alguma criatura de grande porte está descendo pela trilha na sua direção!</p>`
}

function ev191(){ //Chamado por ev369
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Sino Pequeno') != -1){
            ev184()
        }else{
            ev243()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>O frade está muito nervoso e irrequieto, não pára de andar de um lado para o outro quando você começa a falar. Você pergunta a ele por que está tão alterado, e ele lhe diz que seu sino de metal sagrado foi roubado. Como pagamento por sua devolução, ele está disposto a oferecer uma poção mágica curadora.</p>`
}

function ev192(){ //Chamado por ev307
    //BOTÃO
    btn1.innerHTML = 'Desculpar-se por ser tão ríspido'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev012()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Jogar a cenoura nele!'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev046()
    }

    //TEXTO
    txt.innerHTML = `<p>Você desembainha sua espada, mas o Gnomo fica sentado de pernas cruzadas e sorri. Você olha para sua mão e vê que você não está mais segurando sua espada - ela se transformou numa cenoura!</p>`
}

function ev193(){ //Chamado por ev398 ; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Um pequeno GREMLIN, de pele verde, sai da escada para entrar no túnel. Não chega a ter mais do que um metro e está surpreso por ver você agachado no túnel. Ele tira um punhal do bolso de sua jaqueta. Você terá que lutar contra ele.</p>`
            atualizaStats('atk',-3)
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            atualizaStats('atk',3)
            ev110()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Gremlin             4       4
            ---------------------------------
            Se você vencer, vá para 110.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Gremlin'];inimigo.hab = [4];inimigo.energ = [4]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,193,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev194(){ //Chamado por ev364
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev208()
    }

    //TEXTO
    txt.innerHTML = `<p>O homem sorri e tira a máscara, explicando que ele a usava para se proteger da poeira e não para esconder o rosto de um ladrão. Você guarda a espada na bainha e relaxa um pouco. O homem diz que é um caçador, e que a melhor caça em toda a fronteira norte pode ser encontrada nessa planície coberta de vegetação baixa no interior de Darkwood. Ele diz que seus cães estavam caçando um Javali Selvagem quando perderam seu rastro e pegaram equivocadamente o da raposa. Ele adverte você quanto a algumas das perigosas feras que infestam esta área e finalmente diz:</p>
    <p>- E, se você vai passar a noite em Darkwood, talvez você precise de um pouco disso.</p>
    <p>Ele põe um pouco de beladona na sua mão e salta sobre seu corcel de novo. Em seguida, com um repentino toque de sua trompa, os cães partem para o leste. Ele se volta e acena para você antes de sair galopando atrás de seus cães. Você coloca a beladona na sua mochila e parte para o oeste de novo.</p>`

    adcItem('Beladona',1)
}

function ev195(){ //Chamado por ev274
    //BOTÃO
    btn1.innerHTML = 'Desembainhar a espada e atacá-lo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev352()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Saltar da plataforma para o chão cinco metros abaixo'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev156()
    }

    //TEXTO
    txt.innerHTML = `<p>Você chega ao topo do cipó e dele sobe numa plataforma de madeira. Uma cortina feita de folhas e avencas cobre a entrada de uma pequena área de moradia coberta. Quando você se aproxima, a cortina se abre, e de trás dela sai uma criatura grande e peluda semelhante a um macaco, usando apenas uma tanga de pele de animal. Ele tem um osso grande na sua mão direita e grunhe na sua direção. É um HOMEM-MACACO!</p>`
}

function ev196(){ //Chamado por ev267
    //BOTÃO
    btn1.innerHTML = 'Entrar na ponta dos pés e levar a bolsa<br>de couro enquanto o troll dorme'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        if(equips.nome.indexOf('Rede de Aprisionamento') != -1){
            btn3.removeEventListener('click',alt3)
            intUser.removeChild(btn3)
        }
        ev376()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Caminhar de volta para a encruzilhada<br>e rumar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        if(equips.nome.indexOf('Rede de Aprisionamento') != -1){
            btn3.removeEventListener('click',alt3)
            intUser.removeChild(btn3)
        }
        ev025()
    }

    if(equips.nome.indexOf('Rede de Aprisionamento') != -1){
        intUser.appendChild(btn3)
        btn3.innerHTML = 'Pegar a Rede de Aprisionamento na mochila'
        btn3.addEventListener('click',alt3)
        function alt3(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            btn3.removeEventListener('click',alt3)
            intUser.removeChild(btn2)
            intUser.removeChild(btn3)
            ev039()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você penetra na caverna escura com a espada na mão. O ar é frio e úmido. Você ouve roncos altos e vê, quando seus olhos se habituam à escuridão, a massa enorme de um TROLLDACAVERNA dormindo em uma cadeira de pedra. A pele dele é marrom e enrugada, e ele está vestindo peles de animais. Há uma clava de madeira em seu colo e uma grande bolsa de couro que pende das costas da cadeira de pedra.</p>`
}

function ev197(){ //Chamado por ev309
    if(equips.nome.indexOf('Poção Antiveneno') != -1){
        ev024()
    }else{
        ev053()
    }
}

function ev198(){ //Chamado por ev018 ev139 ev244 ev316
    //BOTÃO
    btn1.innerHTML = 'Continuar para o norte, descendo a colina'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev278()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Rumar para o leste pela nova ramificação'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev087()
    }

    //TEXTO
    txt.innerHTML = `<p>O terreno é bastante íngreme à medida em que a trilha vai se insinuando entre as colinas. Quando você chega ao topo, o sol está bem quente. Por toda à sua volta na distância, você vê o círculo escuro e verde da Floresta de Darkwood. A névoa ainda paira sobre o mato alto atrás de você, mas à sua frente você vê o fundo de um vale banhado na luz do sol. Tudo está quieto.</p>
    <p>Quando você começa a descer pelo outro lado da montanha, vê uma encruzilhada na trilha.</p>`
}

function ev199(){ //Chamado por ev051() ev221()
    //BOTÃO
    btn1.innerHTML = 'Jogar 1 PO na lama e formular um desejo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev134()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Esfregar um pouco de lama quente nas suas feridas'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev283()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Continuar para o norte pela trilha'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev303()
    }

    //TEXTO
    txt.innerHTML = `<p>À esquerda da trilha, você nota que há uma grande poça de lama que borbulha com um som alto. Sobe um vapor das bolhas que estouram na superfície da lama.</p>`
}

//200-209
function ev200(){ //Chamado por ev391
    //BOTÃO
    btn1.innerHTML = 'Descer as escadas'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev351()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair da construção, retornar à trilha e rumar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev112()
    }

    //TEXTO
    txt.innerHTML = `<p>Você pega a pequena chave de prata na sua mochila e a coloca no buraco da fechadura. Serve perfeitamente, e você gira uma vez. A fechadura estala, e a porta de pedra se abre. Degraus de pedra conduzem da porta a profundezas de penumbra. Você não consegue ver nada lá embaixo.</p>`
}

function ev201(){ //Chamado por ev215()
    if(ativaEventos.indexOf('ev389') == -1){
        txt.innerHTML = `<p>O que deseja fazer?</p>`
        //BOTÃO
        btn1.innerHTML = 'Abrir a arca de madeira'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)
            ev389()
        }

        intUser.appendChild(btn2)
        btn2.innerHTML = 'Sair do nicho e subir mais pelos degraus'
        btn2.addEventListener('click',alt2)
        function alt2(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)
            ev088()
        }
    }else{
        txt.innerHTML = `<p>Sem mais o que fazer, você sobe mais pelos degraus</p>`
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev088()
        }
    }
}

function ev202(){ //Chamado por ev153
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev355()
    }

    //TEXTO
    txt.innerHTML = `<p>As orelhas da Mulher-Gato são adornadas por dois brincos de ouro. Cada um deles vale 5 Peças de Ouro, e você coloca-os na sua mochila. Você parte para o leste, ao longo da sinuosa trilha.</p>`

    adcItem('Brinco de Ouro (5 PO)',2)
}

function ev203(){ //Chamado por ev187
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Quando você começa a falar, o Goblin olha para cima e sorri. Em seguida, ele dá início a uma metamorfose diante de seus olhos. Torna-se mais alto e esverdeado. Uma grande cauda coberta de esporões se estende de suas costas, seus braços engrossam, e suas mãos desenvolvem garras afiadas. O rosto se deforma e assume as formas de um réptil de olhos vermelhos, boca escancarada e dúzias de dentes aguçados. Ele não é um Goblin, mas um DOPPELGANGER, e você terá que lutar contra ele.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev373()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Doppelganger        10      10
            ---------------------------------
            Se você vencer, vá para 373.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Doppelganger'];inimigo.hab = [10];inimigo.energ = [10]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,203,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev204(){ //Chamado por ev246 ev311
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Cabeça do Martelo de Gillibran') != -1 && equips.nome.indexOf('Cabo do Martelo de Gillibran') != -1){
            ev400()
        }else{
            ev381()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha conduz através do campo até uma ponte de pedra sobre um riacho límpido. Depois da ponte, há pequenas casas e cabanas de madeira, formando uma aldeia. Um letreiro na ponte diz Stonebridge. Você cruza a ponte e vê dois anões velhos com longas barbas brancas, de pé, junto a uma casa, olhando para você.</p>`
}

function ev205(){ //Chamado por ev ; Verificar que evento chama este para determinar o valor de ouro
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev092()
    }

    //TEXTO
    txt.innerHTML = `<p>Cada Pigmeu tem uma pequena bolsa de couro presa em volta do pescoço. Você acha 3 Peças de Ouro em cada. Você pega o ouro e retorna à trilha para continuar sua jornada na direção norte.</p>`
    atualizaStats('ouro',6)
}

function ev206(){ //Chamado por ev076()
    //BOTÃO
    btn1.innerHTML = 'Ajudar a pessoa com dificuldade'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev253()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ignorar os gritos e continuar sua jornada para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev187()
    }

    //TEXTO
    txt.innerHTML = `<p>De repente, você ouve gritos de socorro à sua esquerda, fora da trilha.</p>`
}

function ev207(){ //Chamado por ev352
    //BOTÃO
    btn1.innerHTML = 'Colocar a pulseira no pulso'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev302()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Descer pelo cipó para a trilha e prosseguir para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev109()
    }

    //TEXTO
    txt.innerHTML = `<p>Você passa por cima do corpo do Homem-Macaco e entra na moradia dele. O chão está coberto de ossos de animais e frutas apodrecidas. A cama do Homem-Macaco é feita de musgo e líquens, e parece estar infestada de percevejos. Você tem um arrepio e retorna à plataforma lá fora. Você, então, repara numa pulseira de cobre em volta do pulso do Homem-Macaco.</p>`
}

function ev208(){ //Chamado por ev062() ev086()
    //BOTÃO
    btn1.innerHTML = 'Ir para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev099()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Rumar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev291()
    }

    //TEXTO
    txt.innerHTML = `<p>Você logo chega a um cruzamento. O caminho para o sul leva de volta para a floresta, portanto você decide ignorá-lo.</p>`
}

function ev209(){ //Chamado por ev099
    //BOTÃO
    btn1.innerHTML = 'Aceitar o desafio'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev028()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Recusar educadamente e retornar à trilha na encruzilhada'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev349()
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você entra na cabana, o homenzarrão sorri. Ele parece feliz por vê-lo e começa a falar numa voz profunda.</p>
    <p>- "Bem-vindo, forasteiro. Meu nome é Quin, e ganho a vida com meus braços. Você estaria interessado numa pequena aposta talvez numa queda de braço?</p>`
}

//210-219
function ev210(){ //Chamado por ev090()
    //BOTÃO
    btn1.innerHTML = 'Atacar os Montanheses Selvagens'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev043()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Passar por eles pela trilha enquanto ainda discutem'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev188()
    }

    //TEXTO
    txt.innerHTML = `<p>Os homens xingam e pulam de um lado para o outro de raiva por não o terem acertado. Eles começam a discutir e dar empurrões uns nos outros. Parecem esquecer de você totalmente.</p>`
}

function ev211(){ //Chamado por ev016
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev293()
    }

    //TEXTO
    txt.innerHTML = `<p>Você pega a pequena garrafa com o rotulo Poção Antiveneno na sua mochila e engole o conteúdo. A dor no seu estômago desaparece gradualmente, e você relaxa. Não parece haver muito motivo para ficar aqui por mais tempo, e você caminha até os degraus na parede do outro lado.</p>`

    let indice = equips.nome.indexOf('Poção Antiveneno')
    if(equips.quant[indice] > 1){
        equips.quant[indice]--
    }else{
        equips.quant.splice(indice,1)
        equips.nome.splice(indice,1)
    }
}

function ev212(fugiu){ //Chamado por ev088(); Combate com fuga
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê corre para fora do nicho subindo os degraus')
        ev107()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'                
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>No interior do nicho, você vê mais quatro dos pequenos humanóides. Mas estes estão usando armaduras de couro e têm nas mãos lanças longas. Eles se mexem para atacar, e você é forçado a lutar contra os GUERREIROS-CLONES. Eles avançam sobre você um de cada vez.</p>`
                break
            case 1:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>Você derrotou o primeiro inimigo. Prepare-se para o próximo!</p>`
                break
            case 2:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>Você derrotou o segundo inimigo. Prepare-se para o próximo!</p>`
                break
            case 3:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>Você derrotou o terceiro inimigo. Prepare-se para o próximo!</p>`
                break
            case 4:
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                ev321()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO             HAB     ENERG
                Guerreiro-Clone 1    5       5
                Guerreiro-Clone 2    6       4
                Guerreiro-Clone 3    5       6
                Guerreiro-Clone 4    6       5
                -----------------------------
                Se você vencer, vá para ev321;
                Fugir: ev107
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Guerreiro-Clone 1'];inimigo.hab = [5];inimigo.energ = [5]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,212,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
                case 1:
                    inimigo.nome = ['Guerreiro-Clone 2'];inimigo.hab = [6];inimigo.energ = [4]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,212,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
                case 2:
                    inimigo.nome = ['Guerreiro-Clone 3'];inimigo.hab = [5];inimigo.energ = [6]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,212,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
                case 3:
                    inimigo.nome = ['Guerreiro-Clone 4'];inimigo.hab = [6];inimigo.energ = [5]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,212,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
            }        
        }
    }
}

function ev213(){ //Chamado por ev144
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev306()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha descreve curvas e sinuosidades entre as árvores e moitas, e depois chega a uma outra encruzilhada. Você se dá conta de que o caminho para o sul conduz de volta ao vale, e por isso resolve ignorá-lo e se dirigir ao norte.</p>`
}

function ev214(){ //Chamado por ev237
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev069()
    }

    //TEXTO
    txt.innerHTML = `<p>Você apanha a pequena garrafa contendo a poção curadora e a desarrolha. A dor na sua perna é lancinante, mas rapidamente desaparece à medida em que a poção vai fazendo efeito. Logo, sua perna está totalmente recuperada, e você consegue ficar de pé. Seus olhos estão agora acostumados à escuridão, e você vê que o túnel só tem um metro de altura, e que você terá que engatinhar para poder explorá-lo.</p>`

    let item = equips.nome.indexOf('Poção Curativa')
    if(equips.quant[item] > 1){
        equips.quant[item]--
    }else{
        equips.nome.splice(item,1)
        equips.quant.splice(item,1)
    }
}

function ev215(){ //Chamado por ev293 ev389
    //BOTÃO
    btn1.innerHTML = 'Pegar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev248()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Não tocar'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev201()
    }

    //TEXTO
    txt.innerHTML = `<p>No interior do barril, você encontra um pesado escudo de ferro.</p>`
    ativaEventos.push('ev215')
}

function ev216(){ //Chamado por ev119()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev278()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha conduz ao longo de um espinhaço da colina e termina em uma outra encruzilhada. Você vê que o caminho para o sul leva de volta ao rio, por isso você resolve rumar para o norte outra vez.</p>`
}

function ev217(){//Chamado por ev015
    //BOTÃO
    btn1.innerHTML = 'Beber o conteúdo da garrafa'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev262()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair da caverna e subir de volta para<br>a trilha, levando somente o ouro'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev337()
    }

    //TEXTO
    txt.innerHTML = `<p>Você contorna a massa sem vida do verme para examinar o que há no seu covil. Há diversos esqueletos, talvez pertencentes a outros aventureiros menos afortunados. Ao lado de um deles, você acha uma mochila de couro, e dentro dela 4 Peças de ouro e uma pequena garrafa arrolhada que contém um líquido incolor.</p>`
}

function ev218(itemPago,itemRemov){//Chamado por ev192 ev358
    //(itemPago = retorno da func, itemRemov = nome do item)
    if (itemPago != 1){
        //BOTÃO
        btn1.innerHTML = 'Pagar 5 PO'        
        btn1.addEventListener('click',pagaPO)

        btn2.innerHTML = 'Pagar um tesouro'
        btn2.addEventListener('click',pagaTesouro)
        intUser.appendChild(btn2)

        //TEXTO
        txt.innerHTML = `<p>Você solta um palavrão, enquanto fica imaginando quem preparou essa armadilha infernal. Depois de dez minutos, você ouve passos e começa a entrar em pânico, fazendo desesperados movimentos giratórios no ar, na tentativa de livrar seu pé do laço. Em seguida, um garotinho, vestindo calções de couro verde e camisa verde, aparece andando. Está mascando o que parece ser um osso de galinha. Ele caminha, pára embaixo de você, olha para cima e sorri, dizendo:</p>
        <p>- Ha, ha, alguém está preso na armadilha de árvore do Ogro!</p>
        <p>ocê pede delicadamente a ele que passe sua espada para você.</p>
        <p>- Isso lhe custará 5 Peças de Ouro. Ou talvez você tenha um bom artigo mágico para mim? - ele diz, com os olhos dilatados.</p>
        <p>`

        if (equips.nome.length < 1 && stats.ouro >= 5){
            txt.innerHTML += `<p>Como você não possui tesouros suficientes, você paga 5 PO</p>`
            atualizaStats('ouro',-5)
            avancar()
        } else if (equips.nome.length > 0 && stats.ouro < 5){
            txt.innerHTML += `<p>Como você não possui dinheiro suficiente, terá de pagar com dois tesouros</p>`
            btn1.removeEventListener('click',pagaPO)
            btn2.removeEventListener('click',pagaTesouro)
            intUser.removeChild(btn2)            
            removerItem(1,218) //(Quant,ev)
        } else if (equips.nome.length < 1 && stats.ouro < 5){
            txt.innerHTML += `<p>Como você não possui tesouro ou itens suficientes, você entrega 
            tudo o que tem</p>`
            stats.ouro = 0
            equips.nome = []
            equips.quant = []
            atualizaStats()
            avancar()
        }

        //AÇÕES
        function pagaPO(){
            txt.innerHTML = `<p>O garotinho então passa a espada para você e sai correndo descendo a trilha.</p>`
            atualizaStats('ouro',-5)
            avancar()
        }

        function pagaTesouro(){
            btn1.removeEventListener('click',pagaPO)
            btn2.removeEventListener('click',pagaTesouro)
            intUser.removeChild(btn2)
            removerItem(1,218) //(Quant,ev)
        }    
    } else {
        txt.innerHTML = `<p>Você o paga com ${itemRemov} e o garotinho então passa a espada para você e sai correndo descendo a trilha.</p>`
        avancar()
    }

    function avancar(){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.removeEventListener('click',pagaPO)
        btn2.removeEventListener('click',pagaTesouro)
        btn1.addEventListener('click',alt1)
        intUser.removeChild(btn2)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev274()
        }
         
        txt.innerHTML += `<p>Você corta a corda que prende seu pé e cai pesadamente ao chão. Você se levanta e sacode a poeira de suas roupas.</p>`
    }
}

function ev219(){ //Chamado por ev241
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev300()
    }

    //TEXTO
    txt.innerHTML = `<p>Você nota que o pequeno dardo que está cravado no peito do Urso é feito de prata. Vale 5 Peças de Ouro, e você pode pô-lo na sua mochila.</p>
    <p>Você recupera 1 ponto de SORTE pela sua descoberta.</p>
    <p>Você agora retorna à trilha e ruma para o norte.</p>`

    atualizaStats('sor',1)

    adcItem('Dardo de Prata (5 PO)',1)
}

//220-229
function ev220(){ //Chamado por ev026() ev038() ev047() ev091() ev147() ev353
   //BOTÃO
   btn1.innerHTML = 'Esticar a mão para enfiá-la no buraco'
   btn1.addEventListener('click',alt1)
   function alt1(){
       btn1.removeEventListener('click',alt1)
       btn2.removeEventListener('click',alt2)
       intUser.removeChild(btn2)
       ev275()
   }

   intUser.appendChild(btn2)
   btn2.innerHTML = 'Continuar para o norte'
   btn2.addEventListener('click',alt2)
   function alt2(){
       btn1.removeEventListener('click',alt1)
       btn2.removeEventListener('click',alt2)
       intUser.removeChild(btn2)
       ev115()
   }

    //TEXTO
    txt.innerHTML = `<p>Caminhando ao longo da trilha estreita, você repara numa árvore grande e velha à sua esquerda, cujo tronco possui um grande buraco um pouco acima da altura da sua cabeça.</p>`
}

function ev221(){ //Chamado por ev188 ev238
    //BOTÃO
    btn1.innerHTML = 'Continuar para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev378()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Rumar para o norte novamente'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev199()
    }

    //TEXTO
    txt.innerHTML = `<p>O fundo do vale é coberto de mato verde e luxuriante, e o terreno é plano. Você logo chega a uma outra encruzilhada na trilha.</p>`
}

function ev222(){ //Chamado por ev367
    
    let dano = rolaD6()
    atualizaStats('energ',dano)
    
    //TEXTO
    txt.innerHTML = `<p>Não há como escapar da nuvem de gás venenoso que o cerca por toda parte. Seus pulmões parecem estar explodindo, e você é forçado a inspirar.</p>
    <p>Você sofre ${dano} pontos de dano!</p>`

    if(stats.energAtual > 0){
        txt.innerHTML += `<p>Você vê a nuvem de gás se afastar finalmente, e pode respirar 
        livremente de novo. Não parece haver muito motivo para ficar aqui mais tempo, e você 
        caminha até os degraus na parede do outro lado</p>`

        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev293()
        }
    }else{
        txt.innerHTML += `<p>Você não resiste ao veneno e morre...</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
    atualizaStats()
}

function ev223(){ //Chamado por ev170
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev150()
    }

    //TEXTO
    txt.innerHTML = `<p>A jóia que pende de seu pescoço começa a reluzir. Talvez Arragon não seja tudo que ele diz que é. Você desembainha sua espada e o desafia. A expressão do rosto de Arragon se transforma de confiança em medo. Ele então se desculpa por ter sido tão agressivo, mas explica que estas terras estão infestadas de bandidos e assassinos, e ele tem que se proteger fingindo que é um mago de poderes supremos. Ele implora perdão e oferece a você 5 Peças de Ouro para que você o deixe em paz e não diga a ninguém sobre o disfarce dele. Você aceita a oferta e sai da casa. Caminha de volta para a encruzilhada na passagem e prossegue para o norte.</p>`

    atualizaStats('ouro',5)
}

function ev224(){ //Chamado por ev231
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev332()
    }

    //TEXTO
    txt.innerHTML = `<p>Um dos Gaviões da Morte tem uma fita de metal em torno de uma de suas pernas. Nela, há uma inscrição que diz: "A morte te espera." Você resolve deixar a fita de prata de lado e parte rapidamente para o oeste.</p>`
}

function ev225(){ //Chamado por ev030 ev295
    //BOTÃO
    btn1.innerHTML = 'Engatinhar pelo túnel'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev135()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Subir de volta pela escada e retornar à trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev362()
    }

    //TEXTO
    txt.innerHTML = `<p>Você xinga e sai caminhando da água na direção da entrada do túnel. Você fica surpreso ao ver que ele é iluminado por tochas a intervalos regulares por toda a sua extensão.</p>`
}

function ev226(){ //Chamado por ev021() ev108() ev239()
    //BOTÃO
    btn1.innerHTML = 'Sair da trilha para investigar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev029()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ignorar as vozes e seguir adiante<br>para o norte ao longo da trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev254()
    }

    //TEXTO
    txt.innerHTML = `<p>À direita da trilha, você ouve vozes que discutem numa estranha língua, vindas das árvores.</p>`
}

function ev227(){ //Chamado por ev173; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>A criatura que está prestes a atacar você com suas garras é um CARNIÇAL!</p>
            <p>Ele tem a capacidade de paralisar você, se causar quatro ferimentos separados durante esta batalha. Cuidado!</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev312()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Carniçal             9       7
            ---------------------------------
            Se você vencer, vá para 312.
            Se perder/paralisar você, volte para 2
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Carniçal'];inimigo.hab = [9];inimigo.energ = [7]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,227,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev228(){ //Chamado por ev319
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev255()
    }

    //TEXTO
    txt.innerHTML = `<p>O fosso é circular, com lados lisos, e você está fraco por causa da queda. Você remexe na sua mochila e tira as botas de couro marrom. Elas parecem muito leves em seus pés. Você se agacha e, com um salto poderoso, cai fora do fosso. Você limpa a poeira de suas roupas e continua sua caminhada para o norte, descendo a garganta.</p>`
}

function ev229(){ //Chamado por ev270
    //BOTÃO
    btn1.innerHTML = 'Esquivar (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let esquiva = testeSorte()
        if(esquiva == true){
            ev165()
        }else[
            ev045()
        ]
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você toca a caixa de madeira, a tampa se abre sem que você tenha que levantá-la. Saindo da caixa, surge uma minúscula criatura de pele verde com uma cabeça enorme. Possui um nariz comprido e orelhas pontudas, e suas roupas são feitas de sacos de aninhagem. Você é pego de surpresa, e o GREMLIN tenta esfaqueá-lo com sua adaga.</p>`
}

//230-239
function ev230(){ //Chamado por ev337
    //BOTÃO
    btn1.innerHTML = 'Apanhar uma pedra e jogar no ogro'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev137()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Entrar correndo e atacar o ogro com sua espada'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev290()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Sair da caverna e subir pela trilha'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>Lentamente, você dá uma olhada na caverna e vê a imensa forma de um OGRO caminhando vagarosamente até uma jaula de bambu, com uma terrina de água na sua enorme mão. Está vestido com peles de animais e traz consigo uma clava de pedra no cinto. Parece haver uma pequena criatura pulando de um lado para o outro dentro da jaula.</p>`
}

function ev231(fugiu){ //Chamado por ev034 ev154() ev318 ev356 ev370; Combate com fuga
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê corre para o oeste ao longo da trilha')
        ev332()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'                
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>A trilha faz curvas e meandros e depois vira bruscamente de repente para o oeste. Seguindo no novo rumo; você ouve guinchos em meio às árvores a sua volta. Escuta o ruído de asas batendo e olha para cima, vendo assim três aves grandes que mergulham descendo sobre você. Seus bicos e garras parecem afiados como navalhas. Você tem um segundo para desembainhar sua espada e se defender dos GAVIÕES DA MORTE.</p>`
                break
            case 1:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>Você derrotou o primeiro inimigo. Prepare-se para o próximo!</p>`
                break
            case 2:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>Você derrotou o segundo inimigo. Prepare-se para o próximo!</p>`
                break
            case 3:
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                ev224()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO             HAB     ENERG
                Gavião da Morte 1    4       4
                Gavião da Morte 2    4       3
                Gavião da Morte 3    5       4                
                -----------------------------
                Se você vencer, vá para ev224;
                Fugir: ev332
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Gavião da Morte 1'];inimigo.hab = [4];inimigo.energ = [4]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,231,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
                case 1:
                    inimigo.nome = ['Gavião da Morte 2'];inimigo.hab = [4];inimigo.energ = [3]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,231,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
                case 2:
                    inimigo.nome = ['Gavião da Morte 3'];inimigo.hab = [5];inimigo.energ = [4]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,231,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
            }        
        }
    }
}

function ev232(){ //Chamado por ev117()
    //BOTÃO
    btn1.innerHTML = 'Procurar pela caverna para ver o que contém'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev263()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair da caverna e continuar na direção do norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>Você se agacha sobre o corpo sem vida do Goblin louco e examina a vara presa a seu pescoço. A vara é feita de ébano, e há uma rosca de parafuso numa das extremidades. Você fica excitado ao ver a letra G nitidamente gravada na outra extremidade do que deve ser o cabo do martelo de guerra dos anões. Você coloca o seu achado na mochila.</p>
    <p>você recupera 1 ponto de SORTE.</p>`

    adcItem('Cabo do Martelo de Gillibran',1)
    atualizaStats('sor',1)
}

function ev233(){ //Chamado por ev056() ev245()
    //BOTÃO
    btn1.innerHTML = 'Dar uma olhada mais de perto no poço'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev017()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar a caminhada para o oeste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev238()
    }

    //TEXTO
    txt.innerHTML = `<p>À direita da trilha, você vê um poço de pedra com um balde e uma manivela.</p>`
}

function ev234(){ //Chamado por ev123() ev277()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev382()
    }

    //TEXTO
    txt.innerHTML = `<p>Você chega de volta à encruzilhada na trilha. Ignorando o caminho que vai para o sul, você ruma para o oeste.</p>`
}

function ev235(){ //Chamado por ev082()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev149()
    }

    //TEXTO
    txt.innerHTML = `<p>Você procura rapidamente na sua mochila e retira a pequena garrafa arrolhada que contém a poção. Você engole o líquido. Uma calma se espalha pelo seu corpo, apesar do caos à sua volta.</p>
    <p>Subitamente, a cabana desaba e desmonta no chão. Você decide que está na hora de sair desse lugar e correr de volta para a trilha, rumando para o norte.</p>
    <p>Você recupera 1 ponto de SORTE.</p>`

    atualizaStats('sor',1)
}

function ev236(){ //Chamado por ev375
    //BOTÃO
    btn1.innerHTML = 'Entrar na casa'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev170()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Retornar à encruzilhada na trilha e prosseguir para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev150()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha termina à porta de uma casa de pedra com teto de palha. Uma placa sobre a porta de madeira diz "Arragon o Arquimago".</p>`
}

function ev237(){ //Chamado por ev380
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let item = equips.nome.indexOf('Poção Curativa')
        if(item != -1){
            ev214()
        }else{
            ev304()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você aterrisa pesadamente no chão e ouve um estalo sonoro e assustador. A dor se espalha pela sua perna, e você compreende que ela está quebrada.</p>
    <p>Você perde 2 pontos de SORTE.</p>`

    atualizaStats('sor',-2)
}

function ev238(){ //Chamado por ev017() ev089() ev233
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev221()
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando para o oeste pelo fundo do vale, você passa por uma encruzilhada na trilha, a qual conduz para o sul, de volta às colinas. Você decide continuar caminhando para o oeste.</p>`
}

function ev239(){ //Chamado por ev041 ev160 ev343
    //BOTÃO
    btn1.innerHTML = 'Parar para comer um pouco da fruta'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev037()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Prosseguir para o norte sem parar para comer'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev226()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha continua, abrindo caminho em meio à vegetação espessa, e você se sente um pouco claustrofóbico com as árvores se inclinando sobre você de ambos os lados. Depois de algum tempo, a trilha faz uma curva fechada para a esquerda, onde há uma árvore que dá uma fruta estranha.</p>`
}

//240-249
function ev240(){ //Chamado por ev313
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let item = equips.nome.indexOf('Filtros Nasais')
        if(item != -1){
            ev338()
        }else{
            ev169()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você pressiona suavemente para soltar a tampa da caixa, mas, ao fazê-lo, um gás amarelo escapa envolve seu rosto.</p>`
}

function ev241(){ //Chamado por ev254; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>À medida em que vai abrindo caminho entre as árvores na direção dos grunhidos, você subitamente dá de cara com um enorme URSO PARDO. Há um pequeno dardo cravado em seu peito, e ele parece estar enlouquecido de dor e raiva. Você desembainha sua espada e se prepara para lutar.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev219()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Urso Pardo          7       8
            ---------------------------------
            Se você vencer, vá para 219.            
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Urso Pardo'];inimigo.hab = [7];inimigo.energ = [8]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,241,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev242(itemPago,itemRemov){//Chamado por ev165
    //(itemPago = retorno da func, itemRemov = nome do item)
    if (itemPago != 1){
        //BOTÃO
        btn1.innerHTML = 'Pegar o lingote de ouro e deixar 1 tesouro'        
        btn1.addEventListener('click',pagaTesouro)

        btn2.innerHTML = 'Deixar para lá'
        btn2.addEventListener('click',avancar)
        intUser.appendChild(btn2)

        //TEXTO
        txt.innerHTML = `<p>Remexendo em meio a umas roupas de cama em uma cômoda, você acha um lingote de ouro. Vale 28 Peças de Ouro!</p>`

        if (equips.nome.length == 0){
            txt.innerHTML += `<p>Você o coloca em sua mochila</p>`
            adcItem('Lingote de Ouro (28 PO)',1)
            atualizaStats()
            avancar()
        } else {
            txt.innerHTML += `<p>Contudo, é muito pesado e, se você quiser levá-lo com você, terá que deixar para trás algum outro objeto de sua mochila.</p>`
        }

        //AÇÕES
        function pagaTesouro(){
            btn1.removeEventListener('click',pagaTesouro)
            btn2.removeEventListener('click',avancar)
            intUser.removeChild(btn2)
            removerItem(1,242) //(Quant,ev)
        }    
    } else {
        txt.innerHTML = `<p>Você deixa ${itemRemov} para trás e coloca o Lingote de Ouro em sua mochila.</p>`
        adcItem('Lingote de Ouro (28 PO)',1)
        avancar()
    }

    function avancar(){
        txt.innerHTML += `<p>Não há outra saída na caverna, e você tem que engatinhar de volta pelo túnel para a encruzilhada.</p>`
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.removeEventListener('click',pagaTesouro)
        btn2.removeEventListener('click',avancar)
        btn1.addEventListener('click',alt1)
        intUser.removeChild(btn2)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev121()
        }
    }
}

function ev243(){ //Chamado por ev191
    //BOTÃO
    btn1.innerHTML = 'Doar 1 PO'
    btn1.addEventListener('click',alt1a)
    function alt1a(){
        btn1.removeEventListener('click',alt1a)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        atualizaStats('ouro',-1)
        ev166()
    }

    function alt1b(){
        btn1.removeEventListener('click',alt1b)        
        ev033()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Não doar'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1b)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev033()
    }

    //TEXTO
    txt.innerHTML = `<p>Você diz a ele que sente muito, mas não viu o tal sino de metal. O pobre e velho frade franze o cenho e em seguida pergunta se você gostaria de dar a ele 1 Peça de Ouro por uma boa causa.</p>`
    
    if(stats.ouro <= 0){
        txt.innerHTML += `<p>Você diz a ele que não possui dinheiro para doar.</p>`
        btn1.removeEventListener('click',alt1a)
        btn1.addEventListener('click',alt1b)
        btn1.innerHTML = 'Continuar'
        
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
    }

}

function ev244(){ //Chamado por ev
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev198()
    }

    //TEXTO
    txt.innerHTML = `<p>Os efeitos da febre finalmente desaparecem, e você adormece outra vez, aliviado. De manhã, você recolhe seus pertences, ruma para o norte ao longo da trilha para as colinas.</p>`
}

function ev245(){ //Chamado por ev084 ev146 ev288
    //BOTÃO
    btn1.innerHTML = 'Continuar para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev163()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o oeste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev233()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Ir para o leste'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev393()
    }

    //TEXTO
    txt.innerHTML = `<p>Chegando ao fundo do vale, você descobre que a trilha se bifurca.</p>`
}

function ev246(){ //Chamado por ev279
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev204()
    }

    //TEXTO
    txt.innerHTML = `<p>A mulher BANDIDA pega seus artigos e recua para deixá-lo passar. Você ruma para o norte de novo e logo nota que as árvores estão ficando mais esparsas em ambos os lados da trilha. A trilha acaba por conduzir para fora das árvores a um campo arado. Você está fora da Floresta de Darkwood!</p>`
}

function ev247(){ //Chamado por ev303
    //BOTÃO
    btn1.innerHTML = 'Seguir a seta'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev003()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar indo para o norte pela trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev144()
    }

    //TEXTO
    txt.innerHTML = `<p>O abjeto Pterodáctilo jaz no solo numa massa desconjuntada, no lugar onde caiu depois do golpe fatal de sua espada. Caminhando até ele, você repara numa flecha amarela pintada no capim ao lado da trilha, apontando para o oeste.</p>`
}

function ev248(){ //Chamado por ev215
    if(ativaEventos.indexOf('ev389') == -1){
        //BOTÃO
        btn1.innerHTML = 'Abrir a arca de madeira'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)
            ev389()
        }

        intUser.appendChild(btn2)
        btn2.innerHTML = 'Sair do nicho para subir adiante pelos degraus'
        btn2.addEventListener('click',alt2)
        function alt2(){
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)
            ev088()
        }
    }else{
        //BOTÃO
        btn1.innerHTML = 'Sair do nicho para subir adiante pelos degraus'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev088()
        }
    }
    
    //TEXTO
    txt.innerHTML = `<p>Você agora possui o escudo de um imperador, feito há muito tempo atrás por um mestre-armeiro.</p>
    <p>Você recupera 1 ponto de SORTE!</p>
    <p>O escudo servirá como uma defesa melhor em todas as batalhas futuras. Se uma criatura lhe causar um ferimento, você tem 50% de chance de reduzir o dano em 1 ponto.</p>`

    adcItem('Escudo do Imperador',1)
    atualizaStats('sor',1)
}

function ev249(){ //Chamado por ev005 ev152
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev164()
    }

    //TEXTO
    txt.innerHTML = `<p>Você olha de novo para a estranha caverna e vê os trabalhadores clones humanóides continuando seus trabalhos na plantação de fungos. Você sacode a cabeça sem acreditar e sobe rapidamente os últimos degraus até o buraco no teto da caverna.</p>`
}

//250-259
function ev250(){ //Chamado por ev185 ev324
    //TEXTO
    txt.innerHTML = `<p>O vaso cai ao chão, mas não quebra, embora apareçam rachaduras por toda parte. Você começa a sentir uma vibração e então, nota que há rachaduras que surgem por toda parte na varanda e nos lados da cabana. A vibração fica mais forte - todo o seu corpo começa a tremer, e sua cabeça dá a sensação de estar prestes a explodir.</p>
    <p>Você perde 2 pontos de ENERGIA.</p>`

    atualizaStats('energ',-2)
    if(stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev082()
        }
    }else{
        txt.innerHTML += `<p>Infelizmente você não resiste aos ferimentos e morre...</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
    atualizaStats()
}

function ev251(){ //Chamado por ev142
    //BOTÃO
    btn1.innerHTML = 'Esquivar (HABILIDADE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let atkRoll = rolaD6() + rolaD6()
        if(atkRoll < stats.habAtual){
            window.alert('Você esquivou da flecha!')
            ev063()
        }else{
            atualizaStats('energ',-4)
            if(stats.energAtual > 0){
                window.alert('Você não foi rápido o bastante e a flecha atinge você no ombro!\nVocê sofre 4 pontos de dano!\nVocê arranca a flecha de seu ombro, dolorosamente...')
                ev260()
            }else{
                txt.innerHTML = `<p>Você não foi rápido o suficiente e a flecha atinge você no ombro!</p>
                <p>Você sofre 4 pontos de dano!</p>
                <p>Você não resiste aos ferimentos e morre...</p>
                <h2>FIM DE JOGO</h2>`
                
                btn1.innerHTML = 'Reiniciar Jogo'
                btn1.addEventListener('click',restart)
            }
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você desembainha sua espada, o Centauro lança mão de seu arco e flechas. Antes que você possa chegar até ele, uma flecha é disparada diretamente em você!</p>`
}

function ev252(){ //Chamado por ev329
    //BOTÃO
    btn1.innerHTML = 'Rumar para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev309()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev072()
    }

    //TEXTO
    txt.innerHTML = `<p>Você chega a um cruzamento de quatro caminhos na trilha. O que vai para o sul conduz de volta à floresta, portanto você descarta esta alternativa.</p>`
}

function ev253(){ //Chamado por ev206
    //BOTÃO
    btn1.innerHTML = 'Ajudar o homem a livrar o pé da armadilha'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev344()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Não ajudar e retornar à trilha para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev187()
    }

    //TEXTO
    txt.innerHTML = `<p>Saltando por sobre as raízes retorcidas das velhas árvores, você ruma na direção dos gritos. Depois de poucos minutos, você vê um homem usando vestes longas e escuras com o pé preso por uma armadilha de coelho enferrujada. Seu rosto está encoberto pelos panos e apenas seus olhos, de um marrom escuro, são visíveis.</p>`
}

function ev254(){ //chamado por ev029() ev226() ev383
    //BOTÃO
    btn1.innerHTML = 'Ver que criatura está rosnando'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev241()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ignorar a criatura e continuar para o norte, pela trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev300()
    }

    //TEXTO
    txt.innerHTML = `<p>Mais adiante, na estreita trilha, você ouve um rosnado profundo à sua esquerda nas árvores. </p>`
}

function ev255(){ //Chamado por ev014 ev228
    //BOTÃO
    btn1.innerHTML = 'Arrancar a espada da rocha'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev182()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar caminhando e descendo a garganta'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev334()
    }

    //TEXTO
    txt.innerHTML = `<p>Continuando pela garganta abaixo, você vê o cabo de uma espada projetando-se de uma pedra grande ao lado da trilha.</p>`
}

function ev256(){ //Chamado por ev017() ev089() ev172()
    //BOTÃO
    btn1.innerHTML = 'Agarrar-se (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let reflexo = testeSorte()
        if(reflexo == true){
            ev122()
        }else{
            ev295()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Descendo pela escada, você não repara que há um degrau faltando. Você escorrega e perde o apoio do pé.</p>`
}

function ev257(){ //Chamado por ev110
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev031()
    }

    //TEXTO
    txt.innerHTML = `<p>Dentro da mochila, você acha uns pães élficos que reporão 4 pontos de ENERGIA se você os comer.</p>
    <p>Você recupera 1 ponto de SORTE!</p>`

    atualizaStats('sor',1)
}

function ev258(){ //Chamado por ev132()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev305()
    }

    //TEXTO
    txt.innerHTML = `<p>Você remexe na sua mochila e tira a minúscula flauta de metal. Você tem a estranha sensação de que tem de tocá-la agora, diante do furioso Dragão Alado. Ao fazê-lo, um som suave e delicado flui da flauta, e um olhar de curiosidade aparece no rosto do Dragão Alado. Sua boca fecha, e as pálpebras começam a se fechar. Você está tocando uma mágica Flauta do Sono do Dragão, e a fera não tem forças para resistir à sua canção tranqüilizante. Pouco a pouco, o Dragão Alado vai se deitando no chão e logo está dormindo a sono solto.</p>`
}

function ev259(){ //Chamado por ev155
    //TEXTO
    txt.innerHTML = `<p>Você sente uma sensação de ardência no interior do seu corpo, enquanto mergulha numa febre furiosa. Você pode estar prestes a se tornar você mesmo um Lobisomem!</p>
    <p>perde 3 pontos de ENERGIA.</p>`

    atualizaStats('energ',-3)
    if(stats.energAtual > 0){
        let sorte
        let click = 0
        //BOTÃO
        btn1.innerHTML = 'Continuar (SORTE)'
        btn1.addEventListener('click',alt1)
        function alt1(){
            if(click == 0){
                sorte = testeSorte()
                btn1.innerHTML = 'Continuar'
                if(sorte == true){
                    txt.innerHTML = `<p>Por sorte sua febre vai diminuindo.</p>`
                }else{
                    txt.innerHTML = `<p>A febre continua a tomar conta de seu corpo, e você fica apavorado ao ver pêlos grossos marrons aparecendo nas costas de suas mãos.</p>
                    <p>O choque faz com que você perca mais 2 pontos de ENERGIA.</p>`
                    atualizaStats('energ',-2)

                    if(stats.energAtual == 0){
                        txt.innerHTML += `<p>Você não resiste aos ferimentos e à febre e morre...</p>
                        <h2>FIM DE JOGO</h2>`

                        btn1.innerHTML = 'Reiniciar Jogo'
                        btn1.removeEventListener('click',alt1)
                        btn1.addEventListener('click',restart)
                    }
                }
                click = 1
            }else{
                btn1.removeEventListener('click',alt1)
                if(sorte == true){
                    ev244()
                }else{
                    ev019()
                }
            }
        }
    }else{
        txt.innerHTML += `<p>Você não resiste aos ferimentos e à febre e morre...</p>
        <h2>FIM DE JOGO</h2>`

        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
}

//260-269
function ev260(){ //Chamado por ev251
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev178()
    }

    //TEXTO
    txt.innerHTML = `<p>Ao ver que a flecha não matou você, o Centauro empina sobre as patas traseiras e avança na sua direção a galope. Você tem que saltar de lado para evitar ser atropelado. Ele passa trovejando por você, numa nuvem de poeira, e pára a uns dez metros de distância, mais abaixo na trilha, a mesma pela qual você chegou.</p>
    <p>Talvez lutar contra o nobre Centauro não seja uma idéia tão boa, afinal de contas. Você põe a espada na bainha e resolve atravessar o rio.</p>`
}

function ev261(){ //Chamado por ev001() e ev054()

    //TEXTO
    txt.innerHTML = `<p>Você segue o velho, que bufa e resfolega nas suas vestes esfarrapadas, subindo a escadaria em espiral até um aposento amplo no topo da torre. Prateleiras, armários e estantes cobrem as paredes, todos repletos de garrafas, vidros, armas, peças de armadura e todo tipo de artefato estranho. Yaztromo se arrasta em meio à bagunça geral e se deixa cair numa velha cadeira de carvalho. Ele põe a mão no bolso superior e retira um frágil par de óculos com armação de ouro. Colocando-os no nariz, ele apanha um pedaço de lousa e giz de uma mesa próxima à sua cadeira e começa a escrever freneticamente. Ele então entrega a lousa a você.</p>`
    
    //TABELA
    let secVenda = document.createElement('section')
    let tabVenda = document.createElement('table')
    let cabVenda = document.createElement('thead')
    let corpoVenda = document.createElement('tbody')
    let spnVenda = []
    for(i=0;i < 3;i++){
        spnVenda[i] = document.createElement('span')
        spnVenda[i].setAttribute('id','spn',+i)
        spnVenda[i].setAttribute('class','spnCVenda')
        secVenda.appendChild(spnVenda[i])
    }

    txt.appendChild(secVenda)
    spnVenda[0].appendChild(tabVenda)
    spnVenda[1].innerHTML = `<strong>TOTAL: </strong>`
    spnVenda[2].innerHTML = '<strong>0 PO</strong>'
    tabVenda.appendChild(cabVenda)
    tabVenda.appendChild(corpoVenda)

    let thCod = []
    let trCod = []
    let tdACod = []
    let tdBCod = []
    let chkCod = []
    let lblCod = []
    
    for(i=0;i < 2;i++){
        thCod[i] = document.createElement('th')
        cabVenda.appendChild(thCod[i])        
    }

    for(j=0;j < 17;j++){
        trCod[j] = document.createElement('tr')
        tdACod[j] = document.createElement('td')
        tdBCod[j] = document.createElement('td')
        chkCod[j] = document.createElement('input')
        lblCod[j] = document.createElement('label')

        chkCod[j].setAttribute('id','chk'+j)
        chkCod[j].setAttribute('type','checkbox')
        chkCod[j].addEventListener('change',totalizador)
        lblCod[j].setAttribute('for','chk'+j)
        tdACod[j].setAttribute('class','tdArtigo')

        corpoVenda.appendChild(trCod[j])
        trCod[j].appendChild(tdACod[j])
        trCod[j].appendChild(tdBCod[j])
        tdACod[j].appendChild(chkCod[j])
        tdACod[j].appendChild(lblCod[j])            
    }
    
    secVenda.style.paddingTop = '20px'    
    secVenda.style.width = '300px'
    secVenda.style.margin = 'auto'
    secVenda.style.textAlign = 'center'
    tabVenda.style.width = '300px'
    thCod[0].innerHTML = 'ARTIGO';thCod[1].innerHTML = 'PREÇO'
    let itensVenda = {
        nome: ['Poção Curativa',
        'Poção de Controle das Plantas',
        'Poção da Imobilidade',
        'Poção de Controle dos Insetos',
        'Poção Antiveneno',
        'Água Benta',
        'Anel da Luz',
        'Botas Saltadoras',
        'Corda de Escalada',
        'Rede de Aprisionamento',
        'Braçadeira da Força',
        'Luva de Destreza de Arremesso',
        'Vara de Encontrar Água',
        'Cabeças de Alho',
        'Fita de Cabeça da Concentração',
        'Cápsulas de Fogo',
        'Filtros Nasais',
        ],
        val: ['3 PO',
        '2 PO',
        '3 PO',
        '2 PO',
        '2 PO',
        '3 PO',
        '3 PO',
        '2 PO',
        '3 PO',
        '3 PO',
        '3 PO',
        '2 PO',
        '2 PO',
        '2 PO',
        '3 PO',
        '3 PO',
        '3 PO',
        ]
    }
    
    for(i=0;i<17;i++){
        lblCod[i].innerHTML = itensVenda.nome[i]
        tdBCod[i].innerHTML = itensVenda.val[i]
    }

    let tot = 0
    function totalizador(){
        tot = 0
        for(i=0;i < 17;i++){
            if(chkCod[i].checked == true){
                tot += Number(itensVenda.val[i].substring(0,1))
            }
        }
        spnVenda[2].innerHTML = `<strong>${tot} PO</strong>`
    }

    let divPosTxt = document.createElement('div')
    txt.appendChild(divPosTxt)
    divPosTxt.innerHTML += `<p>Ele diz a você que todas as instruções para uso estão escritas claramente nos rótulos pregados aos artigos, juntamente com uma utilização sugerida. Ele suspira e informa a você que, infelizmente, a mágica dos artigos só funciona uma vez, mas são os melhores que você pode comprar por esses preços. </p>`

    //BOTÃO
    btn1.innerHTML = 'Confirmar'
    btn1.addEventListener('click',compraItem)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev177()
    }

    function compraItem(){        
        if(tot <= stats.ouro){
            atualizaStats('ouro',- tot)
            for(i=0;i < 17;i++){
                if(chkCod[i].checked == true){
                    adcItem(itensVenda.nome[i],1)
                }
            }

            btn1.innerHTML = 'Continuar'
            btn1.removeEventListener('click',compraItem)
            btn1.addEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            intUser.removeChild(btn2)

            txt.innerHTML = `<p>Yaztromo pergunta, então, a você a razão que o leva a comprar estes artigos, e você conta a ele sua história e sua decisão de dar continuidade à missão do desafortunado Perna Grande.</p>
            <p>- Ah, sim - diz Yaztromo lentamente, esfregando o queixo - Ouvi dizer que os bons anões de Stonebridge haviam perdido seu lendário martelo de guerra. Sem ele, o rei de lá não consegue mobilizar seu povo, apesar do fato de que os trolls das colinas estão ameaçando a aldeia.</p>
            <p>- Os boatos contam que um rei invejoso de uma outra aldeia de anões, enviou uma águia a Stonebridge para roubar o martelo, o que conseguiu fazer. Mas, ao voar de volta por sobre Darkwood, foi atacada por gaviões da morte, e o martelo caiu na floresta e se perdeu.</p>
            <p>- Aparentemente, dois goblins da floresta encontraram o martelo, mas não conseguiam resolver quem ficaria com ele. Eles lutaram durante horas, mas acabaram desistindo. Então, descobriram que o cabo desatarraxava da cabeça, e a pendência foi resolvida. Um ficou com a cabeça, e o outro levou o cabo. Depois, eles se separaram, cada um deles feliz com seu novo tesouro. Quem sabe se eles ainda os têm.</p>
            <p>- Portanto, temo que seus problemas são dobrados. Posso lhe dizer que a cabeça é feita de bronze, e o cabo de ébano polido. Tanto a cabeça quanto o cabo têm a letra G gravada neles. Sua tarefa não é fácil. Boa sorte.</p>
            <p>Você agradece a Yaztromo e deixa o aposento pela escadaria em espiral.</p>`
        }else{
            window.alert('Você não possui dinheiro suficiente para esta compra!\nConfira os itens e tente novamente.')
        }
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Limpar'
    btn2.addEventListener('click',alt2)
    function alt2(){
        for(i=0;i < 17;i++){
            chkCod[i].checked = false
        }
        tot = 0
        spnVenda[2].innerHTML = `<strong>${tot} PO</strong>`
    }
}

function ev262(){ //Chamado por ev217
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev337()
    }

    //TEXTO
    txt.innerHTML = `<p>Você olha para a garrafa na sua mão e, em seguida, engole rapidamente o conteúdo. Você espera vários segundos por alguma reação, mas nada acontece. Porém, quando você vai apanhar sua espada, que havia deixado no chão para examinar a mochila, uma onda de confiança se espalha pelo seu corpo.</p>
    <p>O líquido é uma Poção de Habilidade com Armas, que permitirá que você some 1 ponto aos lances de dados futuros para determinar sua própria Força de Ataque durante os combates. Seu efeito perdura para os próximos dois encontros com batalha.</p>
    <p>Pegando o ouro, você se esgueira para fora da caverna barrenta para a trilha acima e continua sua jornada na direção do norte.</p>`

    bonusAtkTemp.pocHabArmas[0] = 2
    atualizaStats('atk',bonusAtkTemp.pocHabArmas[1])
}

function ev263(){ //Chamado por ev232
    //BOTÃO
    btn1.innerHTML = 'Abrir a caixa de prata'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev126()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair da caverna e subir a trilha para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>Não há muita coisa de interesse a ser encontrada na caverna. Uma cama de palha, recipientes de pedra, uma mesa e uma cadeira são tudo que está imediatamente visível, mas, numa prateleira de pedra acima da cama, uma pequena caixa de prata chama a sua atenção.</p>`
}

function ev264(){ //Chamado por ev069()
    //BOTÃO
    btn1.innerHTML = 'Observar o fungo de topo roxo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev367()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Rumar na direção do fungo de topo verde'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev189()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Rumar na direção do fungo de topo vermelho'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev282()
    }

    //TEXTO
    txt.innerHTML = `<p>O pequeno humanóide é um clone e não tem vontade própria. Não oferece resistência.. Sua espada separa sua cabeça dos ombros dele e a atira no chão. Os outros não reparam na sua presença. Você fica imaginando quem controla todos eles.</p>
    <p>Subitamente, você nota que o clone humanóide que você decapitou está se dissolvendo numa poça de líquido roxo, e um novo fungo brota do solo. À medida em que o fungo cresce, a poça roxa é absorvida pelo solo. O fungo tem um topo roxo que gira, se movendo para encarar você.</p>`
}

function ev265(){ //Chamado por ev190; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Os baques e ruídos vão ficando mais altos, e, de repente, você vê uma perna enorme aparecer na sua frente. Olhando para cima, você vê que a perna pertence a um homem de uns cinco metros de altura. Ele está usando roupas de lona marrom e botas de pele. Parece estar com pressa e vai destruindo o mato rasteiro como se não existisse. É um GIGANTE DA FLORESTA. Ao ver você, seus olhos se arregalam, e ele ergue sua grande clava de madeira. Você tem que lutar contra ele.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev356()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO                 HAB     ENERG
            Gigante da Floresta     9       9
            ---------------------------------
            Se você vencer, vá para 356.            
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Gigante da Floresta'];inimigo.hab = [9];inimigo.energ = [9]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,265,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev266(){ // chamado por ev028()
    let apostaQuin = 0
    /*Se houver mais itens que valham 10 PO:
        - Reativar este código
        - Desativar o código abaixo
        - Alterar código do btn2 para pagamento com item

    let item10PO = ['Anel de Ouro (10 PO)']
    let possuiItem = false
    for(i=0;i<item10PO.length;i++){
        if(equips.nome.indexOf(item10PO[i]) != -1){
            possuiItem = true
        }
    }
    */

    //Substituir este código pelo de cima caso haja mais itens que valham 10 PO
    let possuiItem = false
    if(equips.nome.indexOf('Anel de Ouro (10 PO)') != -1){
        possuiItem = true
    }

    //TEXTO
    txt.innerHTML = `<p>Quin explica que ele apostará uma quantidade de Poeira da Levitação contra um artigo ou moedas no valor de 10 Peças de Ouro.</p>`

    if(stats.ouro >= 10 && possuiItem == true){//Possui item e dinheiro
        //2 botoes        
        btn1.innerHTML = 'Apostar 10 PO'
        btn1.addEventListener('click',alt1a)
        function alt1a(){
            btn1.removeEventListener('click',alt1a)
            btn2.removeEventListener('click',alt2a)
            btn3.removeEventListener('click',alt3)
            intUser.removeChild(btn2)
            intUser.removeChild(btn3)
            txt.innerHTML += 'Você aposta 10 PO'
            apostaQuin = 'ouro'
            avancar()
        }

        intUser.appendChild(btn2)
        btn2.innerHTML = 'Apostar um item'
        btn2.addEventListener('click',alt2a)
        function alt2a(){
            //Alterar esta função caso haja mais itens que valham 10 PO
            btn1.removeEventListener('click',alt1a)
            btn2.removeEventListener('click',alt2a)
            btn3.removeEventListener('click',alt3)
            intUser.removeChild(btn2)
            intUser.removeChild(btn3)
            apostaQuin = 'item'
            avancar()
        }

        intUser.appendChild(btn3)
        btn3.innerHTML = 'Recusar educadamente e<br>retornar à trilha na encruzilhada'
        btn3.addEventListener('click',alt3)
        function alt3(){
            btn1.removeEventListener('click',alt1a)
            btn2.removeEventListener('click',alt2a)
            btn3.removeEventListener('click',alt3)
            intUser.removeChild(btn2)
            intUser.removeChild(btn3)
            ev349()
        }
    }else if(stats.ouro >= 10){//Possui apenas dinheiro
        txt.innerHTML += `<p>Como você não possui itens nesse valor, só poderá apostar 10 PO.</p>`

        btn1.innerHTML = 'Apostar 10 PO'
        btn1.addEventListener('click',alt1b)
        function alt1b(){
            btn1.removeEventListener('click',alt1b)
            btn2.removeEventListener('click',alt2b)
            intUser.removeChild(btn2)
            txt.innerHTML += 'Você aposta 10 PO'
            apostaQuin = 'ouro'
            avancar()
        }

        intUser.appendChild(btn2)
        btn2.innerHTML = 'Recusar educadamente e<br>retornar à trilha na encruzilhada'
        btn2.addEventListener('click',alt2b)
        function alt2b(){
            btn1.removeEventListener('click',alt1b)
            btn2.removeEventListener('click',alt2b)
            intUser.removeChild(btn2)
            ev349()
        }
    }else if(possuiItem == true){//Possui apenas item
        txt.innerHTML += `<p>Como você não possui esse valor em ouro, só pode apostar seu Anel de Ouro.</p>`
        
        btn1.innerHTML = 'Apostar um item'
        btn1.addEventListener('click',alt1c)
        function alt1c(){
            //Alterar esta função caso haja mais itens que valham 10 PO
            btn1.removeEventListener('click',alt1c)
            btn2.removeEventListener('click',alt2c)
            intUser.removeChild(btn2)
            txt.innerHTML += `<p>Você aposta o Anel de Ouro.</p>`
            apostaQuin = 'item'
            avancar()
        }

        intUser.appendChild(btn2)
        btn2.innerHTML = 'Recusar educadamente e<br>retornar à trilha na encruzilhada'
        btn2.addEventListener('click',alt2c)
        function alt2c(){
            btn1.removeEventListener('click',alt1a)
            btn2.removeEventListener('click',alt2c)
            intUser.removeChild(btn2)
            ev349()
        }
    }else{//Não possui nada
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1d)
        function alt1d(){
            btn1.removeEventListener('click',alt1d)
            ev349()
        }
        txt.innerHTML += `<p>Você pede desculpas e diz que não possui esse valor em ouro ou nem em itens, se despede e retorna à trilha na encruzilhada.</p>`
    }

    function avancar(){
        let sucesso = 0
        txt.innerHTML += `<p>Você se senta à mesa defronte a ele. Você coloca o cotovelo na mesa e entrelaça sua mão com a dele. A pegada dele é como uma prensa de ferro, e os olhos escuros e repuxados que tem parecem confiantes. Seus bíceps estufam, e ele dá o sinal para que a contenda se inicie.</p>`
        btn1.innerHTML = 'Empurrar (HABILIDADE)'
        btn1.addEventListener('click',empurra)
        function empurra(){
            let testeHab = rolaD6() + rolaD6()
            if(testeHab <= stats.habAtual){
                sucesso++
                switch (sucesso){
                    case 1:
                        txt.innerHTML = `<p>Você consegue, com grande esforço, empurrar o braço um pouco para baixo. Ele é forte e não cederá com facilidade.</p>`
                        break
                    case 2:
                        txt.innerHTML = `<p>Você se esforça mais e mais e empurrar o braço um pouco mais para baixo. Está quase lá!</p>`
                        break
                    case 3:
                        btn1.removeEventListener('click',empurra)
                        ev354()
                        break
                }    
            }else{
                btn1.innerHTML = 'Continuar'
                btn1.removeEventListener('click',empurra)
                btn1.addEventListener('click',perda)
                function perda(){
                    btn1.removeEventListener('click',perda)
                    ev129()
                }

                if(apostaQuin == 'ouro'){
                    atualizaStats('ouro',-10)
                }else{
                    let indice = equips.nome.indexOf('Anel de Ouro (10 PO)')
                    equips.quant.splice(indice,1)
                    equips.nome.splice(indice,1)
                }

                txt.innerHTML = `<p>Seu braço cede diante da força de Quin e encosta no tampo da mesa...</p>
                <p>Você perdeu a aposta e entrega o ${apostaQuin}.</p>`                
            }
        }
    }
}

function ev267(){ //Chamado por ev140
    //BOTÃO
    btn1.innerHTML = 'Entrar na caverna'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev196()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Retornar à encruzilhada e seguir para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev025()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha conduz à entrada de uma grande caverna e não parece prosseguir mais para o leste.</p>`
}

function ev268(){ //Chamado por ev325
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev119()
    }

    //TEXTO
    txt.innerHTML = `<p>Você procura rapidamente na sua mochila e retira as Cabeças de Alho. Os Morcegos Vampiros se aproximam de você, mas se desviam no último minuto, guinchando alto. Eles circulam sobre você, ansiosos para beber seu sangue, mas o alho os mantém à distância. Depois de algum tempo, eles acabam voando para longe em busca de uma outra presa. Deixando o alho a seu lado, você se instala para dormir de novo.</p>
    <p>De manhã, você recolhe seus pertences e ruma para o norte ao longo da trilha.</p>`
}

function ev269(){ //Chamado por ev069() ev189()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev293()
    }

    //TEXTO
    txt.innerHTML = `<p>Você grita com os dois humanóides que estão tomando conta de um roçado de fungos de topo verde. Eles ignoram você, continuando com o trabalho deles. Você pega um dos fungos, parte um pedaço do topo, e começa a comer. O gosto é bom e o alimento dá força a seu corpo.</p>
    <p>Você recupera 4 pontos de ENERGIA!</p>
    <p>Não parece haver muito motivo para ficar aqui mais tempo, e você caminha na direção dos degraus na parede do outro lado.</p>`

    atualizaStats('energ',4)
}

//270-279
function ev270(){ //Chamado por ev093() ev284()
    //BOTÃO
    btn1.innerHTML = 'Erquer a tampa da caixa'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev229()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Retornar à encruzilhada no túnel'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev121()
    }

    //TEXTO
    txt.innerHTML = `<p>O túnel termina na entrada de uma caverna. Ao entrar numa caverna, você vê que o teto não é mais alto do que o túnel, e que você não tem como ficar de pé. A caverna é o covil de alguma criatura inteligente, pois contém pequenas peças de mobiliário. Há uma caixa de madeira com pouco mais de um metro de comprimento no fundo da caverna.</p>`
}

function ev271(itemPago,itemRemov){//Chamado por ev012 ev307
    //(itemPago = retorno da func, itemRemov = nome do item)
    if (itemPago != 1){
        var checaPatrim = 0
        var nPaga = false

        //TEXTO
        txt.innerHTML = `<p>Você se aproxima do Gnomo com o braço estendido, oferecendo-se para apertar a mão dele, um convite que ele aceita com uma expressão de dúvida no rosto. Você então conta a ele sobre sua missão, como você conheceu o pobre Perna Grande, e porque decidiu ajudar os anões de Stonebridge.</p>
        <p>Você pergunta se ele tem alguma informação que pudesse ajudá-lo. Ele responde que ele não se importa muito com anões, mas que de fato possui informações que poderiam ser úteis para você. Porém, essa informação custará 5 Peças de Ouro ou um artigo do tesouro na sua mochila.</p>`

        if (equips.nome.length < 1 && stats.ouro >= 5){//Só ouro
            txt.innerHTML += `<p>Como você não possui tesouros suficientes, poderá pagar somente paga 5 PO</p>`
            checaPatrim = 'Só ouro'
        
            //BOTÕES
            btn1.innerHTML = 'Pagar 5 PO'
            btn1.addEventListener('click',pagaPO)
        
            intUser.appendChild(btn3)
            btn3.innerHTML = 'Não pagar e partir pela trilha para o oeste'
            btn3.addEventListener('click',sair)
        } else if (equips.nome.length > 0 && stats.ouro < 5){//Só item
            txt.innerHTML += `<p>Como você não possui dinheiro suficiente, terá de pagar com dois tesouros</p>`
            checaPatrim = 'Só item'
            
            intUser.removeChild(btn1)

            intUser.appendChild(btn2)
            btn2.innerHTML = 'Pagar um tesouro'
            btn2.addEventListener('click',pagaTesouro)

            intUser.appendChild(btn3)
            btn3.innerHTML = 'Não pagar e partir pela trilha para o oeste'
            btn3.addEventListener('click',sair)
        } else if (equips.nome.length < 1 && stats.ouro < 5){//Nada
            txt.innerHTML += `<p>Como você não possui dinheiro ou itens suficientes, você diz o que pensa dele e parte pela trilha para o oeste.</p>`
            checaPatrim = 'Nada'
            
            nPaga = true
            avancar(checaPatrim)
        }else{
            checaPatrim = 'Tudo'

            //BOTÃO
            btn1.innerHTML = 'Pagar 5 PO'
            btn1.addEventListener('click',pagaPO)

            intUser.appendChild(btn2)
            btn2.innerHTML = 'Pagar um tesouro'
            btn2.addEventListener('click',pagaTesouro)

            intUser.appendChild(btn3)
            btn3.innerHTML = 'Não pagar e partir pela trilha para o oeste'
            btn3.addEventListener('click',sair)
        }

        
    } else {
        txt.innerHTML = `<p>Você o paga com ${itemRemov}.</p>`
        avancar(checaPatrim)
    }

    //AÇÕES
    function pagaPO(){
        txt.innerHTML = `<p>Você o paga 5 PO.</p>`
        atualizaStats('ouro',-5)
        avancar(checaPatrim)
    }

    function pagaTesouro(){
        if(checaPatrim == 'Só item'){
            intUser.appendChild(btn1)
        }else{
            btn1.removeEventListener('click',pagaPO)
        }
        checaPatrim = 'Item pago'
        btn2.removeEventListener('click',pagaTesouro)
        btn3.removeEventListener('click',sair)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        removerItem(1,271) //(Quant,ev)
    }

    function sair(){
        nPaga = true
        txt.innerHTML = `<p>Você diz a ele o que pensa dele e parte para o oeste pela trilha.</p>`
        avancar(checaPatrim)
    }

    function avancar(opt){
        btn1.innerHTML = 'Continuar'
        if(opt == 'Só ouro'){
            btn1.removeEventListener('click',pagaPO)
            btn1.addEventListener('click',alt1)
            btn3.removeEventListener('click',sair)
            intUser.removeChild(btn3)
        }else if(opt == 'Item pago'){
            btn1.addEventListener('click',alt1)
        }else if(opt == 'Só item'){
            intUser.appendChild(btn1)
            btn1.addEventListener('click',alt1)
            btn2.removeEventListener('click',pagaTesouro)
            btn3.removeEventListener('click',sair)
            intUser.removeChild(btn2)
            intUser.removeChild(btn3)
        }else if(opt == 'Nada'){
            btn1.addEventListener('click',alt1)
        }else{
            btn1.removeEventListener('click',pagaPO)
            btn1.addEventListener('click',alt1)
            btn2.removeEventListener('click',pagaTesouro)
            btn3.removeEventListener('click',sair)
            intUser.removeChild(btn2)
            intUser.removeChild(btn3)
        }
    }

    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(nPaga == true){
            ev067()
        }else{
            ev297()
        }
    }
}

function ev272(){ //Chamado por ev128()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev394()
    }

    //TEXTO
    txt.innerHTML = `<p>Esta é a última vez em que você vai fazer um favor a alguém por algum tempo! Retornando à trilha, você ruma para o norte de novo.</p>`
}

function ev273(){ //Chamado por ev071()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev296()
    }

    //TEXTO
    txt.innerHTML = `<p>Você pega o medalhão no pescoço do Gremlin caído. É feito de ouro e vale 9 Peças de Ouro. Não há nada mais que seja de uso ou valor na caverna. Não há outra saída na caverna, e você tem que engatinhar de volta, descendo o túnel até a encruzilhada.</p>`

    adcItem('Medalhão de Ouro (9 PO)',1)
}

function ev274(){//Chamado por ev040 ev218
    //BOTÃO
    btn1.innerHTML = 'Subir pelo cipó até a casa da árvore'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev195()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar caminhando para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev109()
    }

    //TEXTO
    txt.innerHTML = `<p>Você repara num cipó nodoso que pende até o chão de uma árvore à sua esquerda. Você olha para cima e vê uma casa de árvore de construção rústica em meio aos galhos.</p>`
}

function ev275(){ //Chamado por ev220
    //BOTÃO
    btn1.innerHTML = 'Experimentar o elmo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev179()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Deixá-lo de lado e continuar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev115()
    }

    //TEXTO
    txt.innerHTML = `<p>Você põe sua mão lentamente no buraco escuro. Ela entra em contato com alguma coisa fria e dura. Parece ser uma cumbuca de metal. Quando você começa a levantá-la para tirá-la do buraco, sente uma dor forte quando os dentes afiados de alguma criatura pequena repentinamente mordem seu braço. Você tira o braço rapidamente, sem largar sua descoberta. O sangue de seu ferimento pinga no chão.</p>
    <p>Você perde 1 ponto de ENERGIA.</p>
    <p>Logo você vê que não encontrou uma cumbuca de metal afinal. Trata-se de um elmo de bronze e parece ser mais ou menos do seu tamanho.</p>`

    atualizaStats('energ',-1)
}

function ev276(){ //Chamado por ev364; Combate múltiplo sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Quando você recua para atacar o cavaleiro mascarado, o maior dos quatro cães salta sobre você, o que o obriga a lutar contra ele primeiro.</p>`
            break
        case 1:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu o Cão de Caça! Outros 3 se aproximam junto de 
            seu dono!</p>
            <p>Prepare-se para lutar!</p>`
            break
        case 2:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você venceu o primeiro time! Prepare-se para o outro!</p>`
            break
        case 3:
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev062()        
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Cão de Caça         7       6

            1º par
            Cão de Caça         6       6
            Cão de Caça         5       6

            2º par
            Cão de Caça         6       5
            Mascarado           8       7
            
            Se você vencer, vá para 62.
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Cão de Caça 1'];inimigo.hab = [7];inimigo.energ = [6]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,276,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 1:
                inimigo.nome = ['Cão de Caça 2','Cão de Caça 3'];inimigo.hab = [6,5];inimigo.energ = [6,6]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,276,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 2:
                inimigo.nome = ['Cão de Caça 4','Mascarado'];inimigo.hab = [6,8];inimigo.energ = [5,7]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,276,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }    
}

function ev277(){ //Chamado por ev020() ev115()
    //BOTÃO
    btn1.innerHTML = 'Fugir correndo de volta para a encruzilhada'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev234()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Lutar contra o Homem-Árvore'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev114()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha continua para o leste por uma certa distância e depois faz uma curva abrupta para o norte, estreitando-se levemente. As árvores parecem invadir a trilha mais ainda do que o habitual, e um latejar que desce pela sua espinha diz que alguma coisa não está normal.</p>
    <p>Repentinamente, um galho de uma das árvores golpeia você, derrubando-o ao chão. Você perde 1 ponto de ENERGIA.</p>
    <p>Você se levanta cambaleando e vê que a árvore se deslocou para a trilha, bloqueando sua passagem. A árvore é velha, de casca grossa e sulcada. Você consegue com dificuldade visualizar os olhos e boca escondidos no meio do tronco e se dá conta de que foi atacado por um HOMEM ÁRVORE.</p>`
}

function ev278(){ //Chamado por ev198 ev216
    //BOTÃO
    btn1.innerHTML = 'Continuar (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        
        if(testeSorte() == true){
            window.alert('Você consegue evitar a quedra sobre a estaca de madeira, mas, ainda assim, cai pesadamente no chão.\nVocê sofre 2 pontos de dano!')
            atualizaStats('energ',-2)
        }else{
            window.alert('A ponta da estaca rasga sua perna quando você cai.\nVocê sofre 2 pontos de dano pela queda mais 2 pontos de dano pelo ferimento na perna!')
            atualizaStats('energ',-4)
        }

        if(stats.energAtual > 0){
            ev319()
        }else{
            txt.innerHTML = `<p>Você não resiste aos ferimentos e morre...</p>
            <h2>FIM DE JOGO</h2>`

            btn1.innerHTML = 'Reiniciar Jogo'
            btn1.addEventListener('click',restart)
        }
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha cruza uma garganta estreita entre duas colinas. Você se sente vulnerável e desembainha sua espada, esperando ser emboscado a qualquer momento. Infelizmente, por você estar concentrado em observar os lados da garganta, não vê um pequeno amontoado de folhas e galhos na trilha adiante. Seu pé atravessa diretamente a cobertura fina de uma armadilha para ursos, e você despenca por quatro metros até o fundo de um fosso rochoso.</p>
    <p>Para aumentar a sua desgraça, uma estaca de madeira com uma ponta aguçada está cravada no centro do fosso.</p>`
}

function ev279(){ //Chamado por ev360 ***VERIFICAR QUE EVENTO CHAMA ESTE ***
    let quantEquip = equips.nome.length
    let txtQuant = []
    let tabListaEquip = document.createElement('table')    
    let corpoTabListaEquip = document.createElement('tbody')
    let tdTabListaEquip = []
    let trTabListaEquip = []

    tabListaEquip.appendChild(corpoTabListaEquip)


    //TEXTO
    txt.innerHTML = `<p>Defina os itens quantidade que você vai entregar:</p>`
    
    for(i=0; i <= quantEquip;i++){
        trTabListaEquip.push(document.createElement('tr'))
        corpoTabListaEquip.appendChild(trTabListaEquip[i])
        for(j=0;j < 2;j++){
            tdTabListaEquip.push(document.createElement('td'))            
            corpoTabListaEquip.appendChild(tdTabListaEquip[tdTabListaEquip.length - 1])
            if(j==0){
                tdTabListaEquip[tdTabListaEquip.length - 1].setAttribute('class','colItens')
                if(i == quantEquip){
                    tdTabListaEquip[tdTabListaEquip.length - 1].innerHTML = 'Ouro'
                }else{
                    tdTabListaEquip[tdTabListaEquip.length - 1].innerHTML = `${equips.nome[i]}`
                }
            }else{
                tdTabListaEquip[tdTabListaEquip.length - 1].setAttribute('class','colTxt')
                txtQuant.push(document.createElement('input'))
                txtQuant[i].setAttribute('id','txtQuant'+i)
                txtQuant[i].setAttribute('type','number')
                txtQuant[i].setAttribute('max',equips.quant[i])
                txtQuant[i].setAttribute('min',0)
                txtQuant[i].setAttribute('class','txtQuant')
                txtQuant[i].setAttribute('value',0)
                tdTabListaEquip[tdTabListaEquip.length - 1].appendChild(txtQuant[i])
                if(i == quantEquip){
                    txtQuant[i].setAttribute('max',stats.ouro)
                    tdTabListaEquip[tdTabListaEquip.length - 1].innerHTML += ` / ${stats.ouro}`
                }else{
                    tdTabListaEquip[tdTabListaEquip.length - 1].innerHTML += ` / ${equips.quant[i]}`
                }
            }
        }
    }
    
    txt.appendChild(tabListaEquip)
    tabListaEquip.setAttribute('id','tabListaEquip')

    //BOTÃO    
    btn1.innerHTML = 'Confirmar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        let somaItem = 0
        let val = 0
        let elemento = []
        let itemRemov = {nome:[],quant:[]}
        for(i=0;i <= quantEquip;i++){
            elemento[i] = document.getElementById('txtQuant'+i)
            val = Number(elemento[i].value)
            if(val > 0){
                somaItem += val
                if(i == quantEquip){
                    itemRemov.nome.push('Ouro')
                }else{
                    itemRemov.nome.push(equips.nome[i])
                }
                itemRemov.quant.push(val)
            }            
        }

        if(somaItem == 5){
            for(i=0;i < itemRemov.nome.length;i++){
                let indiceEquip = equips.nome.indexOf(itemRemov.nome[i])
                if(indiceEquip == -1){
                    atualizaStats('ouro',-itemRemov.quant[i])
                }else{
                    equips.quant[indiceEquip] -= itemRemov.quant[i]
                }
                
                if(equips.quant[indiceEquip] < 1){
                    equips.nome.splice(indiceEquip,1)
                    equips.quant.splice(indiceEquip,1)
                }
            }

            for(let i=1;i <= tdTabListaEquip.length;i++){                
                corpoTabListaEquip.removeChild(tdTabListaEquip[tdTabListaEquip.length - i])
            }
            
            for(let i=1;i<=trTabListaEquip.length;i++){
                corpoTabListaEquip.removeChild(trTabListaEquip[trTabListaEquip.length - i])
            }

            btn1.removeEventListener('click',alt1)
            txt.removeChild(tabListaEquip)
            window.alert(`Você entregou ${itemRemov.nome}.`)
            ev246()
        }else{
            window.alert('Você precisa oferecer 5 itens')
        }
    }
}

//280-289
function ev280(){ //Chamado por ev390
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev306()
    }

    //TEXTO
    txt.innerHTML = `<p>Sua caminhada para o oeste é árdua mas sem novidades. Você passa por duas ramificações da trilha que conduzem para o sul, as quais você ignora. Finalmente, você chega a uma encruzilhada. Mais uma vez ignorando o caminho para o sul, você ruma para o norte.</p>`
}

function ev281(){ //Chamado por ev089() ev172() ev359
    //BOTÃO
    btn1.innerHTML = 'Seguir para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev163()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev393()
    }

    //TEXTO
    txt.innerHTML = `<p>Você chega a um cruzamento. O caminho para o sul leva de volta para as colinas, portanto, você decide não optar por esta alternativa.</p>`
}

function ev282(){ //Chamado por ev264
    //BOTÃO
    btn1.innerHTML = 'Comer um pouco de fungo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev016()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair da caverna pelos degraus da parede do outro lado'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev293()
    }

    //TEXTO
    txt.innerHTML = `<p>Os fungos de topo vermelho estão sendo cuidados por três dos humanóides.</p>`
}

function ev283(){ //Chamado por ev134 ev199
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev303()
    }

    //TEXTO
    txt.innerHTML = `<p>Seus ferimentos saram diante dos seus olhos, devido às propriedades mágicas da lama.</p>
    <p>Você recupera 4 pontos de ENERGIA!</p>
    <p>Sentindo-se muito melhor, você parte para o norte de novo ao longo da trilha.</p>`

    atualizaStats('energ',4)
}

function ev284(){ //Chamado por ev135() ev296
    //BOTÃO
    btn1.innerHTML = 'Rumar para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev081()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Dirigir-se ao sul'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev270()
    }

    //TEXTO
    txt.innerHTML = `<p>Você logo chega a uma outra encruzilhada no túnel.</p>`
}

function ev285(){ //Chamado por ev145 ev162; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você já está dormindo há mais ou menos uma hora, quando o ruído de rosnados profundos faz com que você acorde. Você se levanta sem fazer barulho e pega sua espada. Fica esperando e escutando. Há uma lua cheia no céu, e o lugar projeta sombras fantasmagóricas por toda parte. Você ouve passos macios e o som de um animal que fareja, seguidos por outro rosnado grave.</p>
            <p>Então, uma forma que se assemelha a de um homem surge das sombras à sua direita; quando ele se aproxima, você vê que seus braços, peito e rosto são cobertos de pêlos marrons e grossos, e que dentes compridos emergem de sua boca. É um LOBISOMEM, e você terá que lutar contra ele.</p>`

            ativaEventos.push(stats.energAtual)
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev388()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO         HAB     ENERG
            Lobisomem       8       9
            ---------------------------------
            Se você vencer, vá para 388.            
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Lobisomem'];inimigo.hab = [8];inimigo.energ = [9]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,285,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev286(){ //Chamado por ev187; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Quando você ergue a espada para desferir o primeiro golpe, a criatura começa a se metamorfosear diante de seus olhos. Ele se torna mais alto e fica verde. Uma grande cauda coberta de esporões se estende a partir de suas costas, seus braços ficam mais grossos, e suas mãos desenvolvem garras afiadas. O rosto se deforma e torna-se o de um réptil de olhos vermelhos e uma boca enorme que abriga dúzias de dentes afiados como navalhas. Ele não é um Goblin, mas sim um DOPPELGANGER, e você terá que lutar contra ele.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev373()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO         HAB     ENERG
            Doppelganger    10       10
            ---------------------------------
            Se você vencer, vá para 373.            
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Doppelganger'];inimigo.hab = [10];inimigo.energ = [10]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,286,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev287(){ //Chamador por ev039()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev025()
    }

    //TEXTO
    txt.innerHTML = `<p>Do lado de fora da caverna, você pára para dar uma olhada rápida no interior da bolsa de couro. Você encontra 5 Peças de Ouro e um pequeno sino de metal. Você os coloca na sua mochila e corre de volta para a encruzilhada na trilha, depois ruma para o norte.</p>`

    adcItem('Sino Pequeno',1)
    atualizaStats('ouro',5)
}

function ev288(){ //Chamado por ev048() ev106() ev294() ev314 ev372
    //BOTÃO
    btn1.innerHTML = 'Investigar o rochedo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev084()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Rumar para o norte e penetrar no vale'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev245()
    }

    //TEXTO
    txt.innerHTML = `<p>Descendo pela trilha da montanha, você vê o fundo do vale que se estende à sua frente e, além dele, a sinistra muralha de árvores - Darkwood! Do outro lado das árvores está Stonebridge, o fim de sua jornada. Quando você chega ao sopé das montanhas, vê muitos rochedos que se espalham por ambos os lados da trilha. Você fica admirado ao ver um dos maiores, balançando de um lado pala outro suavemente, como uma folha na brisa.</p>`
}

function ev289(){ //Chamado por ev177
    //BOTÃO
    btn1.innerHTML = 'Continuar na direção do oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev076()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Rumar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev147()
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha estreita e coberta de mato continua a serpentear em meio à densa floresta. Estranhos gritos de animais ecoam pelas árvores. Não demora muito para que você chegue a uma outra encruzilhada na trilha.</p>`
}

//290-299
function ev290(fugiu){ //Chamado por ev010 ev230; Combate com fuga
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê corre de volta para a trilha e segue para o norte')
        ev358()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'                
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>Você desembainha sua espada ao entrar na caverna. O Ogro joga a cumbuca de madeira no chão e ergue a grande clava de madeira presa a seu cinto. Ele grunhe e salta na sua direção. Prepare-se para a batalha.</p>`
                break
            case 1:
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                ev385()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO             HAB     ENERG
                Ogro                8       12
                -----------------------------
                Se você vencer, vá para ev385;
                Fugir: ev358
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Ogro'];inimigo.hab = [8];inimigo.energ = [12]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,290,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
            }        
        }
    }
}

function ev291(){ //Chamado por ev099 ev208 ev323 ev349
    //BOTÃO
    btn1.innerHTML = 'Descer os degraus até a base da cachoeira'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev335()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Remar no bote de madeira para atravessar o rio'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev145()
    }

    //TEXTO
    txt.innerHTML = `<p>À medida em que você vai caminhando na direção do norte, atravessando a planície, o mato vai se tornando gradualmente mais baixo, e o terreno começa a se elevar suavemente. Você ouve o ruído de uma queda d'água adiante. Logo, você chega à margem de um rio largo que se divide em dois níveis. À sua direita, a água é calma e se movimenta lentamente, mas à sua frente ela despenca ruidosamente numa grande cachoeira até uma garganta lá embaixo, onde o rio se estreita e corre velozmente para o oeste por sobre rochas e penedos.</p>
    <p>Há degraus que conduzem para o fundo da garganta pelo lado da cachoeira, embora seja difícil ver onde eles terminam devido à nuvem de vapor d'água que sobe lá debaixo. Do outro lado do rio, você vê a trilha rumando para o norte na distância. Um pequeno bote de madeira está amarrado a uma estaca à sua direita, onde o rio é calmo.</p>`
}

function ev292(){ //Chamado por ev351
    //BOTÃO
    btn1.innerHTML = 'Erguer a tampa de pedra'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev095()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ignorar a tampa, retornar à trilha e seguir para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev112()
    }

    //TEXTO
    txt.innerHTML = `<p>A luz da vela projeta sombras fantasmagóricas pelo aposento. Na luz amarelada, você vê o rosto de um velho entalhado na tampa de pedra da caixa. Em seguida, você repara numa perna de esqueleto que surge das sombras do outro lado do aposento.</p>
    <p>Você caminha até o esqueleto para examiná-lo. É pequeno, e o crânio possui dentes afiados e proeminentes. Poderia ser o esqueleto de um Goblin ou de um Orc.</p>
    <p>Você caminha até a caixa de pedra. A tampa sobre ela dá a impressão de poder ser deslocada.</p>`
}

function ev293(){ //Chamado por ev044 ev080 ev183 ev189 ev211 ev222 ev269 ev282 ev345
    //BOTÃO
    btn1.innerHTML = 'Olhar dentro do barril'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev215()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Tentar abrir a arca de madeira'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev389()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Continuar subindo os degraus'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev089()
    }

    //TEXTO
    txt.innerHTML = `<p>Os degraus são feitos de pedra, esculpidos na parede da caverna. Estão molhados no limo que pinga e desce pelas paredes. Você vê que há três nichos que penetram na parede da caverna a partir dos degraus a intervalos diversos até o teto. Cada um deles tem três metros de altura. Você sobe os degraus e olha para o interior da penumbra do primeiro nicho, onde vê um barril e uma arca de madeira.</p>`
}

function ev294(){ //Chamado por ev314
    //BOTÃO
    btn1.innerHTML = 'Remexer na lareira'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev106()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Abrir a arca de madeira'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev175()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Deixar o aposento e seguir na direção norte'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev288()
    }

    //TEXTO
    txt.innerHTML = `<p>A cabana consiste em um aposento, contendo uma lareira, uma cama de madeira, uma mesa com duas cadeiras, uma bacia, uma arca de madeira e prateleiras atulhadas de ponta a ponta, com ovos de aves. Há muita poeira no chão, e a impressão que se tem é que ninguém mora ali há meses.</p>`
}

function ev295(){ //Chamado por ev256
    window.alert('Você bate com a cabeça violentamente no lado do poço ao cair.')

    if(equips.nome.indexOf('Elmo da Habilidade') != -1){
        ev225()
    }else{
        ev030()
    }
}

function ev296(){ //Chamado por ev151 ev273
    //BOTÃO
    btn1.innerHTML = 'Engatinhar para o sul de volta para o poço'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev398()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o oeste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev284()
    }

    //TEXTO
    txt.innerHTML = `<p>De volta à encruzilhada...</p>`
}

function ev297(){ //Chamado por ev271
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev067()
    }

    //TEXTO
    txt.innerHTML = `<p>Ao aceitar o pagamento, o Gnomo sorri e diz a você que viu o esqueleto de um Goblin dentro de uma cripta de pedra. Talvez fosse o esqueleto de um dos dois Goblins que você está procurando, talvez não.</p>
    <p>Ele diz que a cripta é em algum lugar no norte da floresta, mas ele não tem certeza do local exato. Você fica aborrecido porque o Gnomo só tem essas informações e parte para o oeste de novo a passos rápidos.</p>`
}

function ev298(){ //Chamado por ev127() ev178(); Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você já está dormindo há mais ou menos uma hora quando, um uivo aterrador faz com que você acorde sobressaltado. Parece estar vindo do oeste, de um ponto a alguma distância. Você olha para cima e vê a lua cheia no céu noturno. Ao fazê-lo, você repentinamente nota que há urna grande sombra negra que se move nos galhos acima de você. Você deixa os uivos de lado e salta de pé, pegando sua espada ao mesmo tempo em que uma ARANHA GIGANTE pula para o chão e cai a seu lado. Seu corpo arredondado e maciço se desloca vagarosamente na sua direção sobre suas pernas negras e cabeludas. Não querendo abandonar todas as suas posses, você é obrigado a lutar.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev140()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Aranha Gigante      7       8
            ---------------------------------
            Se você vencer, vá para 140.            
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Aranha Gigante'];inimigo.hab = [7];inimigo.energ = [8]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,298,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev299(){ //Chamado por ev092()
    //BOTÃO
    btn1.innerHTML = 'Atravessar pela ponte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev065()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Atravessar nadando'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev075()
    }

    //TEXTO
    txt.innerHTML = `<p>Você corre o mais rápido que pode na direção do ruído de água com um longo rastro de ABELHAS ASSASSINAS bem atrás de você. Logo, você chega à margem de um rio e, sem ter tempo para pensar, mergulha direto. Você prende a respiração pelo máximo de tempo que consegue e fica embaixo d'água. Quando vem à tona de novo, as Abelhas Assassinas já partiram. Você sai da água e começa a se secar. Examinando o conteúdo de sua mochila, você fica desolado ao descobrir que todas as suas Provisões se dissolveram na água.</p>
    <p>Você olha em volta e vê que a trilha continua para o norte por sobre o rio, via uma ponte de madeira velha e instável.</p>`
}

//300-309
function ev300(){ //Chamado por ev219 ev254
    //BOTÃO
    btn1.innerHTML = 'Continuar para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev138()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o oeste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev331()
    }

    //TEXTO
    txt.innerHTML = `<p>A luz do dia surge em meio às árvores, seus grandes raios brancos em ambos os lados da trilha. A floresta se torna menos densa. Logo a trilha conduz para fora das árvores, saindo numa planície ampla, coberta de mato alto. Adiante, você vê o terreno que vai se elevando até chegar a umas colinas baixas. Uma nova ramificação que sai da trilha conduz ao oeste.</p>`
}

function ev301(){ //Chamado por ev317
    let chkbox = []
    
    //BOTÃO
    btn1.innerHTML = 'Voltar para a trilha'
    btn1.addEventListener('click',alt1)
    
    //TEXTO
    txt.innerHTML = `<p>Você revista os bolsos dos Hobgoblins e acha 3 Peças de Ouro, uma minúscula flauta de metal e dois biscoitos cheios de bichos. Há também um colar feito de crânios de camundongos em volta do pescoço de um deles.</p>`

    let secItens = document.createElement('section')
    txt.appendChild(secItens)

    secItens.innerHTML = `<p>
    <input type="checkbox" id="chk1"><label for="chk1" id="lbl1">3 PO</label><br>
    <input type="checkbox" id="chk2"><label for="chk2" id="lbl2">Flauta de metal</label><br>
    <input type="checkbox" id="chk3"><label for="chk3" id="lbl3">2 biscoitos cheios de bichos</label><br>
    <input type="checkbox" id="chk4"><label for="chk4" id="lbl4">Colar de crânios de camundongos</label></p>`

    for(i=1; i <= 4; i++){
        chkbox[i] = document.getElementById('chk'+i)
        chkbox[i].addEventListener('change',mudaTxtBtn)
    }
    
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(chkbox[1].checked == true){atualizaStats('ouro',3)}
        if(chkbox[2].checked == true){adcItem('Flauta',1)}
        if(chkbox[3].checked == true){adcItem('Biscoito cheio de bicho',2)}
        if(chkbox[4].checked == true){adcItem('Colar de crânios de camundongos',1)}
        ev157()
    }

    function mudaTxtBtn(){
        let chk = 0
        for(i=1; i <=4; i++){
            if(chkbox[i].checked == true){
                chk++
            }
        }

        if(chk > 0){
            btn1.innerHTML = 'Pegar e voltar para a trilha'
        }else{
            btn1.innerHTML = 'Voltar para a trilha'
        }
    }
}

function ev302(){ //Chamado por ev207
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev109()
    }

    //TEXTO
    txt.innerHTML = `<p>Você coloca a pulseira em seu lugar no pulso. Uma sensação poderosa se espalha pelo seu braço e faz você saltar. Seu braço fica forte.</p.
    <p>Você agora possui uma Pulseira da Habilidade, que permitirá que você acrescente 1 ponto a todos os seus lances de dados futuros durante os combates, enquanto você a usar.</p>
    <p>Você agora desce pelo cipó e continua na direção norte pela trilha.</p>`

    atualizaStats('atk',1)
    adcItem('Pulseira da Habilidade',1)
}

function ev303(){ //Chamado por ev134 ev199 ev283; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Alto no céu, você vê uma grande criatura voadora. É, com certeza, maior do que qualquer ave que você tenha visto antes. À medida em que ela se aproxima, você desembainha a espada. Ela solta um grito agudo e alto, e você pode ver sua cabeça longa e a boca cheia de dentes aguçados. Tem uma pele verde de réptil, e suas asas têm cinco metros de ponta a ponta. Não há nenhum lugar para se proteger no vale, e você terá que lutar contra o PTERODÁCTILO que mergulha sobre você.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev247()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO         HAB     ENERG
            Pterodáctilo    7       8
            ---------------------------------
            Se você vencer, vá para 247.            
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Pterodáctilo'];inimigo.hab = [7];inimigo.energ = [8]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,303,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev304(){ //Chamado por ev237
    //TEXTO
    txt.innerHTML = `<p>Sua perna vai levar muito tempo para ficar curada. Você encontra dois galhos no chão e os amarra à sua perna quebrada com o cinto de couro que está na sua cintura. Você se recosta e começa a descansar. Terá que comer cinco porções de suas Provisões antes de estar forte o suficiente para seguir adiante.</p>`

    let provis = equips.nome.indexOf('Provisões')
    if(provis != -1 && equips.quant[provis] >= 5){
        atualizaStats('hab',-2)
        let restEnerg = stats.energ - stats.energAtual
        atualizaStats('energ',20)
        if(restEnerg < 20){
            txt.innerHTML += `Você recuperou ${restEnerg} pontos de ENERGIA!<br>`
        }else{
            txt.innerHTML += `Você recuperou 20 pontos de ENERGIA!`
        }
        
        equips.quant[provis] -= 5
        if(equips.quant[provis] == 0){
            equips.quant.splice(provis,1)
            equips.nome.splice(provis,1)
            txt.innerHTML += `Você usou a sua última Provisão!`
        }

        txt.innerHTML += `<br>Você perde 2 pontos de HABILIDADE devido à sua deficiência.
        <p>Seus olhos estão bem habituados à escuridão agora, e você vê que o túnel só tem um metro de altura. Você tem que engatinhar para explorá-lo.</p>`

        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev069()
        }

    }else{
        txt.innerHTML += `<p>Você não possui provisões suficientes para a sua recuperação e morre de fome...</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
}

function ev305(){ //Chamado por ev167 ev258
    //BOTÃO
    btn1.innerHTML = 'Experimentar a manopla'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev374()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Experimentar o anel de ouro'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev133()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Deixar os artigos de lado e<br>rumar para o norte pela trilha'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev360()
    }

    //TEXTO
    txt.innerHTML = `<p>Você contorna o imóvel Dragão Alado e começa a remexer em meio aos 
    detritos espalhados pelo covil do animal. Encontra uma manopla feita de ferro, uma 
    faca de arremesso, 10 Peças de Ouro e um anel de ouro. Você põe a faca e as Peças de 
    Ouro na sua mochila.</p>`
    adcItem('Faca de Arremesso',1)
    atualizaStats('ouro',10)
}

function ev306(){ //Chamado por ev149 ev213 ev280 ev357
    //BOTÃO
    btn1.innerHTML = 'Examinar o local'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev391()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Seguir adiante para o norte pela trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev112()
    }

    //TEXTO
    txt.innerHTML = `<p>Em meio às árvores à esquerda da trilha, você vê uma pequena construção de pedra, coberta de musgo e trepadeiras.</p>`
}

function ev307(){ //Chamado por ev378
    //BOTÃO
    btn1.innerHTML = 'Atacar-lo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev192()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Conversar'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev271()
    }

    //TEXTO
    txt.innerHTML = `<p>O homenzinho acorda sobressaltado, perde o equilíbrio e cai do cogumelo. Ele solta um palavrão ao bater no chão, mas pula de volta para o cogumelo, gritando:</p>
    <p>- Quem fez isso? Quem fez isso?! - Ele olha para você de rosto carregado.</p>`
}

function ev308(){ //Chamado por ev373
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev148()
    }

    //TEXTO
    txt.innerHTML = `<p>Ao comer uns cogumelos, você sente uma grande agitação no interior de seu corpo. Você acha que pode estar se transformando num Muda-Formas! Finalmente, você se sente aliviado ao sentir que a agitação está desaparecendo - e você não se transformou num Muda-Formas. Mas você comeu Cogumelos de Mistura - seu índice de HABILIDADE se torna agora o seu índice de SORTE, e seu índice de SORTE passa a ser seu índice de HABILIDADE. Sentindo-se meio estranho, você parte para o norte mais uma vez.</p>`

    let temp = stats.sorAtual
    stats.sorAtual = 0
    atualizaStats('sor',stats.habAtual)
    stats.habAtual = 0
    atualizaStats('hab',temp)

}

function ev309(){ //Chamado por ev109() ev252 ev331
    //BOTÃO
    btn1.innerHTML = 'Esquivar (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        let esquiva = 0
        let teste = testeSorte()
        if(teste == true){
            esquiva++
        }

        teste = testeSorte()
        if(teste == true){
            esquiva++
        }

        if(esquiva == 2){
            window.alert('Nenhum dos dois dartos atinge você!')
            ev077()
        }else{
            window.alert(`Você foi atingido por ${2 - esquiva} dardos!`)
            ev197()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>A trilha corta pelo meio do mato, que chega à altura da cintura. Embora sua visibilidade seja boa, você não se sente muito tranqüilo em relação às criaturas que podem estar espreitando você em ambos os lados da trilha. Repentinamente, o mato à sua esquerda se agita, e dois tubos de madeira aparecem, apontando diretamente para você. São zarabatanas pertencentes a dois PIGMEUS, que disparam dardos na sua direção!</p>`
}

//310-319
function ev310(){ //Chamado por ev376; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>O Troll da Caverna se levanta e grunhe alto. Ele está muito aborrecido por ver um intruso na sua caverna e caminha na sua direção, brandindo a clava. Você terá que lutar contra ele.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev101()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Troll da Caverna    8       9
            ---------------------------------
            Se você vencer, vá para 101.            
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Troll da Caverna'];inimigo.hab = [8];inimigo.energ = [9]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,310,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev311(){ //Chamado por ev104()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev204()
    }

    //TEXTO
    txt.innerHTML = `<p>Uma busca nas roupas e bolsas deles não revela nada de interesse, a não ser 2 Peças de Ouro, as quais você põe na sua mochila. Você parte para o norte de novo pela trilha e logo repara que as árvores vão se tornando mais esparsas de ambos os lados da trilha. Finalmente, a trilha conduz para fora das árvores a um campo arado. Você está fora da Floresta de Darkwood!</p>`

    atualizaStats('ouro',2)
}

function ev312(){ //Chamado por ev227
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev112()
    }

    //TEXTO
    txt.innerHTML = `<p>Você passa por cima do cadáver imóvel do Carniçal e olha dentro do caixão. Você vê 25 Peças de Ouro, mas fica exultante ao ver um outro objeto que estava sendo usado como travesseiro pelo Carniçal - uma cabeça de martelo de bronze com a letra G gravada nele. Você alegremente põe seus achados na sua mochila e sai da cripta para retornar à trilha e seguir para o norte.</p>`

    atualizaStats('ouro',25)
    adcItem('Cabeça do Martelo de Gillibran',1)
}

function ev313(){ //Chamado por ev055() ev385
    //BOTÃO
    btn1.innerHTML = 'Abrir a caixa de prata'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev240()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ignorar a caixa de prata e caminhar até a criatura na jaula'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev085()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Sair da caverna e continuar sua jornada para o norte'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>Não há muita coisa de interesse a ser encontrada na caverna. Uma cama de palha, vasos de pedra, uma mesa e uma cadeira são tudo que está imediatamente visível, mas, numa prateleira de pedra, logo acima da cama, uma pequena caixa de prata chama sua atenção.</p>`
}

function ev314(){ //Chamado por ev116()
    //BOTÃO
    btn1.innerHTML = 'Entrar na cabana'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev294()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar na direção norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev288()
    }

    //TEXTO
    txt.innerHTML = `<p>O terreno é bastante íngreme agora, à medida em que a trilha vai serpenteando entre as colinas. Quando você alcança o topo da colina, o sol está bastante quente. Por toda a volta na distância, você vê o círculo verde e compacto da Floresta de Darkwood. A névoa ainda paira sobre o mato alto atrás de você, mas à sua frente você vê o fundo de um vale banhado na luz do sol. Tudo está quieto. Quando você começa a descer pelo outro lado da colina, repara numa pequena cabana de madeira com a porta ligeiramente aberta.</p>`
}

function ev315(){//Chamado por ev038()
    //BOTÃO
    btn1.innerHTML = 'Falar com a velha'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev042()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Desembainhar a espada'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev342()
    }

    //TEXTO
    txt.innerHTML = `<p>Você abre a rústica porta de madeira e entra numa cabana em péssimas condições.</p>`
}

function ev316(){ //Chamado por ev388
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev198()
    }

    //TEXTO
    txt.innerHTML = `<p>Finalmente, você consegue voltar a dormir, mas passa a noite inquieto. De manhã, você recolhe seus pertences e ruma para o norte pela trilha para as colinas.</p>`
}

function ev317(fugiu){ //Chamado por ev008; Combate com fuga
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê corre de volta para a trilha!')
        ev041()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'                
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>Você puxa sua espada e se prepara para encontrar os donos das vozes que discutiam. Duas criaturas altas e delgadas surgem, vestindo roupas esfarrapadas, sobre as quais estão usando cotas de malha. Eles vêem você e instantaneamente param de discutir. São HOBGOBLINS e puxam suas espadas para atacar você!</p>`
                break
            case 1:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'                
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>Você derrotou o primeiro Hobgoblin! Prepare-se para o segundo!</p>`
                break
            case 2:
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                ev301()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO             HAB     ENERG
                Hobgoblin 1         6       6
                Hobgoblin 2         5       7
                -----------------------------
                Se você vencer, vá para ev301;
                Fugir: ev041
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Hobgoblin 1'];inimigo.hab = [6];inimigo.energ = [6]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,317,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
                case 1:
                    inimigo.nome = ['Hobgoblin 2'];inimigo.hab = [5];inimigo.energ = [7]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,317,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
            }        
        }
    }
}

function ev318(){ //Chamado por ev190
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev231()
    }

    //TEXTO
    txt.innerHTML = `<p>Você pula na vegetação espessa ao lado da trilha. Espiando por trás das folhas, você vê as pernas maciças de um homem gigantesco passarem por você pela trilha. Logo ele desaparece, e você retorna à trilha silenciosamente e ruma para o norte de novo.</p>`
}

function ev319(){ //Chamado por ev278
    if(equips.nome.indexOf('Botas Saltadoras') != -1){
        ev228()
    }else{
        ev014()
    }
}

//320-329
function ev320(){ //Chamado por ev398
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev362()
    }

    //TEXTO
    txt.innerHTML = `<p>Você agarra a perna e puxa para baixo com toda a força que tem. Um pequeno GREMLIN de pele verde passa caindo por você e despenca na água com um gemido alto. Você aproveita a oportunidade e sobe a escada enquanto o Gremlin está se debatendo na água. Você sai do poço e retorna à trilha.</p>`
}

function ev321(){ //Chamado por ev212
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev101()
    }

    //TEXTO
    txt.innerHTML = `<p>À medida em que cada Guerreiro-Clone morre, vai se dissolvendo numa poça de líquido colorido no chão rochoso. Não querendo mais permanecer nesse nicho úmido e sombrio, você sai e sobe adiante pelos degraus.</p>`
}

function ev322(){ //Chamado por ev003
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Corda de Escalada') != -1){
            ev094()
        }else{
            ev380()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>A luz de seu anel penetra nas profundezas escuras do tronco de árvore e do túnel abaixo. Você vê um medalhão de ouro pendente de uma fita de seda a seu alcance, num pedaço de madeira preso ao interior do tronco. Vale 5 Peças de Ouro, e você o coloca na sua mochila. O fundo do túnel fica uns cinco metros mais abaixo.</p>`

    adcItem('Medalhão de Ouro (5 PO)',1)
}

function ev323(){ //Chamado por ev
    //BOTÃO
    btn1.innerHTML = 'Continuar para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev291()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o oeste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev099()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Ir para o leste'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev102()
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando para o norte, você logo chega a uma encruzilhada na trilha.</p>`
}

function ev324(){//Chamado por ev113()
    //BOTÃO
    btn1.innerHTML = 'Jogar o vaso no chão'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev250()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Pôr a mão dentro do vaso'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev161()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Ignorar o vaso e retornar à trilha para o norte'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev149()
    }

    //TEXTO
    txt.innerHTML = `<p>Você dá a volta até a frente da cabana e vê um grande vaso azul numa pequena varanda. Não há ninguém por perto. Você abre a porta da cabana, mas não há ninguém lá dentro. A cabana também não possui qualquer mobília ou outros objetos.</p>
    <p>Você anda até o lado de fora de novo e inspeciona o vaso azul. Olha lá dentro, mas, apesar da luz do sol, não consegue ver além da borda. O vaso está cheio de uma estranha escuridão. Você o sacode e ouve um som de chocalho.</p>`
}

function ev325(){ //Chamado por ev066() ev131()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Cabeças de Alho') != -1){
            ev268()
        }else{
            ev079()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Você está dormindo há mais ou menos uma hora, quando o barulho suave de asas batendo o acorda. Você senta e apanha sua espada, e, na luz da lua cheia, vê três sombras grandes que voam na sua direção. Parecem ser morcegos grandes, mas, quando eles se aproximam num rasante, você vê os inconfundíveis caninos dos MORCEGOS VAMPIROS!</p>`
}

function ev326(){ //Chamado por ev335
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev145()
    }

    //TEXTO
    txt.innerHTML = `<p>Junto à margem do rio, não parece haver nenhum outro meio de atravessá-lo, a não ser o barco.</p>`
}

function ev327(){ //Chamado por ev073
    //BOTÃO
    btn1.innerHTML = 'Descer a escada'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev351()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair da construção e retornar à trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev112()
    }

    //TEXTO
    txt.innerHTML = `<p>No interior, você vê degraus de pedra que conduzem para baixo a partir da porta, penetrando em profundezas de penumbra. Você não consegue ver nada lá embaixo.</p>`
}

function ev328(){ //Chamado por ev097()
    //TEXTO
    txt.innerHTML = `<p>Apesar de ser feita de carvalho duro, a cadeira é surpreendentemente confortável. Você começa a comer, mas, ao invés de se sentir mais forte, sente-se mais fraco. Você está sentado numa Cadeira de Sugamento da Vida, que suga 4 pontos de seu índice de ENERGIA, apesar da porção de suas Provisões comida.</p>`
    atualizaStats('energ',-4)

    if(stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev118()
        }

        txt.innerHTML += `<p>Você consegue levantar-se vagarosamente da cadeira e cambalear para o norte pela trilha.</p>`
    }else{
        txt.innerHTML += `<p>Você não resiste à fraqueza e sucumbe à morte.</p>
        <h2>FIM DE JOGO</h2>`

        //BOTÃO
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
}

function ev329(){ //Chamado por ev027 ev350
    //BOTÃO
    btn1.innerHTML = 'Seguir caminho para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev180()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev252()
    }

    //TEXTO
    txt.innerHTML = `<p>A luz do dia aparece entre as árvores de ambos os lados da trilha, à medida em que a floresta se torna menos espessa. Logo a trilha conduz para fora das árvores a uma grande planície com mato alto. Além dela, você vê o terreno que se eleva, conduzindo a umas montanhas baixas. Uma nova ramificação da trilha leva para o leste.</p>`
}

//330-339
function ev330(){ //Chamado por ev065() e ev075(); Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>Você está dormindo há mais ou menos Uma hora quando um uivo aterrador faz você acordar sobressaltado. Você coloca lenha nova nas brasas incandescentes do fogo e o reaviva. Você nota que há uma lua cheia no céu.</p>
            <p>Com suas costas para as rochas e o fogo diante de você, você fica esperando com a espada na mão. Logo você se dá conta de que está sendo observado, e, em seguida, vê três pares de olhos à sua frente, reluzindo vermelhos à luz do fogo. Outro uivo rasga o ar da noite, seguindo por rosnados graves.</p>
            <p>Lentamente, os três pares de olhos avançam na sua direção. Saídos das sombras, três LOBOS surgem, prontos para saltar sobre você. Eles atacam você um de cada vez.</p>`
            break
        case 1:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você derrotou o primeiro lobo! Prepare-se para outro!</p>`
            break
        case 2:
            btn1.innerHTML = 'Batalhar!'
            btn1.addEventListener('click',battle)
            txt.innerHTML = `<p>Você derrotou o segundo lobo! Prepare-se para outro!</p>`
            break
        case 3:
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev116()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Lobo 1              7       8
            Lobo 2              7       7
            Lobo 3              7       9
            ---------------------------------
            Se você vencer, vá para 116.           
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Lobo 1'];inimigo.hab = [7];inimigo.energ = [8]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,330,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 1:
                inimigo.nome = ['Lobo 2'];inimigo.hab = [7];inimigo.energ = [7]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,330,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
            case 2:
                inimigo.nome = ['Lobo 3'];inimigo.hab = [7];inimigo.energ = [9]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,330,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev331(){ //Chamado por ev300
    //BOTÃO
    btn1.innerHTML = 'Continuar para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev124()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev309()
    }

    //TEXTO
    txt.innerHTML = `<p>Você logo chega a uma outra encruzilhada na trilha. Você vê que a trilha que conduz ao sul ruma direto de volta para a floresta e resolve não ir por ela.</p>`
}

function ev332(){ //Chamado por ev224
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev103()
    }

    //TEXTO
    txt.innerHTML = `<p>Você logo chega a uma outra encruzilhada da trilha. Olhando para o mapa de Perna Grande, você resolve se dirigir para o norte novamente, na direção de Stonebridge, ignorando a trilha estreita que continua para o oeste.</p>`
}

function ev333(){ //Chamado por ev005 ev152
    //BOTÃO
    btn1.innerHTML = 'Reiniciar Jogo'
    btn1.addEventListener('click',restart)
    
    //TEXTO
    txt.innerHTML = `<p>A coroa serve perfeitamente na sua cabeça. Os dois Guerreiros-Clones olham para o alto e encaram você com reverência. Com a coroa na cabeça, você ouve palavras na sua mente e compreende que os Guerreiros-Clones estão tentando se comunicar com você telepaticamente. Eles lhe dizem que você é o novo senhor deles, e pedem instruções.</p>
    <p>Eles perguntam a você o que deve ser feito com a nova safra de fungos de topo vermelho. Você resolve que não quer ser senhor dos Guerreiros-Clones e dos trabalhadores, e levanta as mãos para retirar a coroa de sua cabeça. Com horror, você vê que a pele de suas mãos murchou e escureceu drasticamente.</p>
    <p>Você tenta tirar a coroa de sua cabeça, mas ela não sai do lugar. É um objeto do mal e encontrou em você um novo hospedeiro. Gradualmente, suas feições se modificam, enquanto você adota a forma e a cor de um Demônio de Fogo. Seu novo destino está determinado, e sua aventura termina aqui...</p>
    <h2>FIM DE JOGO</h2>`
}

function ev334(){ //Chamado por ev070() ev182() ev255()
    //BOTÃO
    btn1.innerHTML = 'Rumar para o oeste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev113()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Seguir para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev051()
    }

    //TEXTO
    txt.innerHTML = `<p>Entre as colinas, você vê o fundo do vale, verde e plano, que se estende à sua frente e, além dele, uma sinistra muralha de árvores - a floresta de Darkwood! Do outro lado dela está Stonebridge, o fim de sua jornada. Chegando no vale, a trilha termina numa encruzilhada.</p>`
}

function ev335(){ //Chamado por ev291
    //BOTÃO
    btn1.innerHTML = 'Atravessar a lâmina de água'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev181()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Subir de volta pelos degraus de pedra'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev326()
    }

    //TEXTO
    txt.innerHTML = `<p>Você desce pelos escorregadios degraus de pedra até a base da cachoeira. Olha para cima e vê um arco-íris magnífico refletido no vapor d'água. Está escuro na garganta, e é impossível ver através da parede de água em que os degraus terminam.</p>`
}

function ev336(){//Chamado por ev037
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Poção Antiveneno') != -1){
            ev021()
        }else{
            ev108()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Começa uma dor no seu estômago, que pouco a pouco se espalha por todo o seu corpo.</p>`
}

function ev337(){ //Chamado por ev125() ev157() ev217() ev262()
    //BOTÃO
    btn1.innerHTML = 'Examinar a caverna'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev230()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar na direção do norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>Finalmente, as árvores começam a ficar mais esparsas, e raios de luz do sol atravessam pelos espaços de ambos os lados da trilha. À medida em que a trilha se alarga, você vê uma grande caverna, cuja entrada fica a uns poucos metros para trás, à direita.</p>`
}

function ev338(){ //Chamado por ev240
    //BOTÃO
    btn1.innerHTML = 'Caminhar até a criatura na jaula'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev085()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair da caverna e continuar sua jornada'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>O gás é tóxico, e seus olhos começam a lacrimejar. Você prende a respiração por tempo suficiente para achar seus Filtros Nasais e colocá-los em posição no interior das narinas. Você inspira cautelosamente, mas tudo está bem. Depois de algum tempo, a nuvem de gás em torno de seu rosto se dissipa. Você coloca a caixa de prata na sua mochila.</p>`

    adcItem('Caixa de Prata',1)
}

function ev339(){ //Chamado por ev023() ev100()
    //BOTÃO
    btn1.innerHTML = 'Atravessar o rio pela ponte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev065()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Atravessar a nado, segurando a mochila fora da água para mantê-la seca'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev075()
    }

    //TEXTO
    txt.innerHTML = `<p>Logo, você atinge a margem de um rio que flui suavemente. Você vê que a trilha continua para o norte sobre o rio, via uma ponte velha e instável de madeira.</p>`
}

//340-349
function ev340(){ //Chamado por ev355 ev387
    //BOTÃO
    btn1.innerHTML = 'Conversar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev141()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Desembainhar sua espada para atacá-lo'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev347()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Empurrá-lo do tronco e correr para o leste pela trilha'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev059()
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando pela trilha, você vê um homem pequeno, usando um elmo de ferro e uma cota de malha, sentado em um tronco ao lado da trilha. É um ANÃO, e ele não parece muito contente em vê-lo.</p>`
}

function ev341(){ //Chamado por ev161
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev149()
    }

    //TEXTO
    txt.innerHTML = `<p>A dor na sua mão se torna quase insuportável, mas você ainda consegue aguentar e tateia lá dentro. No fundo do vaso, sua mão entra em contato com diversos objetos. Você os agarra e tira sua mão do vaso velozmente. Fica surpreso ao não ver nenhuma marca ou sinal de ferimento na sua mão.</p>
    <p>Você examina seu tesouro e acha 5 Peças de Ouro, um dente de dragão e um frasco de vidro, contendo uma Poção da Força que reporá 5 pontos de ENERGIA no momento em que você decidir bebê-la.</p>
    <p>Você recupera 1 ponto de SORTE e retorna à trilha para seguir para o norte</p>`

    atualizaStats('sor',1)
    atualizaStats('ouro',5)
    adcItem('Poção de Cura',1)
    adcItem('Dente de Dragão',1)
}

function ev342(){//Chamado por ev042 ev315
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Fita de Cabeça da Concentração') != -1){
            ev158()
        }else{
            ev011()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você desembainha sua espada, o rosto da velha se transforma de uma expressão de desinteresse para uma de raiva. De uma gaveta em uma mesa próxima, ela tira umas flores mortas e passa a esfregar algumas pétalas nas palmas da mão, enchendo a cabana com um cheiro doce. Quando isso acontece, o aposento começa a rodar diante de seus olhos.</p>`
}

function ev343(){ //Chamado por ev160
    //BOTÃO
    btn1.innerHTML = 'Seguir o concelho do corvo e ir para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev008()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar no rumo do leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev239()
    }

    //TEXTO
    txt.innerHTML = `<p>Você coloca a Peça de Ouro no alto do poste de sinalização, conforme pedido pelo corvo, e depois disso ele diz:</p>
    <p>- "Vá para o norte."</p>
    <p>Você pergunta ao corvo porque ele precisa de Peças de Ouro, e ele responde que precisa de 30 Peças de Ouro para pagar a Yaztromo, a fim de que ele o transforme num ser humano de novo. Você diz adeus ao corvo.</p>`
}

function ev344(){ //Chamado por ev253
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev036()
    }

    //TEXTO
    txt.innerHTML = `<p>Você enfia sua espada entre as mandíbulas da armadilha, usando-a como uma alavanca. O estranho de vestes longas acrescenta sua força, e finalmente a armadilha abre. Ele agradece a você repetidamente e explica que está na floresta à procura de seu irmão há muito desaparecido, que ele pensa estar vivendo uma vida de eremita em algum lugar nas suas profundezas.</p>
    <p>Juntos, vocês passam de volta por sobre as raízes das árvores e chegam à trilha. Você o convida para acompanhá-lo na direção do norte, mas ele delicadamente recusa, dizendo que acredita que seu irmão esteja vivendo no sul. Vocês apertam as mãos e se despedem.</p>`
}

function ev345(){ //Chamado por ev069()
    //TEXTO
    txt.innerHTML = `<p>A dor no seu estômago se intensifica, e o suor brota na sua testa.</p>
    <p>Você começa a tremer, e perde 4 pontos de ENERGIA!</p>`

    atualizaStats('energ',-4)
    if(stats.energAtual > 0){
        //BOTÃO
        btn1.innerHTML = 'Continuar'
        btn1.addEventListener('click',alt1)
        function alt1(){
            btn1.removeEventListener('click',alt1)
            ev293()
        }

        txt.innerHTML += `<p>A dor gradualmente vai sumindo. Não parece haver muito motivo para continuar aqui por mais tempo, e você caminha até os degraus na parede do outro lado.</p>`
    }else{
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)

        txt.innerHTML += `<p>Você não resiste à dor e morre...</p>
        <h2>FIM DE JOGO</h2>`
    }
}

function ev346(){ //Chamado por ev170
    //BOTÃO
    btn1.innerHTML = 'Dar a Arragon o que ele requisita'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev032()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ignorar a ameaça e desembainhar a espada'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev111()
    }

    //TEXTO
    txt.innerHTML = `<p>Arragon ergue o braço direito e abre os dedos da mão, dizendo:</p>
    <p>- Bem, estranho, qual é a sua decisão?</p>`
}

function ev347(){ //Chamado por ev141 ev340; Combate sem fuga
    switch (vitoria){
        case 0:
            //BOTÃO
            btn1.innerHTML = 'Batalhar!'            
            btn1.addEventListener('click',battle)

            //TEXTO
            txt.innerHTML = `<p>O Anão é um velho e experiente guerreiro, e brande seu machado com grande habilidade.</p>`
            break
        case 1:            
            window.alert('Você derrotou todos os inimigos!')
            btn1.removeEventListener('click',battle)
            vitoria = 0
            ev363()
    }

    function battle(){
        /*
        Chamar funcão de batalha com os parâmetros:
            INIMIGO             HAB     ENERG
            Anão                8       5
            ---------------------------------
            Se você vencer, vá para 363.            
        */
        btn1.removeEventListener('click',battle)        
        let inimigo = {
            nome: [],
            hab: [],
            energ: []
        }
        
        switch (vitoria){            
            case 0:
                inimigo.nome = ['Anão'];inimigo.hab = [8];inimigo.energ = [5]
                batalha(inimigo.nome,inimigo.hab,inimigo.energ,347,false) //('Nome',hab,energ,evento,fugir,turnoFuga)
                break
        }
    }
}

function ev348(){ //Chamado por ev090()
    //BOTÃO
    btn1.innerHTML = 'Atacar os Montanheses Selvagens'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev043()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Passar por eles caminhando pela trilha,<br>enquanto continuam a rir'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev188()
    }

    //TEXTO
    txt.innerHTML = `<p>Os homens estão pulando para todos os lados com os braços levantados para o ar em acessos de alegria, ao verem que você está lutando para tirar a flecha de seu ombro. Você aperta os dentes e puxa a flecha com força; ela finalmente se solta. Os dois homens estão rindo alto e incontrolavelmente.</p>`
}

function ev349(){ //Chamado por ev078() ev099() ev129() ev209() ev354
    //BOTÃO
    btn1.innerHTML = 'Ir para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev291()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev102()
    }

    //TEXTO
    txt.innerHTML = `<p>Você chega de volta ao cruzamento. Ignorando o caminho para o sul, que volta para a floresta.</p>`
}

//350-359
function ev350(){ //Chamado por ev114()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev329()
    }

    //TEXTO
    txt.innerHTML = `<p>Você procura em sua mochila e retira uma pequena bolsa de pano contendo as cápsulas. Há cinco delas, todas de um vermelho brilhante. Você tira uma e a joga na direção do Homem-Árvore que avança. Ela cai no chão diante dele e explode numa coluna de fumaça branca. Um jato de fogo se projeta para cima a partir do chão e força o Homem-Árvore a recuar.</p>
    <p>Você aproveita a oportunidade e joga as cápsulas restantes no Homem-Árvore. As chamas irrompem por toda a sua volta, e você passa por ele correndo, enquanto ele está encurralado. Logo, você está bem longe do Homem-Árvore e pára de correr.</p>
    <p>Rumando para o norte, você repara que as árvores estão finalmente começando a ficar mais esparsas</p>`
}

function ev351(){ //Chamado por ev200 ev327
    //BOTÃO
    btn1.innerHTML = 'Acender a vela'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev292()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Caminhar de volta para subir a escada e retornar à trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev112()
    }

    //TEXTO
    txt.innerHTML = `<p>Você desce cuidadosamente pelos degraus de pedra, tateando para sentir por onde ir. Vagarosamente, seus olhos ficam habituados à escuridão, e você principia a distinguir umas formas no pé da escada.</p>
    <p>Você está de pé num aposento pequeno e quadrado, com um teto baixo. O chão está coberto por uma grossa camada de poeira, e há teias de aranha em toda parte. No meio do aposento, há alguma coisa que parece ser uma grande caixa de pedra, medindo aproximadamente dois metros por um metro. Está fechado por uma pesada tampa de pedra. Ao longo de uma das ásperas paredes de pedra, você encontra um pequeno nicho com uma vela lá dentro.</p>`
}

function ev352(fugiu){ //Chamado por ev195; Combate com fuga
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê pulou da plataforma para o chão a cinco metros abaixo!')
        ev156()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'                
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>O Homem-Macaco é muito ágil na sua movimentação pela árvore, e você tem dificuldade para brandir a espada.</p>
                <p>Você sofre uma penalidade de -2 de Ataque durante cada série de combate.</p>`
                atualizaStats('atk',-2)
                break
            case 1:
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                atualizaStats('atk',2)
                ev207()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO             HAB     ENERG
                Homem-Macaco        8       7
                -----------------------------
                Se você vencer, vá para ev207;
                Fugir: ev156
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Homem-Macaco'];inimigo.hab = [8];inimigo.energ = [7]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,352,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
            }        
        }
    }
}

function ev353(){//Chamado por ev011 ev158
    //BOTÃO
    btn1.innerHTML = 'Procurar algo útil na cabana'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev026()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Sair da cabana e retornar à trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev220()
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você acorda, descobre que está deitado no chão, do lado de fora da cabana de madeira. Você senta e olha dentro de sua mochila. Todas as suas Provisões foram roubadas! Felizmente, não há nada mais faltando, e você ainda tem sua espada. Você olha dentro da cabana, mas está deserta.</p>`

    let provis = equips.nome.indexOf('Provisões')
    if(provis != -1){
        equips.quant.splice(provis,1)
        equips.nome.splice(provis,1)
    }
}

function ev354(){ //Chamado por ev266
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev349()
    }

    //TEXTO
    txt.innerHTML = `<p>Quin sacode a cabeça, sem conseguir acreditar. Ele levanta e caminha silenciosamente até a arca de madeira na parte de trás da cabana. Levanta a tampa e tira um pequeno frasco de vidro. Ele o entrega a você e caminha de volta para a mesma, onde desaba na cadeira, parecendo totalmente arrasado.</p>
    <p>O pó no frasco cintila na luz, e você o coloca na sua mochila e sai da cabana. Do lado de fora, você caminha de volta para a encruzilhada na trilha</p>`

    adcItem('Poeira da Levitação',1)
}

function ev355(){ //Chamado por ev130() ev153() ev202()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev340()
    }

    //TEXTO
    txt.innerHTML = `<p>Você chega a uma outra encruzilhada na trilha. Ignorando o caminho para o sul, você continua para o leste.</p>`
}

function ev356(){ //Chamado por ev265
    //BOTÃO
    btn1.innerHTML = 'Esfregar a lanterna e fazer um pedido'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev034()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Tentar acender o pavio'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev395()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Jogar a lanterna fora e rumar para o norte'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev231()
    }

    //TEXTO
    txt.innerHTML = `<p>Guardada dentro da roupa do Gigante da Floresta, você encontra uma lanterna de metal com um pavio verde. Não há combustível dentro dela para acendê-la. Talvez seja uma lanterna mágica.</p>`
}

function ev357(){ //Chamado por ev150
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev306()
    }

    //TEXTO
    txt.innerHTML = `<p>Na sua caminhada para o oeste pela trilha sinuosa, você passa por uma outra ramificação que conduz para o sul, na direção do vale. Você a ignora e prossegue para o oeste. Finalmente, a trilha termina numa encruzilhada. Mais uma vez, ignorando o caminho para o vale no rumo sul, você vira para o norte.</p>`
}

function ev358(){ //Chamado por ev022 ev055 ev085 ev168 ev169 ev176 ev230 ev232 ev263 ev290 ev313 ev337 ev338 ev365 ev385
    //BOTÃO
    btn1.innerHTML = 'Continuar (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(testeSorte() == true){
            window.alert('Por sorte, sua espada continua na bainha e você a usa para cortar a corda e sair da armadilha!')
            ev040()
        }else{
            window.alert('Sua espada escorrega da bainha e cai no chão, deixando você balançando, indefeso, na ponta da corda...\nÉ só azar... azar... azar...')
            ev218()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando ao longo da trilha, você não repara num laço de corda escondido por baixo de umas folhas caídas à sua frente. Seu pé fica preso no nó corrediço e, subitamente, você é erguido no ar pela corda, que está amarrada a uma árvore curvada até o chão. Num segundo, você está pendurado de cabeça para baixo, suspenso pelo seu pé preso.</p>`
}

function ev359(){ //Chamado por ev
    //BOTÃO
    btn1.innerHTML = 'Olhar o poço mais de perto'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev172()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar a caminhar para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev281()
    }

    //TEXTO
    txt.innerHTML = `<p>À esquerda da trilha, você vê um poço de pedra com um balde e uma manivela.</p>`
}

//360-369
function ev360(){ //Chamado por ev103() ev133() ev305 ev374
    //BOTÃO
    btn1.innerHTML = 'Dar o que querem'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev279()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Cuspir no chão em resposta e lutar'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev104()
    }

    //TEXTO
    txt.innerHTML = `<p>Caminhando ao longo da estreita trilha, você subitamente ouve o estalo seco de um galho que se parte e o murmúrio de vozes baixas. Você desembainha sua espada e espera ansiosamente, com as costas de encontro a um grande carvalho. Então, vindos de trás das árvores, surgem quatro homens e uma mulher, vestidos com túnicas verdes. Todos parecem ameaçadores, e trazem espadas e machados nas mãos.</p>
    <p>A jovem mulher dá um passo adiante e diz que você está invadindo o território deles e terá que pagar uma taxa de cinco objetos da sua mochila ou enfrentar as consequências.</p>`
}

function ev361(){ //Chamado por ev180
    //BOTÃO
    btn1.innerHTML = 'Enfrentar a matilha que se aproxima'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev396()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Esconder-se no mato alto, fora da trilha, e deixar que<br>eles passem correndo em perseguição à raposa'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev086()
    }

    //TEXTO
    txt.innerHTML = `<p>Vindo não de muito longe, adiante, chega a você o ruído penetrante de cachorros que se aproximam latindo. De repente, uma raposa marrom com os olhos arregalados de medo passa em disparada por você, correndo para o leste. O latido frenético dos cães fica mais alto.</p>`
}

function ev362(){ //Chamado por ev031() ev122() ev225 ev320
    //BOTÃO
    btn1.innerHTML = 'Continuar para o leste'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev281()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o oeste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev238()
    }

    //TEXTO
    txt.innerHTML = `<p>Para que lado deseja ir?</p>`
}

function ev363(){ //Chamado por ev347
    //BOTÃO
    btn1.innerHTML = 'Beber'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev068()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Deixar a garrafa de lado e partir para o leste pela trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev059()
    }

    //TEXTO
    txt.innerHTML = `<p>Você revista a mochila do Anão e encontra uma garrafa arrolhada que contém um líquido claro.</p>`
}

function ev364(){ //Chamado por ev396
    //BOTÃO
    btn1.innerHTML = 'Atacar o cavaleiro para obter o ouro'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev276()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Levar a conversa adiante'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev194()
    }

    //TEXTO
    txt.innerHTML = `<p>Você acena com a cabeça para o cavaleiro mascarado e diz bom dia a ele. Ele acena de volta, mas não diz nada. Você conta a ele sobre sua missão de ajudar os anões de Stonebridge. Ele então pula de sua montaria, joga sua capa para trás e estende o braço direito para apertar sua mão. Você vê que cada um de seus dedos está ornamentado por um grande anel de ouro.</p>`
}

function ev365(){ //Chamado por ev126()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>O gás é tóxico, e seus olhos começam a lacrimejar. Você prende a respiração por tempo suficiente para encontrar os Filtros Nasais e colocá-los em posição no interior das narinas. Você inspira cautelosamente, mas tudo está bem. Depois de algum tempo, a nuvem de gás em torno de seu rosto se dissipa. Você coloca a caixa de prata na sua mochila e deixa a caverna para continuar na sua missão rumo ao norte.</p>`
}

function ev366(){ //Chamado por ev142
    //BOTÃO
    btn1.innerHTML = 'Aceitar a oferta'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev127()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Recusar delicadamente e entrar no rio'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev178()
    }

    //TEXTO
    txt.innerHTML = `<p>Você diz adeus ao Centauro, ao que ele responde de maneira semelhante. É agradável encontrar alguém que não ataca você logo de saída! Você pergunta ao Centauro se ele tem alguma informação que poderia levar você à sua meta, mas ele não sabe nada. Ele diz que não perambula muito ultimamente, pois está ficando velho. Só quer possuir um pouco de ouro para a sua velhice. Ele se oferece para carregá-lo para o outro lado do rio por 3 Peças de Ouro.</p>`
}

function ev367(){ //Chamado por ev264
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Filtros Nasais') != -1){
            ev060()
        }else{
            ev222()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>No momento em que a cabeça do fungo se abre, ouve-se um som como um estalo suave, seguido pelo silvo de gás que escapa. Você fica envolvido por uma nuvem de gás venenoso.</p>`
}

function ev368(){ //Chamado por ev095()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev112()
    }

    //TEXTO
    txt.innerHTML = `<p>Não há mais nada que você possa fazer nesse aposento, por isso você resolve caminhar de volta para as escadas e retornar à trilha para rumar para o norte.</p>`
}

function ev369(){ //Chamado por ev025() ev393
    //BOTÃO
    btn1.innerHTML = 'Conversar com ele'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev191()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Caminhar adiante, passando<br>por ele com um aceno de cabeça'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev390()
    }

    //TEXTO
    txt.innerHTML = `<p>O vale é verde e agradável, e você fica imaginando porque um lugar tão tranquilo teria se tornado a moradia de tantas criaturas repulsivas. Caminhando ao longo da trilha, você vê na distância a forma altiva de um homem já meio calvo, vestindo longas vestes marrons, que vem na sua direção.</p>
    <p>Quando ele chega mais perto, você vê que se trata de um frade.</p>`
}

//370-379
function ev370(){ //Chamado por ev395
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev231()
    }

    let itemAleat = Math.random() * (equips.nome.length)
    itemAleat = parseInt(itemAleat)
    let itemPerdido = equips.nome[itemAleat]
    equips.quant[itemAleat]--
    if(equips.quant[itemAleat] <= 0){
        equips.nome.splice(itemAleat,1)
        equips.quant.splice(itemAleat,1)
    }

    //TEXTO
    txt.innerHTML = `<p>Você tateia à sua volta freneticamente em completa escuridão. Lentamente, sua visão retorna, e você se levanta de novo. Com sua própria visão totalmente recuperada, você parte para o norte de novo pela trilha. Contudo, enquanto você estava no chão, ${itemPerdido} caiu de sua mochila.</p>`
}

function ev371(){ //Chamado por ev049
    //BOTÃO
    btn1.innerHTML = 'Pegar uma figura de argila e ir embora'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        adcItem('Mão de Argila',1)
        ev093()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Ir embora sem pegar a figura de argila'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev093()
    }

    //TEXTO
    txt.innerHTML = `<p>Há muitas figuras de argila feitas à mão, representando mãos humanas em diferentes posições, que cobrem toda área da superfície disponível. Todas são pintadas com esmalte vermelho brilhante. Num vaso de cobre, você encontra 3 Peças de Ouro, as quais você põe na sua mochila. Não há mais nada de útil ou de valor para você na caverna. Você vai embora, engatinhando até a encruzilhada pelo mesmo caminho que veio, e levando uma das mãos de argila com você, se quiser.</p>`
    atualizaStats('ouro',3)
}

function ev372(){ //Chamado por ev175
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        intUser.appendChild(btn2)
        let testeHab = rolaD6() + rolaD6()
        btn1.innerHTML = 'Tentar novamente'
        if(testeHab <= stats.habAtual){
            intUser.removeChild(btn2)
            btn1.removeEventListener('click',alt1)
            btn2.removeEventListener('click',alt2)
            ev048()
        }else{
            window.alert('Você dá um mau jeito nas costas.\nPerde 1 Ponto de ENERGIA.')
            txt.innerHTML = `<p>Você pode tentar levantar a arca tantas vezes quanto quiser</p>`
            atualizaStats('energ',-1)
        }
    }

    btn2.innerHTML = 'Desistir'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev288()
    }

    //TEXTO
    txt.innerHTML = `<p>Você se inclina e tenta levantar a arca, mas é muito pesada.</p>`
}

function ev373(){ //Chamado por ev203 ev286
    //BOTÃO
    btn1.innerHTML = 'Comer alguns dos cogumelos'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev308()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev148()
    }

    //TEXTO
    txt.innerHTML = `<p>Você desaba sobre o tronco, exausto depois de sua longa batalha. Infelizmente, a vara preta era apenas parte da ilusão do Muda-Formas e não existe mais. Porém, você repara que há uns cogumelos roxos que crescem atrás do tronco. Eles não são conhecidos para você, mas parecem apetitosos.</p>`
}

function ev374(){ //Chamado por ev133() ev305
    //BOTÃO
    btn1.innerHTML = 'Experimentar o anel de ouro'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        if(ativaEventos.indexOf('ev133') == -1){
            intUser.removeChild(btn2)
            ev133()
        }else{
            ev360()
        }
    }

    if(ativaEventos.indexOf('ev133') == -1){
        intUser.appendChild(btn2)
    }else{
        btn1.innerHTML = 'Rumar para o norte outra vez'
    }
    
    btn2.innerHTML = 'Ignorar o anel de ouro'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev360()
    }

    //TEXTO
    txt.innerHTML = `<p>Você coloca a manopla na sua mão e segura a espada. Desferindo golpes no ar com ela, você se sente mais habilidoso do que o habitual com sua arma. Você agora possui uma Manopla de Habilidade com Arma, que permitirá que você acrescente 1 ponto a todos os seus lances de dados futuros, quando estiver calculando sua própria Força de Ataque durante os combates, por tanto tempo quanto a usar.</p>`
    atualizaStats('atk',1)
    adcItem('Manopla de Habilidade com Armas',1)
}

function ev375(){ //Chamado por ev163
    //BOTÃO
    btn1.innerHTML = 'Continuar para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev150()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Prosseguir para o oeste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev236()
    }

    //TEXTO
    txt.innerHTML = `<p>Aparece uma encruzilhada na trilha.</p>`
}

function ev376(){ //Chamado por ev196
    if(testeSorte() == true){
        window.alert('O troll não acorda!')
        ev074()
    }else{
        window.alert('Você chuta uma pedrinha que faz ruído pelo chão da caverna e acorda o Troll da Caverna!')
        ev310()
    }
}

function ev377(fugiu){ //Chamado por ev024() e ev077()
    if (fugiu == true){
        window.alert('Você fugiu!\nVocê corre de volta para a trilha e vira para o norte!')
        ev092()
    } else {
        switch (vitoria){
            case 0:
                //BOTÃO
                btn1.innerHTML = 'Batalhar!'                
                btn1.addEventListener('click',battle)
    
                //TEXTO
                txt.innerHTML = `<p>Você rapidamente alcança os dois Pigmeus de pele parda. Estão usando camisas feitas de folhas, e, quando param e se voltam, você repara que cada um deles tem um pequeno osso enfiado no nariz. Eles puxam seus punhais e ambos atacam você ao mesmo tempo!</p>`
                atualizaStats('atk',-2)
                break
            case 1:
                window.alert('Você derrotou todos os inimigos!')
                btn1.removeEventListener('click',battle)
                vitoria = 0
                atualizaStats('atk',2)
                ev205()            
                break
        }
    
        function battle(){
            /*Chamar funcão de batalha com os parâmetros:
                INIMIGO             HAB     ENERG
                Pigmeu 1            5       5
                Pigmeu 2            5       6
                -----------------------------
                Se você vencer, vá para ev205;
                Fugir: ev092
            */
            btn1.removeEventListener('click',battle)
            let inimigo = {
                nome: [],
                hab: [],
                energ: []
            }
            
            switch (vitoria){
                case 0:
                    inimigo.nome = ['Pigmeu 1','Pigmeu 2'];inimigo.hab = [5,5];inimigo.energ = [5,6]
                    batalha(inimigo.nome,inimigo.hab,inimigo.energ,377,true) //'Nome',hab,energ,evento,fugir,turnoFuga)
                    break
            }        
        }
    }
}

function ev378(){ //Chamado por ev221
    //BOTÃO
    btn1.innerHTML = 'Dar-lhe um empurrão de leve para acordá-lo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev307()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Passar caminhando silenciosamente<br>para continaur sua jornada'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev067()
    }

    //TEXTO
    txt.innerHTML = `<p>À esquerda da trilha, você vê um homem pequeno com uma longa barba grisalha, sentado de pernas cruzadas em cima de um enorme cogumelo. Ele está usando um casaco vermelho vivo e um gorro da mesma cor, suas calças são pretas e terminam nos joelhos. Está dormindo e ronca alto.</p>`
}

function ev379(){ //Chamado por ev391
    //BOTÃO
    btn1.innerHTML = 'Arrombar a porta'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev073()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Retornar à trilha e rumar para o norte'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev112()
    }

    //TEXTO
    txt.innerHTML = `<p>O que deseja fazer?</p>`
}

//380-389
function ev380(){ //Chamado por ev120() ev322
    //BOTÃO
    btn1.innerHTML = 'Arriscar a pular pelo tronco oco da<br>árvore para o fundo do túnel lá embaixo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev237()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Voltar à trilha para seguir para o norte de novo'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev144()
    }

    //TEXTO
    txt.innerHTML = `<p>O que deseja fazer?</p>`
}

function ev381(){ //Chamado por ev204()
    //BOTÃO
    btn1.innerHTML = 'Tentar novamente'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.innerHTML = 'Continuar'
        btn1.removeEventListener('click',alt1)
        btn1.addEventListener('click',alt1b)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        txt.innerHTML = `<p> Você terá que contornar a Floresta de Darkwood de volta para a torre de Yastromo, a fim de adquirir mais artigos mágicos dele</p>`
    }

    function alt1b(){
        btn1.removeEventListener('click',alt1b)
        ev098()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Desistir'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        txt.innerHTML = `<p>Sendo incapaz de enfrentar o rei deles, Gillibran, você resolve rumar para o leste e encontrar um lugar para descansar depois de sua perigosa aventura.</p>
        <h2>FIM DE JOGO</h2>`
        btn1.innerHTML = 'Reiniciar Jogo'
        btn1.addEventListener('click',restart)
    }
    //TEXTO
    txt.innerHTML = `<p>Você fracassou na sua missão de ajudar os anões.</p>`
}

function ev382(){ //Chamado por ev115() ev234()
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev097()
    }

    //TEXTO
    txt.innerHTML = `<p>Indo para o oeste, a trilha logo conduz você a uma outra encruzilhada. Você resolve ignorar o caminho para o sul e segue para o norte.</p>`
}

function ev383(){ //Chamado por ev029
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev254()
    }

    //TEXTO
    txt.innerHTML = `<p>Você dá uma busca nas bolsas e roupas dos Orcas e encontra 2 Peças de Ouro e um pequeno apito de madeira.</p>
    <p>O coelho assado no espeto parece saboroso e você o come.</p>
    <p>Voc^recupera 2 pontos de ENERGIA!</p>`
    atualizaStats('ouro',2)
    atualizaStats('energ',2)
    adcItem('Apito de Madeira',1)
}

function ev384(){ //Chamado por ev105()
    //BOTÃO
    btn1.innerHTML = 'Libertá-lo'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev128()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Deixá-lo em sua agonia e voltar à trilha'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev394()
    }

    //TEXTO
    txt.innerHTML = `<p>À sua frente, no mato, você ouve um gemido baixo. Você olha para cima e vê os abutres pacientemente esperando no alto. Alguns passos adiante, você se depara com a visão horrível de um homem imenso, com músculos como que de ferro, amarrado pelas pernas e braços a quatro estacas grandes, profundamente enterradas no solo. O homem está nu, exceto por uma pequena tanga, e sua pele está muitíssimo ferida pela exposição ao sol. Seu rosto e peito mostram os sinais sangrentos de torturas cruéis. Seus algozes provavelmente não conseguiram dele as informações que queriam, pois ele é um BÁRBARO!</p>`
}

function ev385(){ //Chamado por ev290
    //BOTÃO
    btn1.innerHTML = 'Olhar mais de perto na criatura dentro da jaula'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev168()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Examinar os objetos que a caverna contém'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev313()
    }

    intUser.appendChild(btn3)
    btn3.innerHTML = 'Sair da caverna imediatamente'
    btn3.addEventListener('click',alt3)
    function alt3(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        btn3.removeEventListener('click',alt3)
        intUser.removeChild(btn2)
        intUser.removeChild(btn3)
        ev358()
    }

    //TEXTO
    txt.innerHTML = `<p>Quando o Ogro tomba ao solo, a criatura na jaula pula de um lado para outro ainda mais freneticamente que antes.</p>`
}

function ev386(){ //Chamado por ev079
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev119()
    }

    //TEXTO
    txt.innerHTML = `<p>Você se instala para dormir mais uma vez, mas passa uma noite inquieta.</p>
    <p>De manhã, você acorda cedo. Você recolhe seus pertences e parte para o norte pela trilha.</p>`
}

function ev387(){ //Chamado por ev144
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev340()
    }

    //TEXTO
    txt.innerHTML = `<p>No chão, à sua frente, há uma única Peça de Ouro. Você a apanha e atira para o ar com o polegar. Em seguida, você a coloca no bolso.</p>
    <p>Você recupera 1 ponto de SORTE!</p>`
    atualizaStats('ouro',1)
}

function ev388(){ //Chamado por ev285
    if(ativaEventos[ativaEventos.length -1] == stats.energAtual){
        window.alert('Você não foi ferido durante o combate!\nVocê recupera 1 ponto de SORTE!')
        atualizaStats('sor',1)
        ev316()
    }else{
        ev155()
    }
}

function ev389(){ //Chamado por ev201 ev248 ev293; Ativador de Evento
    //BOTÃO
    btn1.innerHTML = 'Olhar dentro do barril'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        if(ativaEventos.indexOf('ev215') == -1){
            intUser.removeChild(btn2)
            ev215()
        }else{
            ev088()
        }
        
    }

    if(ativaEventos.indexOf('ev215') == -1){
        intUser.appendChild(btn2)
    }else{
        btn1.innerHTML = 'Sair do nicho para subir adiante pelos degraus'
    }
    
    btn2.innerHTML = 'Sair do nicho para subir adiante pelos degraus'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev088()
    }

    //TEXTO
    txt.innerHTML = `<p>Você levanta a espada acima de sua cabeça e a desce com toda força na arca de madeira. Ela se despedaça em pedaços minúsculos e, entre os fragmentos partidos de madeira, você encontra 8 Peças de Ouro!</p>
    <p>Você recupera 1 ponto de SORTE!</p>`
    atualizaStats('ouro',8)
    atualizaStats('sor',1)

    ativaEventos.push('ev389')
}

//390-399
function ev390(){ //Chamado por ev033 ev166 ev184 ev369
    //BOTÃO
    btn1.innerHTML = 'Continuar para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev190()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Rumar para o oeste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev280()
    }

    //TEXTO
    txt.innerHTML = `<p>Na distância, você vê a muralha de árvores de um marrom escuro que se ergue à sua frente. A trilha conduz diretamente à Floresta de Darkwood e logo principia a descrever curvas e voltas entre raízes e moitas enredadas. A trilha acaba se dividindo.</p>`
}

function ev391(){ //Chamado por ev306
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(equips.nome.indexOf('Chave dos Montanheses') != -1){
            ev200()
        }else{
            ev379()
        }
    }

    //TEXTO
    txt.innerHTML = `<p>A construção mede apenas três metros por três metros e não tem janelas. A porta é feita de pedra e parece muito sólida. Não há maçaneta e não parece haver outro meio de entrar na construção. Em seguida, você repara numa minúscula fechadura na porta de pedra.</p>`
}

function ev392(){ //Chamado por ev008
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev157()
    }

    //TEXTO
    txt.innerHTML = `<p>Quando você se agacha no mato fora da trilha, as vozes ficam mais altas. Depois, dois pares de pernas magras, vestindo roupas esfarrapadas, passam por você rapidamente, espalhando poeira e detritos. As vozes logo vão morrendo na distância. Você retorna à trilha e prossegue para o norte.</p>`
}

function ev393(){ //Chamado por ev245 ev281 ev397
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        ev369()
    }

    //TEXTO
    txt.innerHTML = `<p>Conduzindo ao longo do tranquilo fundo do vale, a trilha chega ao fim numa encruzilhada. O caminho para o sul conduz de volta para as colinas, portanto você resolve não ir por ele, e segue para o norte.</p>`
}

function ev394(){ //Chamado por ev105() ev272 ev384
    //BOTÃO
    btn1.innerHTML = 'Atravessar o rio pela passagem das pedras'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev066()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Atravessar a pé pela água rasa'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev186()
    }

    //TEXTO
    txt.innerHTML = `<p>Gradualmente, o mato à sua volta se torna mais baixo, enquanto o terreno começa a se elevar suavemente. À sua frente, você pode ouvir o som de água corrente. Logo, você chega à margem de um rio de fluxo lento. É um rio muito raso, e há pedras através das quais se pode atravessar para a outra margem, onde a trilha continua para o norte, perdendo-se na distância.</p>`
}

function ev395(){ //Chamado por ev356
    //BOTÃO
    btn1.innerHTML = 'Continuar (SORTE)'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        if(testeSorte() == true){
            window.alert('Por sorte você não sofre nada com a queda!')
            ev154()
        }else{
            window.alert('Sua cabeça se choca contra um tronco\nVocê perde 3 pontos de ENERGIA!!')
            atualizaStats('energ',-3)
            if(stats.energAtual > 0){
                ev370()
            }else{
                txt.innerHTML = `<p>Você não resiste aos ferimentos e morre...</p>
                <h2>FIM DE JOGO</h2>`
                btn1.innerHTML = 'Reiniciar Jogo'
                btn1.addEventListener('click',restart)
            }
        }
    }

    //TEXTO
    txt.innerHTML = `<p>Ao invés de o pavio se acender, um clarão ofuscante sai da lanterna, tão forte que o deixa incapaz de ver qualquer coisa. Você cambaleia e cai no chão.</p>`
}

function ev396(){ //Chamado por ev361
    //BOTÃO
    btn1.innerHTML = 'Conversar com ele'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev364()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Atacar o cão mais próximo'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev096()
    }

    //TEXTO
    txt.innerHTML = `<p>Você desembainha sua espada e se prepara para enfrentar a matilha de cães. Eles surgem em meio a uma nuvem de poeira na distância. Galopando atrás deles, há um cavaleiro mascarado, usando um longo manto esvoaçante e cavalgando um garanhão branco. Ele sopra numa trompa, e a matilha de cães estaca subitamente à sua frente. Há quatro deles, e você pode ver que são cães-de-caça. O garanhão fica imóvel atrás deles, fumaça saindo de suas narinas em dois jatos compridos. O homem mascarado olha para você sem falar.</p>`
}

function ev397(){ //Chamado por ev051()
    //BOTÃO
    btn1.innerHTML = 'Seguir para o norte'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev163()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Continuar para o leste'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev393()
    }

    //TEXTO
    txt.innerHTML = `<p>Você continua sua caminhada pelo vale, passando por uma ramificação da estrada que leva para o sul, na direção das montanhas. Você logo chega a uma outra encruzilhada. Novamente, um dos caminhos conduz às montanhas, no rumo do sul.</p>`
}

function ev398(){ //Chamado por ev061() ev296
    //BOTÃO
    btn1.innerHTML = 'Esticar o braço para tentar agarrar<br>a primeira perna que aparecer'
    btn1.addEventListener('click',alt1)
    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev320()
    }

    intUser.appendChild(btn2)
    btn2.innerHTML = 'Esperar pelo visitante até que ele entre no túnel'
    btn2.addEventListener('click',alt2)
    function alt2(){
        btn1.removeEventListener('click',alt1)
        btn2.removeEventListener('click',alt2)
        intUser.removeChild(btn2)
        ev193()
    }

    //TEXTO
    txt.innerHTML = `<p>Você chega ao fim do túnel e está prestes a começar a subir a escada na parede do poço quando ouve passos acima de você. Alguém está descendo pela escada.</p>`
}

function ev399(){ //Chamado por ev054()
    //BOTÃO
    btn1.innerHTML = 'Reiniciar Jogo'
    btn1.addEventListener('click',restart)
    
    //TEXTO
    txt.innerHTML = `<p>Você avança sobre Yaztromo, mas só chega ao primeiro degrau, pois ele ergue o braço direito e murmura umas poucas palavras despreocupadamente. O tempo parece parar em meio a clarões luminosos, e seu corpo parece conter um líquido borbulhante em seu interior. Quando a agitação se acalma, você sabe que algo de terrível aconteceu. O degrau de pedra em contato com seu corpo parece frio, e você se dá conta dos problemas da vida de um sapo! Yaztromo se inclina e o apanha, dizendo com uma voz tronitroante:</p>
    <p>- Bem, tolo guerreiro, desfrute a sua nova vida!</p>
    <p>Com isso, ele solta um riso ensurdecedor e quase deixa você cair. Em seguida, vai até a porta de carvalho e, abrindo-a, joga você no mato lá fora.</p>
    <p>Sua aventura termina aqui. </p>
    <h2>FIM DE JOGO</h2>`
}

function ev400(){ //Chamado por ev204
    //BOTÃO
    btn1.innerHTML = 'Continuar'
    btn1.addEventListener('click',alt1)    

    //TEXTO
    txt.innerHTML = `<p>Você caminha até os velhos anões e pede a eles que o levem até Gillibran. Eles o encaram, desconfiados, mas concordam em fazê-lo, comentando a respeito de seus ferimentos e roupas rasgadas.</p>
    <p>- Você arranjou isso na Floresta de Darkwood, presumo - diz um dos anões, apontando para vários talhos no seu corpo com seu longo cachimbo de barro. - Tem gente que nunca aprende. Os aventureiros são todos iguais. Eu mesmo não consigo ver o sentido disso.</p>
    <p> o sentido disso. Você caminha pela aldeia atrás dos dois anões e tem consciência de que muita gente anã está observando você. Eles começam a segui-lo, e forma-se uma procissão à sua passagem. Há muitos sussurros e cochichos em meio à multidão de anões, e os olhares de expectativa aparecem nos rostos.</p>
    <p>Logo, você chega ao pé dos degraus de pedra que conduzem a uma construção também de pedra. Do lado de fora, num trono ornamentado de madeira, há um homem pequeno sentado, velho e de barbas longas. Está usando uma coroa, mas tem uma aparência desolada e segura a cabeça nas mãos. Você sobe os degraus com rapidez, tirando o cabo e a cabeça do martelo de sua mochila. Ao vê-los, os olhos do velho anão se iluminam, e ele salta de pé. Pegando-os ansiosamente das suas mãos, ele começa a gritar:</p>
    <p>- Meu martelo! Meu martelo! Estamos salvos. Agora, meu povo, estamos prontos para lutar contra os Trolls.</p>`

    function alt1(){
        btn1.removeEventListener('click',alt1)
        btn1.addEventListener('click',restart)
        btn1.innerHTML = 'Jogar Novamente'
        txt.innerHTML = `<p>A multidão inteira explode em vibração, sacudindo os machados e espadas no ar. Você conta a Gillibran sobre a falta de sorte de Perna Grande, e por que você resolveu continuar a missão que era dele, além das peripécias com todos os monstros que encontrou no caminho. Gillibran ouve e fecha o rosto ao ouvir as notícias sobre Perna Grande, seu fiel servidor. Em seguida, ele abre uma gaveta na base do trono e tira dela uma pequena caixa de prata e um elmo com asas de ouro, entregando-os a você. O elmo vale centenas de Peças de Ouro, e você o coloca orgulhosamente na cabeça.</p>
        <p>Uma grande aclamação expressa a aprovação da multidão. Você abre a caixa de prata e encontra dúzias de jóias e pedras preciosas. Você coloca estes objetos na sua mochila e acena para os felizes anões de Stonebridge.</p>
        <p>Sua missão está terminada, e você agora é mais rico do que seus sonhos mais loucos poderiam ter imaginado.</p>
        <p><strong>OBRIGADO POR JOGAR!</strong></p>
        <h2>FIM DE JOGO</h2>`
    }
}

//AO CONCLUIR O ÚLTIMO EVENTO, CHECAR TODOS OS COMBATES EM BUSCA DE ERROS
//Atentar para a atribuição da variável vitoria = 0