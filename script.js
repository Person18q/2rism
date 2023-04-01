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
  "Belize",
  'Австралия',
  'Австрия',
  'Азербайджан',
  'Акротири',
  'Албания',
  'Алжир',
  'Аргентина',
  'Армения',
  'Аруба',
  'Афганистан',
  'Белиз',
  'Белоруссия',
  'Бельгия',
  'Бермудские Острова',
  'Болгария',
  'Бразилия',
  'Британская территория в Индийском океане'
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
  const val = this.value.trim()
  const elastic = document.querySelectorAll('ul li')
  const body = document.querySelector('body')
  if(val != ''){
    elastic.forEach(elem => {
      elem.addEventListener('click', Event => {
        input.value = Event.target.textContent;
      })
      body.addEventListener('click', () => {
        ul.classList.add('hidden')
      })
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