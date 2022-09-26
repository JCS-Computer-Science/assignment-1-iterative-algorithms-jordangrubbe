function linearSearch(array, searchTerm) {
	for(let a = 0; a < array.length; a++){
        if(array[a] === searchTerm){
            return a
        }
    }
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */

	return null;
}

module.exports = linearSearch;
