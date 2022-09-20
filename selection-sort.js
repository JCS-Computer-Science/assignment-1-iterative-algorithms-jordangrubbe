function selectionSort(array) {
	let number = array.length;
        
    for(let i = 0; i < number; i++) {
        let smallest = i;
        for(let j = i+1; j < number; j++){
            if(array[j] < array[smallest]) {
                smallest=j; 
            }
         }
         if (smallest != i) {
             let tmp = array[i]; 
             array[i] = array[smallest];
             array[smallest] = tmp;      
        }
    }
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	return array;
}

module.exports = selectionSort;
