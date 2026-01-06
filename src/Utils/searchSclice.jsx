import { createSlice } from "@reduxjs/toolkit";
// for storeing the cache
const searchSlice = createSlice({
    name: 'search',
    initialState: {
        // here initial state is empty
    },
    reducers:{
        cacheResults:(state,action)=>{
            //down there it will merge the payload and the state
            state= Object.assign(state,action.payload)
        },
    },
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer

// now we will put this slice in store




/** 
 * 
 * cache:
 * time complexity tro search in array =O(n)
 * [i,ip,iph,iphone]
 * 
 * time complexity tro search in object=O(1) its better then O(n)
 * {
 *  i:
 *  ip:
 *  iph:
 *  iphone:
 * }
 * 
 *  or we can aslo use 
 * new Map();
*/



/*
working of spread operator, it merges two object


let job ={

jobTitle: JavaScript Developer',
 country: 'USA'
}


let location={

city: 'London',

country: 'England'

};

let remoteJob ={

...job,...location

};

console.log(remoteJob);

Output:

}

jobTitle: JavaScript Developer', 
country: England',
city: London'

*/