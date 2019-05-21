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
            });
    
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
            VK.api('users.get', {fields:'last_name',fields:'first_name',fields:'home_town', v:"any"}, function(response) {
                    if (response.error) {
                        reject(new Error(response.error.error_msg));
                    } 
                    else {
    
                        alert('Hello'+ ' ' + response.response[0].first_name +' ' + response.response[0].last_name +' your city '+ response.response[0].home_town);
                        resolve(response);
                    }
            });
        })
    }).catch(function(e) {
        alert('Errors ' + e.message);
        });
    