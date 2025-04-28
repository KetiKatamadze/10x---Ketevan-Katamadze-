// const texts = ["core", "grid", "relay"];
// function pingNodes(x) {
//   let newText = "";
//   for (let node of x) {
//     newText += `Pinging: ${node}, `;
//   }
//   return newText;
// }

// console.log(pingNodes(texts));

async function pingNodes() {
  const texts = ["core", "grid", "relay"];

  for (let text in texts) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Pinging: ${texts[text]}`);
  }
}

pingNodes();