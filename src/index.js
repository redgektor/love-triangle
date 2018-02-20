/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
    for (var i = 0; i < preferences.length; i++) {
        for (var j = 0; j < preferences.length; j++) {
            if (i == preferences[j] - 1) {
                for (var k = 0; k < preferences.length; k++) {
                    if (preferences[k] - 1 == j) {
                        if (preferences[i] - 1  == k) {
                            count++;
                        }
                    }
                }
            }
        }
    } return Math.floor(count/3);
};
