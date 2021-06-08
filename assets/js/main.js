// Check when user scrolled past landing
$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#projects').position().top) {
        $("nav").fadeIn(300)
    } else {
        $("nav").fadeOut(300);
    }
})

// Launch modal on img click
$("#project_wrapper img").click(function() {
    var src = $(this).attr('src');
    var dest = $('#projects_wrapper');

    if ($('#project_modal_img').length == 0) { // Add modal if there are no instances of the modal already
        $.get("/project_modal.html", function(data) {
            $(dest).parent().append(data);
            $("#project_modal_img").attr("src", src);
        });
    }
});

// Remove modal on click
$(document).on("click", "#project_modal_img", function(){
    $('#project_modal_img').remove();
});