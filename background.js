
function script1(disciplina) {

  var ementa_fcp = "Histórico e evolução dos computadores e da computação. Classificação dos softwares e como são desenvolvidos. Interface de linha de comando. Formas de representação numérica e bases binária, octal, decimal e hexadecimal. Conversão entre bases numéricas. Aritmética binária. Representação dos números em precisão simples e dupla. Conceitos da organização do hardware, funcionamento da CPU e organização da memória.";
  var objetivo_fcp = "Introduzir os princípios norteadores e a evolução da computação e desenvolver os conceitos básicos das arquiteturas de computadores e dos sistemas numéricos.";

  var ementa_lgp = "Algoritmos, pseudocódigo, programação imperativa e estruturada. Tipos de dados fundamentais. Expressões e statements. Literais, identificadores, constantes e variáveis, declaração e atribuição. Coerção. Entrada e saída. Expressões numéricas e booleanas, controle de fluxo, condicionais e estruturas de repetições. Noções de vetores, matrizes e funções.";
  var objetivo_lgp = "Desenvolver os princípios do raciocínio lógico, através da análise de problemas, com foco na construção de algoritmos e programas de computador eficientes em uma linguagem de alto nível.";

  var ementa_ihc = "Conceitos básicos de Interação Humano-Computador (IHC). Noções de Arquitetura da Informação. Aspectos cognitivos e culturais do design, modelos mentais e princípios de percepção, memorização e atenção dos usuários. Usabilidade. Acessibilidade. Prototipação. Noções de implementação de interfaces.";
  var objetivo_ihc = "Compreender os fundamentos, princípios, técnicas e aplicações da Interação Humano-Computador com ênfase na análise e projeto de interfaces.";

  var ementa_sif = "Introdução à Teoria Geral de Sistemas. Tipos de Sistemas de Informação: transacionais, de Informação gerencial (SIG), de Apoio à Decisão (SAD), Sistemas de Informação para Executivos (SIE). Conceitos e Tecnologias presentes na implantação de Sistemas ERP – Planejamento de Recursos Empresariais, CRM - Customer Relationship Management, BI– Business Intelligence, KM - Gestão do Conhecimento e BSC – Balanced Scorecard. Conceitos Básicos de Governança e Qualidade de Serviços de TI.";
  var objetivo_sif = "Compreender os fundamentos, princípios, técnicas e aplicações dos diversos tipos de sistemas de informação nas organizações e identificar soluções organizacionais e administrativas baseadas no apoio de um Sistema de Informação para a tomada de decisões dentro da perspectiva empresarial.";

  var ementa_tsc = "Tecnologia e Sociedade. Ética. Educação Ambiental, Direitos Humanos, Educação das Relações Étnico-Raciais, História e Cultura Afro-Brasileira, Africana e Indígena.";
  var objetivo_tsc = "Discutir os aspectos sociais e humanos da tecnologia, as implicações éticas e as relações com a história, cultura e mudanças sociais.";

  var ementa_mbs = "Conjuntos, sua definição e suas operações. Conjuntos Numéricos e suas operações. Relações e seus tipos. Relações Binárias e o Plano Cartesiano. Representação Matricial. Funções, sua definição e as funções básicas: identidade, valor absoluto e percentual.";
  var objetivo_mbs = "Desenvolver os princípios do raciocínio matemático por meio de conhecimentos básicos de matemática, assegurando a base de conhecimento necessária às demandas do curso e da área de computação.";

  var ocp = ["fcp"];
  var ementa_ocp = "Estrutura básica de computadores. A Unidade Central de Processamento. Estruturas de barramentos. Organização de memória. Sistemas de entrada/saída. Suporte ao sistema operacional. Padrões de arquiteturas. Introdução a arquiteturas dedicadas. Linguagem de montagem.";
  var objetivo_ocp = "Entender a organização de computadores, seus componentes e desenvolver uma visão crítica sobre os requisitos de desempenho associados a um sistema computacional.";

  var pmd = ["lgp"];
  var ementa_pmd = "Tipos primitivos, compostos e referenciados. Estruturas de dados elementares: registros, cadeias, arranjos (vetores), matrizes, listas, conjuntos e vetores associativos. Funções: assinatura, parâmetros, passagem por valor (cópia) e referência, retornos, tratamento de erros e exceções, encadeamento e empilhamento. Modularização e reuso. Modelagem, implementação e testes. Noções de orientação a objetos.";
  var objetivo_pmd = "Projetar e implementar sistemas modulares por meio de estruturas de dados e funções.";

  var dif = ["ihc"];
  var ementa_dif = "Planejamento e implementação da interface com o usuário usando linguagens de programação e ferramentas que permitam a estruturação da informação e definição da aparência em diversos dispositivos. Noções de interação do usuário.";
  var objetivo_dif = "Projetar e implementar interfaces de usuário para computadores e dispositivos móveis.";

  var esf = ["sif"];
  var ementa_esf = "Ciclo de vida do software, estágios do software, modelos de processo de software, metodologias e técnicas de desenvolvimento de software, documentação do software, engenharia de requisitos, técnicas de diagramação de software.";
  var objetivo_esf = "Aplicar os princípios da engenharia de software no processo de construção de sistemas.";

  var pmb = ["sif"];
  var ementa_pmb = "Introdução aos conceitos básicos de banco de dados e sistemas gerenciadores de banco de dados. Projeto de banco de dados. Modelagem conceitual, lógica e física de banco de dados relacionais. Noções de linguagem para implementação e operação.";
  var objetivo_pmb = "Objetivos Introduzir os conceitos básicos sobre banco de dados e desenvolver a habilidade de modelar, ler e interpretar modelos de banco de dados relacionais.";

  var fmd = ["mbs"];
  var ementa_fmd = "Estudo dos princípios fundamentais da lógica: cálculo proposicional, proposições, operações lógicas e argumentos válidos; e da matemática discreta: álgebra dos conjuntos, operações com conjuntos, álgebra booleana, relações entre a álgebra de conjuntos e a álgebra de proposições, relações binárias. Teoria dos números. Indução Matemática. Somatórios e Combinatórios.";
  var objetivo_fmd = "Introduzir o funcionamento da Lógica matemática e como ela interfere num programa de computador.";

  var sop = ["ocp", "pmd"];
  var ementa_sop = "Introdução aos Sistemas Operacionais. Ambientes operacionais: monousuário e multiusuário. Objetivos do sistema operacional. Arquitetura e medidas de eficiência. Estrutura dos Sistemas Operacionais: gerência de memória, gerência de processos, gerência de arquivos e gerência de dispositivos. Estudos de caso. Programação concorrente.";
  var objetivo_sop = "Compreensão de sistemas operacionais como sua importância para o controle e aproveitamento dos recursos do computador, sua estruturação adequada, seus principais componentes, as técnicas usadas para desenvolvê-los, além do conhecimento de programação concorrente e outros sistemas.";

  var poo = ["pmd"];
  var ementa_poo = "Conceitos e princípios de programação orientada a objetos: abstração, classes, instâncias, estado e comportamento, atributos e métodos, comandos e consultas, coesão, encapsulamento, associação, agregação, composição, delegação, dependência e acoplamento, herança e polimorfismo. Modelagem, implementação e testes. Noções de princípios e padrões de projeto.";
  var objetivo_poo = "Projetar e implementar sistemas segundo os conceitos e princípios do paradigma de programação orientada a objetos.";

  var dit = ["dif", "pmd"];
  var ementa_dit = "Planejamento e implementação da interação do usuário usando linguagens, princípios e padrões que permitam a programação do comportamento das interfaces.";
  var objetivo_dit = "Projetar e implementar a experiência e interação dos usuários.";

  var aps = ["esf"];
  var ementa_aps = "Modelagem com SysML; Princípios de modelagem OO, Linguagem de Modelagem Unificada (UML), Diagramas Estruturais (Classe, Objeto, Pacote, Estrutura composta, Componentes, Implantação, Perfil), Diagramas Comportamentais (Caso de Uso, Atividade e Máquina de Estados) e Diagramas de Interação (Sequência, Comunicação, Interação Geral e Tempo).";
  var objetivo_aps = "Analisar e projetar sistemas e elaborar a documentação de Projetos de Software.";

  var iob = ["lgp", "fmd", "pmb"];
  var ementa_iob = "Modelo relacional. Linguagem para definição, manipulação e consulta de dados. Normalização. Noções de programação em bancos de dados.";
  var objetivo_iob = "Implementar e manipular bancos de dados relacionais.";

  var fee = ["mbs"];
  var ementa_fee = "Princípios do Pensamento Estatístico (PE) e Aprendizagem por Problema (PBL) estatístico. Produção de dados: indivíduo, atributo e  variável, Dado Estatístico e Informação Estatística. Retratar a variação em gráficos: histograma, gráficos de barras, gráficos de setores, gráficos de dispersão e Box-Plot. Descrever a variação em números: medidas de posição, dispersão, assimetria e curtose. Associação entre variáveis: análise bidimensional básica";
  var objetivo_fee = "Aplicar os princípios e práticas do Pensamento Estatístico (PE) aos problemas básicos de análise exploratória de dados.";

  var ppp = ["poo", "aps"];
  var ementa_ppp = "Conceitos de projeto: hierarquia, abstração, modularização e encapsulamento. Decisões de projeto quanto ao uso de herança, composição e delegação. Princípios de projeto de software, como o SOLID e outros. Refatoração. Padrões de projeto de software GoF e emergentes. Anti-padrões. Noções de princípios e padrões de arquitetura.";
  var objetivo_ppp = "Projetar e implementar sistemas considerando os princípios e padrões de projeto.";

  var wb1 = ["poo", "dit", "iob"];
  var ementa_wb1 = "Arquitetura da web. Noções do protocolo HTTP e funcionamento de um servidor web. Linguagem de script para desenvolvimento web no servidor. Dados de sessão. Integração com SGBDs e outras fontes de dados. Noções de web frameworks.";
  var objetivo_wb1 = "Compreender os fundamentos, princípios, técnicas e arquiteturas dos aplicativos web, e saber projetá-los e implementá-los.";

  var wb2 = ["wb1", "ppp"];
  var ementa_wb2 = "Principais frameworks para o desenvolvimento de aplicativos corporativos e seus padrões arquiteturais. Organização em um padrão arquitetural e uso de frameworks para o desenvolvimento de aplicações que produzem páginas Web dinâmicas e aplicações que produzem e consomem formatos intercambiáveis de dados. Implantação.";
  var objetivo_wb2 = "Apresentar os padrões arquiteturais e desenvolver aplicações usando frameworks para a organização e desenvolvimento de aplicativos web.";

  var edd = ["sop"];
  var ementa_edd = "Tipos Abstratos de Dados: arranjos, pilhas, filas, listas e tabelas de dispersão. Métodos de ordenação e pesquisa. Noções de árvores, grafos e de complexidade de algoritmos.";
  var objetivo_edd = "Conhecer as principais estruturas de dados e saber aplicá-las na resolução de problemas computacionais.";

  var fie = ["fee"];
  var ementa_fie = "Problemas de inferência e distribuição de probabilidade de uma variável aleatória. Técnicas de inferências estatística: distribuição amostral, seleção de amostras, intervalo de confiança e teste de hipóteses. Aplicações computacionais.";
  var objetivo_fie = "Aplicar os princípios e práticas do Pensamento Estatístico (PE) aos problemas básicos de Inferência.";

  var pbd = ["iob"];
  var ementa_pbd = "Funções. Estruturas de controle. Procedures. Cursores. Gatilhos. Tratamento de erros e mensagens.";
  var objetivo_pbd = "Projetar e implementar funções e procedimentos nos bancos de dados.";

  var gpj = ["aps"];
  var ementa_gpj = "Conceitos envolvendo projetos, Modelo Tradicional de Gerenciamento - papel do gerente, Áreas de Gerenciamento de Projetos (integração, escopo, tempo, custo, qualidade, RH, comunicações, riscos, aquisições e partes interessadas), Gerenciamento Ágil de Projeto.";
  var objetivo_gpj = "Apresentar e aplicar os conceitos, técnicas e fases relacionadas ao Gerenciamento de Projetos, utilizando boas práticas de Gerenciamento nos projetos de software.";

  var ppa = ["ppp"];
  var ementa_ppa = "Tipos de aplicativos e visão geral das plataformas para desenvolvimento e implantação. Atributos qualitativos. Estilos arquiteturais. Princípios e padrões de arquitetura de software para lógica de domínio, apresentação e integração com serviços externos e bancos de dados. Arquitetura orientada a serviços. Crosscutting concerns. Modelagem, implementação, empacotamento e distribuição de componentes, bibliotecas e frameworks.";
  var objetivo_ppa = "Projetar e implementar sistemas considerando os princípios e padrões de arquitetura.";

  var rcp = ["edd"];
  var ementa_rcp = "Modelos de referência OSI/ISO e TCP/IP. Topologias, protocolos e serviços em redes, associados aos diversos níveis dos modelos de referência. Noções de Interligação, gerenciamento, segurança e aplicações de redes de computadores.";
  var objetivo_rcp = "Compreender os conceitos, as estruturas, os protocolos e os serviços de redes de computadores.";

  var qsf = ["gpj"];
  var ementa_qsf = "Introdução a Qualidade, Histórico da qualidade; Conceitos de qualidade; Normas ISO de Processo de Software; Normas ISO de Produto de Software; Níveis de Maturidade e Capacidade de Software.";
  var objetivo_qsf = "Aplicar os princípios da qualidade no processo de desenvolvimento de software.";

  var eep = ["gpj"];
  var ementa_eep = "Introdução à Administração. Teorias em Administração. Relações humanas, competências e liderança. Conceitos básicos sobre a Gestão de Operações, Recursos Humanos, Marketing e Finanças. Empreendedorismo. Técnicas e procedimentos para elaboração de planos de negócios. Planejamento Estratégico. Precificação de Software. Noções de qualidade e produtividade.";
  var objetivo_eep = "Apresentar os fundamentos da administração, do empreendedorismo, e das principais práticas de gestão aplicadas pelas organizações, além de estimular as competências e proporcionar os conhecimentos e informações necessários para a criação, sobrevivência e desenvolvimento de empreendimentos empresariais.";

  var tci = ["rcp"];
  var ementa_tci = "Noções de segurança de sistemas, reconhecimento de padrões, inteligência artificial, ciência de dados, algoritmos e tópicos emergentes.";
  var objetivo_tci = "Conhecer os conceitos e saber empregar as ferramentas, metodologias e tecnologias da atualidade no campo da Ciência da Computação.";

  var tds = ["ppa"];
  var ementa_tds = "Noções de integração de sistemas, manutenção de sistemas legados, novos princípios e práticas para a implementação, projeto e arquitetura de sistemas, tópicos emergentes no back-end.";
  var objetivo_tds = "Conhecer os conceitos e saber empregar as ferramentas, metodologias e tecnologias da atualidade no campo do Desenvolvimento de Sistemas.";

  var tda = ["wb2"];
  var ementa_tda = "Noções de dsiesenvolvimento de aplicativos para dispositivos móveis, embarcados e vestíveis, noções de desenvolvimento de jogos e tópicos emergentes no front-end.";
  var objetivo_tda = "Conhecer os conceitos e saber empregar as ferramentas, metodologias e tecnologias da atualidade no campo do Desenvolvimento de Aplicativos.";

  var tbd = ["pbd"];
  var ementa_tbd = "Noções de bancos de dados não-relacionais, tuning, OLAP, pivotamento, particionamento, sharding e tópicos emergentes em bancos de dados.";
  var objetivo_tbd = "Conhecer os conceitos e saber empregar as ferramentas, metodologias e tecnologias da atualidade no campo de Bancos de Dados.";

  var tas = ["qsf"];
  var ementa_tas = "Noções de sistemas de apoio à decisão, business intelligence, verificação e validação, testes automatizados e tópicos emergentes na análise de sistemas e negócios.";
  var objetivo_tas = "Conhecer os conceitos e saber empregar as ferramentas, metodologias e tecnologias da atualidade no campo da Análise de Sistemas.";

  var sem = ["rcp", "ppa", "wb2", "qsf", "eep", "mct"];
  var co_sem = ["tcc"];
  var ementa_sem = "Apresentação de projetos, seminários e palestras relevantes à formação do futuro profissional de TI.";
  var objetivo_sem = "Desenvolver habilidades de escrita e apresentação de seminários sobre assuntos relevantes à área de TI.";

  // var acc = ["poo", "dit", "sop", "aps", "iob", "fee"];
  // var ementa_acc = "Os cursos superiores de tecnologia estarão organizados em uma base de conhecimentos científicos e tecnológicos, dessa maneira poderão ser previstas horas de atividades complementares realizadas por meio de desenvolvimento de projetos integradores/técnicos, de extensão e/ou de pesquisa e outras formas de atividades acadêmico-científico-culturais.";
  // var objetivo_acc = "";

  var tcc = ["rcp", "ppa", "wb2", "qsf", "eep", "mct"];
  var co_tcc = ["sem"];
  var ementa_tcc = "Condução de um trabalho de pesquisa acadêmico/científico ou projeto e desenvolvimento de tecnologia/profissional ou planejamento de empreendimento empresarial na área de TIC. Este componente de TCC deve ser realizado concomitantemente ao de Seminários ou após este.";
  var objetivo_tcc = "Articular os fundamentos teóricos, metodológicos e práticos construídos ao longo do curso para produzir um produto, serviço ou método, relacionado à Análise e Desenvolvimento de Sistemas.";

  var mct = ["fie"];
  var ementa_mct = "História do pensamento científico e seus métodos. Os aspectos básicos da pesquisa: formulação do problema, objetivos, hipóteses e variáveis. Técnicas de redação e apresentação do trabalho científico. Princípios norteadores do trabalho científico.";
  var objetivo_mct = "Conhecer o pensamento e método científico, as metodologias e saber usar técnicas de redação e apresentação de trabalhos científicos.";

  var ementa_ingles = "Revisão gramatical e sintática básica da língua inglesa. Expressões técnicas e estruturas básicas da língua para leitura e compreensão de textos diversos na área do curso. Estratégias de leitura em língua inglesa e usos do dicionário como ferramenta instrumental. Interpretação de textos técnicos a partir do desenvolvimento de habilidades de leitura e do estudo de itens gramaticais sistematizados referentes à linguagem tecnológica específica. Abordagem integrada dos níveis de compreensão de leitura, suas estratégias e aspectos léxico gramaticais;";
  var objetivo_ingles = "Identificar e compreender a terminologia básica em língua inglesa da área de tecnologia da informação e as estruturas básicas de textos diversos a partir da leitura, análise e interpretação de textos técnicos e científicos da área do curso, além de desenvolver estratégias de compreensão leitora de textos específicos da área da informática, em língua inglesa, que envolvam linguagens de programação, informações de suporte de uso de tecnologias e de ferramentas e manuais de produto.";

  var ementa_libras = "Criar possibilidades metodológicas de interação e integração da comunidade acadêmica ouvinte, com pessoas surdas usuárias da Língua de Sinais da cidade do Rio Grande. Conceituar Libras, explorando os fundamentos históricos da educação de surdos, os aspectos linguísticos da Língua, além de sinais específicos da área.";
  var objetivo_libras = "Saber se expressar em LIBRAS, orientar as pessoas surdas usuárias da língua, poder interagir com a comunidade surda local e prestar serviços por meio de conhecimentos mínimos da língua de sinais.";

  var ementas = {
    ementa_fcp: ementa_fcp,
    // ementa_acc: ementa_acc,
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
    ementa_ingles: ementa_ingles,
    ementa_libras: ementa_libras,
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

  var objetivos = {
    objetivo_fcp: objetivo_fcp,
    // objetivo_acc: objetivo_acc,
    objetivo_aps: objetivo_aps,
    objetivo_dif: objetivo_dif,
    objetivo_dit: objetivo_dit,
    objetivo_edd: objetivo_edd,
    objetivo_eep: objetivo_eep,
    objetivo_esf: objetivo_esf,
    objetivo_fcp: objetivo_fcp,
    objetivo_fee: objetivo_fee,
    objetivo_fie: objetivo_fie,
    objetivo_fmd: objetivo_fmd,
    objetivo_gpj: objetivo_gpj,
    objetivo_ihc: objetivo_ihc,
    objetivo_iob: objetivo_iob,
    objetivo_lgp: objetivo_lgp,
    objetivo_mbs: objetivo_mbs,
    objetivo_mct: objetivo_mct,
    objetivo_ocp: objetivo_ocp,
    objetivo_ingles: objetivo_ingles,
    objetivo_libras: objetivo_libras,
    objetivo_pbd: objetivo_pbd,
    objetivo_pmb: objetivo_pmb,
    objetivo_pmd: objetivo_pmd,
    objetivo_poo: objetivo_poo,
    objetivo_ppa: objetivo_ppa,
    objetivo_ppp: objetivo_ppp,
    objetivo_qsf: objetivo_qsf,
    objetivo_rcp: objetivo_rcp,
    objetivo_sem: objetivo_sem,
    objetivo_sif: objetivo_sif,
    objetivo_sop: objetivo_sop,
    objetivo_tas: objetivo_tas,
    objetivo_tbd: objetivo_tbd,
    objetivo_tcc: objetivo_tcc,
    objetivo_tci: objetivo_tci,
    objetivo_tda: objetivo_tda,
    objetivo_tds: objetivo_tds,
    objetivo_tsc: objetivo_tsc
  };

  // objetivo geral do curso
  var iframe = document.getElementById('form:objetivoGeralCurso_ifr');
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var elemento = iframeDocument.getElementById('tinymce');
  try {
    elemento.innerHTML = objetivos["objetivo_" + disciplina];
  } catch (error) {
    elemento.innerHTML = "objetivo geral";
  }

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
  document.getElementById("form:horarioAtendimento").value = "";
  // document.getElementById("form:horarioAtendimento").value = "a) via e-mail/discord, b) nos encontros presenciais c) por demanda, em data e horário combinado entre professor e estudantes.";

  // observacoes  
  var iframe = document.getElementById('form:observacao_ifr');
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var elemento = iframeDocument.getElementById('tinymce');
  elemento.innerHTML = "Nenhuma.";

  // avaliacoes
  const hoje = new Date();

  // var tabela = document.getElementById("form:listaAvaliacoes");
  // var linhas = tabela.querySelectorAll("tbody tr");
  // var valores = [];
  // linhas.forEach(linha => {
  //   const celulas = linha.querySelectorAll("td");
  //   if (celulas[1]) {
  //     valores.push(celulas[1].textContent.trim());
  //   }
  // });
  // var vetAvaliacao = valores;
  // var aval1 = false;
  // var aval2 = false;
  // for (let index = 0; index < vetAvaliacao.length; index++) {    
  //   if (vetAvaliacao[index] == "1ª Avaliação") {
  //     aval1 = true;
  //   }
  //   if (vetAvaliacao[index] == "2ª Avaliação") {
  //     aval2 = true;
  //   }
  // }

  // if (aval1 == false) {
  // a primeira avaliacao na ta funcionando
  var dia = String(hoje.getDate()).padStart(2, '0');
  var mes = String(hoje.getMonth() + 1).padStart(2, '0'); // mês começa do 0
  var ano = hoje.getFullYear();
  var dataFormatada = `${dia}/${mes}/${ano}`;
  document.getElementById("form:descricaoAV").value = "1ª Avaliação";
  document.getElementById("form:dataAV").value = dataFormatada;
  document.getElementById("form:horaAV").value = "18:50";
  document.getElementById('form:adicionarAV').click();
  // }

  // if (aval2 == false) {
  document.getElementById("form:descricaoAV").value = "2ª Avaliação";
  hoje.setDate(hoje.getDate() + 7);
  var dia = String(hoje.getDate()).padStart(2, '0');
  var mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
  var ano = hoje.getFullYear();
  var dataFormatada = `${dia}/${mes}/${ano}`;
  document.getElementById("form:dataAV").value = dataFormatada;
  document.getElementById("form:horaAV").value = "18:50";
  document.getElementById('form:adicionarAV').click();
  // }


  // aulas
  const meses = {
    'janeiro': '01',
    'fevereiro': '02',
    'março': '03',
    'abril': '04',
    'maio': '05',
    'junho': '06',
    'julho': '07',
    'agosto': '08',
    'setembro': '09',
    'outubro': '10',
    'novembro': '11',
    'dezembro': '12'
  };

  // aulas
  var tamanho = document.getElementById("form:inicioTA").length;
  for (let index = 0; index < tamanho; index++) {
    
    /*
    // para cada data do select ja existe uma aula cadastrada na tabela?
    var partes = document.getElementById("form:inicioTA")[index].innerText.split(', ')[1].split(' de ');
    var dia = partes[0].padStart(2, '0');
    var mes = meses[partes[1].toLowerCase()];
    var ano = partes[2];
    var valorProcurado = dia+"/"+mes+"/"+ano;
    var e = false;    
    var linhas = document.getElementById("form:listaTopicosAula").querySelectorAll("tr").length;
    for (let i = 1; i <= linhas.length; i++) {
      try {
        var celula = linhas[i].querySelectorAll("td")[0].innerText;
        if (celula && celula.trim() === valorProcurado.trim()) {
          e = true;
        }
      } catch (error) {        
      }        
    }

    // se não - cadastra
    if (e == false) {
    */
      document.getElementById("form:inicioTA").selectedIndex = index;
      document.getElementById("form:fimTA").selectedIndex = index;
      document.getElementById("form:descricaoTA").value = "Aula";
      // Conteudo: não obrigatório
      // var iframe = document.getElementById('form:conteudoTA_ifr');
      // var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      // var elemento = iframeDocument.getElementById('tinymce');
      // elemento.innerHTML = "Conteúdo Diverso.";
      document.getElementById("form:adicionarTA").click();
    // }
  }
  document.getElementById("form:tipo:3").checked = true;
  document.getElementById("form:tipo:3").click();
  document.getElementById("form:descricao").value = "PPC - TADS";
  document.getElementById("form:url").value = "https://tads.riogrande.ifrs.edu.br/ppc";
  document.getElementById("form:tipoIR:0").checked = true;
  // document.getElementById("form:tipoIR").value = 1;
  document.getElementById("form:adicionarIR").click();  
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
