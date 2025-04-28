const sectors = [
  { name: "X", load: 70 },
  { name: "Y", load: 100 },
  { name: "Z", load: 120 },
];

const critical = sectors.reduce((a,b) => {
    if(b.load > a.load){
        return b
    }
    return a
})
console.log(`Critical sector: ${critical.name} with load ${critical.load}`)
