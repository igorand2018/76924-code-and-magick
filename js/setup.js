'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBERS = 4;

function getRandomArrayElement(array) {
  var randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [];
for (var i = 0; i < WIZARDS_NUMBERS; i++) {
  var currentWizard = {
    name: getRandomArrayElement(WIZARD_NAMES) + ' ' + getRandomArrayElement(WIZARD_SURNAMES),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS)
  };
  wizards.push(currentWizard);
}

function renderWizard() {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});


setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesForm = document.querySelector('.setup-wizard-appearance');
var WizardEyesInput = wizardEyesForm.getElementsByTagName('input')[1];

function changeEyesColor() {
  var randomEyeColor = getRandomArrayElement(EYES_COLORS);
  return randomEyeColor;
}


wizardEyes.addEventListener('click', function () {
  var wizardEyesColor = changeEyesColor();
  wizardEyes.style.fill = wizardEyesColor;
  WizardEyesInput.value = wizardEyesColor;

});


var fireBall = document.querySelector('.setup-fireball-wrap');
var fireBallInput = fireBall.getElementsByTagName('input')[0];

function changeFireBallColor() {
  var randomFireBallColor = getRandomArrayElement(FIREBALL_COLORS);
  return randomFireBallColor;
}

fireBall.addEventListener('click', function () {
  var fireBallColor = changeFireBallColor();
  fireBall.style.background = fireBallColor;
  fireBallInput.value = fireBallColor;
});
