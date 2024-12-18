let orderBtn = document.getElementById("orderFood");

// Add click event to the "Order Food" button
orderBtn.addEventListener("click", function() {
    const selectedItem = [];
    const checkBoxes = document.getElementsByName('foodItem');

    // Iterate over the checkboxes and push selected items
    checkBoxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedItem.push(checkbox.value);
        }
    });

    // Alert if no items are selected
    if (selectedItem.length === 0) {
        alert("Please select at least one item");
        return;
    }

    // Display loading message
    document.getElementById("food-display").style.display = "block";
    document.getElementById("food-display").innerHTML = "<p>Preparing your order...</p>";

    // Define images for each food item
    const foodImages = {
        Burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww",
        Fries: "https://images.unsplash.com/photo-1609666237370-119b283adf56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZyaWVzfGVufDB8fDB8fHww",
        Drink: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D",
    };

    // Create a promise to simulate order processing time
    const orderPromise = new Promise((resolve) => {
        const preparationTime = Math.floor(Math.random() * 5000) + 1000;
        setTimeout(() => resolve(selectedItem), preparationTime);
    });

    // Handle order completion
    orderPromise.then((items) => {
        // Generate a unique order ID
        const orderId = "MS" + Math.floor(Math.random() * 10000);
        document.getElementById("orderId").innerText = `Order ID: ${orderId}`;

        // Clear loading message
        document.getElementById("food-display").innerHTML = "";

        // Display images for each selected item
        items.forEach((item) => {
            const randomItem = items[Math.floor(Math.random() * items.length)];
        const imgSrc = foodImages[randomItem];
           
            if (imgSrc) {
                const img = document.createElement("img");
                img.src = imgSrc;
                img.alt = item;
                // img.style.width = "150px";
                img.style.margin = "10px";
                document.getElementById("food-display").appendChild(img);
            } else {
                console.error(`Image not found for item: ${randomItem}`);
            }
        });
    });
});
