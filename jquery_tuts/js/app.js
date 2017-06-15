$(document).ready( function(){

    $('.on-method li').on('click', function(){
        $(this).text("Clicked!").delay(800).fadeOut(400);
    });

    // modifying attributes
    console.log($('a').attr('href'));

    $('button').on('click', function(){
        $('a').attr('href', 'https://github.com/');
        console.log($('a').attr('href'));
    });

    // events

    $('.events').click(function(){
        console.log('Clicked!');
    })

    // callback functions



























});
