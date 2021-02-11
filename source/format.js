'use strict';

/**
 * Форматирует массив в табличку с заданным кол-вом колонок
 *
 * @param {Array} numbers - исходный массив
 * @param {Int} cols - нужное количество колонок
 * @return {String} отформатированная строка
 */
const format = (numbers, cols) => {
	if ((cols <= 0)||(!(Array.isArray(numbers)))) {
		/** @exception */
		throw new TypeError('wrong input');
	}
	else {
		let colsWidth =[];
		for(let i = 0; i < cols; i++) { // определяем ширину каждой колонки
			let num = numbers[numbers.length - i - 1];
			colsWidth[(numbers.length - i - 1)%cols] = (num + '').length;
		}

		let formated = numbers.reduce(function(formated, number, i, numbers) {
			let n;
			if ((i + 1) % cols) { // определяем, из какой колонки число
				n = colsWidth[(i + 1) % cols - 1] - (number + '').length;
			}
			else {
				n = colsWidth[cols - 1] - (number + '').length; 
			}
			if (((i + 1) % cols != 1 ) && (cols !=1) ) {
				n++;
			}
			let nSpaces = ''; // формируем нужный отступ
			for(let j = 0; j < n; j++)
				nSpaces += ' ';

			formated += nSpaces + number; 
			if ((!((i + 1) % cols)) && (i != numbers.length - 1)) { //если колонка последняя
				formated += '\n';
			}
			return formated;
		}, '');

		return formated;
	}
};

