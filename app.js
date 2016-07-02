var tracker = {
  conversionsByOrder: [2.54, 29.5735, 1.609344, 0.453592, 204.62262],
  returnValue: 0,
  userData: null,
  unitIndex: null,
  typeTo: null,
  button: document.getElementById('Submit'),

  convertToMetric: function(userData, unitId) {
    console.log(userData);
    console.log(unitId);
    var userValueArray = tracker.handleUserInput(userData, unitId);
    if (userValueArray[0] < tracker.conversionsByOrder.length - 1) {
      tracker.returnValue = userValueArray[1] * this.conversionsByOrder[unitId];
    } else {
      tracker.returnValue = userValueArray[1] + this.conversionsByOrder[unitId];
    }
    console.log(tracker.returnValue);
  },
  convertToEnglish: function(userData, unitId) {
    var userValueArray = tracker.handleUserInput(userData, unitId);
    if (userValueArray[0] < tracker.conversionsByOrder.length - 1) {
      tracker.returnValue = userValueArray[1] / this.conversionsByOrder[unitId];
    } else {
      tracker.returnValue = userValueArray[1] - this.conversionsByOrder[unitId];
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
    console.log(tracker.typeTo);
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
  handleSubmit: function() {
    tracker.getUnitsElements();
    tracker.getSystemElements();
    var userInput = document.getElementById('userValue');
    userData = userInput.value;
    if (tracker.typeTo === 'Metric') {
      tracker.convertToMetric(userData, tracker.unitIndex);
    } else {
      tracker.convertToEnglish(userData, tracker.unitIndex);
    }
  }
};

tracker.button.addEventListener('click', tracker.handleSubmit);
tracker.getSystemElements();
