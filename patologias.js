const database = [
    {
        nome: "Gripe",
        sintomas: "Febre, dor de cabeça, dores musculares, tosse, espirros e garganta inflamada.",
        tratamento: "Repouso, hidratação e medicamentos para aliviar os sintomas. Vacinação anual.",
        causas: "Vírus da influenza.",
        prevencao: "Vacinação anual, lavar as mãos, evitar contato com pessoas doentes."
    },
    {
        nome: "Hipertensão Arterial",
        sintomas: "Frequentemente assintomática, mas pode causar dor de cabeça, tontura e zumbido no ouvido.",
        tratamento: "Mudanças no estilo de vida (dieta, exercício) e uso contínuo de medicamentos anti-hipertensivos.",
        causas: "Genética, sedentarismo, dieta rica em sódio, obesidade, estresse.",
        prevencao: "Manter peso saudável, dieta balanceada, exercícios regulares, evitar tabagismo e álcool."
    },
    {
        nome: "Diabetes Mellitus Tipo 2",
        sintomas: "Sede excessiva, micção frequente, fome constante, fadiga e visão embaçada.",
        tratamento: "Dieta, exercícios, medicamentos orais e, em alguns casos, injeções de insulina.",
        causas: "Resistência à insulina, obesidade, sedentarismo, genética.",
        prevencao: "Dieta equilibrada, controle de peso e atividade física regular."
    },
    {
        nome: "Asma",
        sintomas: "Falta de ar, chiado no peito, tosse persistente e sensação de aperto no peito.",
        tratamento: "Uso de bombinhas (broncodilatadores) para alívio e medicamentos de controle para prevenção.",
        causas: "Alergias, poluição do ar, tabagismo, infecções respiratórias.",
        prevencao: "Identificar e evitar gatilhos, usar medicamentos preventivos conforme orientação médica."
    },
    {
        nome: "COVID-19",
        sintomas: "Febre, tosse seca, cansaço, perda de paladar ou olfato, dor de garganta e dor de cabeça.",
        tratamento: "Hidratação, repouso e analgésicos. Casos graves requerem hospitalização e suporte respiratório.",
        causas: "Vírus SARS-CoV-2.",
        prevencao: "Vacinação, uso de máscaras, lavar as mãos, distanciamento social."
    },
    {
        nome: "Doença de Parkinson",
        sintomas: "Tremor nas mãos, rigidez muscular, lentidão dos movimentos e instabilidade postural.",
        tratamento: "Não há cura. Tratamento com medicamentos para controlar os sintomas (levodopa) e fisioterapia.",
        causas: "Degeneração de neurônios que produzem dopamina.",
        prevencao: "Não há prevenção conhecida, mas dieta e exercícios podem ajudar a retardar o progresso."
    },
    {
        nome: "Depressão",
        sintomas: "Tristeza profunda, perda de interesse em atividades, fadiga, alterações no sono e apetite, sentimentos de inutilidade.",
        tratamento: "Psicoterapia, medicamentos antidepressivos, terapia cognitivo-comportamental.",
        causas: "Fatores genéticos, biológicos, ambientais e psicológicos.",
        prevencao: "Praticar o autocuidado, manter uma rede de apoio social e buscar ajuda profissional ao primeiro sinal."
    },
    {
        nome: "Artrite Reumatoide",
        sintomas: "Dor, inchaço e rigidez nas articulações, especialmente nas mãos e pés, cansaço crônico.",
        tratamento: "Anti-inflamatórios, imunossupressores e fisioterapia para manter a mobilidade.",
        causas: "Doença autoimune (o sistema imunológico ataca as próprias articulações).",
        prevencao: "Não há prevenção, mas o diagnóstico precoce e o tratamento adequado controlam a doença."
    },
    {
        nome: "Câncer de Mama",
        sintomas: "Nódulo ou inchaço na mama ou axila, alteração no tamanho ou formato da mama, retração do mamilo.",
        tratamento: "Cirurgia, quimioterapia, radioterapia e terapia hormonal, dependendo do estágio.",
        causas: "Mutação genética, histórico familiar, fatores hormonais, estilo de vida.",
        prevencao: "Mamografia de rotina, autoexame, dieta saudável e exercícios."
    },
    {
        nome: "HIV/AIDS",
        sintomas: "Fase inicial: sintomas de gripe. Fase crônica: sem sintomas por anos, até o sistema imunológico ser comprometido.",
        tratamento: "Terapia antirretroviral (TARV), que impede a replicação do vírus e prolonga a vida.",
        causas: "Vírus da Imunodeficiência Humana (HIV).",
        prevencao: "Uso de preservativos, não compartilhar agulhas, profilaxia pré e pós-exposição (PrEP e PEP)."
    },
    {
        nome: "Esquizofrenia",
        sintomas: "Alucinações, delírios, pensamento desorganizado, dificuldade de concentração e isolamento social.",
        tratamento: "Medicamentos antipsicóticos, psicoterapia e reabilitação psicossocial.",
        causas: "Combinação de fatores genéticos e ambientais.",
        prevencao: "Não há prevenção, mas o diagnóstico e tratamento precoces melhoram o prognóstico."
    },
    {
        nome: "Lúpus Eritematoso Sistêmico (LES)",
        sintomas: "Dor nas articulações, fadiga extrema, erupção cutânea em formato de borboleta no rosto, febre.",
        tratamento: "Não tem cura. O tratamento foca no controle dos sintomas com anti-inflamatórios e imunossupressores.",
        causas: "Doença autoimune.",
        prevencao: "Não há prevenção, mas evitar a exposição ao sol e gerenciar o estresse pode reduzir as crises."
    },
    {
        nome: "Tuberculose",
        sintomas: "Tosse prolongada (mais de 3 semanas), febre, perda de peso e suores noturnos.",
        tratamento: "Tratamento prolongado com vários antibióticos por 6 a 9 meses.",
        causas: "Bactéria Mycobacterium tuberculosis.",
        prevencao: "Vacina BCG e tratamento de contatos de pacientes infectados."
    },
    {
        nome: "Pneumonia",
        sintomas: "Tosse com catarro, febre, calafrios e dificuldade para respirar.",
        tratamento: "Antibióticos, repouso e hidratação. Casos graves podem precisar de internação.",
        causas: "Bactérias, vírus ou fungos que infectam os pulmões.",
        prevencao: "Vacinas (pneumocócica, gripe), lavar as mãos, evitar fumar."
    },
    {
        nome: "Doença de Crohn",
        sintomas: "Diarreia crônica, dor abdominal, perda de peso, febre e anemia.",
        tratamento: "Medicamentos anti-inflamatórios, imunossupressores e, em alguns casos, cirurgia.",
        causas: "Doença autoimune (o sistema imunológico ataca o trato gastrointestinal).",
        prevencao: "Não há prevenção conhecida, mas uma dieta balanceada pode ajudar a controlar os sintomas."
    },
    {
        nome: "Enxaqueca",
        sintomas: "Dor de cabeça latejante, sensibilidade à luz e ao som, náusea e vômitos.",
        tratamento: "Analgésicos, triptanos e medicamentos preventivos. Evitar gatilhos como certos alimentos.",
        causas: "Fatores genéticos e ambientais, alterações nos vasos sanguíneos cerebrais.",
        prevencao: "Identificar e evitar gatilhos, gerenciar o estresse, manter horários de sono regulares."
    },
    {
        nome: "Osteoporose",
        sintomas: "Normalmente assintomática até que ocorra uma fratura. Dor nas costas e perda de altura.",
        tratamento: "Suplementos de cálcio e vitamina D, medicamentos para fortalecer os ossos (bifosfonatos).",
        causas: "Diminuição da densidade óssea, deficiência de cálcio e vitamina D, fatores hormonais.",
        prevencao: "Dieta rica em cálcio, vitamina D, exercícios com peso e não fumar."
    },
    {
        nome: "Doença de Alzheimer",
        sintomas: "Perda de memória progressiva, confusão, dificuldade em realizar tarefas simples e alterações de humor.",
        tratamento: "Não há cura. Medicamentos para retardar a progressão e terapias de suporte.",
        causas: "Acúmulo de proteínas anormais no cérebro (placas de beta-amiloide e emaranhados de tau).",
        prevencao: "Estímulo mental constante, exercícios físicos, dieta saudável e controle de fatores de risco cardiovascular."
    },
    {
        nome: "Insuficiência Cardíaca",
        sintomas: "Falta de ar, inchaço nas pernas e tornozelos, fadiga e tosse persistente.",
        tratamento: "Medicamentos (diuréticos, betabloqueadores), mudanças de estilo de vida e, em casos graves, transplante de coração.",
        causas: "Hipertensão, infarto, doenças das válvulas cardíacas.",
        prevencao: "Controlar pressão arterial, diabetes e colesterol; manter peso saudável e fazer exercícios."
    },
    {
        nome: "Doença Celíaca",
        sintomas: "Diarreia, dor abdominal, inchaço, fadiga e perda de peso após consumir glúten.",
        tratamento: "Dieta rigorosa sem glúten (trigo, cevada e centeio).",
        causas: "Doença autoimune em resposta ao glúten.",
        prevencao: "Não há prevenção para a doença, mas uma dieta sem glúten evita os sintomas."
    },
    {
        nome: "Psoríase",
        sintomas: "Manchas vermelhas e descamativas na pele, coceira, dor nas articulações (em casos de artrite psoriásica).",
        tratamento: "Cremes tópicos, fototerapia e medicamentos orais ou injetáveis para casos graves.",
        causas: "Doença autoimune. Aumento da produção de células da pele.",
        prevencao: "Gerenciar o estresse, evitar o consumo de álcool e não fumar podem reduzir as crises."
    },
    {
        nome: "Síndrome do Ovário Policístico (SOP)",
        sintomas: "Menstruação irregular, aumento de peso, acne, crescimento de pelos e queda de cabelo.",
        tratamento: "Controle de peso, pílulas anticoncepcionais, medicamentos para controlar a insulina.",
        causas: "Desequilíbrio hormonal e resistência à insulina.",
        prevencao: "Não há prevenção, mas um estilo de vida saudável pode controlar os sintomas."
    },
    {
        nome: "Anemia Ferropriva",
        sintomas: "Cansaço, fraqueza, pele pálida, falta de ar e unhas quebradiças.",
        tratamento: "Suplementos de ferro e dieta rica em ferro (carne vermelha, feijão, folhas verdes escuras).",
        causas: "Deficiência de ferro na dieta, perda de sangue, má absorção.",
        prevencao: "Dieta equilibrada com alimentos ricos em ferro e vitamina C."
    },
    {
        nome: "Doença de Hodgkin",
        sintomas: "Aumento dos gânglios linfáticos, febre, suores noturnos, perda de peso e fadiga.",
        tratamento: "Quimioterapia e radioterapia.",
        causas: "Tipo de câncer do sistema linfático.",
        prevencao: "Não há prevenção conhecida."
    },
    {
        nome: "Esclerose Múltipla",
        sintomas: "Fadiga, problemas de visão, dormência ou formigamento, dificuldade de coordenação e equilíbrio.",
        tratamento: "Medicamentos para controlar crises e retardar a progressão da doença.",
        causas: "Doença autoimune que ataca o sistema nervoso central.",
        prevencao: "Não há prevenção conhecida."
    },
    {
        nome: "Infarto do Miocárdio",
        sintomas: "Dor ou desconforto no peito, falta de ar, náusea, sudorese, dor que irradia para o braço, pescoço ou mandíbula.",
        tratamento: "Medicamentos para dissolver coágulos, angioplastia ou cirurgia de revascularização.",
        causas: "Obstrução de uma artéria coronária por um coágulo de sangue.",
        prevencao: "Dieta saudável, exercícios, controle de peso, colesterol e pressão arterial."
    },
    {
        nome: "Hepatite C",
        sintomas: "Fadiga, náusea, dor abdominal, icterícia (pele e olhos amarelados). Muitas vezes assintomática por anos.",
        tratamento: "Antivirais de ação direta, que têm altas taxas de cura.",
        causas: "Vírus da hepatite C (HCV), transmitido por contato com sangue contaminado.",
        prevencao: "Não há vacina. Evitar o compartilhamento de agulhas e objetos pessoais."
    },
    {
        nome: "Endometriose",
        sintomas: "Cólicas menstruais intensas, dor pélvica crônica, dor durante as relações sexuais e dificuldade para engravidar.",
        tratamento: "Medicamentos hormonais, analgésicos e cirurgia para remover o tecido endometrial.",
        causas: "Crescimento de tecido endometrial fora do útero.",
        prevencao: "Não há prevenção conhecida, mas o controle hormonal pode ajudar."
    },
    {
        nome: "Fibromialgia",
        sintomas: "Dor generalizada nos músculos e articulações, fadiga crônica, distúrbios do sono e sensibilidade ao toque.",
        tratamento: "Exercícios físicos, fisioterapia, medicamentos para dor e antidepressivos.",
        causas: "Desconhecida, mas acredita-se que envolva fatores genéticos e neurológicos.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Catarata",
        sintomas: "Visão embaçada ou nublada, sensibilidade à luz, dificuldade para enxergar à noite.",
        tratamento: "Cirurgia para remover a lente opaca e substituí-la por uma lente artificial.",
        causas: "Envelhecimento, diabetes, uso prolongado de corticosteroides, exposição à radiação UV.",
        prevencao: "Usar óculos de sol, controlar doenças crônicas como o diabetes."
    },
    {
        nome: "Glaucoma",
        sintomas: "Geralmente assintomático na fase inicial. Perda gradual da visão periférica.",
        tratamento: "Colírios, medicamentos orais, cirurgia a laser ou convencional.",
        causas: "Aumento da pressão intraocular que danifica o nervo óptico.",
        prevencao: "Exames oftalmológicos regulares, especialmente após os 40 anos."
    },
    {
        nome: "Síndrome de Down",
        sintomas: "Características faciais distintas, baixa estatura, deficiência intelectual em graus variáveis.",
        tratamento: "Terapias de desenvolvimento (fisioterapia, fonoaudiologia, terapia ocupacional).",
        causas: "Cromossomo 21 extra.",
        prevencao: "Não há prevenção. Pode ser diagnosticada durante a gravidez."
    },
    {
        nome: "Hemofilia",
        sintomas: "Sangramento excessivo e prolongado após pequenos cortes, sangramentos nas articulações.",
        tratamento: "Infusões de fatores de coagulação para repor os que estão em falta.",
        causas: "Distúrbio genético recessivo ligado ao cromossomo X.",
        prevencao: "Não há prevenção. O aconselhamento genético pode ajudar famílias com histórico da doença."
    },
    {
        nome: "Cálculos Renais (Pedras nos rins)",
        sintomas: "Dor intensa nas costas ou na lateral, dor ao urinar, náusea, vômito, sangue na urina.",
        tratamento: "Aumento da ingestão de líquidos, medicamentos para a dor, cirurgia ou ondas de choque para quebrar as pedras.",
        causas: "Baixa ingestão de líquidos, dieta rica em sódio ou proteínas, histórico familiar.",
        prevencao: "Beber bastante água, manter uma dieta equilibrada e limitar o sódio."
    },
    {
        nome: "Esclerose Lateral Amiotrófica (ELA)",
        sintomas: "Fraqueza muscular, cãibras, dificuldade para falar e engolir, paralisia progressiva.",
        tratamento: "Não há cura. Medicamentos para retardar o avanço da doença e terapias de suporte.",
        causas: "Desconhecida, mas envolve a degeneração dos neurônios motores.",
        prevencao: "Não há prevenção conhecida."
    },
    {
        nome: "Doença de Huntington",
        sintomas: "Movimentos involuntários (coreia), problemas de raciocínio, alterações de humor e comportamento.",
        tratamento: "Medicamentos para controlar os sintomas e terapias de suporte.",
        causas: "Doença genética que causa degeneração das células nervosas no cérebro.",
        prevencao: "Aconselhamento genético para famílias com histórico."
    },
    {
        nome: "Síndrome de Guillain-Barré",
        sintomas: "Fraqueza e formigamento nos membros que podem progredir para paralisia total.",
        tratamento: "Plasmalferese e infusão de imunoglobulina intravenosa (IVIG).",
        causas: "Resposta autoimune após uma infecção viral ou bacteriana.",
        prevencao: "Não há prevenção conhecida."
    },
    {
        nome: "Hipotireoidismo",
        sintomas: "Fadiga, ganho de peso, pele seca, constipação, sensibilidade ao frio.",
        tratamento: "Medicamentos de reposição hormonal da tireoide.",
        causas: "Inflamação da tireoide (tireoidite de Hashimoto), cirurgia ou radiação.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Hipertireoidismo",
        sintomas: "Perda de peso, nervosismo, batimentos cardíacos acelerados, sudorese, tremores.",
        tratamento: "Medicamentos antitireoidianos, iodo radioativo ou cirurgia.",
        causas: "Doença de Graves, nódulos tireoidianos hiperativos.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Doença de Chagas",
        sintomas: "Fase aguda: febre, inchaço perto da picada. Fase crônica: problemas cardíacos e digestivos.",
        tratamento: "Medicamentos antiparasitários, especialmente na fase aguda.",
        causas: "Parasita Trypanosoma cruzi, transmitido pelo 'barbeiro'.",
        prevencao: "Controle do inseto vetor, saneamento básico e higiene."
    },
    {
        nome: "Mal de Chagas",
        sintomas: "Febre, inchaço dos gânglios linfáticos, dor muscular. Pode causar problemas cardíacos e digestivos graves anos depois.",
        tratamento: "Medicamentos para matar o parasita na fase aguda e controle dos sintomas crônicos.",
        causas: "Infecção pelo protozoário Trypanosoma cruzi, transmitido pelo 'barbeiro'.",
        prevencao: "Controle do inseto vetor, uso de telas em janelas, higiene."
    },
    {
        nome: "Doença de Gaucher",
        sintomas: "Fígado e baço aumentados, dor óssea, fadiga, sangramento fácil.",
        tratamento: "Terapia de reposição enzimática.",
        causas: "Distúrbio genético que causa acúmulo de gordura em órgãos e ossos.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Espondilite Anquilosante",
        sintomas: "Dor e rigidez nas costas, especialmente pela manhã, que podem irradiar para o pescoço e quadris.",
        tratamento: "Medicamentos anti-inflamatórios, fisioterapia e exercícios.",
        causas: "Doença inflamatória crônica que causa inflamação da coluna vertebral.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Síndrome do Intestino Irritável (SII)",
        sintomas: "Dor abdominal, inchaço, diarreia ou constipação, alterações no hábito intestinal.",
        tratamento: "Mudanças na dieta, gerenciamento do estresse, medicamentos para os sintomas.",
        causas: "Causas exatas desconhecidas, mas fatores como estresse e sensibilidade intestinal contribuem.",
        prevencao: "Dieta rica em fibras, evitar alimentos gatilho, gerenciar o estresse."
    },
    {
        nome: "Doença de Refluxo Gastroesofágico (DRGE)",
        sintomas: "Azia, regurgitação, dor no peito, dificuldade para engolir.",
        tratamento: "Antiácidos, inibidores de bomba de pr,ótons, mudanças no estilo de vida.",
        causas: "Mau funcionamento do esfíncter esofágico inferior, que permite o refluxo do ácido estomacal.",
        prevencao: "Evitar alimentos gordurosos e picantes, não se deitar após as refeições, elevar a cabeceira da cama."
    },
    {
        nome: "Cistite",
        sintomas: "Dor ao urinar, necessidade frequente de urinar, sangue na urina, dor pélvica.",
        tratamento: "Antibióticos.",
        causas: "Infecção bacteriana da bexiga.",
        prevencao: "Beber bastante líquido, urinar após a relação sexual, higiene adequada."
    },
    {
        nome: "Infecção Urinária (ITU)",
        sintomas: "Dor ou queimação ao urinar, vontade frequente de urinar, urina turva ou com cheiro forte.",
        tratamento: "Antibióticos.",
        causas: "Bactérias que entram na uretra e se multiplicam na bexiga.",
        prevencao: "Beber água, higiene adequada, urinar após o sexo."
    },
    {
        nome: "Malária",
        sintomas: "Febre alta, calafrios, suores, dor de cabeça, dores musculares.",
        tratamento: "Medicamentos antimaláricos.",
        causas: "Parasita Plasmodium, transmitido pela picada do mosquito Anopheles.",
        prevencao: "Repelentes, telas em janelas, mosquiteiros, medicamentos profiláticos em áreas de risco."
    },
    {
        nome: "Dengue",
        sintomas: "Febre alta, dor de cabeça, dor atrás dos olhos, dores musculares e nas articulações, manchas vermelhas na pele.",
        tratamento: "Hidratação e repouso. Não usar aspirina ou anti-inflamatórios.",
        causas: "Vírus da dengue, transmitido pelo mosquito Aedes aegypti.",
        prevencao: "Eliminar focos de água parada, usar repelente e telas."
    },
    {
        nome: "Zika Vírus",
        sintomas: "Febre, erupções cutâneas, dor nas articulações e conjuntivite.",
        tratamento: "Repouso e analgésicos para aliviar os sintomas.",
        causas: "Vírus zika, transmitido pelo mosquito Aedes aegypti.",
        prevencao: "Controle do mosquito, uso de repelente e roupas que cubram a pele."
    },
    {
        nome: "Caxumba",
        sintomas: "Inchaço das glândulas salivares (parótidas) abaixo das orelhas, febre, dor de cabeça.",
        tratamento: "Repouso e medicamentos para aliviar a dor e a febre.",
        causas: "Vírus da caxumba.",
        prevencao: "Vacina tríplice viral (MMR)."
    },
    {
        nome: "Sarampo",
        sintomas: "Febre alta, tosse, coriza, conjuntivite e manchas vermelhas por todo o corpo.",
        tratamento: "Repouso, hidratação e controle da febre.",
        causas: "Vírus do sarampo.",
        prevencao: "Vacina tríplice viral (MMR)."
    },
    {
        nome: "Rubéola",
        sintomas: "Febre baixa, erupções cutâneas avermelhadas, aumento dos gânglios linfáticos.",
        tratamento: "Não há tratamento específico. Sintomas leves.",
        causas: "Vírus da rubéola.",
        prevencao: "Vacina tríplice viral (MMR)."
    },
    {
        nome: "Varicela (Catapora)",
        sintomas: "Erupções cutâneas que se transformam em bolhas cheias de líquido, febre e coceira intensa.",
        tratamento: "Antivirais (em alguns casos), loções para aliviar a coceira e repouso.",
        causas: "Vírus Varicella-zoster.",
        prevencao: "Vacina contra a varicela."
    },
    {
        nome: "Poliomielite",
        sintomas: "Geralmente assintomática. Pode causar paralisia muscular e deformidades.",
        tratamento: "Não há cura. Fisioterapia para melhorar a função muscular.",
        causas: "Vírus da poliomielite.",
        prevencao: "Vacina oral da poliomielite (gotinha)."
    },
    {
        nome: "Tétano",
        sintomas: "Contração muscular dolorosa, espasmos e rigidez, especialmente no pescoço e mandíbula (trismo).",
        tratamento: "Limpeza da ferida, medicamentos para relaxar os músculos e toxina tetânica.",
        causas: "Bactéria Clostridium tetani, presente no solo e objetos enferrujados.",
        prevencao: "Vacina antitetânica."
    },
    {
        nome: "Difteria",
        sintomas: "Dor de garganta, febre, fraqueza, inchaço dos gânglios linfáticos e uma membrana acinzentada na garganta.",
        tratamento: "Antitoxina e antibióticos.",
        causas: "Bactéria Corynebacterium diphtheriae.",
        prevencao: "Vacina tríplice bacteriana (DTP)."
    },
    {
        nome: "Coqueluche",
        sintomas: "Tosse grave e incontrolável, seguida de um som agudo ao inspirar (guinchos).",
        tratamento: "Antibióticos.",
        causas: "Bactéria Bordetella pertussis.",
        prevencao: "Vacina tríplice bacteriana (DTP)."
    },
    {
        nome: "Doença de Lyme",
        sintomas: "Mancha vermelha em formato de alvo, febre, fadiga e dor de cabeça.",
        tratamento: "Antibióticos.",
        causas: "Bactéria Borrelia burgdorferi, transmitida pela picada do carrapato-do-veado.",
        prevencao: "Evitar áreas com carrapatos, usar repelente e inspecionar a pele após atividades ao ar livre."
    },
    {
        nome: "Leishmaniose Visceral",
        sintomas: "Febre irregular, perda de peso, anemia, aumento do baço e fígado.",
        tratamento: "Medicamentos específicos, como o antimonial pentavalente.",
        causas: "Parasita Leishmania donovani, transmitido pela picada de mosquitos-palha.",
        prevencao: "Controle do vetor, telas em janelas, uso de coleiras repelentes em cães."
    },
    {
        nome: "Hanseníase",
        sintomas: "Manchas na pele com perda de sensibilidade, dormência nas mãos e pés, deformidades nas extremidades.",
        tratamento: "Poliquimioterapia, uma combinação de antibióticos.",
        causas: "Bactéria Mycobacterium leprae.",
        prevencao: "Diagnóstico e tratamento precoce, vacina BCG pode oferecer alguma proteção."
    },
    {
        nome: "Doença de Tay-Sachs",
        sintomas: "Desenvolvimento motor e mental atrasado, convulsões, cegueira, e paralisia.",
        tratamento: "Não há cura. Cuidados paliativos para gerenciar os sintomas.",
        causas: "Distúrbio genético que causa acúmulo de gordura nas células nervosas do cérebro.",
        prevencao: "Aconselhamento genético para famílias de risco."
    },
    {
        nome: "Distrofia Muscular de Duchenne",
        sintomas: "Fraqueza muscular progressiva que começa nas pernas e se espalha para o resto do corpo.",
        tratamento: "Não há cura. Fisioterapia e cuidados de suporte para melhorar a qualidade de vida.",
        causas: "Distúrbio genético que causa falta de uma proteína muscular chamada distrofina.",
        prevencao: "Aconselhamento genético."
    },
    {
        nome: "Síndrome do Túnel do Carpo",
        sintomas: "Dormência, formigamento, dor e fraqueza na mão e nos dedos.",
        tratamento: "Repouso, tala para o pulso, medicamentos, injeções de corticoides e, em casos graves, cirurgia.",
        causas: "Compressão do nervo mediano no pulso.",
        prevencao: "Ergonomia no local de trabalho, alongamentos e pausas regulares."
    },
    {
        nome: "Tendinite",
        sintomas: "Dor e sensibilidade em torno de uma articulação, inchaço e rigidez.",
        tratamento: "Repouso, gelo, medicamentos anti-inflamatórios e fisioterapia.",
        causas: "Inflamação de um tendão devido a lesão ou esforço repetitivo.",
        prevencao: "Aquecimento antes do exercício, alongamentos e uso da técnica correta."
    },
    {
        nome: "Bursite",
        sintomas: "Dor e inchaço em uma articulação, sensibilidade ao toque e rigidez.",
        tratamento: "Repouso, gelo, analgésicos e, em alguns casos, injeções de corticoides.",
        causas: "Inflamação de uma bursa (bolsa que amortece articulações) devido a lesão ou uso excessivo.",
        prevencao: "Evitar movimentos repetitivos, usar proteção nas articulações (joelheiras)."
    },
    {
        nome: "Arritmia Cardíaca",
        sintomas: "Batimentos cardíacos irregulares (rápido, lento ou com pausas), tontura, falta de ar e dor no peito.",
        tratamento: "Medicamentos, ablação, marcapasso ou desfibrilador implantável.",
        causas: "Problemas na condução elétrica do coração, doenças cardíacas e fatores genéticos.",
        prevencao: "Dieta saudável, exercícios, não fumar, limitar o álcool e a cafeína."
    },
    {
        nome: "Aterosclerose",
        sintomas: "Geralmente assintomática. Pode causar dor no peito (angina) e infarto se as artérias do coração forem afetadas.",
        tratamento: "Medicamentos para colesterol, antiplaquetários, mudanças no estilo de vida e, em casos graves, cirurgia.",
        causas: "Acúmulo de gordura, colesterol e outras substâncias nas paredes das artérias.",
        prevencao: "Dieta saudável, exercícios, controle de peso, não fumar."
    },
    {
        nome: "Enfisema Pulmonar",
        sintomas: "Falta de ar, tosse crônica e respiração ruidosa.",
        tratamento: "Não tem cura. Uso de broncodilatadores, esteroides, oxigenoterapia e reabilitação pulmonar.",
        causas: "Dano aos sacos de ar nos pulmões, geralmente causado por tabagismo.",
        prevencao: "Não fumar e evitar a exposição à fumaça de segunda mão e à poluição do ar."
    },
    {
        nome: "Hiperplasia Prostática Benigna (HPB)",
        sintomas: "Dificuldade para iniciar a micção, fluxo urinário fraco, necessidade frequente de urinar.",
        tratamento: "Medicamentos, terapias minimamente invasivas ou cirurgia.",
        causas: "Crescimento benigno da próstata em homens mais velhos.",
        prevencao: "Não há prevenção específica."
    },
    {
        nome: "Hérnia de Disco",
        sintomas: "Dor intensa que irradia para o braço ou perna, dormência ou formigamento, fraqueza muscular.",
        tratamento: "Fisioterapia, analgésicos, injeções e, em casos graves, cirurgia.",
        causas: "Lesão ou degeneração do disco intervertebral.",
        prevencao: "Manter uma boa postura, fortalecer os músculos das costas, levantar objetos corretamente."
    },
    {
        nome: "Síndrome de Tourette",
        sintomas: "Tiques motores e vocais involuntários e repetitivos.",
        tratamento: "Não tem cura. Medicamentos e terapia comportamental para controlar os tiques.",
        causas: "Genética, anormalidades em certas áreas do cérebro.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Anorexia Nervosa",
        sintomas: "Medo intenso de ganhar peso, imagem corporal distorcida, restrição alimentar e perda de peso extrema.",
        tratamento: "Terapia psicológica (TCC), nutrição e, em alguns casos, internação.",
        causas: "Fatores genéticos, psicológicos e sociais.",
        prevencao: "Não há prevenção específica. Foco em educação sobre saúde mental e imagem corporal."
    },
    {
        nome: "Bulimia Nervosa",
        sintomas: "Episódios de compulsão alimentar seguidos por comportamentos compensatórios (vômito autoinduzido, uso de laxantes).",
        tratamento: "Psicoterapia, medicamentos antidepressivos.",
        causas: "Fatores genéticos, psicológicos e sociais.",
        prevencao: "Foco na educação e no tratamento de transtornos de imagem corporal."
    },
    {
        nome: "Transtorno de Pânico",
        sintomas: "Ataques de pânico repentinos e recorrentes, que causam medo intenso, palpitações, falta de ar e sensação de morte iminente.",
        tratamento: "Terapia cognitivo-comportamental (TCC) e medicamentos.",
        causas: "Desconhecida, mas fatores genéticos e estresse podem contribuir.",
        prevencao: "Não há prevenção. O tratamento precoce pode reduzir a frequência e a intensidade dos ataques."
    },
    {
        nome: "Transtorno Obsessivo-Compulsivo (TOC)",
        sintomas: "Pensamentos intrusivos e repetitivos (obsessões) e comportamentos ritualísticos (compulsões) para aliviá-los.",
        tratamento: "Terapia cognitivo-comportamental (TCC) e medicamentos antidepressivos.",
        causas: "Fatores genéticos e biológicos. Anormalidades na química cerebral.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Transtorno do Espectro Autista (TEA)",
        sintomas: "Dificuldades na comunicação e interação social, comportamentos repetitivos e interesses restritos.",
        tratamento: "Não há cura. Terapias comportamentais, fonoaudiologia e terapia ocupacional.",
        causas: "Fatores genéticos e ambientais.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Transtorno de Déficit de Atenção e Hiperatividade (TDAH)",
        sintomas: "Desatenção, hiperatividade e impulsividade que interferem nas atividades diárias.",
        tratamento: "Medicamentos estimulantes, terapia comportamental e acompanhamento escolar.",
        causas: "Genética, fatores neurológicos e ambientais.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Transtorno Bipolar",
        sintomas: "Oscilações de humor entre episódios de euforia (mania) e depressão.",
        tratamento: "Medicamentos estabilizadores de humor, antipsicóticos e psicoterapia.",
        causas: "Genética e alterações na química cerebral.",
        prevencao: "Não há prevenção. O tratamento contínuo evita as crises."
    },
    {
        nome: "Trombose Venosa Profunda (TVP)",
        sintomas: "Inchaço, dor ou sensibilidade na perna, pele avermelhada ou aquecida.",
        tratamento: "Anticoagulantes.",
        causas: "Formação de coágulo sanguíneo em uma veia profunda, geralmente na perna.",
        prevencao: "Manter-se ativo, usar meias de compressão, evitar ficar muito tempo sentado."
    },
    {
        nome: "Pneumotórax",
        sintomas: "Dor aguda no peito, falta de ar repentina e respiração rápida e superficial.",
        tratamento: "Monitoramento e, em casos graves, inserção de um tubo para drenar o ar.",
        causas: "Colapso do pulmão devido ao ar que entra no espaço entre o pulmão e a parede torácica.",
        prevencao: "Evitar tabagismo e lesões no peito."
    },
    {
        nome: "Síndrome do Intestino Curto",
        sintomas: "Diarreia crônica, desidratação, perda de peso e desnutrição.",
        tratamento: "Dieta especial, suplementos nutricionais e, em alguns casos, cirurgia.",
        causas: "Remoção cirúrgica de uma grande parte do intestino delgado.",
        prevencao: "Não há prevenção. Foco no tratamento e suporte nutricional."
    },
    {
        nome: "Transtorno do Estresse Pós-Traumático (TEPT)",
        sintomas: "Flashbacks, pesadelos, ansiedade severa e pensamentos incontroláveis sobre um evento traumático.",
        tratamento: "Terapia cognitivo-comportamental (TCC) e medicamentos.",
        causas: "Resposta a um evento traumático.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Narcolepsia",
        sintomas: "Sonolência diurna extrema, ataques de sono repentinos e cataplexia (perda súbita de tônus muscular).",
        tratamento: "Medicamentos e mudanças no estilo de vida para gerenciar o sono.",
        causas: "Deficiência de uma substância química cerebral chamada hipocretina (orexina).",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Síndrome de Rett",
        sintomas: "Perda das habilidades motoras e de fala adquiridas, movimentos repetitivos das mãos, desaceleração do crescimento.",
        tratamento: "Não há cura. Fisioterapia, terapia ocupacional e fonoaudiologia para gerenciar os sintomas.",
        causas: "Mutação genética rara que afeta o desenvolvimento do cérebro.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Hipopituitarismo",
        sintomas: "Fadiga, sensibilidade ao frio, perda de peso, ausência de menstruação, perda de pelos.",
        tratamento: "Reposição dos hormônios em falta.",
        causas: "Dano à glândula pituitária, tumores, lesões ou cirurgia.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Policitemia Vera",
        sintomas: "Fadiga, dor de cabeça, tontura, coceira na pele após o banho, pele avermelhada.",
        tratamento: "Flebotomia (remoção de sangue) para reduzir o volume e aspirina para prevenir coágulos.",
        causas: "Doença da medula óssea que causa produção excessiva de glóbulos vermelhos.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Síndrome de Williams",
        sintomas: "Características faciais distintas, deficiência intelectual, problemas cardiovasculares e uma personalidade sociável.",
        tratamento: "Não há cura. Terapias de desenvolvimento e acompanhamento médico para problemas cardíacos.",
        causas: "Deleção genética no cromossomo 7.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Hepatite B",
        sintomas: "Fadiga, náusea, dor abdominal, icterícia (pele e olhos amarelados).",
        tratamento: "Não há cura, mas medicamentos antivirais controlam a doença e previnem complicações.",
        causas: "Vírus da hepatite B (HBV), transmitido por sangue e fluidos corporais.",
        prevencao: "Vacina contra a hepatite B."
    },
    {
        nome: "Rotavírus",
        sintomas: "Diarreia aquosa grave, vômito, febre, desidratação, principalmente em bebês e crianças.",
        tratamento: "Reidratação oral ou intravenosa.",
        causas: "Vírus Rotavírus, transmitido por via fecal-oral.",
        prevencao: "Vacina contra o rotavírus e higiene adequada das mãos."
    },
    {
        nome: "Febre Amarela",
        sintomas: "Febre, dor de cabeça, dores musculares, vômito, icterícia (pele e olhos amarelados).",
        tratamento: "Não há tratamento específico. Cuidados de suporte.",
        causas: "Vírus da febre amarela, transmitido por mosquitos.",
        prevencao: "Vacina contra a febre amarela."
    },
    {
        nome: "Gota",
        sintomas: "Dor intensa nas articulações (especialmente no dedão do pé), inchaço, vermelhidão e sensibilidade.",
        tratamento: "Medicamentos anti-inflamatórios, analgésicos e medicamentos para reduzir o ácido úrico.",
        causas: "Acúmulo de ácido úrico no sangue, que forma cristais nas articulações.",
        prevencao: "Dieta com baixo teor de purinas, evitar álcool e bebidas açucaradas."
    },
    {
        nome: "Hipotensão Arterial (Pressão Baixa)",
        sintomas: "Tontura, desmaio, visão embaçada, náusea e fadiga.",
        tratamento: "Aumento da ingestão de sal e líquidos, medicamentos para aumentar a pressão arterial.",
        causas: "Desidratação, problemas cardíacos, deficiências nutricionais e alguns medicamentos.",
        prevencao: "Beber água suficiente e evitar levantar-se muito rápido."
    },
    {
        nome: "Artrose",
        sintomas: "Dor articular, rigidez, perda de flexibilidade e inchaço.",
        tratamento: "Analgésicos, anti-inflamatórios, fisioterapia, e em casos graves, cirurgia.",
        causas: "Desgaste da cartilagem das articulações devido ao envelhecimento ou lesões.",
        prevencao: "Exercícios de baixo impacto e manutenção de um peso saudável."
    },
    {
        nome: "Meningite",
        sintomas: "Febre alta, dor de cabeça intensa, rigidez no pescoço, sensibilidade à luz, náusea e vômito.",
        tratamento: "Antibióticos (para meningite bacteriana) ou antivirais, dependendo da causa. Hospitalização é necessária.",
        causas: "Infecção viral ou bacteriana das membranas que cobrem o cérebro e a medula espinhal.",
        prevencao: "Vacinas (meningocócica, pneumocócica, Hib)."
    },
    {
        nome: "Escarlatina",
        sintomas: "Erupção cutânea vermelha, febre, garganta inflamada e língua com aparência de 'morango'.",
        tratamento: "Antibióticos.",
        causas: "Bactéria Streptococcus pyogenes.",
        prevencao: "Não há vacina. Boa higiene das mãos ajuda."
    },
    {
        nome: "Síndrome de Sjogren",
        sintomas: "Olhos e boca secos, dor nas articulações e fadiga.",
        tratamento: "Uso de colírios e saliva artificial. Medicamentos para aliviar os sintomas.",
        causas: "Doença autoimune que ataca as glândulas que produzem lágrimas e saliva.",
        prevencao: "Não há prevenção."
    },
    {
        nome: "Hemocromatose",
        sintomas: "Fadiga, dor nas articulações, perda de peso e escurecimento da pele.",
        tratamento: "Flebotomia (remoção de sangue).",
        causas: "Distúrbio genético que causa acúmulo excessivo de ferro no corpo.",
        prevencao: "Não há prevenção. O diagnóstico precoce e o tratamento evitam danos aos órgãos."
    },
    {
        nome: "Hipertensão Pulmonar",
        sintomas: "Falta de ar, tontura, fadiga e dor no peito.",
        sintomas_especificos: "Fadiga, tontura, dor no peito.",
        tratamento: "Medicamentos para dilatar os vasos sanguíneos, terapia com oxigênio e, em alguns casos, transplante de pulmão.",
        causas: "Aumento da pressão nas artérias dos pulmões.",
        prevencao: "Não há prevenção específica."
    },
    {
        nome: "Retinopatia Diabética",
        sintomas: "Visão embaçada, manchas na visão, perda da visão central.",
        tratamento: "Controle do diabetes, injeções oculares, laser ou cirurgia.",
        causas: "Dano aos vasos sanguíneos da retina devido aos altos níveis de açúcar no sangue.",
        prevencao: "Controle rigoroso do diabetes, exames oftalmológicos anuais."
    },
    {
        nome: "Síndrome de Asperger",
        sintomas: "Dificuldade de interação social, comunicação não verbal deficiente e interesses restritos.",
        tratamento: "Terapia comportamental e de comunicação.",
        causas: "Parte do espectro autista. Fatores genéticos e neurobiológicos.",
        prevencao: "Não há prevenção."
    }
];