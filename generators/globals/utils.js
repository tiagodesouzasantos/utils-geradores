export const findInput = (element) => {
    let hasIinput = null;

    if (element.nodeName.toLowerCase() === 'input') {
        return element;
    }

    for (const node of element.childNodes) {
        if (node.nodeName.toLowerCase() === 'input') {
            hasIinput = node;
            break;
        }
        if (node.hasChildNodes() && !hasIinput) {
            hasIinput = findInput(node);
        }
    }

    return hasIinput;
}

export const keyFunction = (element, fn, fnParams = null) => {
    element.addEventListener('keydown', (event) => {
        if (event.keyCode === 113) {
            element.value = fn(fnParams);
        }
    });
}