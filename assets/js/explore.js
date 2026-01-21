const tiles = document.querySelectorAll(".glyph-tile");
const display = document.getElementById("glyph-display");

let audio = null;

tiles.forEach(tile => {
  tile.addEventListener("click", () => {
    const letter = tile.dataset.letter;

    // Remove previous selection
    tiles.forEach(t => t.classList.remove("selected"));
    tile.classList.add("selected");

    // Update display
    display.innerHTML = `
      <img src="assets/glyphs/${letter}.svg" alt="${letter}">
      <p>${letter}</p>
    `;

    // Play sound
    if (audio) {
      audio.pause();
    }
    audio = new Audio(`assets/audio/${letter}.m4a`);
    audio.play();
  });
});
