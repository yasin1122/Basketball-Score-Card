let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

const addOneHome = () => homeScoreEl.textContent = +homeScoreEl.textContent + 1
const addTwoHome = () => homeScoreEl.textContent = +homeScoreEl.textContent + 2
const addThreeHome = () => homeScoreEl.textContent = +homeScoreEl.textContent + 3
const addOneGuest = () => guestScoreEl.textContent = +guestScoreEl.textContent + 1
const addTwoGuest = () => guestScoreEl.textContent = +guestScoreEl.textContent + 2
const addThreeGuest = () => guestScoreEl.textContent = +guestScoreEl.textContent + 3

const reset = () => {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}