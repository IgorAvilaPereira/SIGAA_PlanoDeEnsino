

// function mostraEmenta(disciplina) {
//   var ementa = eval("ementa_" + disciplina);
//   alert(ementa);
//   return ementa;
// }

function script1(disciplina) {

  var ementa_fcp = "Histórico e evolução dos computadores e da computação. Classificação dos softwares e como são desenvolvidos. Interface de linha de comando. Formas de representação numérica e bases binária, octal, decimal e hexadecimal. Conversão entre bases numéricas. Aritmética binária. Representação dos números em precisão simples e dupla. Conceitos da organização do hardware, funcionamento da CPU e organização da memória.";
  var ementa_lgp = "Algoritmos, pseudocódigo, programação imperativa e estruturada. Tipos de dados fundamentais. Expressões e statements. Literais, identificadores, constantes e variáveis, declaração e atribuição. Coerção. Entrada e saída. Expressões numéricas e booleanas, controle de fluxo, condicionais e estruturas de repetições. Noções de vetores, matrizes e funções.";
  var ementa_ihc = "Conceitos básicos de Interação Humano-Computador (IHC). Noções de Arquitetura da Informação. Aspectos cognitivos e culturais do design, modelos mentais e princípios de percepção, memorização e atenção dos usuários. Usabilidade. Acessibilidade. Prototipação. Noções de implementação de interfaces.";
  var ementa_sif = "Introdução à Teoria Geral de Sistemas. Tipos de Sistemas de Informação: transacionais, de Informação gerencial (SIG), de Apoio à Decisão (SAD), Sistemas de Informação para Executivos (SIE). Conceitos e Tecnologias presentes na implantação de Sistemas ERP – Planejamento de Recursos Empresariais, CRM - Customer Relationship Management, BI– Business Intelligence, KM - Gestão do Conhecimento e BSC – Balanced Scorecard. Conceitos Básicos de Governança e Qualidade de Serviços de TI.";
  var ementa_tsc = "Tecnologia e Sociedade. Ética. Educação Ambiental, Direitos Humanos, Educação das Relações Étnico-Raciais, História e Cultura Afro-Brasileira, Africana e Indígena.";
  var ementa_mbs = "Conjuntos, sua definição e suas operações. Conjuntos Numéricos e suas operações. Relações e seus tipos. Relações Binárias e o Plano Cartesiano. Representação Matricial. Funções, sua definição e as funções básicas: identidade, valor absoluto e percentual.";




  var ocp = ["fcp"];
  var ementa_ocp = "Estrutura básica de computadores. A Unidade Central de Processamento. Estruturas de barramentos. Organização de memória. Sistemas de entrada/saída. Suporte ao sistema operacional. Padrões de arquiteturas. Introdução a arquiteturas dedicadas. Linguagem de montagem.";

  var pmd = ["lgp"];
  var ementa_pmd = "Tipos primitivos, compostos e referenciados. Estruturas de dados elementares: registros, cadeias, arranjos (vetores), matrizes, listas, conjuntos e vetores associativos. Funções: assinatura, parâmetros, passagem por valor (cópia) e referência, retornos, tratamento de erros e exceções, encadeamento e empilhamento. Modularização e reuso. Modelagem, implementação e testes. Noções de orientação a objetos.";

  var dif = ["ihc"];
  var ementa_dif = "Planejamento e implementação da interface com o usuário usando linguagens de programação e ferramentas que permitam a estruturação da informação e definição da aparência em diversos dispositivos. Noções de interação do usuário.";

  var esf = ["sif"];
  var ementa_esf = "Ciclo de vida do software, estágios do software, modelos de processo de software, metodologias e técnicas de desenvolvimento de software, documentação do software, engenharia de requisitos, técnicas de diagramação de software.";

  var pmb = ["sif"];
  var ementa_pmb = "Introdução aos conceitos básicos de banco de dados e sistemas gerenciadores de banco de dados. Projeto de banco de dados. Modelagem conceitual, lógica e física de banco de dados relacionais. Noções de linguagem para implementação e operação.";

  var fmd = ["mbs"];
  var ementa_fmd = "Estudo dos princípios fundamentais da lógica: cálculo proposicional, proposições, operações lógicas e argumentos válidos; e da matemática discreta: álgebra dos conjuntos, operações com conjuntos, álgebra booleana, relações entre a álgebra de conjuntos e a álgebra de proposições, relações binárias. Teoria dos números. Indução Matemática. Somatórios e Combinatórios.";

  var sop = ["ocp", "pmd"];
  var ementa_sop = "Introdução aos Sistemas Operacionais. Ambientes operacionais: monousuário e multiusuário. Objetivos do sistema operacional. Arquitetura e medidas de eficiência. Estrutura dos Sistemas Operacionais: gerência de memória, gerência de processos, gerência de arquivos e gerência de dispositivos. Estudos de caso. Programação concorrente.";

  var poo = ["pmd"];
  var ementa_poo = "Conceitos e princípios de programação orientada a objetos: abstração, classes, instâncias, estado e comportamento, atributos e métodos, comandos e consultas, coesão, encapsulamento, associação, agregação, composição, delegação, dependência e acoplamento, herança e polimorfismo. Modelagem, implementação e testes. Noções de princípios e padrões de projeto.";

  var dit = ["dif", "pmd"];
  var ementa_dit = "Planejamento e implementação da interação do usuário usando linguagens, princípios e padrões que permitam a programação do comportamento das interfaces.";

  var aps = ["esf"];
  var ementa_aps = "Modelagem com SysML; Princípios de modelagem OO, Linguagem de Modelagem Unificada (UML), Diagramas Estruturais (Classe, Objeto, Pacote, Estrutura composta, Componentes, Implantação, Perfil), Diagramas Comportamentais (Caso de Uso, Atividade e Máquina de Estados) e Diagramas de Interação (Sequência, Comunicação, Interação Geral e Tempo).";

  var iob = ["lgp", "fmd", "pmb"];
  var ementa_iob = "Modelo relacional. Linguagem para definição, manipulação e consulta de dados. Normalização. Noções de programação em bancos de dados.";

  var fee = ["mbs"];
  var ementa_fee = "Princípios do Pensamento Estatístico (PE) e Aprendizagem por Problema (PBL) estatístico. Produção de dados: indivíduo, atributo e  variável, Dado Estatístico e Informação Estatística. Retratar a variação em gráficos: histograma, gráficos de barras, gráficos de setores, gráficos de dispersão e Box-Plot. Descrever a variação em números: medidas de posição, dispersão, assimetria e curtose. Associação entre variáveis: análise bidimensional básica";

  var ppp = ["poo", "aps"];
  var ementa_ppp = "Conceitos de projeto: hierarquia, abstração, modularização e encapsulamento. Decisões de projeto quanto ao uso de herança, composição e delegação. Princípios de projeto de software, como o SOLID e outros. Refatoração. Padrões de projeto de software GoF e emergentes. Anti-padrões. Noções de princípios e padrões de arquitetura.";

  var wb1 = ["poo", "dit", "iob"];
  var ementa_wb1 = "Arquitetura da web. Noções do protocolo HTTP e funcionamento de um servidor web. Linguagem de script para desenvolvimento web no servidor. Dados de sessão. Integração com SGBDs e outras fontes de dados. Noções de web frameworks.";

  var wb2 = ["wb1", "ppp"];
  var ementa_wb2 = "Principais frameworks para o desenvolvimento de aplicativos corporativos e seus padrões arquiteturais. Organização em um padrão arquitetural e uso de frameworks para o desenvolvimento de aplicações que produzem páginas Web dinâmicas e aplicações que produzem e consomem formatos intercambiáveis de dados. Implantação.";

  var edd = ["sop"];
  var ementa_edd = "Tipos Abstratos de Dados: arranjos, pilhas, filas, listas e tabelas de dispersão. Métodos de ordenação e pesquisa. Noções de árvores, grafos e de complexidade de algoritmos.";

  var fie = ["fee"];
  var ementa_fie = "Problemas de inferência e distribuição de probabilidade de uma variável aleatória. Técnicas de inferências estatística: distribuição amostral, seleção de amostras, intervalo de confiança e teste de hipóteses. Aplicações computacionais.";

  var pbd = ["iob"];
  var ementa_pbd = "Funções. Estruturas de controle. Procedures. Cursores. Gatilhos. Tratamento de erros e mensagens.";

  var gpj = ["aps"];
  var ementa_gpj = "Conceitos envolvendo projetos, Modelo Tradicional de Gerenciamento - papel do gerente, Áreas de Gerenciamento de Projetos (integração, escopo, tempo, custo, qualidade, RH, comunicações, riscos, aquisições e partes interessadas), Gerenciamento Ágil de Projeto.";

  var ppa = ["ppp"];
  var ementa_ppa = "Tipos de aplicativos e visão geral das plataformas para desenvolvimento e implantação. Atributos qualitativos. Estilos arquiteturais. Princípios e padrões de arquitetura de software para lógica de domínio, apresentação e integração com serviços externos e bancos de dados. Arquitetura orientada a serviços. Crosscutting concerns. Modelagem, implementação, empacotamento e distribuição de componentes, bibliotecas e frameworks.";

  var rcp = ["edd"];
  var ementa_rcp = "Modelos de referência OSI/ISO e TCP/IP. Topologias, protocolos e serviços em redes, associados aos diversos níveis dos modelos de referência. Noções de Interligação, gerenciamento, segurança e aplicações de redes de computadores.";

  var edd = ["sop"];

  var qsf = ["gpj"];
  var ementa_qsf = "Introdução a Qualidade, Histórico da qualidade; Conceitos de qualidade; Normas ISO de Processo de Software; Normas ISO de Produto de Software; Níveis de Maturidade e Capacidade de Software.";

  var eep = ["gpj"];
  var ementa_eep = "Introdução à Administração. Teorias em Administração. Relações humanas, competências e liderança. Conceitos básicos sobre a Gestão de Operações, Recursos Humanos, Marketing e Finanças. Empreendedorismo. Técnicas e procedimentos para elaboração de planos de negócios. Planejamento Estratégico. Precificação de Software. Noções de qualidade e produtividade.";

  var tci = ["rcp"];
  var ementa_tci = "Noções de segurança de sistemas, reconhecimento de padrões, inteligência artificial, ciência de dados, algoritmos e tópicos emergentes.";

  var tds = ["ppa"];
  var ementa_tds = "Noções de integração de sistemas, manutenção de sistemas legados, novos princípios e práticas para a implementação, projeto e arquitetura de sistemas, tópicos emergentes no back-end.";

  var tda = ["wb2"];
  var ementa_tda = "Noções de desenvolvimento de aplicativos para dispositivos móveis, embarcados e vestíveis, noções de desenvolvimento de jogos e tópicos emergentes no front-end.";

  var tbd = ["pbd"];
  var ementa_tbd = "Noções de bancos de dados não-relacionais, tuning, OLAP, pivotamento, particionamento, sharding e tópicos emergentes em bancos de dados.";

  var tas = ["qsf"];
  var ementa_tas = "Noções de sistemas de apoio à decisão, business intelligence, verificação e validação, testes automatizados e tópicos emergentes na análise de sistemas e negócios.";

  var sem = ["rcp", "ppa", "wb2", "qsf", "eep", "mct"];
  var co_sem = ["tcc"];
  var ementa_sem = "Apresentação de projetos, seminários e palestras relevantes à formação do futuro profissional de TI.";

  var acc = ["poo", "dit", "sop", "aps", "iob", "fee"];
  var ementa_acc = "Os cursos superiores de tecnologia estarão organizados em uma base de conhecimentos científicos e tecnológicos, dessa maneira poderão ser previstas horas de atividades complementares realizadas por meio de desenvolvimento de projetos integradores/técnicos, de extensão e/ou de pesquisa e outras formas de atividades acadêmico-científico-culturais.";

  var tcc = ["rcp", "ppa", "wb2", "qsf", "eep", "mct"];
  var co_tcc = ["sem"];
  var ementa_tcc = "Condução de um trabalho de pesquisa acadêmico/científico ou projeto e desenvolvimento de tecnologia/profissional ou planejamento de empreendimento empresarial na área de TIC. Este componente de TCC deve ser realizado concomitantemente ao de Seminários ou após este.";

  var mct = ["fie"];
  var ementa_mct = "História do pensamento científico e seus métodos. Os aspectos básicos da pesquisa: formulação do problema, objetivos, hipóteses e variáveis. Técnicas de redação e apresentação do trabalho científico. Princípios norteadores do trabalho científico.";

  var ementa_optativa = "<b>Inglês:</b><br>Revisão gramatical e sintática básica da língua inglesa. Expressões técnicas e estruturas básicas da língua para leitura e compreensão de textos diversos na área do curso. Estratégias de leitura em língua inglesa e usos do dicionário como ferramenta instrumental. Interpretação de textos técnicos a partir do desenvolvimento de habilidades de leitura e do estudo de itens gramaticais sistematizados referentes à linguagem tecnológica específica. Abordagem integrada dos níveis de compreensão de leitura, suas estratégias e aspectos léxico gramaticais; <br><br><b>Libras:</b><br>Criar possibilidades metodológicas de interação e integração da comunidade acadêmica ouvinte, com pessoas surdas usuárias da Língua de Sinais da cidade do Rio Grande. Conceituar Libras, explorando os fundamentos históricos da educação de surdos, os aspectos linguísticos da Língua, além de sinais específicos da área.";

  var ementas = {
    ementa_fcp: ementa_fcp,
    ementa_acc: ementa_acc,
    ementa_aps: ementa_aps,
    ementa_dif: ementa_dif,
    ementa_dit: ementa_dit,
    ementa_edd: ementa_edd,
    ementa_eep: ementa_eep,
    ementa_esf: ementa_esf,
    ementa_fcp: ementa_fcp,
    ementa_fee: ementa_fee,
    ementa_fie: ementa_fie,
    ementa_fmd: ementa_fmd,
    ementa_gpj: ementa_gpj,
    ementa_ihc: ementa_ihc,
    ementa_iob: ementa_iob,
    ementa_lgp: ementa_lgp,
    ementa_mbs: ementa_mbs,
    ementa_mct: ementa_mct,
    ementa_ocp: ementa_ocp,
    ementa_optativa: ementa_optativa,
    ementa_pbd: ementa_pbd,
    ementa_pmb: ementa_pmb,
    ementa_pmd: ementa_pmd,
    ementa_poo: ementa_poo,
    ementa_ppa: ementa_ppa,
    ementa_ppp: ementa_ppp,
    ementa_qsf: ementa_qsf,
    ementa_rcp: ementa_rcp,
    ementa_sem: ementa_sem,
    ementa_sif: ementa_sif,
    ementa_sop: ementa_sop,
    ementa_tas: ementa_tas,
    ementa_tbd: ementa_tbd,
    ementa_tcc: ementa_tcc,
    ementa_tci: ementa_tci,
    ementa_tda: ementa_tda,
    ementa_tds: ementa_tds,
    ementa_tsc: ementa_tsc
  };

  // objetivo geral do curso
  var iframe = document.getElementById('form:objetivoGeralCurso_ifr');
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var elemento = iframeDocument.getElementById('tinymce');
  elemento.innerHTML = "objetivo geral";

  // objetivo geral do componente curricular
  var iframe = document.getElementById('form:objetivoComponenteCurricular_ifr');
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var elemento = iframeDocument.getElementById('tinymce');
  elemento.innerHTML = ementas["ementa_" + disciplina];

  // metodologia
  var iframe = document.getElementById('form:metodologia_ifr');
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var elemento = iframeDocument.getElementById('tinymce');
  elemento.innerHTML = "<br>Aulas Expositivas<br>Aulas Práticas<br>Trabalhos/Avaliações em grupo<br>Trabalhos/Avaliações individuais";
  
  // instrumentos
  var iframe = document.getElementById('form:instrumentoAvaliacao_ifr');
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var elemento = iframeDocument.getElementById('tinymce');
  elemento.innerHTML = "a) acompanhamento nas aulas e atendimentos<br>b) trabalhos e projeto final permitem a recuperação de conteúdos durante o componente e<br>c) negociação do prazo de entrega, se possível.";
  
  // criterio
  var iframe = document.getElementById('form:conteudo_ifr');
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var elemento = iframeDocument.getElementById('tinymce');
  elemento.innerHTML = "A avaliação da aprendizagem deverá ocorrer ao longo da disciplina e no decorrer dos trabalhos. Haverá, durante a disciplina questionamentos, possibilitando aos alunos, quando for o caso, o retorno dos temas propostos anteriormente. Ao final de cada aula, materiais de apoio serão encaminhados para turma; Pesos aproximados: 50% atividade presencial, 50% atividades extra-classe (trabalhos).";
  
  // atendimentos
  document.getElementById("form:horarioAtendimento").value = "a) via e-mail/discord, b) nos encontros presenciais c) por demanda, em data e horário combinado entre professor e estudantes.";

  // observacoes  
  var iframe = document.getElementById('form:observacao_ifr');
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var elemento = iframeDocument.getElementById('tinymce');
  elemento.innerHTML = "Nenhuma.";

  // avaliacoes
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, '0');
  const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // mês começa do 0
  const ano = hoje.getFullYear();
  const dataFormatada = `${dia}/${mes}/${ano}`;
  document.getElementById("form:descricaoAV").value = "1ª Avaliação";
  document.getElementById("form:dataAV").value = dataFormatada;
  document.getElementById("form:horaAV").value = "18:50";
  document.getElementById('form:adicionarAV').click();  

  
  document.getElementById("form:descricaoAV").value = "2ª Avaliação";
  document.getElementById("form:dataAV").value = dataFormatada;
  document.getElementById("form:horaAV").value = "18:50";
  document.getElementById('form:adicionarAV').click();  

}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn1").addEventListener("click", function () {
    var disciplina = document.querySelector('input[name="disciplina"]:checked').value;
    
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script1,
        args: [disciplina]
      });
    })()
  });
});   