const $form = document.getElementById('form')
const $title = document.getElementById('title')
const $endDate =document.getElementById('endDate')
const $modal = document.getElementById('modal')
const $mtitle = document.getElementById('mtitle')
const $dias = document.getElementById('days')
const $horas = document.getElementById('hours')
const $minutos = document.getElementById('minutes')
const $segundos = document.getElementById('seconds')
const $start = document.getElementById('start')
const $clear = document.getElementById('clear')

function dateDiff (start, end) {
    const diff = end - start > 0 ? end - start : 0
    const format = (num) => num < 10 ? `0${num}` : num
    
    return {
      days: format(Math.floor(diff / 1000 / 60 / 60 / 24)),
      hours: format(Math.floor(diff / 1000 / 60 / 60 % 24)),
      minutes: format(Math.floor(diff / 1000 / 60 % 60)),
      seconds: format(Math.floor(diff / 1000 % 60))
    }
  }

function setCountdown(selectDate){
  interval = setInterval(function(){
        
    const selectDate =$endDate.value
    const nextTime = new Date(selectDate)
    //console.log(nextTime)
    const now = new Date()
    const diff = dateDiff(now,nextTime)
    //console.log(diff)
    $dias.textContent = diff.days
    $horas.textContent = diff.hours
    $minutos.textContent = diff.minutes
    $segundos.textContent = diff.seconds
    localStorage.setItem('timer', nextTime)
    


  }, 1000)

}
  // current date and time
  
$start.addEventListener('click', function(e){
    e.preventDefault()
    $mtitle.textContent = $title.value
    const title = $title.value
    setCountdown()
    localStorage.setItem('title', JSON.stringify(title) )
    //console.log(selectDate)
    dateDiff()
    $modal.style.display = 'block'
})

$clear.addEventListener('click', function (e) {
  e.preventDefault()
  clearInterval(interval)
  localStorage.removeItem('timer')
  localStorage.removeItem('title')
  localStorage.clear()
  $modal.style.display = 'none'
  $form.reset()

})



  const ls = localStorage.getItem('title')
  if(ls){
  const title = JSON.parse(ls)
  $mtitle.textContent = title
    
  $modal.style.display = 'block'
        
  }
const time = localStorage.getItem('timer')

//setCountdown(time)
if(time){
    
  
  //setCountdown(timer)
  //console.log(timer)
  
  
  setInterval(function(){
    const timer = new Date(time)
    const now = new Date()
    
    const diff = dateDiff(now,timer)
    console.log(diff)
    //console.log(time)
  
  


  
  
  $dias.textContent = diff.days
  $horas.textContent = diff.hours
  $minutos.textContent = diff.minutes
  $segundos.textContent = diff.seconds
  //setCountdown(selectDate)
  
  //console.log(diff)

  }, 1000)
  

  
}



  





  