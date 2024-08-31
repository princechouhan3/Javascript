
import inquirer from "inquirer";
import chalk from "chalk"
import * as chalkAnimation from "chalk-animation";


const rainbow = chalkAnimation.rainbow('Hello, world!');

setTimeout(() => {
  rainbow.stop(); // Animation stops
}, 1000);

async function welcome(){
    let rainbowTitle = chalkAnimation.rainbow('lets start calculation'); //start
    await sleep();
    rainbowTitle.stop();
    
}

welcome()

