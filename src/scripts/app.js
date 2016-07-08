$( document ).ready(function() {
  $(".js-save-for-process").click(function(){
    $(".js-process").removeClass('hidden');
    $(".js-edit-order").removeClass('hidden');
    $(".js-saved-order").removeClass('hidden');
    $(this).addClass('hidden');
  });
  $(".js-toggle-details").click(function(){
    $(".js-details").removeClass('hidden');
  });
});
