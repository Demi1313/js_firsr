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