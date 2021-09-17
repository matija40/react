
const ime = ["Pero", "Bero", "Juro"];

export default function getRandomName() {

    return ime[Math.floor(Math.random() * ime.length)];
}