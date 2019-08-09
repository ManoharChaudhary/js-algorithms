"use strict";

/* global CustomError, getLikedBrands, getTopBrandsForGender */

function solution(U, N) {
  let likePromise = getLikedBrands(U.id);
  let brandPromise = getTopBrandsForGender(U.gender);

  return new Promise((resolve, reject) => {
    Promise.all([likePromise, brandPromise]).then(function(values) {
      let liked = values[0];
      let gender = values[1];

      if (liked.length >= N) {
        resolve(liked.slice(0, N).map(brand => brand.name));
      } else {
        let combine = [
          ...liked.map(brand => brand.name),
          ...gender.map(brand => brand.name)
        ];
        let unique = combine.filter(function(item, pos) {
          return combine.indexOf(item) == pos;
        });
        if (unique.length >= N) {
          resolve(unique.slice(0, N));
        } else {
          reject(new Error("Not enough data"));
        }
      }
    });
  });
}
