var links = document.getElementsByTagName('a')
var clickEvent = new MouseEvent('click', {
    "view": window,
    "bubbles": true,
    "cancelable": false
})
function inner(link) {
  for(var i=0; i<link.length; i++){
    if(link[i].name != '' && !link[i].length){
      link[i].dispatchEvent(clickEvent)
      console.log(link[i])
    }
  }
}
inner(links)

