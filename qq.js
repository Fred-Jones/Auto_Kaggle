//Still only one link is clicked
//Consider setTimeout(click, 2000)
////need to slow execution block continuation of the loop
//Consider resolving a promise
(function () {
  var all_links = document.getElementsByTagName('a')
  for (var i=0; i<all_links.length; i++) {
    if(all_links[i].name != ""){
      (function(i) {
        all_links[i].click()
      })(i)
    }

  }

})()

(function() {
  console.log('Starting downloads...')
  var ct = 0
  var names = []
  var a_links = document.getElementsByTagName('a')
  for (var i=0; i<a_links.length; i++){
    if(a_links[i].name != ""){
      names.push(a_links[i].name)
    }
  }
  for (var i=0; i<names.length; i++){
    var elm = document.getElementsByName(names[i])[0]
    console.log(names[i])
    elm[0].click()

  }

  // return document.getElementsByName('coupon_list_test.csv.zip')[0].click()
})()
//document.getElementsByName('coupon_list_test.csv.zip')[0].click()

(function () {
  var all_links = document.getElementsByTagName('a')
  var names = []
  var a_links = document.getElementsByTagName('a')
  for (var i=0; i<a_links.length; i++){
        (function () {
          if((a_links[i].name != "") && (a_links[i].name[(a_links[i].length - 1)] == "p")){
            a_links[i].click()
            console.log('click')
          }

        })(i)
  }
)


//Example Link url
//https://www.kaggle.com/c/coupon-purchase-prediction/download/coupon_list_test.csv.zip
