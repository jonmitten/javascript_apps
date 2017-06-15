$(document).ready( function(){

    $('.on-method li').on('click', function(){
        $(this).text("Clicked!").delay(800).fadeOut(400);
    });

    // modifying attributes
    console.log($('a').attr('href'));

    $('.attr-example button').on('click', function(){
        $('a').attr('href', 'https://github.com/');
        console.log($('a').attr('href'));
    });

    // events

    $('.events').click(function(){
        console.log('Clicked!');
    })

    // callback functions

    $('.pets-example .loc').hover(
        function(){
            $(this).html("<strong>Location</strong> Your House?");
        },
        function(){
            $(this).html("<strong>Whatever</strong>");
        }
    );

    $('#add-pet').on('click', function(){
        let $name       = $('#pet-name');
        let $species    = $('#pet-species');
        let $notes      = $('#pet-notes');

        let $newPet = $(
            '<section class="six columns"><div class="card"><p><strong>Name: </strong> ' + $name.val() +
            '</p><p><strong>Species:</strong> ' + $species.val() +
            '</p><p><strong>Notes:</strong> ' + $notes.val() +
            '</p><span class="close">&times;</span></div></section>'
        );

        // Attach the new element to the page
        $('#posted-pets').append($newPet);
        // close with X
        $('.close').on('click', function(){
          $(this).parent().remove();
        });
        // reset the form fields
        $name.val("");
        $species.val("Dog");
        $notes.val("");
    });

    $('.pets-example img').css({'display':'none'}).fadeIn(1600);
    $('.pets-example .card').on('click', function(){
        $(this).toggleClass('selected');
    });

    /* remove vs. empty */
    $('.intro section').on('click', function(){
        console.log('Section clicked');
        $('.intro #one').empty();
        $('.intro #two').remove();
        $('.intro').append(
           '<h1>Empty vs. Remove example has been invoked</h1>'
        );
    });

    // DOM traversal
    var students = [
        {name: "Timmie"},
        {name: "Sterling"},
        {name: "Jonathan"}
    ];

    students.forEach(function(student){
        console.log(student.name);
    });

























});
