document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("commenter-name");
    const commentInput = document.getElementById("commenter-comment");
    const commentButton = document.getElementById("comment-button");
    const commentSection = document.querySelector("#comment_page");

    function toggleButton() {
        const isNameValid = nameInput.value.trim().length > 0;
        const isCommentValid = commentInput.value.trim().length > 0;
        commentButton.disabled = !(isNameValid && isCommentValid);
        commentButton.style.opacity = commentButton.disabled ? "0.5" : "1";
        commentButton.style.cursor = commentButton.disabled ? 
            "not-allowed" : "pointer";
    }

    nameInput.addEventListener("input", toggleButton);
    commentInput.addEventListener("input", toggleButton);

    commentButton.addEventListener("click", function() {
        if (!nameInput.value.trim() || !commentInput.value.trim()) return;

        const newComment = document.createElement("li");
        newComment.textContent = `${commentInput.value} - ${nameInput.value}`;
        commentSection.appendChild(newComment);

        nameInput.value = "";
        commentInput.value = "";
        commentButton.disabled = true;

        toggleButton();
    });
    toggleButton();
});
