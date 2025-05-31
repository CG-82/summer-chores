


function mowYard(personsName,callback) {
    setTimeout ( () => {
        console.log (`${personsName} mowed the yard`);
        let tiredness = Math.random()
        callback (personsName);
    }, 2000);
}

function weedEat(personsName, callback) {
    setTimeout(() => {
        let tiredness = Math.random();
        if (tiredness > 0.7) {
            console.log(`${personsName} fell asleep after mowing the yard.`);
            return;
        } else {
            console.log(`${personsName} finished using the weedeater`);
            callback(personsName);
        }
    }, 1500);
}

function trimHedges(personsName, callback) {
    setTimeout(() => {
        let tiredness = Math.random();
        if (tiredness > 0.6) {
            console.log(`${personsName} fell asleep after weed eating the yard.`);
            return;
        } else {
            console.log(`${personsName} finished trimming the hedges`);
            callback(personsName);
        }
    }, 1000);
}

function collectWood (personsName,callback) {
setTimeout(() => {
        let tiredness = Math.random();
        if (tiredness > 0.5) {
            console.log(`${personsName} fell asleep after trimming the hedges.`);
            return;
        } else {
            console.log(`${personsName} finished collecting wood.`);
            callback(personsName);
        }
    }, 2500);
}

function waterGarden (personsName,callback) {
setTimeout(() => {
        let tiredness = Math.random();
        if (tiredness > 0.4) {
            console.log(`${personsName} fell asleep after collecting wood.`);
            return;
        } else {
            console.log(`${personsName} finished watering the garden.`);
            callback(personsName);
        }
    }, 500);
}

function doSummerChores(personsName) {
    mowYard(personsName, function(personsName) {
        weedEat(personsName, function(personsName) {
            trimHedges(personsName, function(personsName) {
                collectWood(personsName, function(personsName) {
                    waterGarden(personsName, function(personsName) {
                        console.log(`${personsName} finished all their chores!`);
                    });
                });
            });
        });
    });
}

doSummerChores ("Steve");
