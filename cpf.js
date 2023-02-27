//o quarto parametro(n4) só será recebido para o segundo digito
function dig(n1, n2, n3, n4) {
    const nums = n1.split("").concat(n2.split(""), n3.split(""));

    if (n4 !== undefined) {  nums[9] = n4; }

    let x = 0;

    for (let i = (n4 !== undefined ? 11 : 10), j = 0; i >= 2; i--, j++) {
        x += parseInt(nums[j]) * i;
    }

    const y = x % 11;
    return y < 2 ? 0 : 11 - y;
}

function random(initial = null) {
    const multi = initial ? 99 : 999;
    let rdm = Math.floor(Math.random() * multi);
    rdm = (initial && rdm < 10) ? `${Math.floor(Math.random() * 10)}${rdm}`:rdm;
    return ("" + `${initial ? initial: ''}${rdm}`).padStart(3, '0');
}

function gerarCpf(idField) {
    const field = document.getElementById(idField);
    const prefix = document.getElementById('prefix-' + idField);

    const num1 = random(prefix.value);
    const num2 = random();
    const num3 = random();

    const dig1 = dig(num1, num2, num3);
    const dig2 = dig(num1, num2, num3, dig1);
    field.value = `${num1}.${num2}.${num3}-${dig1}${dig2}`;
}


function createGenButton(idField){
    let cssInitial = `
        border-radius: 10px;
        padding: 5px 10px;
        margin-left: 8px;
    `;

    let cssBtn = cssInitial + `
        color: white;
        cursor:pointer;
        background-color: #555555;
        font-weight: 600;
        border:none;
    `;

    let cssInput = cssInitial + `
        max-width: 50px;
    `;

    let btn = document.createElement("button");
    btn.innerHTML = "Gerar cpf";
    btn.onclick = () => { gerarCpf(idField); };
    btn.style = cssBtn;

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = 'Prefixo';
    input.id = 'prefix-' + idField;
    input.maxLength = 1;
    input.style = cssInput;
    return {btn,input};
}

window.addEventListener('load', function () {
    const hostnameToIgnore = ['localhost','teste.com'];
    if (!hostnameToIgnore.includes(window.location.hostname)){
        const getElements = document.querySelectorAll('[gen-cpf]');
        getElements.forEach(element => {
            const newElements = createGenButton(element.id);
            element.parentNode.insertBefore(newElements.input, element.nextSibling);
            element.parentNode.insertBefore(newElements.btn, element.nextSibling);
        });
    }
});