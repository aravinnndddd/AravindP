const audioToggle = document.getElementById('m-btn');
const audio = document.getElementById('aud');


// Ensure audio starts playing on load
window.addEventListener('load', () => {
  audio.play().catch((error) => {
    console.log('Autoplay was prevented:', error);
  });
  updateAudioIcon();
});

// Play/Pause toggle functionality
audioToggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updateAudioIcon();
});

// Update the button icon based on audio state
function updateAudioIcon() {
  audioToggle.innerHTML = audio.paused
    ? '<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 422.274"><path fill-rule="nonzero" d="M56.333 98.8h112.324l92.906-93.608c6.885-6.886 18.027-6.941 24.908-.055 3.503 3.392 5.222 7.911 5.222 12.486h.056v386.951c0 9.737-7.907 17.699-17.704 17.699-4.95 0-9.414-2.042-12.644-5.328l-91.829-74.61H56.333c-15.495 0-29.594-6.345-39.766-16.516C6.345 315.648 0 301.553 0 286.058V155.129c0-15.495 6.345-29.59 16.517-39.757C27.104 104.78 41.342 98.8 56.333 98.8zm315.446 58.533c-2.888-8.637 1.77-17.991 10.407-20.879 8.638-2.888 17.991 1.77 20.879 10.407 5.684 16.877 8.425 43.075 7.967 67.988-.443 24.414-4.011 48.403-10.915 62.572-3.993 8.207-13.896 11.622-22.104 7.629-8.207-3.992-11.622-13.896-7.629-22.103 4.797-9.848 7.315-28.652 7.68-48.616.398-21.544-1.76-43.574-6.285-56.998zm85.304-61.708c-3.498-8.424.495-18.092 8.919-21.59 8.425-3.499 18.092.495 21.59 8.919 15.371 36.799 23.666 83.155 24.359 129.228.689 45.386-6.012 90.835-20.587 126.946-3.388 8.457-13.005 12.565-21.462 9.178-8.456-3.387-12.565-13.004-9.178-21.461 12.945-32.067 18.888-73.011 18.259-114.275-.633-41.914-8.087-83.88-21.9-116.945z"/></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px"    shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 493 511.769"><path fill-rule="nonzero" d="M65.905 115.589h131.411L306.008 6.074c8.056-8.055 21.091-8.12 29.141-.065 4.099 3.969 6.11 9.257 6.11 14.609h.065v67.441L47.837 385.579a28.41 28.41 0 00-6.45 10.175 66.152 66.152 0 01-22.005-14.57C7.423 369.284 0 352.794 0 334.666V181.489c0-18.128 7.423-34.618 19.323-46.513 12.386-12.391 29.043-19.387 46.582-19.387zM450.34 59.237c9.716-9.775 25.525-9.819 35.3-.103 9.774 9.715 9.818 25.524.102 35.299L341.324 240.311v233.01c0 11.392-9.251 20.707-20.713 20.707-5.79 0-11.013-2.39-14.792-6.234l-107.433-87.287h-15.657L79.865 504.409c-9.716 9.775-25.524 9.818-35.299.103-9.775-9.716-9.818-25.525-.103-35.3L327.121 183.7l14.203-14.398v.054L450.34 59.237z"/></svg>';
}







