const dig = (n1, n2, n3, n4) => {
    const nums = n1.split("").concat(n2.split(""), n3.split(""));

    if (n4 !== undefined) {  nums[9] = n4; }

    let x = 0;

    for (let i = (n4 !== undefined ? 11 : 10), j = 0; i >= 2; i--, j++) {
        x += parseInt(nums[j]) * i;
    }

    const y = x % 11;
    return y < 2 ? 0 : 11 - y;
}

const random = (initial = null) => {
    const multi = initial ? 99 : 999;
    let rdm = Math.floor(Math.random() * multi);
    rdm = (initial && rdm < 10) ? `${Math.floor(Math.random() * 10)}${rdm}`:rdm;
    return ("" + `${initial ? initial: ''}${rdm}`).padStart(3, '0');
}

const generateCpf = (element) => {
    let initialValue = null;

    if (element?.value?.length === 1){
        initialValue = element.value 
    }

    const num1 = random(initialValue);
    const num2 = random();
    const num3 = random();

    const dig1 = dig(num1, num2, num3);
    const dig2 = dig(num1, num2, num3, dig1);

    return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
}

export default generateCpf;