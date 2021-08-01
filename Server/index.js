const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");


//middleware 
app.use(cors()); 
app.use(express.json()); //allows to get access to 



//Add an item


app.post("/inventories", async(req, res)=>{   
    try
    {
        const { description } = req.body;
        const newItem = await pool.query("INSERT INTO inventory (description) VALUES($1) RETURNING *", 
        [description]
        );
        res.json(newItem.rows[0]);


    }catch(err){
        console.error(err.message);
    }
})




//Get all items

app.get("/inventories", async(req, res)=> {
    try
    {
        const getItems = await pool.query("SELECT * FROM inventory");
    
    res.json(getItems.rows);
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//Get one item

app.get("/inventories/:id", async(req, res) =>{
    try{
        const { id } = req.params;
        const getItem = await pool.query("SELECT * FROM inventory WHERE id = $1",
        [id]);
        res.json(getItem.rows[0]);
    } catch(err){
        console.error(err.message);
    }
});



//Update an item

app.put("/inventories/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const { description } = req.body;
        const updateItem = await pool.query("UPDATE inventory SET description = $1 WHERE id = $2", 
        [description, id]);
        res.json("Item Updated");
    } catch(err){
        console.error(err.message);
    }
});




//Delete an item

app.delete("/inventories/:id", async(req, res)=> {
    try{
        const { id } = req.params;
        const deleteItem = await pool.query("DELETE FROM inventory WHERE id = $1 ", 
        [id]);
        res.json("Item Deleted");

    }catch(err)
    {
        console.error(err.message);
    }
});




app.listen(5000, () => {
    console.log("Server has started on Port 5000");
});




