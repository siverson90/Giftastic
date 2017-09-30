var countriesArr= ["United States", "France", "Brazil"];

function userInputToArr (){
  var result = $("#countryInput").val();
  console.log(result);
  
  countriesArr.push(result);
  console.log(countriesArr);

}

function arrToBtn(){

  var buttonsDiv = $("<div>");

  for(var i = 0; i < countriesArr.length; i++){
    var newBtn = $("<button>");
    newBtn.text(countriesArr[i]);
    newBtn.val(countriesArr[i]);
    newBtn.addClass("btn btn-primary");
    buttonsDiv.append(newBtn);
  }

  $("#buttonWrapper").append(buttonsDiv);
}

$("#submit-btn").on("click", function(event){
  
  event.preventDefault();
  userInputToArr();
  arrToBtn();
  

})