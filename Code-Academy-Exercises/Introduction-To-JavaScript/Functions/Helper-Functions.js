function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors (rows, columns){
  return monitorCount (rows, columns) * 200
  const totalCost = costOfMonitors(5,4);
  console.log(totalCost);
};

// I learned about helper functions in JavaScript. Functions that are called within another function are often called helper functions. Also since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.
