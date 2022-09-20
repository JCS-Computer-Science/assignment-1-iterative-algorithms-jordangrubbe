function bubbleSort(array) {
    let number = array.length;
    let sorted = false;
        
    while (!sorted) {
        sorted = true;
        for(let i = 0; i < number; i++){
            if(array[i] > array[i+1]){
                let bubble = array[i];
                array[i] = array[i+1];
                array[i+1] = bubble;
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
