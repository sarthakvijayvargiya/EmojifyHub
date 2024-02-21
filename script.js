// const emoji = '&#x1F601;';  // 601 to 64F
// console.log(emoji);
// const p = document.createElement('p');
// console.log(p);
// p.innerHTML = emoji;
// const div = document.querySelector('#container');
// div.appendChild(p);

const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "👀",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];

const div = document.querySelector("#container");
const p = document.querySelector("#emoji");

p.addEventListener("mouseover", () => {
  const randomValue = Math.floor(Math.random() * 34);
  p.innerHTML = emojis[randomValue];
});
