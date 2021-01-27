for (let car in statistics) {
    if(car[0] == 'r' || car[0] == 'R' || (statistics[car] % 2) === 1) {
        console.log(statistics[car]);
    }
}
