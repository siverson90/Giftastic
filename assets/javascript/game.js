function renderGifs(){
  $(".btn-primary").on("click", function(){
      $("#imageWrapper").empty();

    var url = "https://api.giphy.com/v1/gifs/search?q="
    var tag = $(this).val()
    var key= "&api_key=gPV22XzAeHPfz5eB9bl1Yom9UWYbJXix&limit=10"
    
    var queryURL= url + tag + key;
    // console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET",
    })
      .done(function(response){
        // console.log(response);

        result= response.data;
        // console.log(result);

        var gifsAppendDiv = $("<div>");

        for( var i = 0; i < result.length; i++){
          var gifImage = $("<img>");
          gifImage.attr("src", result[i].images.fixed_height_small_still.url);
          console.log(gifImage);
          gifsAppendDiv.append(gifImage);
        }
        $("#imageWrapper").append(gifsAppendDiv);
      })
    
    })
}

  $( document ).ready(function() {
    
    var countriesArr= ["United States","France","Brazil"];
    console.log(countriesArr);
    
    renderBtn();

    function renderBtn(){

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
      renderGifs();
    } 

    $("#submit-btn").on("click", function(event){
      event.preventDefault();
      // userInputToArr();
      var result = $("#countryInput").val();
      // console.log(result);
      
      countriesArr.push(result);
      // console.log(countriesArr);
      renderBtn();
    })

    renderGifs();

        
  });







