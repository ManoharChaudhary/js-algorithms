
"use strict";

/* global $, jQuery */

function solution() {
  const commentList = document.getElementsByClassName("comment-list");
  for (let i = 0; i < commentList.length; i++) {
     commentList[i].innerHTML = "Loading...";
     addCommentHtml(commentList[i]);
  }
  return commentList;
}
function addCommentHtml(commentList) {
    const commentCount = commentList.getAttribute("data-count");
  fetch("https://www.example.com/comments?count=" + commentCount)
    .then(response => response.json())
    .then(data => {
         commentList.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        var commentItem = document.createElement("div");
        var commentUser = document.createElement("div");
        var commentMessage = document.createElement("div");
        commentItem.classList.add("comment-item");
        commentUser.classList.add("comment-item__username");
        commentMessage.classList.add("comment-item__message");
        commentUser.innerHTML = data[i].username || '';
        commentMessage.innerHTML = data[i].message || '';
        commentItem.appendChild(commentUser);
        commentItem.appendChild(commentMessage);
        commentList.appendChild(commentItem);
      }
    })
    .catch(error => {
        commentList.innerHTML = "";
       // console.error(error)
        
    });
}



