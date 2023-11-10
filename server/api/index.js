const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("You have reached the API.")
});


module.exports = router;

