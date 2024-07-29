/*----App version------*/

/*Few Stupid Inits*/
var YTProVer="3.45";


/*----update model-----*/

function updateModel(){


var x=document.createElement("div");

x.setAttribute("style",`height:100%;width:100%;position:fixed;display:grid;align-items:center;top:0;left:0;background:rgba(0,0,0,.2);z-index:99999;`);

x.innerHTML=`
<div style="height:140px;width:70%;padding:20px;background:rgba(0,0,0,.1);border:1px solid #888;box-shadow:0px 0px 5px black;backdrop-filter:blur(10px);border-radius:15px;margin:auto">
<h2> Update Available</h2><br>
Latest Version ${YTProVer} of Ravan Crunchyroll is available , update the Update Ravan Crunchyroll to get latest features.
<br>- current version fix<br>
- display update model published 
<br>
<br>
<div style="display:flex;">
<button style="border:0;border-radius:10px;height:30px;width:150px;background:rgba(255,50,50,.7);float:right;" onclick="Android.oplink('https://t.me/ZenVRavan/35');">Download</button>
</div>
</div>
`;

document.body.appendChild(x);
}









window.onload = function(){ 
if(parseFloat(Android.getInfo()) < parseFloat(YTProVer) && (window.location.href == "https://www.crunchyroll.com/" || window.location.href == "https://www.crunchyroll.com") ){
updateModel();
}
};
