function binarySearch(array, searchTerm) {
	let end = array.length - 1;
    let beginning = 0;
    
    while (beginning <= end) {
        let centre = Math.floor((beginning + end) / 2);

        if (array[centre] === searchTerm) {
            return centre;
        } else if (array[centre] < searchTerm) {
            beginning = centre + 1;
        } else {
            end = centre - 1;
        }
    }
    return -1;
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	return null;
}

module.exports = binarySearch;
