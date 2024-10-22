/*Feladat:
Adottak az alábbi tömbök:*/
const numbers = [13,3,7,17,5,11,19,9]
const names = ['Eva', 'Adel', 'Cedric', 'Dior', 'Frank', 'Bob']
const fruits = ['pineapple', 'kiwi', 'banana', 'pear', 'cherry']

/*Hozd létre az alábbi függvényeket:
sortByLength() - String tömböt a szavak hossza szerint rendezi és a rendezett tömböz adja vissza*/
function sortByLength(tomb){
    tomb.sort((a,b) => a.length - b.length)
    return tomb
}
console.log(names);
console.log(sortByLength([...names]))
console.log(names);

function sortByLengthAsc(tomb){
    tomb.sort((a,b) => {
        if(a.length == b.length){
            return a.localeCompare(b) //összehasonlítás: a.localeCompare, .localeCompare == összehasonlít két stringet (abc szerint rakja őket sorba)
        }
        else{
            return a.length - b.length
        }
    })
    return tomb
}
console.log(sortByLengthAsc([...names]))

function sortFrom15(tomb){
    numbers.sort((a,b) => Math.abs(a-15) - Math.abs(b-15))
        return numbers
}
console.log(sortFrom15([...numbers]))

function addAsterisk(tomb){
    let valtozo = tomb.map((item) => `${item}*`)
    return valtozo
}
console.log(addAsterisk(names))

function between5And15(tomb){  //szűrés, filter()
    let eredmeny = tomb.filter(item => item >= 5 && item <= 15)
    return eredmeny
}
console.log(between5And15(numbers))

function isAllOdd(tomb){
    return tomb.every(item => item % 2 == 1)
}
console.log(isAllOdd(numbers))

function hasEven(tomb){
    return tomb.some(item => item % 2 == 0)
}
console.log(hasEven(numbers))

function sigma(tomb){
    return tomb.reduce((total,item) => total * item, 1)  //item, 1 : 1-től kezdődik a művelet
}
console.log(sigma(numbers))

/*sortByLengthAsc() - String tömböt a szavak hossza szerint rendezi ABC sorrendbe és a rendezett tömböz adja vissza
sortFrom15() - számokat rendez a 15-től való távolság alapján és a rendezett tömböt adja vissza
addAsterisk() - String tömb mindegy elemének az elejére és végére egy csillagot tesz és visszaadja a módosított tömböt
between5And15() - számokat tartalmazó tömb 5 és 15 közötti elemeit adja vissza egy tömbben
isAllOdd() - számokat tartalmazó tömb minden eleme páratlan-e. Visszatérési érték true vagy false
hasEven() - számokat tartalmazó tömb tartalmaz-e páros elemet. Visszatérési érték true vagy false
sigma() -  számokat tartalmazó tömb elemeit összeszorozza és a szorzatot adja vissza */
