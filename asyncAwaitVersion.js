function mowYard(personsName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tiredness = Math.random();
            if (tiredness > 0.7) {
                reject(`${personsName} fell asleep after mowing the yard.`);
            } else {
                console.log (`${personsName} mowed the yard`);
                resolve(personsName);
            }
        }, 2000);
    });
}

function weedEat(personsName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tiredness = Math.random();
            if (tiredness > 0.7) {
                reject(`${personsName} fell asleep after using the weedeater.`);
            } else {
                console.log(`${personsName} finished using the weedeater`);
                resolve(personsName);
            }
        }, 1500);
    });
}

function trimHedges(personsName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tiredness = Math.random();
            if (tiredness > 0.6) {
                reject(`${personsName} fell asleep after trimming the hedges.`);
            } else {
                console.log(`${personsName} finished trimming the hedges`);
                resolve(personsName);
            }
        }, 1000);
    });
}

function collectWood(personsName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tiredness = Math.random();
            if (tiredness > 0.5) {
                reject(`${personsName} fell asleep after collecting wood.`);
            } else {
                console.log(`${personsName} finished collecting wood.`);
                resolve(personsName);
            }
        }, 2500);
    });
}

function waterGarden(personsName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tiredness = Math.random();
            if (tiredness > 0.4) {
                reject(`${personsName} fell asleep after watering the garden.`);
            } else {
                console.log(`${personsName} finished watering the garden.`);
                resolve(personsName);
            }
        }, 500);
    });
}

async function doSummerChores(personsName) {
    try {
        let name = await mowYard(personsName);
        name = await weedEat(personsName);
        name = await trimHedges(personsName);
        name = await collectWood(personsName);
        name = await waterGarden(personsName);
        console.log(`${name} finished all their chores!`);
    } catch (err) {
        console.log(err);
    }
}

doSummerChores("Steve");