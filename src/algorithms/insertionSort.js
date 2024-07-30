export const insertionSort = async (array, setArray, delay = 600) => {
  const bars = document.querySelectorAll(".bar");

  bars[0].style.backgroundColor = "rgb(49, 226, 13)";
  for (let i = 1; i < bars.length; i += 1) {
    let j = i - 1;
    const key = parseInt(bars[i].childNodes[0].innerHTML);
    const height = bars[i].style.height;
    const barval = document.getElementById("ele");
    barval.innerHTML = `<h3>Element Selected is :${key}</h3>`;

    bars[i].style.backgroundColor = "darkblue";
    await new Promise((resolve) => setTimeout(resolve, delay));

    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      bars[j].style.backgroundColor = "darkblue";
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
      j -= 1;
      await new Promise((resolve) => setTimeout(resolve, delay));
      for (let k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = "rgb(49, 226, 13)";
      }
    }

    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;
    await new Promise((resolve) => setTimeout(resolve, delay));
    bars[i].style.backgroundColor = "rgb(49, 226, 13)";
  }

  document.getElementById("ele").innerHTML = "<h3>Sorted!!!</h3>";
};
