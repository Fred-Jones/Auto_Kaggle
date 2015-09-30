var link = document.getElementsByTagName('a')

var klink = []
var kidx = 0

for (var i=0; i<link.length; i++){
  if(link[i].name) {
    klink.push(link[i])
  }
}

setInterval(clickit(klink, kidx), 1000)

function clickit(linklist, k) {
    linklist[k].click()
    k += 1
}

