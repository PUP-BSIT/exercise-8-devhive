function buttonEnabler() {
	let name = document.getElementById("user_name");
	let comment = document.getElementById("user_comment");

	if(comment.value.length > 0 && name.value.length > 0) {
		document.getElementById("comment_button").disabled = false;
    } else {
		document.getElementById("comment_button").disabled = true;
	}
}

    document.addEventListener("DOMContentLoaded", function() {
        const nameInput = document.getElementById('commenter-name');
        const commentInput = document.getElementById('comment-text');
        const commentButton = document.getElementById('comment-btn');

        function toggleButton() {
            commentButton.disabled = !(nameInput.value.trim() && commentInput.value.trim());
        }

        nameInput.addEventListener('input', toggleButton);
        commentInput.addEventListener('input', toggleButton);
    });