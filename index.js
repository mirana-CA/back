const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
let data = [
  {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments",
  },
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: "Beverages",
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections",
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products",
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals",
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry",
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce",
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood",
  },
];
let newId = 99
app.get("/", (req, res) => {
  res.json(data);
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const elem = data.find((x) => x.id === +id);
  res.json(elem);
});
app.post("/", (req, res) => {
  let obj = req.body;
  newId++
  data.push({...obj, id:newId});
  res.send("Got a POST request");
});
app.put("/:id", (req, res) => {
  const id = req.params.id;
  let obj = req.body;
  let index = data.findIndex(x=>x.id ==id)
  data[index] = {...obj,id:data[index].id}

  res.send("Got a PUT request at /user");
});
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  data = data.filter((x) => x.id != +id);
  res.send("Got a DELETE request at ");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
