
const yourPlanet = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const yourStone = ['Amethyst', 'Rose Quartz', 'Hematite', 'Emerald', 'Quartz Crystal', 'Selenite', 'Lapis Lazuli', 'Jade'];
const yourWiseWords = ['Everything happens for a reason', 'Let go of negativity, focus on the good', 'Be your own inspiration', 'Never forget where you came from', 'You miss 100% of the shots you don\'t take', 'You can do it!', 'Be the cahnge', 'Try new Things']

// function indexNum() {
//     let num = Math.floor(Math.random() * 9);
//     return num
// }

const giveMeANum = () => {
    let output1 = yourPlanet[Math.floor(Math.random() * 9)];
    let output2 = yourStone[Math.floor(Math.random() * 9)];
    let output3 = yourWiseWords[Math.floor(Math.random() * 9)];
    return `The planet inline with the moon is ${output1}. Your Stone is ${output2}. These combined together gives you the message: ${output3}.`
}


