$(() => {
  console.log("ready!");

  $('#btnAddItem').on('click', () => {
    const newItem = $('#newItem').val().trim();
    if (newItem) {
      $('#inputItems').append(new Option(newItem, newItem));
      $('#newItem').val('');
    } else {
      alert("Please enter an item to add.");
    }
  });

  // Display form values in the DOM on submit
  $('#btnSubmit').on('click', (event) => {
    event.preventDefault();

    const customerName = $('#inputCustomerName').val();
    const phone = $('#inputPhone').val();
    const selectedItem = $('#inputItems').find(":selected").val() || 'Not selected';
    const quantity = $('#inputQuantity').val() || 'Not specified';

    $('#output').html(`
      <h3>Order Summary:</h3>
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Selected Item:</strong> ${selectedItem}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
    `);
  });
});
