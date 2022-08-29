let players = [
    {
        player:'001',
        name:'abu',
    },
    {
        player:'002',
        name:'adam',
    },
    {
        player:'003',
        name:'abudu',
        address:{
            town:'sabonjida',
            city:'tamale',
            country:'ghana'
        }
    },
    {
        player:'002',
        name:'adam',
    },
]


// let pos = 0
// while(pos < players.length){
//     console.log(players[pos].name)
//     pos++
// }

for(let i=0; i<players.length; i++){
    if(players[i].address){
        console.log(players[i].address)
    }
}

// Basic DOM manipulation
let h1 = document.getElementById('subheading')
h1.style.backgroundColor = 'red'
