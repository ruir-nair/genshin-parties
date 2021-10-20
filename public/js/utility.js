function bubbleSort(arr){
    //Outer pass
        for(let i = 0; i < arr.length; i++){
    
            //Inner pass
            for(let j = 0; j < arr.length - i - 1; j++){
    
                //Value comparison using ascending order
                if(arr[j + 1] < arr[j]){
    
                    //Swapping
                    [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
                }
            }
        };
        return arr;
    };

function maxPossibleCombination(num){
    partyLimit = 4;
    return (num-3)*(num-2)*(num-1)*num/24;
};