var tracker = {
  conversionsByOrder: [2.54, 29.5735, 1.609344, 0.453592, 204.62262],
  returnValue: 0,

  convertToMetric: function(userInput, unitId) {
    var userValueArray = tracker.handleUserInput(userInput, unitId);
    if (userValueArray[0] < 4) {
      tracker.returnValue = userValueArray[1] * this.conversionsByOrder[unitId];
    } else {
      tracker.returnValue = userValueArray[1] + this.conversionsByOrder[unitId];
    }
    console.log(tracker.returnValue);
  },

  handleUserInput: function(userInput, unitId) {
    var unitIdInt = parseInt(unitId);
    var userInputFloat = parseFloat(userInput);
    var userValues = [unitIdInt, userInputFloat];
    return userValues;
  }
};

tracker.convertToMetric(23.33, 4);
