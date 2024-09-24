import { reverseString, countCharecters, capitalizeFirstLetter, modCountCharecters } from "./stringUtils";
import fs from 'fs';
import path from 'path';

const nodeSentence: string = "learning node-js is important for web developers to create high-performance and relaible apps";

console.log(capitalizeFirstLetter(nodeSentence));
console.log(reverseString(nodeSentence));
console.log(countCharecters(nodeSentence));

console.log(modCountCharecters(nodeSentence));

const reversedSentence: string = reverseString(nodeSentence);
fs.writeFileSync('reversed.txt', reversedSentence);

const filePath: string = path.join(__dirname, 'reversed.txt');
console.log(`Reversed sentence has been saved at: ${filePath}`);