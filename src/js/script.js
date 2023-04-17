'use strict';

function sum(arr) { // посчитает сумму чисел в массиве и вернёт ее
	let total = 0;
	for (let key in arr) {
		total += arr[key];
	}
	return total;
}
console.log(sum([2, 4, 6, 8, 10]));

function findMax(arr) { // находит максимальное значение в массиве и возвращает его
	let length = arr.length;
	let total = arr[0];
	for (let i = 0; i < length; i++) {
		if (arr[i] > total) {
			total = arr[i];
		} 
	}
	return total;
}
let a = [10, 5, 2, 123, 18, 23];
let newarr = [];

function sort(arr) { // отсортирует массив по возрастанию, возвращая новый
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] === findMax(arr)) {
			newarr.unshift(findMax(arr)); 
			arr.splice([i],1);
		} 
		for (let j = 0; j <= arr.length - 1; j++) {
			if (arr[j] === findMax(arr)) {
				newarr.unshift(findMax(arr)); 
				arr.splice([j],1);
				sort(arr);
			} 
		}
	}
	return newarr;
}
console.log(sort(a));


function qsort(arr) { // метод быстрой сортировки
	if (arr.length < 2) {
		return arr;
	}
	const pivot = arr[Math.floor(Math.random() * arr.length)];
	const less = arr.filter(item => item < pivot);
	const greater = arr.filter(item => item > pivot);
	return [...qsort(less), pivot, ...qsort(greater)];
}
let b = [10, 5, 2, 123, 18, 23];
console.log(qsort(b));

function binarySearch(value, list) { // бинарный поиск
	let first    = 0;                // начальный индекс в массиве
	let last     = list.length - 1;  // конечный индекс
	let position = -1;
	let found    = false;
	let middle;

	while (found === false && first <= last) {
		middle = Math.floor((first + last) / 2);

		if (list[middle] == value) {
			found = true;
			position = middle;
		} else if (list[middle] > value){ // значение в нижней части списка
			last = middle - 1;
		} else {  // значение в верхней части списка
			first = middle + 1;
		}
	}
	return position;
}
let c = [10, 5, 2, 123, 18, 23, 34, 87, 52, 7];
console.log(binarySearch(123, qsort(c)));



const arr = [10, 57, 2, 123, 18, 23, 6, 14, 32];
function selectSort(array) { // сортировка выбором
	for (let i = 0; i < array.length; i++) {
		let indexMin = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[indexMin]) {
				indexMin = j;
			}
		}
		let tmp = array[i];
		array[i] = array[indexMin];
		array[indexMin] = tmp;
	}
	return array;
}
console.log(selectSort(arr));