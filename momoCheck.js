let flags = {
    validMomoNum:false,
    matchedMomoNum:false
}
let momoNum = prompt("Enter momo number")

if(momoNum.length !== 10){
    let count = 0
    while(!flags.validMomoNum){
        // console.log("try:",count)
        count++
        momoNum = prompt("Enter valid momo number")
        // console.log(momoNum)
        if(momoNum.length === 10){
            flags.validMomoNum = true
        }
        
        if(count === 3){
            break
        }
    }
}else{
    flags.validMomoNum = true
}

if(flags.validMomoNum){
    let matchingMomoNum = prompt("Confirm momo number")
    let count = 0
    if(matchingMomoNum !== momoNum){
        while(!flags.matchedMomoNum){
            count++
            matchingMomoNum = prompt("confirm momo number")
            if(matchingMomoNum === momoNum){
                flags.matchedMomoNum = true
            }
            if(count === 3){
                console.log("Number mismatch")
                break
            }
        }
    }else{
        flags.matchedMomoNum = true
    }
    
}else{
    console.log("trnsaction failed!")
}

if(flags.validMomoNum && flags.matchedMomoNum){
    
}


