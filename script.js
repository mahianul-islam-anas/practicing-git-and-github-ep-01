// Profile image click effect
document.getElementById("profileImg").addEventListener("click", function () {
  this.style.background = `linear-gradient(45deg, 
        hsl(${Math.random() * 360}, 70%, 60%), 
        hsl(${Math.random() * 360}, 70%, 60%))`;
});

// Skill tags interactive effect
document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("click", function () {
    this.style.background = "rgba(255, 255, 255, 0.4)";
    setTimeout(() => {
      this.style.background = "rgba(255, 255, 255, 0.2)";
    }, 200);
  });
});

// Contact button function
function handleContact() {
  const successMsg = document.getElementById("successMsg");
  successMsg.style.display = "block";

  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);

  // Add some visual feedback
  const btn = document.querySelector(".contact-btn");
  btn.textContent = "✅ Sent!";
  btn.style.background = "#4CAF50";

  setTimeout(() => {
    btn.textContent = "যোগাযোগ করুন";
    btn.style.background = "linear-gradient(45deg, #ff6b6b, #ffa500)";
  }, 2000);
}

// Dynamic background color change
setInterval(() => {
  document.body.style.background = `linear-gradient(135deg, 
        hsl(${Math.random() * 60 + 220}, 70%, 60%) 0%, 
        hsl(${Math.random() * 60 + 260}, 70%, 60%) 100%)`;
}, 10000);

// Add click effect to card
document.querySelector(".card").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.transform = "scale(1.02) translateY(-5px)";
    setTimeout(() => {
      this.style.transform = "translateY(0)";
    }, 150);
  }
});

// Page load animation
document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";

  setTimeout(() => {
    card.style.transition = "all 0.8s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 100);
});

// Add ripple effect to buttons
function addRippleEffect(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

// Apply ripple effect to contact button
document
  .querySelector(".contact-btn")
  .addEventListener("click", addRippleEffect);
