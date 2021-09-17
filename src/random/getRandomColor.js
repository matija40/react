
const boja = ["red", "white", "blue"];


export default function getRandomColor() {

    return boja[Math.floor(Math.random() * boja.length)];
}

