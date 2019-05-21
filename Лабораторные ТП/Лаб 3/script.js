
function addtext (value,table,color)
{
    if(i<=15)
   {
   var elem = document.createElement('tr');
   elem.innerText = value;
   if(napravlenie == 0 && i!=0)
   {
       tr = document.querySelector("tr");
       table.insertBefore(elem,tr);
       elem.style.backgroundColor = color;
   }
   else 
   {
   elem.style.backgroundColor = color;
   table.appendChild(elem);
   }
   i++;
   elem.addEventListener('click',function(){table.removeChild(elem);i--;},false);
   }
};


function moveBlock(event)
{
    console.log(event);
    if(event.keyCode == 26)
    {
        figure.style.left ="110px";
    } 
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


function getRandomParam()
{
    var param = [];
    param[0] = Math.random()*(340-1)+1; //height
    param[1] = Math.random()*(275-1)+1; // width
    param[2] = Math.random()*((275-param[1])-0)+0; //left
    param[3] = Math.random()*((340-param[0])-0)+0; //top
    return param;
}


function addblock()
{
    var param = getRandomParam();
    var figure = document.createElement('div');
    figure.style.backgroundColor = getRandomColor();
    figure.style.height = param[0] +'px';
    figure.style.width = param[1] +'px';
    figure.style.left = param[2] +'px';
    figure.style.top = param[3] +'px';
    figure.style.position ='absolute';
    figure.className ="figure";
    box2.style.position ='absolute';
    figure.setAttribute('tabIndex','0');
    //figure.setAttribute('draggable','true');
    //figure.addEventListener('click',moveBlock,false);
    box2.appendChild(figure);
        figure.onkeydown = function(event){
        
        if(event.key =='ArrowRight' && event.srcElement.offsetLeft < (275 - param[1]))
        {
            var right = event.srcElement.offsetLeft + 1;
            figure.style.left = right + 'px';
        }
        if(event.key == 'ArrowDown' && event.srcElement.offsetTop < (340 - param[0]))
        {
            var down = event.srcElement.offsetTop + 1;
            figure.style.top = down + 'px';
        }

        if(event.key == 'ArrowUp' && event.srcElement.offsetTop > 0)
        {
            var up = event.srcElement.offsetTop - 1;
            figure.style.top = up + 'px';
        }

        if(event.key == 'ArrowLeft' && event.srcElement.offsetLeft > 0)
        {
            var left = event.srcElement.offsetLeft - 1;
            figure.style.left = left + 'px';
        }
    };
        figure.onmousedown = function(event)
        {
            var shiftX = event.pageX - event.srcElement.offsetLeft;
            var shiftY = event.pageY - event.srcElement.offsetTop;
            function moveAt(event) {
             
              //  if((event.pageX - shiftX) > 0 &&  (event.pageY - shiftY) > 0 && (event.pageX - shiftX)< (275 - param[1]) && (event.pageY - shiftY) < (340 - param[0]))
              //  {
                figure.style.left = event.pageX - shiftX + 'px';
                figure.style.top = event.pageY - shiftY + 'px';
            //    }
              //  if(event.pageX - event.srcElement.offsetLeft <0 || event.pageX - event.srcElement.offsetLeft > param[1] || event.pageX - event.srcElement.offsetTop <0 || event.pageX - event.srcElement.offsetTop > param[0] )
            //    {
            //        document.onmousemove = null;
            //        figure.onmouseup = null;
          //      }
            };
            document.onmousemove = function(event) {
                moveAt(event);
            }
            figure.onmouseup = function() {
                document.onmousemove = null;
                figure.onmouseup = null;
            }
        };
}









function generalPart ()
{
    if(start == 1)
    {

    
    
    textbox.setAttribute('maxlength', '35');
    colorbox.setAttribute('maxlength', '7');

    //стили и свойства
    addButton.innerText = "Добавить";  
    statButton.innerText ="Статистика";
    podpis1.innerText ="В начало"; 
    podpis2.innerText ="В конец";
    addButton.className ="part1buttons";
    statButton.className ="part1buttons";
    podpis1.className ="part1BeginEnd";
    podpis2.className ="part1BeginEnd";
    textbox.value='Текст';
    textbox.at
    colorbox.value ='Цвет';
    
    box2.style.cssText =" height: 340px;\
    width: 275px;\
    background: gray;\
    margin-left: 75px;\
    margin-top: 30px;"

    //добавление элементов
    box[0].appendChild(box2);
    box2.appendChild(box3);
    box2.appendChild(table);
    box3.style.cssText =" position:relative;\
    left:358px;\
    height: 358px; \
    width:190px ";
   // margin-left: 358px;";
    box3.appendChild(podpis1);
    box3.appendChild(podpis2);
    box3.appendChild(textbox);
    box3.appendChild(colorbox);
    box3.appendChild(addButton);
    box3.appendChild(statButton);
    //добавляем события новым кнопкам
    start = 0;
    event();

    }

    if(part == 1)
    {
        var figures = document.getElementsByClassName('figure');
        if(figures.length != 0)
        {
        for (var s = 0;s < figures.length; s++)
        {
            figures[s].style.display ='none';
        }
        }
        textbox.style.display = 'block';
        colorbox.style.display = 'block';  
        table.style.display = 'block';
        podpis1.style.display = 'block';
        podpis2.style.display = 'block';
        statButton.style.display = 'block';
    }

    if(part == 2)
    {
        var figures = document.getElementsByClassName('figure');
        if(figures.length != 0)
        {
        for (var s = 0;s < figures.length; s++)
        {
            figures[s].style.display ='block';
        }
        }
        table.style.display = 'none';
        podpis1.style.display = 'none';
        podpis2.style.display = 'none';
        statButton.style.display = 'none';
        textbox.style.display = 'none';
        colorbox.style.display = 'none';
    }

    if(part == 3)
    {
        table.style.display = 'none';
        podpis1.style.display = 'none';
        podpis2.style.display = 'none';
        statButton.style.display = 'none';
        textbox.style.display = 'none';
        colorbox.style.display = 'none';

    }
};



function add()
{
    if(part == 1)
    {
        addtext(textbox.value,table,colorbox.value);
    }
    if(part == 2 || part == 3)
    {
        addblock();
    }
}





function event()
{
var buttons = document.getElementsByTagName('button');
buttons[5].addEventListener('click',add,false);
buttons[3].addEventListener('click',function(){podpis1.style.background = '#33FF00'; napravlenie = 0; podpis2.style.backgroundColor = 'white';},false);
buttons[4].addEventListener('click',function(){podpis2.style.backgroundColor = '#33FF00'; podpis1.style.backgroundColor = 'white'; napravlenie = 1;},false);
buttons[6].addEventListener('click',function(){alert("количество элементов:"+i)},false);
}





function part2 ()
{

}



function part2 ()
{

}


    var statButton = document.createElement('button') 
        ,podpis1 = document.createElement('button')
        ,textbox = document.createElement('input')
        ,colorbox = document.createElement('input')
        ,podpis2 = document.createElement('button')
        ,table = document.createElement('table')
        ,box2 = document.createElement('div')
    ,addButton = document.createElement('button')
    ,box = document.getElementsByTagName('div')
    box3 = document.createElement('div');


var part = 0,start = 1, i = 0,napravlenie = 1;
var buttons = document.getElementsByTagName('button');
buttons[0].addEventListener('click',function(){part = 1;generalPart();},false);
buttons[1].addEventListener('click',function(){part = 2;generalPart();},false);
buttons[2].addEventListener('click',function(){part = 3;generalPart();},false);


