function checkform() {
  let form = document.forms["comment-form"].elements;
  let fieldsMustBeFilled = true;

  for (let i = 0; i < form.length; i++) {
    if (
      (form[i].tagName === "INPUT" || form[i].tagName === "TEXTAREA") &&
      form[i].value.trim() === ""
    ) {
      fieldsMustBeFilled = false;
    }
  }

  let submitBtn = document.getElementById("submit-btn");

  if (fieldsMustBeFilled) {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "#2d3e42";
  } else {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "";
  }
}
