$(document).ready(function() {
    $('.accordion .label').click(function() {
        var parentAccordion = $(this).closest('.accordion');
        parentAccordion.find('.content').slideUp();
        $(this).next('.content').slideDown();
    });

    $('.tabs .tab-list li').click(function() {
        var tabId = $(this).data('tab');
        $('.tab-content').removeClass('active');
        $('#' + tabId).addClass('active');
        $('.tab-list li').removeClass('active');
        $(this).addClass('active');
    });
});