function bubbleSort(array) {
    let sorted = false;
    let number = array.length;
    
    while (!sorted) {
        sorted = true;
        for(let a = 0; a < number; a++){
            if(array[a] > array[a+1]){
                let bubble = array[a];
                array[a] = array[a+1];
                array[a+1] = bubble;
                sorted = false;
            }
        }
    }
        return array;
    }
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
   
module.exports = bubbleSort;
