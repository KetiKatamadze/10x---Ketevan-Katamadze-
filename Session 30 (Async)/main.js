const cardContainer = document.getElementById("cards-container")


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
  
  cardWrapper.appendChild(flag)
  cardWrapper.appendChild(txt)
  txt.appendChild(countryName)
  txt.appendChild(population)
  txt.appendChild(region)
  txt.appendChild(capital)
  
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