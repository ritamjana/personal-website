$(document).ready(function(){
    $('#collapseExample').on('click', function () {
        var text = $('#collapseExample').text();
        if (text==='View More') {
            $(this).text('View Less');
        } else {
            $(this).text('View More');
        }
    });
}) 