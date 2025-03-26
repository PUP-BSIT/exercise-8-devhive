document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById('commenter-name');
    const commentInput = document.getElementById('comment-text');
    const commentButton = document.getElementById('comment-btn');
    const commentForm = document.getElementById('commentForm');

    function toggleButton() {
        commentButton.disabled = !nameInput.value.trim() 
        || !commentInput.value.trim();
    }

    nameInput.addEventListener('input', toggleButton);
    commentInput.addEventListener('input', toggleButton);

    // Simple comment submission handler
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newComment = document.createElement('p');
        newComment.textContent = `${nameInput.value}: ${commentInput.value}`;
        
        const commentsSection = document.querySelector('#my_goals');
        commentsSection.insertBefore(newComment, 
            commentsSection.querySelector('h3'));
        
        // Reset form
        nameInput.value = '';
        commentInput.value = '';
        commentButton.disabled = true;
    });
});