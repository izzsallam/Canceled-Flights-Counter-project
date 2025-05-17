const saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count-el")
const totalEl = document.querySelector(".total")
const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
let count = 0
let total = 0
incrementBtn.addEventListener("click", function () {
    count += 1
    countEl.textContent = count
})

saveBtn.addEventListener("click", function () {
    let countStr = `${count} - `
    saveEl.textContent += countStr
    total += count 
    totalEl.textContent =`total : ${total}`
    countEl.textContent = 0
    count = 0
}) 
