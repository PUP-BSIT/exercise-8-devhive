document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("commenter-name");
    const commentInput = document.getElementById("commenter-comment");
    const commentButton = document.getElementById("comment-button");
    const commentSection = document.querySelector("#comment_page");

    function toggleButton() {
        commentButton.disabled = !nameInput.value.trim() || !commentInput.value.trim();
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
    });
});
