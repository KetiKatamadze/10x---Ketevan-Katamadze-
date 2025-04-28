const dataA = { sector: 'X', load: 70 }
const dataB = { uptime: '99%', status: 'online' }

const combinedData = Object.assign(dataA, dataB);
// console.log(combinedData)
const summaryText = `Sector ${combinedData.sector} - Load: ${combinedData.load}%, uptime ${combinedData.uptime}%, status ${combinedData.status}`

console.log(`Report: ${summaryText}`)


