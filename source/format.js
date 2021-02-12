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

	numbers = numbers.map(function(number, i) {
		return numbers[i].toString();
	});

	const colsWidth = Array(cols).fill(0); // определяем ширину каждой колонки
	for (let i = 0; i < numbers.length; i++) {
		const column = i % cols;
		colsWidth[column] =  Math.max(numbers[i].length, colsWidth[column] || 0);
	};

	return numbers.reduce(function(formated, number, i) {
		let spacesCount;
		const column = i % cols; // определяем, из какой колонки число
		spacesCount = colsWidth[column] - number.length;
		if (column) {
			spacesCount++; 
		}

		const nSpaces = ' '.repeat(spacesCount); // формируем нужный отступ

		formated += nSpaces + number; 
		if ((column === cols - 1) && (i != numbers.length - 1)) { //если колонка последняя
			formated += '\n';
		}
		return formated;
	}, '');

};