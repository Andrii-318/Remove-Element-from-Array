document
  .getElementById("arrayForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let array = document
      .getElementById("arrayInput")
      .value.split(",")
      .map(Number);
    let element = Number(document.getElementById("elementInput").value);
    removeElement(array, element);
    document.getElementById("result").innerText =
      "Оновлений масив: " + array.join(", ");
  });

function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
