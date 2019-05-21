var Save_txt = document.getElementsByTagName('button');
var uid;
Save_txt[0].addEventListener('click',function(){set_Notes(uid)},false)
var textbox = document.getElementsByTagName('textarea');

new Promise(function(resolve) {
    if (document.readyState === 'complete') 
    {
        resolve();
    } 
    else 
    {
        window.onload = resolve;
    }
    }).then(function() {
        return new Promise(function(resolve, reject) {
            VK.init({ apiId: 6950116
            },2);
    
        VK.Auth.login(function(response) {
            if (response.session) {
                resolve(response);
            } 
            else 
            {
                reject(new Error('� ќ� µ Сѓ� ґ� °� »� ѕСЃСЊ � °� ІС‚� ѕСЂ� ё� ·� ѕ� І� °С‚СЊСЃСЏ'));
            }
        });
    });
    }).then(function() {
        return new Promise(function(resolve, reject) {
            VK.api('friends.get', {fields:'last_name',fields:'first_name', v:"any"}, function(response) {
                    if (response.error) {
                        reject(new Error(response.error.error_msg));
                    } 
                    else {
                        add_friends(response)
                        response.response.forEach (function(elem){
                            
                        })
                        resolve(response);
                    }
            });
        })
    }).catch(function(e) {
        alert('Errors ' + e.message);
        });


    var add_friends = function(response){
        var i = 0;
        var box = document.getElementsByTagName('div'),
        table = document.createElement('table'),
        str = document.createElement('tr');
        var current_size = 480; 
        response.response.forEach (function(elem){
            if(i == 0)
            {
            str.innerText = elem.first_name + ' ' + elem.last_name;
            table.appendChild(str);
            }
            else
            {
            var str2 = document.createElement('tr');
            str2.innerText = elem.first_name + ' ' + elem.last_name;
            tr = document.querySelector('tr');
            table.insertBefore(str2,tr);
            current_size +=13;
            box[1].style.height = current_size + 'px';
            box[2].style.height = box[1].style.height;
            box[2].style.top = current_size *(-1) +'px';
            str2.setAttribute('id',i);
            str2.addEventListener('click',function(){Get_Id_friends(box,i,str2)},false);
            }
            i++;
        })
        box[1].appendChild(table);
        table.appendChild(str);
    }

    function Get_Id_friends(box,i,str2)
    {
        new Promise(function(resolve, reject){
            VK.api('friends.get', {fields: 'interests',fields: 'photo_200', v:"any"}, function(response) {
            if (response.error) {
                reject(new Error(response.error.error_msg));
            } 
            else {
                var atribute = str2.getAttribute("id");
                var s = parseInt(atribute);
                //console.log(atribute);
                console.log(response.response[s].user_id);
              //  box[2].innerHTML = 'N: ' + response.response[s].interests;
                resolve(response);
                uid = response.response[s].user_id;
                if(localStorage.getItem(uid))
                {
                console.log(localStorage.getItem(uid));
                textbox[0].value = localStorage.getItem(uid);
                }
                else
                textbox[0].value = "Text!";
                var Photo = document.getElementsByTagName('img');
                Photo[0].setAttribute('src',response.response[s].photo_200);
            }
        })
    })
    } 

function set_Notes(uid)
{
    localStorage.setItem(uid,textbox[0].value);
    
}
