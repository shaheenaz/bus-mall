'use strict'
let firstImage =document.getElementById('image1')
let secondImage = document.getElementById('image2')
let thirdImage = document.getElementById('image3')
let attmpts = 0;
let maxAttmpts = 25
let leftimgInd;
let midimInd;
let rightimgInd;

function Bus(name,source){
    this.name = name;
    this.source = source;
    this.clicks = 0;
    this.shows = 0;
    Bus.ALL.push(this)

}
// let ALL =[]
Bus.ALL = [];
// console.log(Bus.ALL)
new Bus ('wine-glass','images/wine-glass.jpg');
new Bus('water-can','images/water-can.jpg');
new Bus('usb','images/usb.gif');
new Bus ('unicorn','images/unicorn.jpg');
new Bus('tauntaun','images/tauntaun.jpg');
new Bus('sweep','images/sweep.png');
new Bus ('shark','images/shark.jpg');
new Bus ('scissors','images/scissors.jpg');
new Bus ('pet-sweep','images/pet-sweep.jpg');
new Bus ('pen','images/pen.jpg');
new Bus ('dragon','images/dragon.jpg');
new Bus ('dog-duck','images/dog-duck.jpg');
new Bus ('cthulhu','images/cthulhu.jpg');
new Bus ('chair','images/chair.jpg');
new Bus ('bubblegum','images/bubblegum.jpg');
new Bus ('breackfast','images/breakfast.jpg');
new Bus ('boots','images/boots.jpg');
new Bus ('bathroom','images/bathroom.jpg');
new Bus ('bannana','images/banana.jpg');;
new Bus ('bag','images/bag.jpg')
// console.log(Bus.ALL)
 

function randomIndex(){
    return Math.floor(Math.random() * Bus.ALL.length)
}
console.log(randomIndex())

function renderImg(){
leftimgInd = randomIndex()
midimInd = randomIndex()
rightimgInd = randomIndex()
while((leftimgInd === midimInd) ||(leftimgInd=== rightimgInd) || (rightimgInd===midimInd)){
    leftimgInd = randomIndex()
    midimInd = randomIndex()
    for(let i = 0; i<Bus.ALL.length;i++){

    }
}
firstImage.src = Bus.ALL[rightimgInd].source,Bus.ALL[rightimgInd].shows++
secondImage.src = Bus.ALL[midimInd].source,Bus.ALL[midimInd].shows++
thirdImage.src =Bus.ALL[leftimgInd].source,Bus.ALL[leftimgInd].shows++


}
renderImg()
firstImage.addEventListener('click',clickingHand)
secondImage.addEventListener('click',clickingHand)
thirdImage.addEventListener('click',clickingHand)


function clickingHand(event){
    attmpts++;
    if(maxAttmpts>= attmpts){
        if(event.target.id === 'image1'){
            Bus.ALL[rightimgInd].clicks++
        }else if(event.target.id === 'image2'){
            Bus.ALL[midimInd].clicks++}
            else if(event.target.id === 'image3'){
                Bus.ALL[leftimgInd].clicks++}
                renderImg()
    }
    else {    
          firstImage.removeEventListener('click',clickingHand)
    secondImage.removeEventListener('click',clickingHand)
    thirdImage.removeEventListener('click',clickingHand)
     
        }
    
    
}
function listRender(){
let list = document.getElementById('list')
for(let i = 0 ; i< Bus.ALL.length;i++){
    let lists = document.createElement('li')
    list.appendChild(lists)
    lists.textContent = `${Bus.ALL[i].name} had ${Bus.ALL[i].clicks} votes, and was seen ${Bus.ALL[i].shows}`}
}

