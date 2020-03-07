const express = require("express")

const Resources = require("../helper")

const router = express.Router()

// return a list of all resources in the database
router.get("/", (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.json(resources)
        }).catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        })
})

module.exports = router