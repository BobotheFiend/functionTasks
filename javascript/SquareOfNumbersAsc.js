const square = (collection) =>{

    let count = 0;
    for(let number of collection){
        collection[count++] = number**2;
    }
    sortedAsc(collection);
    return collection;
    }

const sortedAsc = (collection) =>{
        for(let count = 0; count < collection.length; count++){
            for(let inner = count+1; inner < collection.length; inner++){
                if(collection[count] > collection[inner]){
                    collection[count] = collection[count] + collection[inner];
                    collection[inner] = collection[count] - collection[inner];
                    collection[count] = collection[count] - collection[inner];
                }
            }
        }
        return collection;
    }

module.exports = {square, sortedAsc};