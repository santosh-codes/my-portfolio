const counter = document.querySelector(".counter");
async function updateCounter() {
  let response = await fetch(
    "https://m6qzgiriqttru6gu5xctibfqpi0pswdh.lambda-url.ap-south-1.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = `${data}`;
}

updateCounter();
