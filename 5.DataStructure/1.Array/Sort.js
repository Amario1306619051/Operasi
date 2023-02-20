var himpunan = [4,5,2,1,3]

function sort(arr) {
    for(let i = 0; i < arr.length; i++ ){
        for(let j = i + 1; j < arr.length; j ++){
            if (arr[i] > arr[j]){
                swap = arr[i]
                arr[i] = arr[j]
                arr[j] = swap
            }
        } 
    }
    return arr // TODO: replace this
}

function rotateLeft(d, arr) {
    for(let k =0; k < d; k ++){
        for(let i = 0; i < 4; i++ ){
            swap = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = swap       
        }
    }
    return arr // TODO: replace this
}