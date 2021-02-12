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

	numbers = numbers.map(number => number.toString());

	const colsWidth = []; // определяем ширину каждой колонки
	for (let i = 0; i < numbers.length; i++) {
		const column = i % cols;
		colsWidth[column] =  Math.max(numbers[i].length, colsWidth[column] || 0);
	};

	return numbers.reduce(function(formated, number, i) {
		let spacesCount;
		const column = i % cols; // определяем, из какой колонки число
		spacesCount = colsWidth[column] - number.length;

		const indexOfLastColumn = cols - 1;  // формируем нужный отступ
		const indexOfLastNumber = numbers.length - 1;
		formated += ' '.repeat(spacesCount) + number + ((column === indexOfLastColumn) ? '\n' : ' ');

		if (i === indexOfLastNumber) {
			formated = formated.slice(0,-1);
		}

		return formated;
	}, '');
}
