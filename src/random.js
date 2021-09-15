// eslint-disable-next-line
const boja = ["red", "white", "blue"];
// eslint-disable-next-line
const ime = ["Pero", "Bero", "Juro"];
export function getRandomColor() {

    return boja[Math.floor(Math.random() * boja.length)];
}

export function getRandomName() {

    return ime[Math.floor(Math.random() * ime.length)];
}
