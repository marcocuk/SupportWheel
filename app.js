const roata = document.querySelector('.circle');
const btn = document.querySelector('.spin');
const point=document.querySelector('.get');
const printe=document.querySelector('.lista');
const lu=document.querySelector('.l');
const ma=document.querySelector('.m');
const mi=document.querySelector('.mi');
const jo=document.querySelector('.j');
const vi=document.querySelector('.v');
let testtest,eng,win;;
let cnt=0;
let c=[];
let buffer=[];
let bad=0;
let j=0;
let lose=0;
const slice=roata.children.className;
const names=['Engineer 1','Engineer 2','Engineer 3','Engineer 4','Engineer 5','Engineer 6','Engineer 7','Engineer 8','Engineer 9','Engineer 10'];
const zile=['Luni','Marti','Miercuri','Joi','Vineri','Luni','Marti','Miercuri','Joi','Vineri'];

function partition (array, size, offset) {
    offset |= 0
    var result = []
    while (offset < array.length) {
        result.push(array.slice(offset, offset += size))
    }
    return result
}

function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}
btn.addEventListener('click', ()=>{
    cnt++;
    const x=1024;
    const y=9999;
    var deg = Math.floor(Math.random()*(x-y))+y;
    roata.style.transform="rotate("+deg+"deg)";
     setTimeout( ()=>{
        for(let i=0;i<10;i++){
            c[i]=roata.children[i].getBoundingClientRect().y;
        } 
        const x=c.sort(function(a,b){return a-b});
        win=x[0];
        for(let i=0;i<10;i++){
            if(win == roata.children[i].getBoundingClientRect().y){
                eng=roata.children[i].className;  
                buffer[j]=eng;
                if(buffer[j] !== buffer[j-1] &&  buffer[j]!==buffer[j-2] && buffer[j]!==buffer[j-3]){
                    if(countInArray(buffer,names[0])>2){
                        buffer.pop();
                        alert(2);
                        lose=1;   
                    }
                    else if(countInArray(buffer,names[1])>2){
                        buffer.pop();
                        alert(3);
                        lose=1;
                    }else if(countInArray(buffer,names[2])>2){
                        buffer.pop();
                        alert(4);
                        lose=1;                        
                    }else if(countInArray(buffer,names[3])>2){
                        buffer.pop();
                        alert(5);
                        lose=1;
                    }else if(countInArray(buffer,names[4])>2){
                        buffer.pop();
                        alert(6);
                        lose=1;
                    }else if(countInArray(buffer,names[5])>2){
                        buffer.pop();
                        alert(7);
                        lose=1;
                    }else if(countInArray(buffer,names[6])>2){
                        buffer.pop();
                        alert(8);
                        lose=1;
                    }else if(countInArray(buffer,names[7])>2){
                        buffer.pop();
                        alert(9);
                        lose=1;
                    }else if(countInArray(buffer,names[8])>2){
                        buffer.pop();
                        alert(10);
                        lose=1;
                    }else if(countInArray(buffer,names[9])>2){
                        buffer.pop();
                        alert(11);
                        lose=1;
                    }else{
                        j++;   
                        lose=0;
                    }
                }else{
                    lose=1;
                    buffer.pop();
                    alert(1);   
                }          
            } 
        }
        if(buffer.length%2==0){
            for(let i=0;i<20;i++){
                if(buffer[i]!=undefined && lose!=1){                    
                    testtest=i;
                }
            }
            if(lose==0 && bad <=20){                  
                let zi=`
                    <h2>${zile[bad]}</h2>
                `;
                let data=`
                    <p>${buffer[testtest-1]}</p>
                    <p>${buffer[testtest]}</p>
                    `;   
                    printe.innerHTML+=zi;
                    printe.innerHTML+=data;
                    bad++;
            }
            
        }        
    },1000);
    
});
