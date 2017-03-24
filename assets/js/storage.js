function addItemStorage(key,value) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem(key,JSON.stringify(value));
  } else {
    console.log("Local storage no supported")
  }
}

function getItemStorage(key) {
  if (typeof(Storage) !== "undefined") {
    return JSON.parse(localStorage.getItem(key));
  } else {
    console.log("Local storage no supported")
  }
}
