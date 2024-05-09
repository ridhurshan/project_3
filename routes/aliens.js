const express = require("express")
const router = express.Router()
const Alien = require("../models/alien")

router.get('/',async(req,res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send("Error"+err)
    }
    res.send("Get requist is get");
})

router.get('/:id',async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send("Error"+err)
    }
    res.send("Get requist is get");
})

router.post('/',async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send("Error")
    }
})


// router.put('/:id', async (req, res) => {
//     try {
//         const { name, tech, sub } = req.body;
//         const id = req.params.id;
//         const updatedAlien = await Alien.findByIdAndUpdate(
//             id,
//             { name, tech, sub },
//             { new: true } // Return the modified document
//         );
//         if (!updatedAlien) {
//             return res.status(404).json({ message: "Not found that id" });
//         }
//         res.json(updatedAlien);
//         console.log("One item is updated successfully")
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// router.delete('/:id',async(req,res) => {
//     try{
//         await Alien.findByIdAndDelete(req.params.id)
//         res.status(204).end()
//         console.log("Succesfully one iten is deleted")
//     }catch(err){
//         res.send("Error")
//     }
//})

module.exports = router