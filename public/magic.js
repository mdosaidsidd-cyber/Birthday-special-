
(() => {
  const petals = ["🌸", "❀", "✿", "♡", "✧"];

  function makePetal() {
    const el = document.createElement("span");
    el.className = "petal";
    el.textContent = petals[Math.floor(Math.random() * petals.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 14 + Math.random() * 14 + "px";
    el.style.animationDuration = 6 + Math.random() * 6 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 13000);
  }

  for (let i = 0; i < 22; i++) {
    setTimeout(makePetal, i * 250);
  }
  setInterval(makePetal, 450);

  function typeText(element, text, speed, callback) {
    element.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      element.textContent += text.charAt(i++);
      if (i >= text.length) {
        clearInterval(timer);
        if (callback) callback();
      }
    }, speed);
  }

  const heading = document.querySelector("#gate h1");
  if (heading) {
    const original = heading.textContent;
    typeText(heading, original, 90);
  }

  const letter = document.querySelector(".letter");
  if (letter) {
    const originalHTML = letter.innerHTML;
    const originalText = originalHTML
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]*>/g, "");

    const form = document.querySelector("#unlockForm");
    if (form) {
      form.addEventListener("submit", () => {
        const input = document.querySelector("#password");
        if (!input || input.value.trim() !== "birthday2026") return;

        setTimeout(() => {
          if (document.querySelector("#surprise.hidden")) return;
          typeText(letter, originalText, 28);
        }, 150);
      });
    }
  }
})();
