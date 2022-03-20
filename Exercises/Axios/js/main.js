axios('people.json').then(response => loadPeopleOnPage(response.data));

function loadPeopleOnPage(json) {
  const table = document.createElement('table');

  for (let people of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = people.name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = people.age;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = people.wage;
    tr.appendChild(td3);

    table.appendChild(tr);
  }

  const result = document.querySelector('.result');

  result.appendChild(table);
}
