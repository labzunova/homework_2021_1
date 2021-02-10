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


	QUnit.test('format работает правильно c невалидными данными', function (assert) {
		const input = 'hello world';

		const expected =
			'wrong input';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c невалидным кол-вом колонок', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100 ];

		const expected =
			'wrong input';

		assert.strictEqual(format(input, -1), expected);
	});
});
