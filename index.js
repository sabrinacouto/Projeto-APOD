function searchPicture() {

    const searchDate = $('#date').val();
    const key = 'FgvoiMWSrOlGZ1i3BTJzx7kLavSl6fKRYh2PhyWd';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${searchDate}`;
    
    $.ajax({
        type: 'GET',
        url: url,

        success: function (response) {
         const divExplanation = $('<img src="' +response.url +'"><div id="about"><h3>"' +
           response.title +'"</h3><p>"' + response.explanation + '"</p></div>'
            );
   
            $("#about-space").html(divExplanation);
         },
      });
   }
