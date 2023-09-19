const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateWord = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i = 0; i < n; i++) {
        const random = (Math.random() * letters.length - 1).toFixed(0);
        text += letters[random]; 
    }

    return text;
};

console.log(generateWord(20));

let numOfWords;
const generatePara = () => {
    numOfWords = Number(input.value);
    const newPara = document.createElement("p");

    let data = "";
    for(let i = 0; i < numOfWords; i++) {
        const randomNumber = (Math.random() * 15).toFixed(0);
        data += generateWord(randomNumber).toLowerCase();
        data += " ";
    }

    newPara.setAttribute("class", "paras");
    newPara.innerText = data;

    container.append(newPara);

};