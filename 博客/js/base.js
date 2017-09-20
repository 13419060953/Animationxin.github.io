
var aImg = document.querySelectorAll(".content .content-main .trans .fis li");
var aLi = document.querySelectorAll(".content .content-main .trans .item-list .show");
var oBtn  = document.getElementById("change");
var timer = null;
var bFlag = false;
for(var i=0;i<aLi.length;i++){
    var index = aLi[i];
    index.xin = i;
    index.onclick = function (){
       for(var j=0;j<aImg.length;j++){
        for(var k=0;k<aImg.length;k++){
            aImg[k].style.opacity="0";
        }
         aImg[this.xin].style.opacity = '1';
       }
    }
}
var persion = new fis();
persion.show(oBtn );
function fis(){
    fis.prototype.show = function (oBtn){
    var timer = null;
    var bFlag = false;
    oBtn.onclick = function () {
    moveScroll(0,3000);
    }
    window.onscroll = function (){
    if(bFlag){
        clearInterval(timer);
    }
    bFlag=true;
    };
    function moveScroll(target,time) {
    var start = document.documentElement.scrollTop || document.body.scrollTop;
    var dis = target - start;
    var count = Math.floor(time/300);
    var n=0;
    clearInterval(timer);
    timer = setInterval(function(){
        bFlag=false;
        n++;
        document.documentElement.scrollTop = start + dis* n / count;
        document.body.scrollTop = start + dis * n / count;
        if(n==count){
            clearInterval(timer);
        }
    },30)
}

    }
}

oBtn.onclick = function () {
    moveScroll(0,3000);
}
window.onscroll = function (){
    if(bFlag){
        clearInterval(timer);
    }
    bFlag=true;
}
function moveScroll(target,time) {
    var start = document.documentElement.scrollTop || document.body.scrollTop;
    var dis = target - start;
    var count = Math.floor(time/300);
    var n=0;
    clearInterval(timer);
    timer = setInterval(function(){
        bFlag=false;
        n++;
        document.documentElement.scrollTop = start + dis* n / count;
        document.body.scrollTop = start + dis * n / count;
        if(n==count){
            clearInterval(timer);
        }
    },30)
}

