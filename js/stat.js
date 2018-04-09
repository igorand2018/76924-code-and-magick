'use strict';

var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_X = 100; // начало координат облака по X
var CLOUD_Y = 10; // начало координат облака по Y
var GAP = 10; // смещение на 10 для тени от облака
var FONT_GAP = 10;
var TEXT_HEIGHT = 16;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
// var BAR_HEIGHT = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP;
var BAR_WIDTH = 40; // Ширина колонки
var BARS_GAP = 50;// Расстояние между колонками
var GRATZ_GAP = 86; // Расстояние от верха облака до SEC_GAP
var SEC_GAP = 18; // Расстояние от GRATZ_GAP до гистограммы - предназначено для ввода туда милисекунд

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

}

function getMaxElement(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); // Отрисовка тени облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); // отрисовка облака
  ctx.fillStyle = '#000'; // Цвет текста
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 20); // Первая строка
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 40);// Вторая строка на 20 ниже первой

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + BARS_GAP + (BAR_WIDTH + BARS_GAP) * i, CLOUD_Y + GRATZ_GAP + SEC_GAP + BAR_HEIGHT);
    ctx.fillRect(CLOUD_X + BARS_GAP + (BAR_WIDTH + BARS_GAP) * i, CLOUD_Y + GRATZ_GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    // ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }
};
