// turn pages when click on next or prev btn
const pageTurnBtn = document.querySelectorAll('.nextprev-btn')

pageTurnBtn.forEach((elem) => {
  elem.onclick = () => {
    const pageTurnBId = elem.getAttribute("data-page")
    const pageTurn = document.getElementById(pageTurnBId)
    
    if(pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn")
    }
    else{
      pageTurn.classList.add("turn")
    }
  }
})

// dropdwon menubar 
function openMenu() {
  document.querySelector('.menubar').style.display = 'flex'
}

function closeMenu() {
  document.querySelector('.menubar').style.display = 'none'
}


// check for palindrome 

const input = document.getElementById('input')
const resultEl = document.getElementById('result')
const message = document.getElementById('msg')

document.querySelector('.alert').classList.add(' invisible')

function checkPalindrome() {
  const checkInput = input.value.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "")
  const reversedInput = checkInput.split('').reverse().join('')

  if(checkInput === reversedInput) {
    resultEl.textContent = 'Your enrty is a palindrome!'
    message.innerHTML = `Your reversed enrty is : "${reversedInput}"`
    document.querySelector('.alert').classList.remove('invisible')
    document.querySelector('.alert').style.background = "#4bb95a89"
    document.querySelector('.alert').style.border = "3px solid green"
    document.querySelector('.alert-text').style.color = "green"
    document.querySelector('.alert-msg').style.color = "green"
    document.querySelector('.second-page').style.border = "2px solid green"
    input.style.border = "2px solid green"
  }
  else{
    resultEl.textContent = 'Your entry is not a palindrome!'
    message.innerHTML = `Your reversed entry is : "${reversedInput}"`
    document.querySelector('.alert').classList.remove('invisible')
    document.querySelector('.alert').style.background = "#eea3a3dc"
    document.querySelector('.alert').style.border = "3px solid rgb(150, 3, 3)"
    document.querySelector('.alert-text').style.color = "rgb(113, 3, 3)"
    document.querySelector('.alert-msg').style.color = "rgb(113, 3, 3)"
    document.querySelector('.second-page').style.border = "2px solid rgb(150, 3, 3)"
    input.style.border = "2px solid rgb(150, 3, 3)"
  }
}

checkPalindrome()
