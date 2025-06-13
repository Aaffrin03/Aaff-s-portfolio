const roles = [
  "software developer",
  "web developer",
  "UI/UX designer",
  "problem solver",
  "critical thinker",
  "tech enthusiast"
];

let index = 0;
let charIndex = 0;
let currentRole = "";
const typeElement = document.getElementById("typewriter");

function type() {
  if (charIndex < roles[index].length) {
    currentRole += roles[index].charAt(charIndex);
    typeElement.textContent = currentRole;
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    currentRole = currentRole.substring(0, charIndex - 1);
    typeElement.textContent = currentRole;
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  type();
});
<script>
  // Automatically close menu after clicking a link
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu-toggle').checked = false;
    });
  });
</script>

