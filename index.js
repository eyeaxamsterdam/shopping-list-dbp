//assign variable to item typed into the input form
//need .prevenetDefault to attempt to submit to a database
//.append the html with new assigned variable added as a list item (li)
$('#js-shopping-list-form').on('submit', function(e) {
    e.preventDefault();
    let newItem = $('#shopping-list-entry').val();
    
    //prevent blank list item from being made
    console.log(newItem, console.log(newItem.trim()));
    if (newItem.trim() !== "") {
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
    }
    $('#shopping-list-entry').val('').focus();
/*    
    //prevent duplicates
    if (newItem == $('li .shopping-item').text()) {
        alert("That's already on the list!");
    }
*/
});

//stikethrough
//use .toggleClass method to apply already styled css class "shipping-item_checked"
// event listener - $('.shopping-item-toggle').on("click", function() {
// event delegation
$('.shopping-list').on("click", '.shopping-item-toggle', function() {
    $(this).parent().siblings('.shopping-item').toggleClass("shopping-item__checked");
});
    // closest - go up, down or sideways as many times as it needs until there is a match
    // find - go down as many levels as it needs until it finds
    // parent - 1 level
    // children - 1 level, optionally uses a selector
    // siblings - same level, optionally uses a selector
    // button.shopping-item-toggle ^ div.shopping-item-controls + span.shopping-item


//delete item from list
/*$('.shopping-item-delete').on('click', function() {
    $('.li').hide();*/

$('.container').on('click', '.shopping-item-delete', function() {
    $(this).parent().parent('li').hide();
});