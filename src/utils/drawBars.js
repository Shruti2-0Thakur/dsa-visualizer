export const drawBars = (ctrl, arr) => {
  const canvasWidth = 1000;
  const canvasHeight = 300;

  ctrl.clearRect(0, 0, canvasWidth, canvasHeight);

  arr.forEach((value, i) => {
    ctrl.fillStyle = "black";
    ctrl.shadowOffsetX = 2;
    ctrl.shadowColor = "chocolate";
    ctrl.shadowBlur = 3;
    ctrl.shadowOffsetY = 5;
    ctrl.fillRect(25 * i, canvasHeight - value, 20, value);
  });
};
