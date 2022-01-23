module.exports = function towelSort(matrix) {

    const matrixarray = [];
    if (matrix == null) { return []; }

    for (let i = 0; i < matrix.length; i++) {

        if (i % 2 == 0) {

            let j = matrix[i].length;

            for (j = 0; j < matrix[i].length; j++) {

                matrixarray.push(matrix[i][j]);

            }

        } else {
            for (j = matrix[i].length - 1; 0 <= j; j--) {
                matrixarray.push(matrix[i][j]);

            }
        }
    }
    return matrixarray;
}
