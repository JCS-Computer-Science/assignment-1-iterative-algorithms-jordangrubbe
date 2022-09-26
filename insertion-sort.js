function insertionSort(array) {
	let digit = array.length;
        for (let a = 1; a < digit; a++) {
            let insertion = a-1;
            let currentDigit = array[a];
            while ((insertion > -1) && (currentDigit < array[insertion])) {
                array[insertion+1] = array[insertion];
                insertion--;
            }
            array[insertion+1] = currentDigit;
        }
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	return array;
}

module.exports = insertionSort;
