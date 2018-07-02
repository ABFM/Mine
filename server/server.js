const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/Mine'));

app.get('/', (req, res) => {
  res.sendFile('index.html')
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Example app listening on PORT ', PORT));
