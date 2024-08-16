function exibirdados(){
    const cartas = [
    {
      "nome": "Entusiasta de Geologia",
      "tipo": "Criatura - Humano Artesão",
      "custo": 3,
      "habilidades": ["No início de sua etapa final, crie uma ficha de Pedra de Energia virada",
        "Compre um card e coloque um marcador +1/+1 em Entusiasta de Geologia"],
      "poder": "2/5",
      "foto": ""
    },
    {
      "nome": "Mecânica de Tópteros",
      "tipo": "Criatura - Humano Artesão",
      "custo": 1,
      "habilidades": ["Toda vez que você comprar seu segundo card a cada turno, coloque um marcador +1/+1 em Mecânica de Tópteros.",
        "Quando Mecânica de Tópteros morrer, crie uma ficha de criatura artefato incolor 1/1 do tipo Tóptero com voar."],
      "poder": "2/1",
      "foto": ""
    },
    {
      "nome": "Adepto de Lat-Nam",
      "tipo": "Criatura — Humano Mago",
      "custo": 3,
      "habilidades": ["Toda vez que você comprar seu segundo card a cada turno, coloque um marcador +1/+1 em Adepto de Lat-Nam."],
      "poder": "3/3",
      "foto": ""
    },
    {
      "nome": "Drafna, Fundador de Lat-Nam",
      "tipo": "Criatura Lendária — Humano Artesão Conselheiro",
      "custo": 1,
      "habilidades": ["Devolva o artefato alvo que você controla para a mão de seu dono.", " Copie a mágica de artefato alvo que você controla. (A cópia torna-se uma ficha.)"],
      "poder": "2/1",
      "foto": ""
    },
    {
      "nome": "Urza, Prodígio da Pedra de Energia",
      "tipo": "Criatura Lendária — Humano Artesão",
      "custo": 2,
      "habilidades": ["Compre um card e depois descarte um card.Toda vez que você descartar um ou mais cards de artefato, crie uma ficha de Pedra de Energia virada. Esta habilidade é desencadeada apenas uma vez a cada turno."],
      "poder": "1/3",
      "foto": ""
    },
    {
      "nome": "Arquiteta de Tópteros",
      "tipo": "Criatura — Humano Artesão",
      "custo": 3,
      "habilidades": ["Toda vez que um artefato entra no campo de batalha sob seu controle, a criatura alvo ganha voar até o final do turno."],
      "poder": "2/3",
      "foto": ""
    },
    {
      "nome": "Elite do Senhor da Guerra",
      "tipo": "Criatura — Soldado Humano",
      "custo": 2,
      "habilidades": ["Como custo adicional para conjurar esta magia, vire dois artefatos, criaturas e/ou terrenos desvirados que você controla."],
      "poder": "4/4",
      "foto": ""
    },
    {
      "nome": "Paraquedista de Emboscada",
      "tipo": "Criatura — Humano Soldado",
      "custo": 1,
      "habilidades": ["Lampejo",
      "Voar","As criaturas que você controla recebem +1/+1 até o final do turno."],
      "poder": "1/2",
      "foto": ""
    },
    {
      "nome": "Cavalaria de Aeronautas",
      "tipo": "Criatura — Humano Soldado",
      "custo": 4,
      "habilidades": ["Voar", "Quando Cavalaria de Aeronautas entrar no campo de batalha, coloque um marcador +1/+1 em outro Soldado alvo que você controla."],
      "poder": "3/4",
      "foto": ""
    },
    {
      "nome": "Vanguarda da Falange",
      "tipo": "Criatura — Humano Soldado",
      "custo": 1,
      "habilidades": ["Vigilância", "Toda vez que um artefato entra no campo de batalha sob seu controle, Vanguarda da Falange recebe +1/+0 até o final do turno."],
      "poder": "2/2",
      "foto": ""
    },
    {
      "nome": "Roca de Koilos",
      "tipo": "Criatura — Ave",
      "custo": 4,
      "habilidades": ["Lampejo", "Voar", "Quando Roca de Koilos entrar no campo de batalha, crie uma ficha de Pedra de Energia virada"],
      "poder": "3/3",
      "foto": ""
    },
    {
      "nome": "Cão de Salvamento",
      "tipo": "Criatura — Cão Soldado",
      "custo": 3,
      "habilidades": ["Lampejo", "Quando Cão de Salvamento entrar no campo de batalha, coloque um marcador +1/+1 em cada outro Soldado que você controla.", 
      "Previna todo o dano que seria causado a outros Soldados atacantes que você controla."],
      "poder": "3/3",
      "foto": ""
    },
    {
      "nome": "Serafim de Aço",
      "tipo": "Criatura Artefato — Anjo",
      "custo": 6,
      "habilidades": ["Voar", 
      "No início do combate no seu turno, a criatura alvo que você controla ganha voar, vigilância ou vínculo com a vida, à sua escolha, até o final do turno.", 
      "Protótipo (Você pode conjurar esta mágica com custo de mana, cor e tamanho diferentes. Ela permanece com suas habilidades e tipos.) 3/3"],
      "poder": "5/4",
      "foto": ""
    },
    {
      "nome": "Metamorfo Corpulento",
      "tipo": "Criatura Artefato — Metamorfo",
      "custo": 9,
      "habilidades": ["Você pode fazer com que Metamorfo Corpulento entre no campo de batalha como uma cópia de um artefato ou criatura que você controla, exceto por ser uma criatura artefato além de seus outros tipos e seu poder e sua resistência serem iguais ao poder e à resistência de Metamorfo Corpulento.", "Protótipo (Você pode conjurar esta mágica com custo de mana, cor e tamanho diferentes. Ela permanece com suas habilidades e tipos.)3/3"],
      "poder": "7/7",
      "foto": ""
    },
  
    {
      "nome": "Mensageiro de Combate",
      "tipo": "Criatura Artefato — Constructo",
      "custo": 1,
      "habilidades": ["sacrifique Mensageiro de Combate: Compre um card.", "Desenterrar Blue (Blue: Devolva este card de seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele for deixar o campo de batalha. Use desenterrar somente como um feitiço.)"],
      "poder": "1/1",
      "foto": ""
    },
    {
      "nome": "Vanguardeiro Yotiano",
      "tipo": "Criatura Artefato — Soldado",
      "custo": 1,
      "habilidades": ["Toda vez que Vanguardeiro Yotiano ataca, outra criatura alvo que você controla recebe +1/+1 até o final do turno.", "Desenterrar White (White: Devolva este card de seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele for deixar o campo de batalha. Use desenterrar somente como um feitiço.)"],
      "poder": "1/1",
      "foto": ""
    },
    {
        "nome": "Coorte de Sucata",
        "tipo": "Criatura Artefato — Soldado",
        "custo": 4,
        "habilidades": ["Quando Coorte de Sucata entrar no campo de batalha, crie uma ficha de criatura artefato Soldado incolor 1/1.", "Desenterrar 2White (2White: Devolva este card de seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele for deixar o campo de batalha. Use desenterrar somente como um feitiço.)"],
        "poder": "3/1",
        "foto": ""
      },
      {
        "nome": "Subjugação da Pedra de Fraqueza",
        "tipo": "Encantamento — Aura",
        "custo": 0,
        "habilidades": ["Encantar artefato ou criatura", "Quando Subjugação da Pedra de Fraqueza entra no campo de batalha, você pode pagar 3. Se fizer isso, vire a permanente encantada.", "A permanente encantada não desvira durante a etapa de desvirar de seu controlador."],
        "poder": "0/0",
        "foto": ""
      },
      {
        "nome": "Animação da Pedra de Força",
        "tipo": "Encantamento — Aura",
        "custo": 3,
        "habilidades": ["Encantar artefato", "Quando Animação da Pedra de Força entrar no campo de batalha, compre um card.", "O artefato encantado é uma criatura com poder e resistência básicos 4/4 além de seus outros tipos."],
        "poder": "0/0",
        "foto": ""
      },
      {
        "nome": "Resfriamento Involuntário",
        "tipo": "Feitiço",
        "custo": 3,
        "habilidades": ["Vire até dois artefatos e/ou criaturas alvo. Coloque dois marcadores de atordoamento em cada uma daquelas permanentes. (Se uma permanente com um marcador de atordoamento se tornaria desvirada, em vez disso, remova um marcador de atordoamento dela.)"],
        "poder": "0/0",
        "foto": ""
      },
      {
        "nome": "Depor as Armas",
        "tipo": "Feitiço",
        "custo": 0,
        "habilidades": ["Exile a criatura alvo com valor de mana igual ou inferior ao número de Planícies que você controla. Seu controlador ganha 3 pontos de vida."],
        "poder": "0/0",
        "foto": ""
      },
      {
        "nome": "Rede Estática",
        "tipo": "Encantamento",
        "custo": 3,
        "habilidades": ["Quando Static Net entra no campo de batalha, exile o permanente alvo que não seja um terreno e que um oponente controla até que Static Net deixe o campo de batalha.", "Quando Static Net entra no campo de batalha, você ganha 2 pontos de vida e cria uma ficha de Powerstone virada."],
        "poder": "0/0",
        "foto": ""
      },
      {
        "nome": "Lâmina de Energia do Veterano",
        "tipo": "Artefato — Equipamento",
        "custo": 3,
        "habilidades": ["A criatura equipada recebe +2/+0.", "Equipar Soldado Branco", "Equipar 2 ( 2: Anexar à criatura alvo que você controla. Equipar somente como um feitiço.)"],
        "poder": "0/0",
        "foto": ""
      },
      {
        "nome": "Lição Severa",
        "tipo": "Mágica Instantânea",
        "custo": 2,
        "habilidades": ["Compre dois cards e depois descarte um card. Crie uma ficha de Pedra de Energia virada.", "(Ela é um artefato com Tap: Adicione Colorless. Este mana não pode ser gasto para conjurar uma mágica não de artefato)."],
        "poder": "0/0",
        "foto": ""
      },

      {
        "nome": "Island",
        "tipo": "Basic Land - Island",
        "quantidade": 8 
      },

      {
        "nome": "Plains",
        "tipo": "Basic Land - Plains",
        "quantidade": 8 
      }
  ]

  console.clear();
console.log("// exibe todas as cartas dentro da estrutura JSON");
console.log(cartas);
console.log("// exibe o dados da primeira carta");
console.log(cartas[0]);
console.log("// exibe o dados da segunda carta");
console.log(cartas[1]);
console.log("// exibe se a carta 2 e seu poder");
console.log(cartas[1].poder);
}
