$('#category').keyup(function() {
    $('#category_slug').val($(this).val().toLowerCase().split(',').join('').replace(/\s/g,"-"));
});