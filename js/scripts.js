// Scripts

 $.simpleWeather({
     
     zipcode: '83814',
     
     unit: 'c',
    
     success: function(weather) {
      
      html = '<h1>' + weather.temp + '&deg;' + weather.units.temp + '</h1>';
      html += '<p>' + 'Sunrise will happend at: ' + weather.sunrise + '<p>';
         
      //html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      //html += '<li class="currently">'+weather.currently+'</li>';
      //html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
  
      $("#weather").html(html);
    },
     
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  
 });

$('#weather').hide();
$('a').click(function(){
            
        $('#weather').show();                
                    
});