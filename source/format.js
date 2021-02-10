const format = function (numbers, cols)
{
	if ((cols <= 0)||(!(Array.isArray(numbers))))
	{
		return 'wrong input';
	}
	else	
	{
		let colsWidth =[];
		for(let i = 0; i < cols; i++) // определяем ширину каждой колонки
		{
			num = numbers[numbers.length - i - 1];
			colsWidth[(numbers.length - i - 1)%cols] = (num + '').length;
		}

		let formated = '';
		numbers.forEach(function(number, i, numbers)  
		{
			let n;
			if ((i + 1) % cols) // определяем, из какой колонки число
			{
				n = colsWidth[(i + 1) % cols - 1] - (number + '').length;
			}
			else
			{
				n = colsWidth[cols - 1] - (number + '').length; 
			}
			if (((i + 1) % cols != 1 ) && (cols !=1) )
			{
				n++;
			}
			let nSpaces = ''; // формируем нужный отступ
			for(let j = 0; j < n; j++)
				nSpaces += ' ';

			formated += nSpaces + number; 
			if ((!((i + 1) % cols)) && (i != numbers.length - 1)) //если колонка последняя
			{
				formated += '\n';
			}
		});
		return formated;
	}

};

