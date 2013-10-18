$(document).ready(function() {
   
    // Get Weather Button
    $('button').click(function(){
        
        // STORE DATA
            var zip = $('input').val();

        // WEATHER
        $.simpleWeather({
             
            zipcode: zip, 
            unit: 'f',
            // Successfully get weather
            success: function(weather) {
              
                html = '<h1>' + weather.temp + '&deg;' + weather.units.temp + '</h1>';         
                html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
                //html += '<li class="currently">'+weather.currently+'</li>';
                //html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
            
                // Output Weather
                $("#weather").html(html);
            },
            
            // Can't get weather? 
            error: function(error) {
                // Output Error Message    
                $("#weather").html('<p>'+error+'</p>');
            }
                        
        });
        
        // CLEAR INPUT
        $('input:text').click(function(){
            $(this).val('');
        });

        
    });
});