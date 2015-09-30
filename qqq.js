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

/* Need to handle the fact that some 'doc's are actually arrays of length 1
described below*/
var name = 'sample_submission.csv.zip'
var doc = document.getElementsByName(name)
doc[0].click()
