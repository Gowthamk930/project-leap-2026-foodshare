// Load data when the website opens

loadFood();
loadDonors();
loadNGOs();
loadClaims();


// ====================
// LOAD FOOD
// ====================

function loadFood() {

    fetch("/foods")
        .then(response => response.json())
        .then(data => {

            console.log("FOOD DATA:", data);

            document.getElementById("foodCount").innerText = data.length;

            let output = "";

            if (data.length === 0) {

                output = '<p class="empty">No food available.</p>';

            } else {

                data.forEach(food => {

                    output += `
                        <div class="data-card">

                            <h3>${food.foodName}</h3>

                            <p><b>Quantity:</b> ${food.quantity}</p>

                            <p><b>Location:</b> ${food.location}</p>

                            <p><b>Expiry:</b> ${food.expiryDate}</p>

                            <p><b>Food ID:</b> ${food.id}</p>

                        </div>
                    `;

                });

            }

            document.getElementById("foodList").innerHTML = output;

        })
        .catch(error => {

            console.log("Food error:", error);

            document.getElementById("foodList").innerHTML =
                '<p class="empty">Unable to load food.</p>';

        });
}


// ====================
// ADD FOOD
// ====================

function addFood() {

    let foodName = document.getElementById("foodName").value;
    let quantity = document.getElementById("quantity").value;
    let location = document.getElementById("location").value;
    let expiryDate = document.getElementById("expiryDate").value;
    let donorId = document.getElementById("donorId").value;


    if (foodName === "" ||
        quantity === "" ||
        location === "" ||
        expiryDate === "") {

        document.getElementById("foodMessage").innerText =
            "Please fill all required fields.";

        return;
    }


    let foodData = {

        foodName: foodName,

        quantity: Number(quantity),

        location: location,

        expiryDate: expiryDate
    };


    if (donorId !== "") {

        foodData.donor = {
            id: Number(donorId)
        };

    }


    fetch("/foods", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(foodData)

    })

        .then(response => response.json())

        .then(data => {

            console.log("FOOD ADDED:", data);

            document.getElementById("foodMessage").innerText =
                "Food added successfully!";

            document.getElementById("foodName").value = "";
            document.getElementById("quantity").value = "";
            document.getElementById("location").value = "";
            document.getElementById("expiryDate").value = "";
            document.getElementById("donorId").value = "";

            loadFood();

        })

        .catch(error => {

            console.log("Add food error:", error);

            document.getElementById("foodMessage").innerText =
                "Failed to add food.";

        });

}


// ====================
// LOAD DONORS
// ====================

function loadDonors() {

    fetch("/donors")
        .then(response => response.json())
        .then(data => {

            document.getElementById("donorCount").innerText = data.length;

            let output = "";

            if (data.length === 0) {

                output = '<p class="empty">No donors found.</p>';

            } else {

                data.forEach(donor => {

                    output += `
                        <div class="data-card">

                            <h3>${donor.name}</h3>

                            <p><b>Email:</b> ${donor.email}</p>

                            <p><b>Phone:</b> ${donor.phone}</p>

                            <p><b>Donor ID:</b> ${donor.id}</p>

                        </div>
                    `;

                });

            }

            document.getElementById("donorList").innerHTML = output;

        })
        .catch(error => {

            console.log("Donor error:", error);

            document.getElementById("donorList").innerHTML =
                '<p class="empty">Unable to load donors.</p>';

        });
}


// ====================
// LOAD NGOS
// ====================

function loadNGOs() {

    fetch("/ngos")
        .then(response => response.json())
        .then(data => {

            document.getElementById("ngoCount").innerText = data.length;

            let output = "";

            if (data.length === 0) {

                output = '<p class="empty">No NGOs found.</p>';

            } else {

                data.forEach(ngo => {

                    output += `
                        <div class="data-card">

                            <h3>${ngo.name}</h3>

                            <p><b>Email:</b> ${ngo.email}</p>

                            <p><b>Phone:</b> ${ngo.phone}</p>

                            <p><b>Address:</b> ${ngo.address}</p>

                            <p><b>NGO ID:</b> ${ngo.id}</p>

                        </div>
                    `;

                });

            }

            document.getElementById("ngoList").innerHTML = output;

        })
        .catch(error => {

            console.log("NGO error:", error);

            document.getElementById("ngoList").innerHTML =
                '<p class="empty">Unable to load NGOs.</p>';

        });
}


// ====================
// LOAD CLAIMS
// ====================

function loadClaims() {

    fetch("/claims")
        .then(response => response.json())
        .then(data => {

            document.getElementById("claimCount").innerText = data.length;

            let output = "";

            if (data.length === 0) {

                output = '<p class="empty">No claims found.</p>';

            } else {

                data.forEach(claim => {

                    output += `
                        <div class="data-card">

                            <h3>Food Claim</h3>

                            <p><b>Food ID:</b> ${claim.foodId}</p>

                            <p><b>NGO ID:</b> ${claim.ngoId}</p>

                            <p><b>Claim Date:</b> ${claim.claimDate}</p>

                            <p><b>Claim ID:</b> ${claim.id}</p>

                        </div>
                    `;

                });

            }

            document.getElementById("claimList").innerHTML = output;

        })
        .catch(error => {

            console.log("Claim error:", error);

            document.getElementById("claimList").innerHTML =
                '<p class="empty">Unable to load claims.</p>';

        });
}


// ====================
// VIEW FOOD BUTTON
// ====================

function showFood() {

    document.getElementById("food").scrollIntoView({
        behavior: "smooth"
    });

}