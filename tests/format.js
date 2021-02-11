'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	// Добавленные тесты
	QUnit.test('format работает правильно c 4мя колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0    1    2    10\n' + 
   			'   100 -100 1000 10000\n' + 
			'-10000';

		assert.strictEqual(format(input, 4), expected);
	});

	QUnit.test('format работает правильно c кол-вом колонок, равным кол-ву чисел', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100 ];

		const expected =
			'0 1 2 10 100 -100';

		assert.strictEqual(format(input, 6), expected);
	});


	QUnit.test('format работает правильно c одинаковыми числами', function (assert) {
		const input = [ 1, 1, 1, 1, 1, 1 ];

		const expected =
			'1 1\n'+
			'1 1\n'+
			'1 1';

		assert.strictEqual(format(input, 2), expected);
	});


	QUnit.test('format работает правильно c одним числом', function (assert) {
		const input = [ 1 ];

		const expected =
			'1';

		assert.strictEqual(format(input, 1), expected);
		assert.strictEqual(format(input, 2), expected);
		assert.strictEqual(format(input, 3), expected);
		assert.strictEqual(format(input, 10), expected);

	});



	QUnit.test('format работает правильно c невалидными данными', function (assert) {
		const expected =
			TypeError('wrong input');

		assert.throws(() => format('hello world', 1), expected);
		assert.throws(() => format('a10assadd', 1), expected);
		assert.throws(() => format('02334', 1), expected);
		assert.throws(() => format('0', 1), expected);
		assert.throws(() => format(1, 1), expected);
	});

	QUnit.test('format работает правильно c невалидным кол-вом колонок', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100 ];

		const expected =
			TypeError('wrong input');

		assert.throws(() => format(input, -1), expected);
		assert.throws(() => format(input, -9), expected);
		assert.throws(() => format(input, -0), expected);
		assert.throws(() => format(input, -1.1), expected);
	});
});
