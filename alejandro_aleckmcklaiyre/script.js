function checkform() {
  let form = document.forms["comment-form"].elements;
  let fieldsMustBeFilled = true;

  for (let i = 0; i < form.length; i++) {
    if (
      (form[i].tagName === "INPUT" || form[i].tagName === "TEXTAREA") &&
      !form[i].value.trim()
    ) {
      fieldsMustBeFilled = false;
    }
  }

  let submitBtn = document.getElementById("submit_btn");
  submitBtn.disabled = !fieldsMustBeFilled;
  submitBtn.style.backgroundColor = fieldsMustBeFilled ? "#2d3e42" : "";
}

document.addEventListener("DOMContentLoaded", function () {
  let commentForm = document.querySelector(".comment-form");
  let commentsSection = document.querySelector(".comment-list ul");

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let comment = document.getElementById("comment-text").value.trim();

    if (!name || !comment) return;

    let newComment = document.createElement("li");
    newComment.textContent = `${comment} - ${name}`;
    commentsSection.appendChild(newComment);

    commentForm.reset();
    checkform();
  });
});
