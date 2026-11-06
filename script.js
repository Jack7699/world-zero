
function startGame() {
  document.getElementById("homepage").classList.add("hidden");
  document.getElementById("creation").classList.remove("hidden");
}

function createCountry() {
  const country = document.getElementById("countryName").value.trim();
  const capital = document.getElementById("capitalName").value.trim();
  const government = document.getElementById("government").value;

  if (!country || !capital) {
    alert("Please enter your country name and capital.");
    return;
  }

  const nation = {
    country: country,
    capital: capital,
    government: government,
    population: 10000,
    treasury: 5000000,
    buildings: 10
  };

  localStorage.setItem("worldZeroCountry", JSON.stringify(nation));

  document.getElementById("creation").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  document.getElementById("dashboardCountry").textContent = country;
  document.getElementById("dashboardCapital").textContent = "Capital: " + capital;
  document.getElementById("dashboardGovernment").textContent = "Government: " + government;

  document.getElementById("population").textContent = populationFormat(nation.population);
  document.getElementById("treasury").textContent = populationFormat(nation.treasury);
  document.getElementById("buildings").textContent = nation.buildings;
}

function populationFormat(number) {
  return number.toLocaleString("en-US");
}
