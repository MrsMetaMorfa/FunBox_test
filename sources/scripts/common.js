$('.catalogue_card .card').click(function () {
    if (!$(this).parents('.catalogue_card').hasClass('catalogue_card--disabled')) {
        if ($(this).parents('.catalogue_card').hasClass('catalogue_card--selected')) {
            $(this).parents('.catalogue_card').removeClass('catalogue_card--selected');
        } else {
            $(this).parents('.catalogue_card').addClass('justSelected');
            $(this).parents('.catalogue_card').addClass('catalogue_card--selected');
            $(this).mouseout(function () {
                $(this).parents('.catalogue_card').removeClass('justSelected');
            });
        }
    }
});
$('.catalogue_card button').click(function () {
    $(this).parents('.catalogue_card').addClass('catalogue_card--selected');
});