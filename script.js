function rolarTempo() {
    const tabelaTempo = [
      "1d12 segundos",
      "2d20 segundos",
      "1d4 minutos",
      "1d20 minutos",
      "1 hora",
      "1d4 horas",
      "1d6 horas",
      "5 horas"
    ];
    const resultado = tabelaTempo[Math.floor(Math.random() * tabelaTempo.length)];
    document.getElementById("tempoResultado").textContent = "Resultado: " + resultado;
  }
  
  function rolarFerimentos() {
    const tabelaFerimentos = [
      "Olho",
      "Braço/Mão",
      "Perna/Pé",
      "Manco",
      "Manco",
      "Ferimento Interno",
      "Costela Quebrada",
      "Costela Quebrada",
      "Costela Quebrada",
      "Cicatriz Horrenda",
      "Cicatriz Horrenda",
      "Cicatriz Horrenda",
      "Ferida Infeccionada",
      "Ferida Infeccionada",
      "Ferida Infeccionada",
      "Cicatriz",
      "Cicatriz",
      "Cicatriz"
    ];
    const resultado = tabelaFerimentos[Math.floor(Math.random() * tabelaFerimentos.length)];
    document.getElementById("ferimentosResultado").textContent = "Resultado: " + resultado;
  }
  
  function rolarAcido() {
    const tabelaAcido = [
      "Cegueira",
      "Cegueira Parcial",
      "Mão Corroída",
      "Pé Corroído",
      "Neuralgia Severa",
      "Neuralgia",
      "Desfiguração",
      "Bolhas",
      "Queimaduras"
    ];
    const resultado = tabelaAcido[Math.floor(Math.random() * tabelaAcido.length)];
    document.getElementById("acidoResultado").textContent = "Resultado: " + resultado;
  }
  
  function rolarCorte() {
    const tabelaCorte = [
      "Olho",
      "Braço/Mão",
      "Perna/Pé",
    ];
    const resultado = tabelaCorte[Math.floor(Math.random() * tabelaCorte.length)];
    document.getElementById("corteResultado").textContent = "Resultado: " + resultado;
  }
  
  function rolarEletricidade() {
    const tabelaEletricidade = [
      "Dano Cerebral",
      "Mão",
      "Pé",
      "Falha Renal",
      "Alta Voltagem",
      "Ferimento Cardíaco",
      "Dano Muscular",
      "Espasmo Muscular",
      "Queimaduras de Primeiro Grau"
    ];
    const resultado = tabelaEletricidade[Math.floor(Math.random() * tabelaEletricidade.length)];
    document.getElementById("eletricidadeResultado").textContent = "Resultado: " + resultado;
  }
  
  function rolarFogo() {
    const tabelaFogo = [
      "Dano Ocular",
      "Queimadura de Quarto Grau",
      "Queimadura de Terceiro Grau",
      "Queimadura de Segundo Grau",
      "Neuralgia Severa",
      "Neuralgia",
      "Desfiguração",
      "Bolhas",
      "Queimaduras de Primeiro Grau"
    ];
    const resultado = tabelaFogo[Math.floor(Math.random() * tabelaFogo.length)];
    document.getElementById("fogoResultado").textContent = "Resultado: " + resultado;
  }
  
  function rolarFrio() {
    const tabelaFrio = [
      "Dano Ocular",
      "Atrofiamento Nervoso",
      "Mão Gangrenada",
      "Pé Gangrenado",
      "Neuralgia Severa",
      "Neuralgia",
      "Congelamento do Pé",
      "Congelamento da Mão",
      "anosmia",
    ];
    const resultado = tabelaFrio[Math.floor(Math.random() * tabelaFrio.length)];
    document.getElementById("frioResultado").textContent = "Resultado: " + resultado;
  }
  
  function rolarImpacto() {
    const tabelaImpacto = [
      "Traumatismo Craniano",
      "Perna Quebrada",
      "Braço Quebrado",
      "Ferimento Interno",
      "Costela Quebrada",
      "Concussão Severa",
      "Concussão Leve",
      "Hematoma Severo",
      "Nariz Quebrado",
    ];
    const resultado = tabelaImpacto[Math.floor(Math.random() * tabelaImpacto.length)];
    document.getElementById("impactoResultado").textContent = "Resultado: " + resultado;
  }
  
  function rolarPerfuração() {
    const tabelaPerfuração = [
      "Olho",
      "Garganta",
      "Virilha",
      "Hemorragia Severa",
      "Ferimento Interno",
      "Estômago Perfurado",
      "Hemorragia",
      "Rompimento Venoso",
      "Cicatriz",
    ];
    const resultado = tabelaPerfuração[Math.floor(Math.random() * tabelaPerfuração.length)];
    document.getElementById("perfuraçãoResultado").textContent = "Resultado: " + resultado;
  }
  
  function rolarVeneno() {
    const tabelaVeneno = [
      "Dano no Sistema Nervoso",
      "Dano Severo no Fígado",
      "Dano no Fígado",
      "Falha Renal Severa",
      "Falha Renal",
      "Ferimento Cardíaco",
      "Vertigem",
      "Náusea Severa",
      "Náusea",
    ];
    const resultado = tabelaVeneno[Math.floor(Math.random() * tabelaVeneno.length)];
    document.getElementById("venenoResultado").textContent = "Resultado: " + resultado;
  }
  
  // Repita as funções para as outras tabelas
  