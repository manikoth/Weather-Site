$(document).ready(function(){

    // Click Button
    $('button').click(function(){
    
        // Store Input
        var zip = $('input').val();
        console.log(zip);
        
    });//end click
    
    // Clear Input on Click
    $('input:text').click(function(){
        $('input').val('');
    });// end clear input
    
});// end document