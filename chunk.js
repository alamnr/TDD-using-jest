// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]


const chunkArray = (arr,len) => {

    // Init chunked array 
    const chunkedArr = [];

    // Loop through array

    arr.forEach(val=>{
        // Get last element
        const last = chunkedArr[chunkedArr.length-1];

        // Check if last and if last length is equal to the chunk len
        if(!last || last.length ===len){
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunkedArr;

}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));


module.exports = chunkArray;