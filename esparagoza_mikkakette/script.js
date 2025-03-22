document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('commenter-name');
    const commentText = document.getElementById('commenter-comment');
    const commentButton = document.getElementById('comment-button');

    function checkFields() {
        if (nameInput.value.trim() !== '' && commentText.value.trim() !== '') {
            commentButton.disabled = false;
        } 
        
        else {
            commentButton.disabled = true;
        }
    }

    nameInput.addEventListener('input', checkFields);
    commentText.addEventListener('input', checkFields);
});
