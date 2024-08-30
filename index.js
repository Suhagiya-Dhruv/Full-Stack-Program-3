const express = require('express');
const fs = require('fs');
const app = express();

// GET
app.get('/', (req, res) => {
    return res.send("Server is Running")
}); // url, function

app.get('/products', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));
    return res.json(data)
});

app.get('/products/:productId', (req, res) => {
    const id = Number(req.params.productId);
    const data = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));
    const ans = data.find(item => item.id === id);
    return res.send(ans)

    // Task : IF Id is not found then show response as a data not found
});


// User Data
app.get('/user', (req, res) => {
    return res.send("User Data")
});


app.listen(5200, () => {
    console.log('Server is running on port 5200');
});