// write your JavaScript here
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");
const cancelBtn = document.getElementById("cancelBtn");
const ratingButtons = document.querySelectorAll(".rate");
const submitBtn = document.getElementById("submitBtn");

let selectedRating = null;

openBtn.onclick = () => modal.classList.remove("hidden");

closeBtn.onclick = () => modal.classList.add("hidden");

cancelBtn.onclick = () => modal.classList.add("hidden");

// Select rating button
ratingButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedRating = button.getAttribute("data-rating");
    ratingButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// Submit feedback and close modal
submitBtn.onclick = () => {
  if (selectedRating) {
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(selectedRating);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    alert("Thanks for your feedback! Rating: " + selectedRating);
    modal.classList.add("hidden");
  } else {
    alert("Please select a rating.");
  }
};

// Close modal when clicked outside of modal content
window.onclick = (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
};
