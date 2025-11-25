// FMIPA Landing interactions
function qs(sel, scope=document){return scope.querySelector(sel)}
function qsa(sel, scope=document){return [...scope.querySelectorAll(sel)]}

// Mobile nav toggle
const toggleBtn = qs('.nav-toggle')
const menu = qs('#nav-menu')
if(toggleBtn && menu){
  toggleBtn.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open')
    toggleBtn.setAttribute('aria-expanded', String(open))
  })
  qsa('a', menu).forEach(a=>a.addEventListener('click', ()=>{
    menu.classList.remove('open')
    toggleBtn.setAttribute('aria-expanded', 'false')
  }))
}

// Demo contact form
window.handleSubmit = function(e){
  e.preventDefault()
  const form = e.target
  const data = Object.fromEntries(new FormData(form).entries())
  alert(`Terima kasih, ${data.nama}! Pesan Anda telah dikirim (demo).`)
  form.reset()
  return false
}

window.handleNewsletter = function(e){
  e.preventDefault()
  const email = e.target.querySelector('input[type=email]').value
  alert(`Berhasil berlangganan dengan email: ${email} (demo)`) 
  e.target.reset()
  return false
}

// Small scroll effect
const header = qs('.site-header')
let lastY = window.scrollY
window.addEventListener('scroll', ()=>{
  const y = window.scrollY
  header.style.boxShadow = y > 10 ? '0 6px 24px rgba(0,0,0,.06)' : 'none'
  lastY = y
})
