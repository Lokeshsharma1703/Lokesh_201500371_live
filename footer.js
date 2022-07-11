function makeFooter() {
    let footer = createElement('footer');
    console.log(footer);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    footer.innerHTML = `<span>Lokesh</span>\t<span>201500371</span>\t<span>GLA UNIVERSITY</span>\t<span>${dd}-${mm}-${yyyy}</span>`
    document.getElementById('foot').appendChild('footer');
}

makeFooter();