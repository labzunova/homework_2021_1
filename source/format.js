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

	// let colsWidth = Array(cols).fill(0);
	// return colsWidth;
	// colsWidth = colsWidth.map(function callback(num, i, colsWidth) {
	// 	const column = i;
	// 	let max = 0;
	// 	for(let j = column; j < numbers.length; j + cols) {
	// 		max = 1;
	// 	} 
	// 	return max;
	// });

	const colsWidth = Array(cols).fill(0); // определяем ширину каждой колонки
	for(let i = 0; i < numbers.length; i++) {
		colsWidth[i % cols] =  Math.max((numbers[i] + '').length, colsWidth[i % cols]);
	};

	return numbers.reduce(function(formated, number, i, numbers) {
		let n;
		let column = i % cols; // определяем, из какой колонки число
		n = colsWidth[column] - (number + '').length;
		if (column) {
			n++;
		}

		let nSpaces = ' '; // формируем нужный отступ
		nSpaces = nSpaces.repeat(n);

		formated += nSpaces + number; 
		if ((column === cols - 1) && (i != numbers.length - 1)) { //если колонка последняя
			formated += '\n';
		}
		return formated;
	}, '');

};

