

/*

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

browser.get('http://127.0.0.1/index.html');

try
{

function menu1()
{
  
//var aut = browser.getAllWindowHandles();
//console.log(aut);
//browser.switchTo().window(aut[1]);


browser.findElement(webdriver.By.xpath('//*[@id="login_submit"]/div/div/input[6]')).sendKeys('mail');
//browser.manage().setTimeouts({implicit: 100});
browser.findElement(webdriver.By.xpath('//*[@id="login_submit"]/div/div/input[7]')).sendKeys('pass');
browser.findElement(webdriver.By.xpath('//*[@id="box2"]/textarea')).sendKeys('ny sho pacany');
}



function click2()
{
browser.findElements(webdriver.By.xpath('//*[@id="box1"]/table)')).then(function(items){
items[26].click();
});

browser.findElement(webdriver.By.xpath('//*[@id="box2"]/textarea')).sendKeys('ny sho pacany');
}

function SendError(err) {
	console.error('Что то пошло не так\n', err.stack, '\n');
	browser.quit();
}


browser.wait(menu1, 2000).then(SendError);

browser.wait(click2, 2000).then(SendError);
}
catch(ex)
{
  console.log('Ошибка',ex);
}

//then(function(items){
  //  console.log('количество элементов input при загрузке:',items.length);
    //items[0].sendKeys("Здарова Пацаны!");
//});





//browser.findElements(webdriver.By.xpath('//*[@id="box1"]/table)').then(function(items){
  //items[26].click();
//}
//));
*/


var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

browser.get('http://127.0.0.1/index.html');

try
{

function click1()
{


varelements = browser.findElements(webdriver.By.tagName('button'));
varelements.then(function(buttons)
{
    buttons[0].click();
}
);
}


function click2()
{


varelements = browser.findElements(webdriver.By.tagName('button'));
varelements.then(function(buttons)
{
    buttons[1].click();
}
);
}

function click3()
{
  


varelements = browser.findElements(webdriver.By.tagName('button'));
varelements.then(function(buttons)
{
    buttons[2].click();
}
);
}



function SendError(err) {
	console.error('Что то пошло не так\n', err.stack, '\n');
}

browser.wait(click1, 100).then(SendError);
browser.wait(click2, 120).then(SendError);
browser.wait(click3, 140).then(SendError);
}

catch(ex)
{
  console.log('Перехвачена Ошибка',ex);
}

