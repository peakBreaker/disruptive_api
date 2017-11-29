// Lets get som gifs!
var numGifs = 5;
var giphyurl = 'https://api.giphy.com/v1/gifs/search?api_key=1d34a409c28f4202a1c4cf94dbd4676b&limit=' +
                numGifs + '&offset=0&rating=G&lang=en&q=';
var gifs = [];
var giphyError = "";

var getGifs = function(query){
  $.getJSON(giphyurl + query)
    .done(function (data) {
      gifs = data.data;
      return gifs
    })
    .fail(function(jqxhr, textStatus, error){
      var err = textStatus + ", " + error;
      console.log("Giphy request failed : " + err);
      // alert("Giphy API request failed");
      gifs = false;
  })
  .always(function(){
    // return the gifs
    return gifs;
  });
}

var coldgifs = getGifs('cold')
var warmgifs = getGifs('warm')

var makecontent = function(gifs){
  if (gifs) {
    var gifnum = Math.round(Math.random() * (numGifs - 1));
    var gifsrc = (gifs[0] === undefined) ? '' : gifs[gifnum].embed_url;
    var content = '<iframe src="' +
    gifsrc + '" alt="GIFFF" frameBorder="0"></iframe>';
  } else {
   gifcontent = '<div class="infoContent" style="text-align: center;"><i>' +
   'A failure occured in loading the fun gifs :(</i>';
  }
  return gifcontent;
}
