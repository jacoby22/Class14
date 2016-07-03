var tracker = {
  conversionsByOrder: [2.54, 29.5735, 1.609344, 0.453592, 204.62262],
  englishUnits: ['inch(es)', 'fluid ounce(s)', 'mile(s)','lb(s)', 'standard shit ton(s)'],
  metricUnits: ['centimeter(s)', 'liter(s)', 'kilometer(s)','kg(s)', 'metric shit ton(s)'],
  returnValue: 0,
  userData: null,
  unitIndex: null,
  typeTo: null,
  userInput: null,
  button: document.getElementById('Submit'),
  clearButton: document.getElementById('clear'),

  convertToMetric: function(userData, unitId) {
    var userValueArray = tracker.handleUserInput(userData, unitId);
    if (userValueArray[0] < tracker.conversionsByOrder.length - 1) {
      tracker.returnValue = (userValueArray[1] * this.conversionsByOrder[unitId]).toFixed(3);
    } else {
      tracker.returnValue = (userValueArray[1] + this.conversionsByOrder[unitId]).toFixed(3);
    }
    console.log(tracker.returnValue);
  },
  convertToEnglish: function(userData, unitId) {
    var userValueArray = tracker.handleUserInput(userData, unitId);
    if (userValueArray[0] < tracker.conversionsByOrder.length - 1) {
      tracker.returnValue = (userValueArray[1] / this.conversionsByOrder[unitId]).toFixed(3);
    } else {
      tracker.returnValue = (userValueArray[1] - this.conversionsByOrder[unitId]).toFixed(3);
    }
    console.log(tracker.returnValue);
  },
  handleUserInput: function(userData, unitId) {
    var unitIdInt = parseInt(unitId);
    var userInputFloat = parseFloat(userData);
    var userValues = [unitIdInt, userInputFloat];
    return userValues;
  },
  getSystemElements: function() {
    var to = document.getElementById('Metric');
    if (to.checked) {
      tracker.typeTo = 'Metric';
    } else {
      tracker.typeTo = 'English';
    }
  },
  getUnitsElements: function() {
    for (var index in tracker.conversionsByOrder) {
      var unit = document.getElementById(index + '');
      if (unit.checked) {
        this.unitIndex = parseInt(unit.id);
        break;
      }
    }
  },
  handleSubmit: function(event) {
    event.preventDefault();
    tracker.getUnitsElements();
    tracker.getSystemElements();
    tracker.userInput = document.getElementById('userValue');
    userData = tracker.userInput.value;
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    console.log(ul);
    if (tracker.typeTo === 'Metric') {
      tracker.convertToMetric(userData, tracker.unitIndex);
      li.textContent = userData + ' ' + tracker.englishUnits[tracker.unitIndex] + ' equals ' + tracker.returnValue + ' ' + tracker.metricUnits[tracker.unitIndex];
      ul.appendChild(li);
    } else {
      tracker.convertToEnglish(userData, tracker.unitIndex);
      li.textContent = userData + ' ' + tracker.metricUnits[tracker.unitIndex] + ' equals ' + tracker.returnValue + ' ' + tracker.englishUnits[tracker.unitIndex];
      ul.appendChild(li);
    }
  },
  clearList: function() {
    var clearList = document.getElementById('list');
    clearList.innerHTML = '';
  }
};

tracker.button.addEventListener('submit', tracker.handleSubmit);
tracker.clearButton.addEventListener('click', tracker.clearList);
