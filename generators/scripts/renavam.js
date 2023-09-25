const generateRenavam = () => {
    let renavam = '';
    for (let i = 0; i < 10; i++) {
        renavam += Math.floor(Math.random() * 10);
    }

    const digVerifier = calcdigVerifier(renavam);
    renavam += digVerifier;
    return renavam;
}

const calcdigVerifier = (renavam) => {
    const pesos = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(renavam.charAt(i)) * pesos[i];
    }

    let resto = soma % 11;
    if (resto === 0 || resto === 1) {
        return '0';
    } else {
        return String(11 - resto);
    }
}

export default generateRenavam;
