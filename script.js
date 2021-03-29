const b = document.getElementById("board");
const check=[];
const ids=[];
var click=0;
var points=0;
var attempts=0;
const unique=[];

const sup=["spiderman","superman","batman","captain america","iron man","flash","hulk","thor","hawkeye","black widow","captain marvel","scarlett witch",
           "spiderman","superman","batman","captain america","iron man","flash","hulk","thor","hawkeye","black widow","captain marvel","scarlett witch"];

function render(){
    while(unique.length<25){
        i=(Math.floor(Math.random()*(26 - 1) + 1));
        if(unique.indexOf(i)==-1){
            unique.push(i);

            if(i!=25){
            card=document.createElement("div");
            front=document.createElement("div");
            back=document.createElement("div");
            card.setAttribute("class","card");
            front.setAttribute("class","front");
            back.setAttribute("class","back");
            card.appendChild(front);
            back.innerHTML="<img class='im' src='imgs/"+i+".png' alt='"+sup[i-1]+"'>";
            card.appendChild(back);            
            card.setAttribute("id",""+i+"");
            card.setAttribute("onclick","disp("+i+")");
            b.appendChild(card);
            }
        }
    }
}

function disp(a)
{
    click+=1;
    check.push(sup[a-1]);
    ids.push(a);
    document.getElementById(a).setAttribute("class","flip");
    
    if(click==2){
        if(ids[0] === ids[1]){

            alert("Please select two different cards!!");
            document.getElementById(ids[0]).removeAttribute("class", "flip");
            document.getElementById(ids[0]).setAttribute("class", "card");

            check.pop();
            check.pop();
            
            ids.pop();
            ids.pop();
            
            click=0;


            return;
        }

        if(check[0]===check[1]){
            click=0;

            check.pop();
            check.pop();
            
            document.getElementById(ids[0]).style.visibility="hidden";
            document.getElementById(ids[1]).style.visibility="hidden";
            
            ids.pop();
            ids.pop();

            points+=1;

            document.getElementById("pt").innerHTML=points;
        }

        else{
            setTimeout(()=>{
            check.pop();
            check.pop();

            document.getElementById(ids[0]).removeAttribute("class", "flip");
            document.getElementById(ids[0]).setAttribute("class", "card");

            document.getElementById(ids[1]).removeAttribute("class", "flip");
            document.getElementById(ids[1]).setAttribute("class", "card");
            
            ids.pop();
            ids.pop();

            click=0;
            attempts+=1;
            
            document.getElementById("at").innerHTML=attempts;
            },800)
        }
    }
    
    if(points===12)
    {
        alert("Game Over!!!");
        document.getElementsByClassName('btn')[0].innerHTML="New Game";
        document.getElementsByClassName('btn')[0].style.backgroundColor="tomato";
    }
}

function rel(){
    location.reload();
}

render();
/*
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.add('flip');
});*/