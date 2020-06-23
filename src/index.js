import diff from './diff.js';
import { isPerfect } from './isPerfect.js';
//8589869056
for (let i  = -10; i <= 8589869056; i++) {
    if (isPerfect(i)) {
        console.log(`This number is perfect: ${i}`);
    }
}
