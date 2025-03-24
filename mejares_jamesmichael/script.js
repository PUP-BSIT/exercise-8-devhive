document.addEventListener("DOMContentLoaded", () => {
    const commentName = document.getElementById("comment_name");
    const commentMessage = document.getElementById("comment_message");
    const commentButton = document.querySelector("#comment_button button");
    const commentContainer = document.querySelector(".comment-container");

    const toggleButtonState = () => {
        const isFormValid = commentName.value.trim() 
        && commentMessage.value.trim();
        commentButton.disabled = !isFormValid;
        commentButton.style.opacity = isFormValid ? "1" : "0.5";
        commentButton.style.cursor = isFormValid ? "pointer" : "not-allowed";
    };

    const addComment = () => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment-message");
        commentDiv.innerHTML = 
            `${commentMessage.value.trim()}
            <div class="comment-author">- ${commentName.value.trim()}</div>`;
        commentContainer.appendChild(commentDiv);
        commentName.value = "";
        commentMessage.value = "";

        toggleButtonState();
    };

    [commentName, commentMessage].forEach(input =>
        input.addEventListener("input", toggleButtonState)
    );
    commentButton.addEventListener("click", addComment);

    toggleButtonState();
});