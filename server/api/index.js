const router = require("express").Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get("/", (req, res) => {
    res.send("You have reached the API.")
});

router.get("/team", async (req, res) => {
    const team = await prisma.team.findMany();
    res.send(team);
});

router.get("/team/:id", async (req, res) => {
    try {
        const teamId = Number(req.params.id);
        const team = await prisma.team.findUnique({
            where: {
                id: teamId
            }
        });

        if (team) {
            res.json(team);
        } else {
            res.status(404).send("Team not found");
        }
    } catch (error) {
        res.status(500).send("An error occurred: " + error.message);
    }
});



module.exports = router;

