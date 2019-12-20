//assign variable to item typed into the input form
//need .prevenetDefault to attempt to submit to a database
//.append the html with new assigned variable added as a list item (li)
$('#js-shopping-list-form').on('submit', function(e) {
    e.preventDefault();
    let newItem = $('#shopping-list-entry').val();
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)
    // p { color: red} - 1 pt
    // p.green { color: green} - 11pt
    // form.shopping-list-form li - 12pt
    // div.container form.js-shopping-list-form input.shopping-list-entry { color: blue} = 33pt
    // #shopping-list-entry { color: red; } - 100pt
})

//stikethrough
//use .toggleClass method to apply already styled css class "shipping-item_checked"
// event listener - $('.shopping-item-toggle').on("click", function() {
// event delegation
$('.shopping-list').on("click", '.shopping-item-toggle', function() {
    //$(this).closest('.shopping-item').toggleClass("shopping-item__checked");
    $(this).parent().siblings('.shopping-item').toggleClass("shopping-item__checked");
    // closest - go up, down or sideways as many times as it needs until there is a match
    // find - go down as many levels as it needs until it finds
    // parent - 1 level
    // children - 1 level, optionally uses a selector
    // siblings - same level, optionally uses a selector
    // button.shopping-item-toggle ^ div.shopping-item-controls + span.shopping-item
});



//delete item from list
/*$('.shopping-item-delete').on('click', function() {
    $('.li').hide();*/