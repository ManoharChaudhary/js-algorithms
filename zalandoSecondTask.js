'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */

function solution(U, N) {
    console.log(U, N);
    let likePromise = getLikedBrands(U.id)
    let brandPromise = getTopBrandsForGender(U.gender); 

    return new Promise((resolve, reject) => {
        Promise.all([likePromise, brandPromise]).then(function(values) {
    console.log(values);
    let liked = values[0];
    let gender =values[1];
    
    if(liked.length>= N) {
        resolve(liked.slice(0,N).map(brand => brand.name)) 
        console.log(liked.slice(0,N).map(brand => brand.name));
    }else{
        //[...liked,...gender].
        let combine = [...liked.map(brand => brand.name),...gender.map(brand => brand.name)];
        var unique = combine.filter(function (item, pos) {return combine.indexOf(item) == pos});
        //gender.filter(item => )
        console.log('unique', unique)
     if(unique.length >= N){
        console.log(unique.slice(0,N));
        
        //resolve([...liked,...gender].slice(0,N).map(brand => brand.name))
        resolve(unique.slice(0,N));
       }else {
        reject( new Error("Not enough data"));
    }
        }
        
    
});
       
            // Resolve the promise with the result
        // let likedBrands = await getLikedBrands(U.id);
            //console.log(likedBrands);
            
        });
}