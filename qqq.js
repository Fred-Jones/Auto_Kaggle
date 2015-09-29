var links = document.getElementsByTagName('a')
for(var i =0; i<links.length; i++) {
  setTimeout(inner(links), 2000)
}
function inner(link) {
  for(var i=0; i<link.length; i++){
    if(link[i].name != ''){
      link[i].click()
    }
  }
}
// function handleClick(link) {
//   link.click()
//   setTimeout(console.log('puta'), 2000)
//
// }

/* Need to handle the fact that some 'doc's are actually arrays of length 0
described below*/
var name = 'sample_submission.csv.zip'
var doc = document.getElementsByName(name)
doc[0].click()
