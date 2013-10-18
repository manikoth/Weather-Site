$(document).ready(function(){

    // Click Button
    $('button').click(function(){
    
        // Store Input
        var zip = $('input').val();
        console.log(zip);

        // GET WEATHER
        $.simpleWeather({
            zipcode: '90210',
            success: function(weather){
                html = '<h1>' + weather.temp + '</h1>';
                
                // Output on Page
                $('#weather').html(html);
            }
        });// end weather
        
    });//end click
    
    // Clear Input on Click
    $('input:text').click(function(){
        $('input').val('');
    });// end clear input    

    
});// end document