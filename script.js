const p = document.createElement("p");
const div = document.querySelector("#container");
const MIN_EMOJI_CODE = 0x1F601;
const MAX_EMOJI_CODE = 0x1F64F;
let randomEmojiCode;

p.id = "emoji";
p.innerHTML = "😊";
div.appendChild(p);

p.addEventListener("mouseover", () => {
  randomEmojiCode = Math.floor(Math.random() * (MAX_EMOJI_CODE - MIN_EMOJI_CODE + 1)) + MIN_EMOJI_CODE;
  console.log(randomEmojiCode);
  const emoji = String.fromCodePoint(randomEmojiCode);
  p.innerHTML = emoji;
});