process.on('message', amount => {
    let count = {}
    for(let i=0; i < amount; i++){
        let currentNumber = Math.floor(Math.random() * 1000) + 1
        count[currentNumber] = count[currentNumber] ? count[currentNumber] + 1 : 1
    }
    
    (<any> process).send(count)
})

