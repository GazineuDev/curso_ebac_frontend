$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })    

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const adcTarefa = $('#NovaTarefa').val();
        const novoItem = $('<li style="display: none;" ></li>');

        $(adcTarefa).appendTo(novoItem);
        $(`
            <div class ="lista">
                <li>${adcTarefa}</li>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ol');
        $(novoItem).fadeIn();
        $('#NovaTarefa').val('');
    })

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });

})