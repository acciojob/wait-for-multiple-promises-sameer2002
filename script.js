//your JS code here. If required.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function populateTable(data) {
  const table = document.getElementById('resultTable');
  const loadingRow = document.getElementById('loadingRow');
  table.removeChild(loadingRow);

  data.forEach((item, index) => {
    const newRow = table.insertRow();
    const promiseCell = newRow.insertCell(0);
    const timeCell = newRow.insertCell(1);

    promiseCell.textContent = `Promise ${index + 1}`;
    timeCell.textContent = `${item.toFixed(3)}`;
  });
}

const promises = [];

promises.push(
  new Promise(resolve => {
    const randomDelay = Math.random() * 2000 + 1000;
    setTimeout(() => resolve(randomDelay / 1000), randomDelay);
  })
);

promises.push(
  new Promise(resolve => {
    const randomDelay = Math.random() * 2000 + 1000;
    setTimeout(() => resolve(randomDelay / 1000), randomDelay);
  })
);

promises.push(
  new Promise(resolve => {
    const randomDelay = Math.random() * 2000 + 1000;
    setTimeout(() => resolve(randomDelay / 1000), randomDelay);
  })
);

Promise.all(promises)
  .then(data => {
    const total = data.reduce((sum, time) => sum + time, 0);
    data.push(total);
    populateTable(data);
  })
  .catch(error => {
    console.error(error);
  });