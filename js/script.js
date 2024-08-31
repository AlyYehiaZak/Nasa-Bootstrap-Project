var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

var question_button = document.getElementById("question_btn");
question_button.onclick = function(){
    alert("Your Question Has Been Submitted")
}

var feedback_btn = document.getElementById("feedback_btn");
feedback_btn.onclick = function(){
    alert("Your Feedback Has Been Submitted")
}