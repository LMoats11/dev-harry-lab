$(document).ready(function() {
  $('#inputCategory').change(function() {
    var category = $(this).val();
    var items = [];

    if (category === 'fruits') {
      items = ['Apple', 'Banana', 'Orange'];
    } else if (category === 'vegetables') {
      items = ['Carrot', 'Spinach', 'Broccoli'];
    } else if (category === 'dairy') {
      items = ['Milk', 'Cheese', 'Yogurt'];
    } else if (category === 'meat') {
      items = ['Chicken', 'Beef', 'Pork'];
    }

    $('#inputItems').empty().append('<option selected disabled>Select an item</option>');
    items.forEach(function(item) {
      $('#inputItems').append('<option value="' + item + '">' + item + '</option>');
    });

    $('#inputItems').prop('disabled', false); 
  });

  $('#orderForm').submit(function(event) {
    event.preventDefault();

    var userName = $('#inputUserName').val();
    var selectedCategory = $('#inputCategory').val();
    var selectedItem = $('#inputItems').val();
    var quantity = $('#inputQuantity').val();

    if (!selectedItem) {
      alert("Please select an item before submitting.");
      return;
    }

    $('#output').html(`
      <h4>Order Summary</h4>
      <p><strong>Username:</strong> ${userName}</p>
      <p><strong>Category:</strong> ${selectedCategory}</p>
      <p><strong>Item:</strong> ${selectedItem}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
    `);
  });
});

