   var flag = false;
    var cur = {
        x:0,
        y:0
    }
    var nx,ny,dx,dy,x,y ;
    function down(){
        flag = true;
        var touch ;
        if(event.touches){
            touch = event.touches[0];
        }else {
            touch = event;
        }
        cur.x = touch.clientX;
        cur.y = touch.clientY;
        dx = someElm.offsetLeft;
        dy = someElm.offsetTop;
        $("#someElm").css("background",'url(images/ic_condition_hover.png)')
         $("#someElm").css("background-size","100%")
    }
    function move(){
    	 $("#someElm").css("background",'url(images/ic_condition_hover.png)')
    	  $("#someElm").css("background-size","100%")
        if(flag){
            var touch ;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            nx = touch.clientX - cur.x;
            ny = touch.clientY - cur.y;
            x = dx+nx;
            y = dy+ny;
            someElm.style.left = x+"px";
            someElm.style.top = y +"px";
            //阻止页面的滑动默认事件
            document.addEventListener("touchmove",function(){
                event.preventDefault();
            },false);
        }
    }
    //鼠标释放时候的函数
    function end(){
    	  $("#someElm").css('background',"url(images/ic_condition.png)")
    	  $("#someElm").css("background-size","100%")
    	  $("#someElm").css("z-index","1")
        flag = false;
    }
    var someElm = document.getElementById("someElm");
    someElm.addEventListener("mousedown",function(){
        down();
    },false);
    someElm.addEventListener("touchstart",function(){
        down();
    },false)
    someElm.addEventListener("mousemove",function(){
        move();
    },false);
    someElm.addEventListener("touchmove",function(){
        move();
    },false)
    document.body.addEventListener("mouseup",function(){
        end();
    },false);
    someElm.addEventListener("touchend",function(){
        end();
    },false);
    



function stopTouchendPropagationAfterScroll(){
    var locked = false;

    window.addEventListener('touchmove', function(ev){
        locked || (locked = true, window.addEventListener('touchend', stopTouchendPropagation, true));
    }, true);
    function stopTouchendPropagation(ev){
        ev.stopPropagation();
        window.removeEventListener('touchend', stopTouchendPropagation, true);
        locked = false;
    }
}
stopTouchendPropagationAfterScroll();
