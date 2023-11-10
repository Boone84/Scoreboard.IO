const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const main = async () => {
    const team1 = await prisma.team.create({
        data: {
            name: 'Ironsides',
            color: 'Green',
        },
    });

    const team2 = await prisma.team.create({
        data: {
            name: 'Headhunters',
            color: 'Yellow',
        },
    });

    const team3 = await prisma.team.create({
        data: {
            name: 'Destroyers',
            color: 'White',
        },
    });

    const team4 = await prisma.team.create({
        data: {
            name: 'Warhawks',
            color: 'Tan',
        },
    });

    const player = await prisma.player.create({
        data: {
            name: 'Tony',
            position: 'Pitcher',
            jerseyNumber: 2,
            teamId: 1,
            
        },
    });

    const player2 = await prisma.player.create({
        data: {
            name: 'Boone',
            position: 'Outfield',
            jerseyNumber: 3,
            teamId: 4,
            
        },
    });
};

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
