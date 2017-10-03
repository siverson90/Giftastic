function renderGifsToScreen() {
  $(".btn-primary").on("click", function() {
      $("#imageWrapper").empty();

    var url = "https://api.giphy.com/v1/gifs/search?q="
    var userInput = $(this).val()
    var apiKey = "&api_key=gPV22XzAeHPfz5eB9bl1Yom9UWYbJXix&limit=10"
    
    var queryURL = url + userInput + apiKey;
    // console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET",
    })
      .done(function(response) {
        // console.log(response);

        resultOfAjaxCall = response.data;
        // console.log(resultOfAjaxCall);

        for(var i = 0; i < resultOfAjaxCall.length; i++) {
          var gifAndImageContainer = $("<div>").addClass("divWrapper col-lg-4");
          var gifImage = $("<img>");
          var ratingP = $("<p>").text("Rating: " + resultOfAjaxCall[i].rating);
          gifImage.attr("src", resultOfAjaxCall[i].images.fixed_height_small_still.url);
          gifImage.attr("alt", resultOfAjaxCall[i].slug);
          gifImage.attr("data-state","still" );
          gifImage.attr("data-animate",resultOfAjaxCall[i].images.fixed_height_small.url );
          gifImage.attr("data-still",resultOfAjaxCall[i].images.fixed_height_small_still.url );
          gifImage.addClass("gif");
          // console.log(gifImage);
          gifAndImageContainer.append(gifImage);
          gifAndImageContainer.prepend(ratingP);

          $("#imageWrapper").append(gifAndImageContainer);
        }
        imageAlert();  
      })  
    })
}

function imageAlert(){
  $(".gif").on("click", function(){
    var state = $(this).attr("data-state");
    console.log(state);

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  })
}

  $( document ).ready(function() {
    
    var countriesArr = ["United States","France","Brazil"];
    console.log(countriesArr);
    
    renderBtn();

    function renderBtn() {

      $("#buttonWrapper").empty();

      var buttonsDiv = $("<div>");
      console.log(countriesArr);

      for(var i = 0; i < countriesArr.length; i++){
        var newBtn = $("<button>");
        newBtn.text(countriesArr[i]);
        newBtn.val(countriesArr[i]);
        newBtn.addClass("btn btn-primary");
        buttonsDiv.append(newBtn);
      }
      $("#buttonWrapper").append(buttonsDiv);
      renderGifsToScreen();
    } 

    $("#submit-btn").on("click", function(event){
      event.preventDefault();
      // userInputToArr();
      var resultOfAjaxCall = $("#countryInput").val();
      // console.log(resultOfAjaxCall);
      
      countriesArr.push(resultOfAjaxCall);
      // console.log(countriesArr);
      renderBtn();
      $("#countryInput").val("");
    })

  });

