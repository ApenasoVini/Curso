function boolean(option){
    option = prompt(`True or False?`)
    if(option === "true"){
        option = false
        console.log(`${option}`)
    }
    else if(option === "false"){
        option = true
        console.log(`${option}`)
    }
}

function number(num){
    num = prompt("Type a number")
    num = num * -1
    return num;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}

boolean()
number()