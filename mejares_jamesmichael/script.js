document.addEventListener("DOMContentLoaded", function () {
    const commentName = document.getElementById("comment_name");
    const commentMessage = document.getElementById("comment_message");
    const commentButton = document.querySelector("#comment_button button");

    function toggleButtonState() {
        if (commentName.value.trim() !== "" && 
            commentMessage.value.trim() !== "") {
            commentButton.disabled = false;
            commentButton.style.opacity = "1";
            commentButton.style.cursor = "pointer";
        } else {
            commentButton.disabled = true;
            commentButton.style.opacity = "0.5";
            commentButton.style.cursor = "not-allowed";
        }
    }

    commentName.addEventListener("input", toggleButtonState);
    commentMessage.addEventListener("input", toggleButtonState);

    toggleButtonState();
});
