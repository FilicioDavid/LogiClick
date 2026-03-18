// Embaralha qualquer array
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Gera número aleatório
function randomNumero(max) {
    return Math.floor(Math.random() * max);
}

// Pares confusos para o Caça ao Número/Letra
function obterParDificil() {
    const pares = [
        ['8', 'B'], ['0', 'O'], ['1', 'I'], ['5', 'S'], ['M', 'N'], 
        ['W', 'V'], ['E', 'F'], ['Q', 'O'], ['3', '8'], ['Z', '2']
    ];
    return pares[randomNumero(pares.length)];
}

// Banco de dados para Complete a Palavra (Mais de 50)
const bancoPalavras = [
    ["C_SA", "A"], ["B_LA", "O"], ["G_TO", "A"], ["P_TO", "A"], ["M_SA", "E"],
    ["CA_ORRO", "CH"], ["I_A", "LHA"], ["CO_O", "ELH"], ["MI_O", "LH"], ["FE_O", "RR"],
    ["PA_ARO", "SS"], ["BI_ICLETA", "C"], ["JA_ARÉ", "C"], ["A_UL", "Z"], ["U_U", "RUB"],
    ["ES_OLA", "C"], ["BRA_IL", "S"], ["GI_AFA", "R"], ["A_ELHA", "B"], ["CO_ELHO", "EH"],
    ["AMARE_O", "L"], ["TE_A", "RR"], ["CHU_A", "V"], ["PI_A", "ZZ"], ["HA_BURGUER", "M"],
    ["BO_ECA", "N"], ["CA_ETA", "N"], ["FO_UETE", "G"], ["I_REJA", "G"], ["O_O", "V"],
    ["PE_XE", "I"], ["SA_ATO", "P"], ["VA_A", "C"], ["ZE_RA", "B"], ["CI_ADE", "D"],
    ["CO_RA", "B"], ["ES_RELA", "T"], ["F_LHA", "O"], ["G_LO", "E"], ["H_PPO", "I"],
    ["I_UANA", "G"], ["J_REMA", "U"], ["K_WI", "I"], ["L_MÃO", "I"], ["M_ÇÃ", "A"],
    ["N_VEM", "U"], ["O_ELHA", "V"], ["P_RTA", "O"], ["Q_EIJO", "U"], ["R_SA", "O"],
    ["S_RCO", "I"], ["T_TÚ", "A"], ["U_A", "V"], ["V_OLÃO", "I"], ["X_REFE", "E"]
];