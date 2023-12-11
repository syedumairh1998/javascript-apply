const person  = {
    name:"Syed Umair Hussain",
    callMyName: function(nameArg){
        return nameArg
    }
}

const person2 = {
    name:"Syed Ammar Hussain"
}

console.log(person.callMyName.apply(person2,['Shahzar Khan']))

// apply without arguement works the same way as call
