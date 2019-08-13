const getAll = (req, res) => {
    let con = global.Application.get('CONNECTION');
    let sql = `SELECT concat(CustomerID,  ' - ' , CompanyName) as mylist FROM customers`;
    con.query(sql, (err, result) => {
        if (err) {
            res.send({ state: 'error', message: "failed to get data " + err })
        }
        else {
            console.log('Data Fetched.')
            console.log(result)
            res.send({ result })
        }
    })
}


const getSpecific = (req, res) => {
    let con = global.Application.get('CONNECTION');
    let id = req.params.id;
    let sql = `SELECT * FROM customers WHERE CustomerID = ${JSON.stringify(id)}`;

    con.query(sql, (err, result) => {
        if (err) {
            res.send({ state: 'error', message: "failed to get data" + err })
        }
        else {
            console.log('Data Fetched.')
            res.send({ result })
        }
    })
}

const getOrders = (req, res) => {
    debugger
    let con = global.Application.get('CONNECTION');
    let id = req.params.id;
    let sql = `SELECT * FROM orders WHERE CustomerID = ${JSON.stringify(id)}`;

    con.query(sql, (err, result) => {
        if (err) {
            res.send({ state: 'error', message: "failed to get data" + err })
        }
        else {
            console.log('Data Fetched.')
            res.send({ result })
        }
    })
}

module.exports = { getAll, getSpecific, getOrders }