function selectionSort(array) {
	let number = array.length;
        
    for(let a = 0; a < number; a++) {
        let smallest = a;
        for(let b = a+1; b < number; b++){
            if(array[b] < array[smallest]) {
                smallest=b; 
            }
         }
         if (smallest != a) {
             let selection = array[a]; 
             array[a] = array[smallest];
             array[smallest] = selection;      
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
