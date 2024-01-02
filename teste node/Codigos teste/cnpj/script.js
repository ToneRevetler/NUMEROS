function alterarMargem() {
    var minhaDiv = document.getElementById('minhaDiv');
    var paddingLeft = getComputedStyle(minhaDiv).paddingLeft;

    if (paddingLeft !== '0px') {
        minhaDiv.style.padding = '0';
    } else {
        minhaDiv.style.paddingRight = '90%';
    }
}

function alterarMargem2() {
    var minhaDiv = document.getElementById('minhaDiv');
    var paddingRight = getComputedStyle(minhaDiv).paddingRight;

    if (paddingRight !== '0px') {
        minhaDiv.style.padding = '0';
    } else {
        minhaDiv.style.paddingLeft = '90%';
    }
}
