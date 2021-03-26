
function CopyAddressFromArea() {
    document.querySelector("#addressArea").select();
    document.execCommand('copy');
}

function CopyMailFromArea() {
    document.querySelector("#mailArea").select();
    document.execCommand('copy');
}

function formSubmitted() {

    let numberOfAddress = document.getElementById('')

}

let addressJig = (address) => {
    let alphabet = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Å', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ö', 'Ä', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    let empt = [];
    let counter = 1;

    do {

        let randomNumb = Math.floor(0 + Math.random() * 27);

        empt.push(alphabet[randomNumb])

        counter++;
    } while (counter < 4)
    let jiggedAddress = empt.join('') + " " + address;

    return jiggedAddress;
}


function clickedBtn() {
    let generateButton = document.getElementById("button");


    let address = document.getElementById('address').value;
    let number = document.getElementById('number').value;
    let geneJig = "";
    if (number < 0) {
        alert("Number cant be negative")
    } else {


        for (let i = 0; i < number; i++) {
            geneJig += "" + addressJig(address) + "\n";
        }

        document.getElementById('addressArea').innerHTML = geneJig;

    }
}


function* generate(username) {
    if (username.length <= 1) {
        yield username;
    } else {
        let head = username[0];
        let tail = username.slice(1);
        for (let item of generate(tail)) {
            yield head + item;
            yield head + '.' + item;
        }
    }
}


function onChange() {

    let username = document.getElementById('mail').value;
    let gmail = document.getElementById('domain').innerHTML;

    let generatedDotMail = "";

    for (let name of generate(username)) {
        generatedDotMail += name + gmail + "\n"
    }

    document.getElementById('mailArea').innerHTML = generatedDotMail;
}