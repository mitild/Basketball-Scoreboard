let pointsHome = document.getElementById("points-home")
let pointsGuest = document.getElementById("points-guest")
let addLocal = 0
let addGuest = 0



function addOne() {
    addLocal += 1
    pointsHome.textContent = addLocal
}

function addTwo() {
    addLocal += 2
    pointsHome.textContent = addLocal
}

function addThree() {
    addLocal += 3
    pointsHome.textContent = addLocal
}

function resetHome() {
    addLocal = 0
    pointsHome.textContent = addLocal
}

function addOneGuest() {
    addGuest += 1
    pointsGuest.textContent = addGuest
}

function addTwoGuest() {
    addGuest += 2
    pointsGuest.textContent = addGuest
}

function addThreeGuest() {
    addGuest += 3
    pointsGuest.textContent = addGuest
}

function resetGuest() {
    addGuest = 0
    pointsGuest.textContent = addGuest
}