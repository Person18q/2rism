let users = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize"
]

function addUsers(){
  let list = users.map(users => `<li>${users}</li>`).join('\n')
  document.querySelector('ul').innerHTML = list
}
addUsers()

const ul = document.querySelector('ul')
const input = document.querySelector('#Location')

ul.classList.add('hidden')

input.addEventListener('input', () => {
    ul.classList.remove('hidden')
})

document.querySelector('#Location').oninput = function () {
  let val = this.value.trim()
  let elastic = document.querySelectorAll('ul li')
  if(val != ''){
    elastic.forEach(elem => {
      if(elem.innerText.search(val) == -1){
        elem.classList.add('hidden')
      }else{
        elem.classList.remove('hidden')
      }
    })
  }
  else{
      ul.classList.add('hidden')
  }
}