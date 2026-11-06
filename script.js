
function startGame() {
  document.getElementById("creation")
    .classList.remove("hidden");
}

function createCountry() {
  const country = document.getElementById("countryName").value.trim();
  const capital = document.getElementById("capitalName").value.trim();
  const government = document.getElementById("government").value;

  if (!country || !capital) {
    alert("Please enter your country and capital name.");
    return;
  }

  localStorage.setItem("worldZeroCountry", JSON.stringify({
    country,
    capital,
    government,
    population: 10000,
    treasury: 5000000,
    buildings: 10
  }));

  alert("Your nation has been established!");
}

