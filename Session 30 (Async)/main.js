const cardContainer = document.getElementById("cards-container")
const modal = document.querySelector(".modal")

const createCard = (countries) => {
  const cardWrapper = document.createElement("div")
  cardWrapper.classList.add("card-wrapper")

  const flag = document.createElement("img")
  flag.classList.add("flag")
  flag.src = countries.flags.png

  const txt = document.createElement("div")
  txt.classList.add("text-content")

  const countryName = document.createElement("h2")
  countryName.classList.add("countryName")
  countryName.innerHTML = countries.name.common

  const population = document.createElement("span")
  population.innerHTML = `Population: ${countries.population}`

  const region = document.createElement("span")
  region.innerHTML = `Region: ${countries.region}`

  const capital = document.createElement("span")
  capital.innerHTML = `Capital: ${countries.capital}`

  const button = document.createElement("button")
  button.classList.add("open")
  button.textContent = "OPEN"
  
  cardWrapper.appendChild(flag)
  cardWrapper.appendChild(txt)
  cardWrapper.appendChild(button)

  txt.appendChild(countryName)
  txt.appendChild(population)
  txt.appendChild(region)
  txt.appendChild(capital)
  

  button.addEventListener("click", () => {
    modal.innerHTML = ""
    modal.style.display = "block"
    const modalFlag = document.createElement("img")
    modalFlag.classList.add("flag")
    modalFlag.style.filter = "none"
    modalFlag.src = countries.flags.png

    const modalTxt = document. createElement("div")
    modalTxt.classList.add("text-content")
    modalTxt.style.filter = "none"

    const modalName = document.createElement("h2")
    modalName.classList.add("countryName")
    modalName.style.fontSize = "30px"
    modalName.innerHTML = `Common: ${countries.name.common}`

    const modalFullName = document.createElement("h2")
    modalFullName.classList.add("countryName")
    modalFullName.style.fontSize = "30px"
    modalFullName.innerHTML = `Official: ${countries.name.official}`

    const modalPopulation = document.createElement("span")
    modalPopulation.innerHTML = `Population: ${countries.population}`

    const modalRegion = document.createElement("span")
    modalRegion.innerHTML = `Region: ${countries.region}`
  
    const modalCapital = document.createElement("span")
    modalCapital.innerHTML = `Capital: ${countries.capital}`

    const modalContinent = document.createElement("span")
    modalContinent.innerHTML = `Continent: ${countries.continents}`

    modal.appendChild(modalFlag)
    modal.appendChild(modalTxt)
    modalTxt.appendChild(modalName)
    modalTxt.appendChild(modalFullName)
    modalTxt.appendChild(modalPopulation)
    modalTxt.appendChild(modalRegion)
    modalTxt.appendChild(modalCapital)
    modalTxt.appendChild(modalContinent)

 

  })
  modal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.innerHTML = "";
  })


  return cardWrapper
}

const cardContent = (countries) => {
  countries.map(country => {
    const card = createCard(country)
    cardContainer.appendChild(card)
  })
}


async function country() {
  try{
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json();    
    cardContent(data)
  }
  catch(err){
    console.log("Error:", err)
  }
}

country();