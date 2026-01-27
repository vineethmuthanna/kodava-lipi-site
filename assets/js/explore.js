document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".glyph-tile");

  if (tiles.length === 0) {
    console.error("No glyph tiles found. explore.js is loaded, but HTML is not ready or class name is wrong.");
    return;
  }

  let audio = null;

  tiles.forEach(tile => {
    tile.addEventListener("click", () => {
      const letter = tile.dataset.letter;

      if (!letter) {
        console.warn("Clicked tile has no data-letter");
        return;
      }

      // Stop previous audio
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

      audio = new Audio(`assets/audio/${letter}.m4a`);

      audio.play()
        .then(() => {
          console.log(`Playing audio for: ${letter}`);
        })
        .catch(err => {
          console.error(`Failed to play audio for ${letter}`, err);
        });
    });
  });
});
