function generateNumber() {
  let min = parseInt(document.getElementById('min').value);
  let max = parseInt(document.getElementById('max').value);
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('display').innerText = random;
}

