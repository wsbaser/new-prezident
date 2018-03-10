import { helper } from '@ember/component/helper';

export function minutesString([minutes, ...rest]) {
	// 1,21,31,41,101,121 минута
	// 2,3,4,22,23,24,32,33,34,122,123,124 минуты
	// 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 минут

	let text;
	if(minutes>10&&minutes<20){
		text = 'минут';
	}else{
		switch(minutes%10){
			case 1:
				text = 'минута';
				break;
			case 2:
			case 3:
			case 4:
				text = 'минуты';
				break;
			case 0:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				text = 'минут';
				break;
		}
	}
	return minutes + ' '+ text; 
}

export default helper(minutesString);
