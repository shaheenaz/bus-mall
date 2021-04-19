'use strict'
// A variable declared outside a function, becomes GLOBAL.
let firstImage = document.getElementById('image1') //from html
let secondImage = document.getElementById('image2')
let thirdImage = document.getElementById('image3')
let image = document.getElementById('image') // the container
let attmpts = 0; // how many clicks that the user did
let maxAttmpts = 25 // maxximum attempts
let leftimgInd; // left image index
let midimInd; // middle  """"
let rightimgInd; // right '""
let namesArray = []; //for chart , to put all the names from objects here
// let sourceArray = []

function Bus(name, source) { //  object constructor function (parameters) we use them when we give the objects a variables 
    // variables declared within a JavaScript function, become LOCAL to the function.
    // can only used inside the function
    this.name = name; // objects
    this.source = source;//this does not have a value. It is a substitute for the new object
    this.clicks = 0;
    this.shows = 0;
    Bus.ALL.push(this) // The push() method adds new items to the end of an array, and returns the new length
    namesArray.push(this.name) //for chart


}

Bus.ALL = [];
// calling the constructor function with the new keyword
new Bus('wine-glass', 'images/wine-glass.jpg');
new Bus('water-can', 'images/water-can.jpg');
new Bus('usb', 'images/usb.gif');
new Bus('unicorn', 'images/unicorn.jpg');
new Bus('tauntaun', 'images/tauntaun.jpg');
new Bus('sweep', 'images/sweep.png');
new Bus('shark', 'images/shark.jpg');
new Bus('scissors', 'images/scissors.jpg');
new Bus('pet-sweep', 'images/pet-sweep.jpg');
new Bus('pen', 'images/pen.jpg');
new Bus('dragon', 'images/dragon.jpg');
new Bus('dog-duck', 'images/dog-duck.jpg');
new Bus('cthulhu', 'images/cthulhu.jpg');
new Bus('chair', 'images/chair.jpg');
new Bus('bubblegum', 'images/bubblegum.jpg');
new Bus('breackfast', 'images/breakfast.jpg');
new Bus('boots', 'images/boots.jpg');
new Bus('bathroom', 'images/bathroom.jpg');
new Bus('bannana', 'images/banana.jpg');;
new Bus('bag', 'images/bag.jpg')
// console.log(Bus.ALL)


var displayIMg = []
function randomIndex() {
    return Math.floor(Math.random() * Bus.ALL.length)
}// this for giving a radnom numeber each time it called
// console.log(randomIndex())

function renderImg() {   //for display the three images
    leftimgInd = randomIndex()
    midimInd = randomIndex()
    rightimgInd = randomIndex()
    // let displayIMg = []
    while ((leftimgInd === midimInd) || (leftimgInd === rightimgInd) || (rightimgInd === midimInd) || (displayIMg.includes(rightimgInd) || (displayIMg.includes(midimInd)) || (displayIMg.includes(leftimgInd)))) {
        leftimgInd = randomIndex()
        midimInd = randomIndex()
        rightimgInd = randomIndex()
    }
// set attribute خاصية 
    firstImage.src = Bus.ALL[rightimgInd].source, Bus.ALL[rightimgInd].shows++
    secondImage.src = Bus.ALL[midimInd].source, Bus.ALL[midimInd].shows++
    thirdImage.src = Bus.ALL[leftimgInd].source, Bus.ALL[leftimgInd].shows++
// gives every array index a new one everytime the function runs
    displayIMg[0] = leftimgInd;
    displayIMg[1] = midimInd;
    displayIMg[2] = rightimgInd;
    console.log(displayIMg)
}
renderImg()
//  when we use event listener its for how an elemnt will reacte when an action happened to it 
image.addEventListener('click', clickingHand)
// event(when clicking the function will fire), function
let button = document.getElementById('button')
// button.onclick = listRender
button.addEventListener('click', listRender)
// button.removeEventListener('click',listRender)



function clickingHand(event) {
    attmpts++; // everytime ths function runs add 1
    if (maxAttmpts >= attmpts) {
        if (event.target.id === 'image1') {// here the event we have will target the elemnt id which is image1
            Bus.ALL[rightimgInd].clicks++
        } else if (event.target.id === 'image2') {
            Bus.ALL[midimInd].clicks++
        }
        else if (event.target.id === 'image3') {
            Bus.ALL[leftimgInd].clicks++
        }
        else {
            alert("please click on the image not the container")
            attmpts--;
        }
        renderImg()
    }

    else {
        image.removeEventListener('click', clickingHand)// to stop the function firing after the attemps 



    }


}
let clickArray = [];
let showArray = [];

function listRender() {
    let list = document.getElementById('list')
    for (let i = 0; i < Bus.ALL.length; i++) {
        clickArray.push(Bus.ALL[i].clicks)
        showArray.push(Bus.ALL[i].shows)
        let lists = document.createElement('li')
        list.appendChild(lists)
        lists.textContent = `${Bus.ALL[i].name} had ${Bus.ALL[i].clicks} votes, and was seen ${Bus.ALL[i].shows}`
    }
    button.removeEventListener('click',listRender)
    chart()
}
// chart()
// ***************************************
// chart
function chart() {
    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar', // types there are many like rader or pie
        data: {
            labels: namesArray,// the names of the pictures from bus function
            datasets: [{ // object literal
                label: '# of clicks',//x axis
                data: clickArray,//y axis
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',

                ],

                borderWidth: 1
            }, {
                label: '# of shown',
                data: showArray,
                backgroundColor: [
                    'rgba(100, 99, 132, 0.2)',

                ],

                borderWidth: 1





            }]
        },

    },



    );
}

