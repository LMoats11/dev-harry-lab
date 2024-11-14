$(() => {
      console.log("ready!");

      
      $('input[name="category"]').on('change', () => {
        const dropdown = $('#inputItems');
        dropdown.empty().append('<option selected>Select an item</option>');

        if ($('#radioDairy').is(':checked')) {
          dropdown.append(new Option('Milk', 'Milk'));
          dropdown.append(new Option('Cheese', 'Cheese'));
          dropdown.append(new Option('Yogurt', 'Yogurt'));
        } 
        
        if ($('#radioBakery').is(':checked')) {
          dropdown.append(new Option('Bread', 'Bread'));
          dropdown.append(new Option('Bagels', 'Bagels'));
          dropdown.append(new Option('Croissants', 'Croissants'));
        }

        if ($('#radioProduce').is(':checked')) {
          dropdown.append(new Option('Apples', 'Apples'));
          dropdown.append(new Option('Bananas', 'Bananas'));
          dropdown.append(new Option('Carrots', 'Carrots'));
        }
      });

      
      $('#btnSubmit').on('click', (event) => {
        event.preventDefault();

       
        const customerName = $('#inputCustomerName').val();
        const category = $('input[name="category"]:checked').val() || 'Not selected';
        const item = $('#inputItems').find(":selected").val() || 'Not selected';
        const phone = $('#inputPhone').val();

        
        $('#output').html(`
          <h3>Order Summary:</h3>
          <p><strong>Customer Name:</strong> ${customerName}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Item:</strong> ${item}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
        `);
      });
    });