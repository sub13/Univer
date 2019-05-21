
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
                reject(new Error('РќРµ СѓРґР°Р»РѕСЃСЊ Р°РІС‚РѕСЂРёР·РѕРІР°С‚СЊСЃСЏ'));
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
            str2.addEventListener('click',function(){input_Interest(box,i,str2)},false);
            }
            i++;
        })
        box[1].appendChild(table);
        table.appendChild(str);
    }

    function input_Interest(box,i,str2)
    {
        new Promise(function(resolve, reject){
            VK.api('friends.get', {fields: 'interests',v:"any"}, function(response) {
            if (response.error) {
                reject(new Error(response.error.error_msg));
            } 
            else {
                var atribute = str2.getAttribute("id");
                var s = parseInt(atribute);
                console.log(atribute);
                console.log(response.response[s].interests);
                box[2].innerHTML = 'Interests: ' + response.response[s].interests;
                resolve(response);
            }
        })
    })
    } 