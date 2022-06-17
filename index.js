// Code your solution here

function findMatching(names, sought) {
  return names.filter(maTching => maTching.toLowerCase() === sought.toLowerCase());
  
}

function fuzzyMatch(names, teStdriverNames) {
  return names.filter(myArray => myArray.toLowerCase().indexOf(teStdriverNames.toLowerCase()) === 0);
}

function matchName(names, driverName) {
  return names.filter(record => record.name === driverName);
}
