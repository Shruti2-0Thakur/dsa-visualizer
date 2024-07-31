export const bubbleSort = async (array, setArray, delay = 600) => {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < bars.length; i += 1) {
    for (let j = 0; j < bars.length - i - 1; j += 1) {
      bars[j].style.backgroundColor = "darkblue";
      bars[j + 1].style.backgroundColor = "darkblue";

      await new Promise((resolve) => setTimeout(resolve, delay));

      const value1 = parseInt(bars[j].childNodes[0].innerHTML);
      const value2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

      if (value1 > value2) {
        [bars[j].style.height, bars[j + 1].style.height] = [
          bars[j + 1].style.height,
          bars[j].style.height,
        ];
        [bars[j].childNodes[0].innerHTML, bars[j + 1].childNodes[0].innerHTML] =
          [
            bars[j + 1].childNodes[0].innerHTML,
            bars[j].childNodes[0].innerHTML,
          ];
      }

      bars[j].style.backgroundColor = "rgb(49, 226, 13)";
      bars[j + 1].style.backgroundColor = "rgb(49, 226, 13)";
    }
  }

  document.getElementById("ele").innerHTML = "<h3>Sorted!!!</h3>";
};
