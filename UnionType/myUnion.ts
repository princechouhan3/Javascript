let score : number | string = 33
score = 44
score = "55"


type User = {
    name : string
    id : number
}

type Admin = {
    username : string
    id : number
}

let prince : User | Admin = {name: "prince" , id: 302} 

prince = {username: "pc" , id: 302}


// ARRAY

const data: number[] = [1,2,3,4]
const data2: string[] = ["1","2","3","4"]
const data3: (string | number | boolean)[] = ["1","2","3","4",false]









