/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
	preferences.forEach(function(item, i, arr) {
		const next = arr[item-1];
		const last = arr[next-1];

		if ( item !== i+1 && last == i+1) {count++;}
	});

	return count/3;
};