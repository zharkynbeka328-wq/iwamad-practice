const likeButton = document.getElementById("likeButton");

likeButton.addEventListener("click", function () {
    if (likeButton.textContent === "♡ Like") {
        likeButton.textContent = "♥ Liked";
    } else {
        likeButton.textContent = "♡ Like";
    }
});