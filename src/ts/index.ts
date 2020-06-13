import {breathAnimation} from './breathAnimation'

const totalTime: number = 7500;
const breathTime: number = (totalTime / 5) * 2;
const holdTime: number = totalTime / 5;



setInterval(breathAnimation, totalTime);

breathAnimation(breathTime,holdTime);
