const getData = () => {
    fetch('http://localhost:5588/getAll')
        .then(res => res.json())
        .then((data) => {
            let output = `<h2 style="text-decoration: underline"> Customer id & Customer's Company Name</h2> `;
            output += `<ul>`
            output += data.result.map(user => `<li>${user.CustomerID} - ${user.CompanyName}<p class="btn"><button onclick="getSpesificData()">Cus. details</button>&nbsp&nbsp<button onclick="getOrders()">Cus. orders</button></p></li>`)
            output += `</ul>`
            document.querySelector(".Panel").innerHTML = output.replace(/,/g, '');
        }).catch((err) => { console.log(err) })
}

const getSpesificData = () => {
    // id = event.target.textContent.slice(0, 5);
    id = event.target.closest('li').textContent.slice(0, 5)
    fetch(`http://localhost:5588/getspecific/${id}`)
        .then(res => res.json())
        .then((data) => {
            let output = `<h2 style="text-decoration: underline">Personal Customer:</h2>`
            if (data.result.length === 0) {
                alert("User not found !")
            } else {
                output += data.result.map(user =>
                    `
           <h3>Customer ID:</h3> <p> ${user.CustomerID} </p>
           <h3>Company Name:</h3> <p> ${user.CompanyName} </p>
           <h3>Contact Name:</h3> <p> ${user.ContactName} </p>
           <h3>Contact Title:</h3> <p> ${user.ContactTitle} </p>
           <h3>Address:</h3> <p> ${user.Address} </p>
           <h3>City:</h3> <p> ${user.City} </p>
            `)

                document.querySelector(".lowerPanel").innerHTML = output
            }
        })
        .catch((err) => { console.log(err) })
}

const getOrders = () => {
    id = event.target.closest('li').textContent.slice(0, 5)
    fetch(`http://localhost:5588/customerOrders/${id}`)
        .then(res => res.json())
        .then((data) => {
            let output = `<h2 style="text-decoration: underline">Customer orders:</h2>`
            if (data.result.length === 0) {
                alert("There isn't orders for this customer!")
            } else {
                output += data.result.map(user =>
                    `
       <h3>Order Date:</h3> <p> ${user.OrderDate} </p>
       <h3>Shipped Date:</h3> <p> ${user.ShippedDate} </p>
       <h3>Ship Name:</h3> <p> ${user.ShipName} </p>
       <h3>Ship address:</h3> <p> ${user.Shipaddress} </p>
       <h3>Ship city:</h3> <p> ${user.Shipcity} </p>
       <h3>Ship country:</h3> <p> ${user.Shipcountry} </p>
        `)

                document.querySelector(".lowerPanel").innerHTML = output
            }
        })
        .catch((err) => { console.log('wow' , err) })
}