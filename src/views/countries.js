function countries(cntArray) {
  let listItems = "";
  for (let i = 0; i < cntArray.length; i++) {
    listItems += `<li>${cntArray[i].name} - ${cntArray[i].capital} - ${cntArray[i].region}</li>`;
  }
  return "<ul>" + listItems + "</ul>";
}

export default countries;
