function returnNamesAbove30(people){
    for (let person of people) {
        if (person.age > 30) {
            console.log(person.name)
        }
    }
}

function uppg8(){
    
    // skapa en array med fem person obkjet
    // varje person objekt ska ha två properties, name och age
    let people = [
        {name: "Bengt", age: 32},
        {name: "Adam", age: 31},
        {name: "Arne", age: 26},
        {name: "Sven", age: 36},
        {name: "Malte", age: 21}
    ]

    // skapa en fuktion som tar in en array som argument
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen

    // anropa funktionen och skicka med arrayen som argument
    returnNamesAbove30(people)

}

module.exports = { uppg8 };