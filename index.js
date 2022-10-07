let home = document.getElementById('home-score')
let homeScore = 0;

function addOne(){
    homeScore = homeScore + 1
    home.innerText = homeScore;
    
    
}

function addTwo(){
    homeScore = homeScore + 2
    home.innerText = homeScore;
    
    
}

function addThree(){
    homeScore = homeScore + 3
    home.innerText = homeScore;
    
    
}

/////////////////////////////////////////////




let guest = document.getElementById('guest-score')
let guestScore = 0;

function one(){
   guestScore =guestScore + 1
   guest.innerText =guestScore;
    
    
}

function two(){
   guestScore =guestScore + 2
   guest.innerText =guestScore;
    
    
}

function three(){
   guestScore =guestScore + 3
   guest.innerText =guestScore;
}
    
    



function newGame() {
    
    homeScore = homeScore = 0
    home.innerText = homeScore;
    
    guestScore = guestScore = 0
    guest.innerText = guestScore;
    
    console.log("reset")
    
    
}