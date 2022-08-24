let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeTotal = 0
let guestTotal = 0

homeScore.innerHTML = homeTotal
guestScore.innerHTML = guestTotal


// Home 
function addHome1() {
    homeTotal += 1
    homeScore.innerHTML = homeTotal
}

function addHome2() {
    homeTotal += 2
    homeScore.innerHTML = homeTotal
}

function addHome3() {
    homeTotal += 3
    homeScore.innerHTML = homeTotal
}

// Guest 
function addGuest1() {
    guestTotal += 1
    guestScore.innerHTML = guestTotal
}

function addGuest2() {
    guestTotal += 2
    guestScore.innerHTML = guestTotal
}

function addGuest3() {
    guestTotal += 3
    guestScore.innerHTML = guestTotal
}