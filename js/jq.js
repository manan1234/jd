$(document).ready(function(){
// head左边下拉框
    $(".leftad").eq(0).css({"background":"#C81623","color":"#fff"});
    $(".headleft").hover(function(){
    	$(".headxlleft").css("display","block");
    	$(".headxlleftxx").css("display","block");
    	$(".headxlleftxx1").css("display","block");
    	$(".headxlleftxx2").css("display","block");
    	$(".headleft").css("background","#fff");

    },function(){
        $(".headxlleft").css("display","none");
    	$(".headxlleftxx").css("display","none");
    	$(".headxlleftxx1").css("display","none");
    	$(".headxlleftxx2").css("display","none");
    	$(".headleft").css("background","#f1f1f1");
    })
    $(".leftad").click(function(){
    	var index=$(".leftad").index($(this));
    	$(".leftad").css({"background":"#fff","color":"#666"}).eq(index).css({"background":"#C81623","color":"#fff"})
    	$(".bj").text($(".leftad").eq(index).text());
    })
// 我的京东
    $(".xiala1").hover(function(){
    	$(".xlwdjd").css("display","block");
    	$(".wdjdxx").css("display","block");
    	$(".wdjdxx1").css("display","block");
    	$(".wdjdxx2").css("display","block");
    	$(".xiala1").css("background","#fff");
    },function(){
    	$(".xlwdjd").css("display","none");
    	$(".wdjdxx").css("display","none");
    	$(".wdjdxx1").css("display","none");
    	$(".wdjdxx2").css("display","none");
    	$(".xiala1").css("background","#f1f1f1");
    })
// 手机京东
    $(".xiala2").hover(function(){
    	$(".xlsjjd").css("display","block");
    	$(".sjjdxx").css("display","block");
    	$(".sjjdxx1").css("display","block");
    	$(".sjjdxx2").css("display","block");
    	$(".xiala2").css("background","#fff");
    },function(){
    	$(".xlsjjd").css("display","none");
    	$(".sjjdxx").css("display","none");
    	$(".sjjdxx1").css("display","none");
    	$(".sjjdxx2").css("display","none");
    	$(".xiala2").css("background","#f1f1f1");
    }) 
//关注京东
    $(".xiala3").hover(function(){
    	$(".xlgzjd").css("display","block");
    	$(".gzjdxx").css("display","block");
    	$(".gzjdxx1").css("display","block");
    	$(".gzjdxx2").css("display","block");
    	$(".xiala3").css("background","#fff");
    },function(){
    	$(".xlgzjd").css("display","none");
    	$(".gzjdxx").css("display","none");
    	$(".gzjdxx1").css("display","none");
    	$(".gzjdxx2").css("display","none");
    	$(".xiala3").css("background","#f1f1f1");
    }) 
// 客户服务
    $(".xiala4").hover(function(){
    	$(".xlkhfw").css("display","block");
    	$(".kfjdxx").css("display","block");
    	$(".kfjdxx1").css("display","block");
    	$(".kfjdxx2").css("display","block");
    	$(".xiala4").css("background","#fff");
    },function(){
    	$(".xlkhfw").css("display","none");
    	$(".kfjdxx").css("display","none");
    	$(".kfjdxx1").css("display","none");
    	$(".kfjdxx2").css("display","none");
    	$(".xiala4").css("background","#f1f1f1");
    })
// 网站导航
    $(".xiala5").hover(function(){
    	$(".xlwzdh").css("display","block");
    	$(".wzjdxx").css("display","block");
    	$(".wzjdxx1").css("display","block");
    	$(".wzjdxx2").css("display","block");
    	$(".xiala5").css("background","#fff");
    },function(){
    	$(".xlwzdh").css("display","none");
    	$(".wzjdxx").css("display","none");
    	$(".wzjdxx1").css("display","none");
    	$(".wzjdxx2").css("display","none");
    	$(".xiala5").css("background","#f1f1f1");
    })
// 购物车
  $(".dhright1").hover(function(){
  	$(".xlgwc").css("display","block");
  	$(".gwcxx").css("display","block");
  },function(){
  	$(".xlgwc").css("display","none");
  	$(".gwcxx").css("display","none");
  })
// 点击图片关闭
  	$(".t-close").click(function(){$(".pic1").css("display","none")});
// 左侧下拉框
	$(".fenlei").hover(function(){
		var index=$(".fenlei").index($(this));
		$(".ck").css("display","none").eq(index).css("display","block");
	},function(){
        $(".ck").css("display","none");
	})
// banner
var flag=true;
var now=0;
var next=0;
$(".bannerzmain .bannertu").css("display","none").eq(0).css("display","block");
$(".anniu1").eq(0).css("background","#b61b1f");
var t=setInterval(move,2000);
$(".bannerzmain .middle").hover(function(){
    clearInterval(t);
    $(".anniuL").css("display","block");
    $(".anniuR").css("display","block");
},function(){
    t=setInterval(move,2000);
    $(".anniuL").css("display","none");
    $(".anniuR").css("display","none");
})
function move(){
	next++;
	if (next==$(".bannerzmain .bannertu").length) {
       next=0;
	}
	$(".bannerzmain .bannertu").eq(now).fadeOut().end().eq(next).fadeIn(function(){flag=true});
	$(".anniu1").eq(now).css("background","#3e3e3e").end().eq(next).css("background","#b61b1f");
	now=next;
}
function moveL(){
	next--;
	if (next<0) {
       next=$(".bannerzmain .bannertu").length-1;
	}
	$(".bannerzmain .bannertu").eq(now).fadeOut().end().eq(next).fadeIn(function(){flag=true});
	$(".anniu1").eq(now).css("background","#3e3e3e").end().eq(next).css("background","#b61b1f");
	now=next;
}
$(".anniuL").click(function(){
	if (flag) {
       moveL();
       flag=false;
	}
})
$(".anniuR").click(function(){
	if (flag) {
       move();
       flag=false;
	}
})
$(".anniu1").mouseover(function(){
	var index=$(".anniu1").index($(this));
    $(".bannerzmain .bannertu").eq(now).fadeOut().end().eq(index).fadeIn();
    $(".anniu1").eq(now).css("background","#3e3e3e").end().eq(index).css("background","#b61b1f");
    now=index;
    next=index;
})
// banner右
var bannerflag=true;
if (bannerflag) {
        bannerflag=false;
$(".kgz").mouseover(function(){
    var index=$(".kgz").index($(this));
    $(".middlekx").css("zIndex","5").eq(index).css("zIndex","10");
    $(".middlekx").animate({"top":"28px"},function(){
        $(".kgx").css("display","none").eq(index).css("display","block");
        
        bannerflag=true;
    });
    $(".middlekg").animate({"top":"-43px"}); 
})
}
$(".hfcz").css("display","none").eq(0).css("display","block");
$(".gnjpz").css("display","none").eq(0).css("display","block");
$(".zzry").css("display","none").eq(0).css("display","block");
$(".dk").css("display","none").eq(0).css("display","block");
$(".l3").eq(0).css("background","#c81623");
$(".l4").eq(0).css("background","#c81623");
$(".l2").eq(0).css("background","#c81623");
$(".l5").eq(0).css("background","#c81623");
$(".l1a1").eq(0).css("color","#fff");
$(".l1a2").eq(0).css("color","#fff");
$(".l1a4").eq(0).css("color","#fff");
$(".l1a5").eq(0).css("color","#fff");
$(".sjx1").eq(0).css("display","block");
$(".sjx2").eq(0).css("display","block");
$(".sjx4").eq(0).css("display","block");
$(".sjx5").eq(0).css("display","block");
$(".l3").mouseover(function(){
    var index=$(".l3").index($(this));
        $(".hfcz").css("display","none").eq(index).css("display","block");
        $(".l3").css("background","#fff").eq(index).css("background","#c81623");
        $(".l1a1").css("color","#666").eq(index).css("color","#fff");
        $(".sjx1").css("display","none").eq(index).css("display","block");
    })
$(".l2").mouseover(function(){
    var index=$(".l2").index($(this));
        $(".gnjpz").css("display","none").eq(index).css("display","block");
        $(".l2").css("background","#fff").eq(index).css("background","#c81623");
        $(".l1a2").css("color","#666").eq(index).css("color","#fff");
        $(".sjx2").css("display","none").eq(index).css("display","block");
    })
$(".l4").mouseover(function(){
    var index=$(".l4").index($(this));
        $(".zzry").css("display","none").eq(index).css("display","block");
        $(".l4").css("background","#fff").eq(index).css("background","#c81643");
        $(".l1a4").css("color","#666").eq(index).css("color","#fff");
        $(".sjx4").css("display","none").eq(index).css("display","block");
    })
$(".l5").mouseover(function(){
    var index=$(".l5").index($(this));
        $(".dk").css("display","none").eq(index).css("display","block");
        $(".l5").css("background","#fff").eq(index).css("background","#c81643");
        $(".l1a5").css("color","#666").eq(index).css("color","#fff");
        $(".sjx5").css("display","none").eq(index).css("display","block");
    })
$(".closex").click(function(){
    $(".middlekx").animate({"top":"209px"});
    $(".middlekg").animate({"top":"0"});
    $(".kgx").css("display","none") 
})
// 轮播图
var flag1=true;
var a=setInterval(hh,2000);
var aw=$(".bannerbottom .hezi").eq(0).outerWidth(true);
$(".bannerbottom .right").hover(function(){
	clearInterval(a);
	$(".bannerbottom .zf").css("display","block");
	$(".bannerbottom .yf").css("display","block");
},function(){
	a=setInterval(hh,2000);
	$(".bannerbottom .zf").css("display","none");
	$(".bannerbottom .yf").css("display","none");
})
function hh(){
    	$(".bannerbottom .right1").eq(0).animate({left:-aw},function(){
                $(".bannerbottom .right1").append($(".bannerbottom .right1 .hezi:first-child")).css("left",0);
                flag1=true;
    	})
    }
function hhL(){
        $(".bannerbottom .right1 .hezi:last-child").insertBefore(".bannerbottom .right1 .hezi:first-child");
        $(".bannerbottom .right1").css("left",-aw).animate({left:0},function(){flag1=true});
    }
$(".bannerbottom .zf").click(function(){
         if (flag1) {
         	hhL();
         	flag1=false;
         }
    })
$(".bannerbottom .yf").click(function(){
         if (flag1) {
         	hh();
         	flag1=false;
         }
    })
$(".cnxhbottom").eq(0).css("display","block");
var cnxh=0;
$(".hyp").click(function(){
	cnxh++;
	if (cnxh==$(".cnxhbottom").length) {
          cnxh=0;
	}
	$(".cnxhbottom").css("display","none").eq(cnxh).css("display","block");
})
// 猜你喜欢
$(".cnxh").hover(function(){
         $(".cnxhxx").css("left",0).animate({"left":$(".cnxh").width()-$(".cnxhxx").width()});
},function(){
     $(".cnxhxx").css("left",$(".cnxh").width()-$(".cnxhxx").width());
})
// 一楼
lunbo($(".F1top3"),$(".F1top2"),$(".F1top4"),$(".F1 .one"),$(".F1 .dp"),$(".F1 .dp1"),$(".F1 .dp2"))
lunbo($(".F2top3"),$(".F2top2"),$(".F2top4"),$(".F2 .one"),$(".F2 .F2xiala"),$(".F2 .F2xiala1"),$(".F2 .F2xiala2"))
lunbo($(".F3top3"),$(".F3top2"),$(".F3top4"),$(".F3 .one"),$(".F3 .F3xiala"),$(".F3 .F3xiala1"),$(".F3 .F3xiala2"))
lunbo($(".F4top3"),$(".F4top2"),$(".F4top4"),$(".F4 .one"),$(".F4 .F4xiala"),$(".F4 .F4xiala1"),$(".F4 .F4xiala2"))
lunbo($(".F5top3"),$(".F5top2"),$(".F5top4"),$(".F5 .one"),$(".F5 .F5xiala"),$(".F5 .F5xiala1"),$(".F5 .F5xiala2"))
lunbo($(".F6top3"),$(".F6top2"),$(".F6top4"),$(".F6 .one"),$(".F6 .F6xiala"),$(".F6 .F6xiala1"),$(".F6 .F6xiala2"))
lunbo($(".F7top3"),$(".F7top2"),$(".F7top4"),$(".F7 .one"),$(".F7 .F7xiala"),$(".F7 .F7xiala1"),$(".F7 .F7xiala2"))
lunbo($(".F8top3"),$(".F8top2"),$(".F8top4"),$(".F8 .one"),$(".F8 .F8xiala"),$(".F8 .F8xiala1"),$(".F8 .F8xiala2"))
lunbo($(".F9top3"),$(".F9top2"),$(".F9top4"),$(".F9 .one"),$(".F9 .F9xiala"),$(".F9 .F9xiala1"),$(".F9 .F9xiala2"))
lunbo($(".F10top3"),$(".F10top2"),$(".F10top4"),$(".F10 .one"),$(".F10 .F10xiala"),$(".F10 .F10xiala1"),$(".F10 .F10xiala2"))
lunbo($(".F11top3"),$(".F11top2"),$(".F11top4"),$(".F11 .one"),$(".F11 .F11xiala"),$(".F11 .F11xiala1"),$(".F11 .F11xiala2"))
function lunbo(a,b,c,d,e,f,g){
a.eq(0).css({"borderLeft":"1px solid #C81623","borderRight":"1px solid #C81623","borderBottom":"1px solid #fff","borderTop":"3px solid #C81623","height":"32px","lineHeight":"30px"});
d.eq(0).css("display","none");
e.eq(0).css("display","block");
b.css("lineHeight","34px");
c.css("lineHeight","34px");

a.eq(0).mouseover(function(){
	a.eq(0).css({"borderLeft":"1px solid #C81623","borderRight":"1px solid #C81623","borderBottom":"1px solid #fff","borderTop":"3px solid #C81623","height":"32px","lineHeight":"30px"});
	c.eq(0).css({"lineHeight":"34px","borderLeft":"none","borderRight":"1px solid #ededed","borderBottom":"1px solid #C81623","borderTop":"1px solid #ededed","height":"34px"});
	e.eq(0).css("display","block");
	f.css("display","none");
	b.css({"borderLeft":"none","borderRight":"none","borderBottom":"1px solid #C81623","borderTop":"1px solid #ededed","height":"34px","lineHeight":"34px"})
    d.css("display","block").eq(0).css("display","none");
    g.eq(0).css("display","none");
})
b.mouseover(function(){
	var index=b.index($(this));
    g.eq(0).css("display","none");
	e.eq(0).css("display","none");
    f.css("display","none").eq(index).css("display","block");
    b.css({"borderLeft":"none","borderRight":"none","borderBottom":"1px solid #C81623","borderTop":"1px solid #ededed","height":"34px","lineHeight":"34px"}).eq(index).css({"borderLeft":"1px solid #C81623","borderRight":"1px solid #C81623","borderBottom":"1px solid #fff","borderTop":"3px solid #C81623","height":"32px","lineHeight":"30px"});
    a.eq(0).css({"lineHeight":"34px","borderLeft":"1px solid #ededed","borderRight":"none","borderBottom":"1px solid #C81623","borderTop":"1px solid #ededed","height":"34px"});
    c.eq(0).css({"lineHeight":"34px","borderLeft":"none","borderRight":"1px solid #ededed","borderBottom":"1px solid #C81623","borderTop":"1px solid #ededed","height":"34px"});
    d.css("display","block").eq(index).css("display","none").end().eq(index+1).css("display","none");
})
c.eq(0).mouseover(function(){
	f.css("display","none");
	b.css({"borderLeft":"none","borderRight":"none","borderBottom":"1px solid #C81623","borderTop":"1px solid #ededed","height":"34px","lineHeight":"34px"});
	d.css("display","block").eq(7).css("display","none");
	c.eq(0).css({"borderLeft":"1px solid #C81623","borderRight":"1px solid #C81623","borderBottom":"1px solid #fff","borderTop":"3px solid #C81623","height":"32px","lineHeight":"30px"});
	a.eq(0).css({"borderLeft":"1px solid #ededed","borderRight":"none","borderBottom":"1px solid #C81623","borderTop":"1px solid #ededed","height":"34px","lineHeight":"34px"});
	e.eq(0).css("display","none");
	g.eq(0).css("display","block");
})
}
// F1轮播图
F1($(".F1 .dpleft2 img"),$(".F1xanniu1"),$(".F1 .dpleft2"),$(".F1anniuleft"),$(".F1anniuright"))
F1($(".F3 .F3xialaleft1 img"),$(".F3xanniu1"),$(".F3 .F3xialaleft"),$(".F3anniuleft"),$(".F3anniuright"))
F1($(".F4 .F4xialaleft1 img"),$(".F4xanniu1"),$(".F4 .F4xialaleft"),$(".F4anniuleft"),$(".F4anniuright"))
F1($(".F5 .F5xialaleft1 img"),$(".F5xanniu1"),$(".F5 .F5xialaleft"),$(".F5anniuleft"),$(".F5anniuright"))
F1($(".F10 .F10xialaleft1 img"),$(".F10xanniu1"),$(".F10 .F10xialaleft"),$(".F10anniuleft"),$(".F10anniuright"))
F1($(".F11 .F11xialaleft1 img"),$(".F11xanniu1"),$(".F11 .F11xialaleft"),$(".F11anniuleft"),$(".F11anniuright"))
F1($(".F12bottom2top:eq(0) img"),$(".F12xanniu1"),$(".F12bottom2top:eq(0)"),$(".F12anniuleft"),$(".F12anniuright"))
F1($(".F12bottom2top:eq(1) img"),$(".F13xanniu1"),$(".F12bottom2top:eq(1)"),$(".F13anniuleft:eq(0)"),$(".F13anniuright:eq(0)"))
function F1(a,b,c,d,e){
var F1now=0;
var F1next=0;
var F1flag=true;
var F1mw=a.width();
var F1t=setInterval(F1move,2000);
b.eq(0).css("background","#C81623");
a.css("left",F1mw).eq(0).css({"left":0});
c.hover(function(){
	clearInterval(F1t);
	d.css("display","block");
	e.css("display","block");
},function(){
    F1t=setInterval(F1move,2000);
    d.css("display","none");
	e.css("display","none");
})
 function F1move(){
    	F1next++;
    	if (F1next>=a.length) {
              F1next=0;
    	}
    	a.eq(F1next).css("left",F1mw).end().eq(F1now).animate({"left":-F1mw},function(){F1flag=true}).end().eq(F1next).animate({"left":0});
    	b.eq(F1now).css("background","#3e3e3e").end().eq(F1next).css("background","#C81623");
    	F1now=F1next;
    }
    function F1moveL(){
    	F1next--;
    	if (F1next<0) {
              F1next=a.length-1;
    	}
    	a.eq(F1next).css("left",-F1mw).end().eq(F1now).animate({"left":F1mw},function(){F1flag=true}).end().eq(F1next).animate({"left":0});
    	b.eq(F1now).css("background","#3e3e3e").end().eq(F1next).css("background","#C81623");
    	F1now=F1next;
    }
    e.click(function(){
    	if (F1flag) {
    	F1move();
    	F1flag=false;
    	}
    })
    d.click(function(){
    	if (F1flag) {
    	F1moveL();
    	F1flag=false;
    	}
    })
    b.click(function(){
    	var index=$(this).index();
    	if (F1now<index) {
            a.eq(index).css("left",F1mw).end().eq(F1now).animate({left:-F1mw}).end().eq(index).animate({left:0});
    	}
    	else if(F1now>index){
    		a.eq(index).css("left",-F1mw).end().eq(F1now).animate({left:F1mw}).end().eq(index).animate({left:0});
    	}
    	else{
    		return;
    	}
    	b.eq(index).css("background","#C81623").end().eq(F1now).css("background","#3e3e3e");
    	F1now=index;
    	F1next=index;
    })
}
// 2楼轮播
F2($(".F2 .F2xialaleft1 img"),$(".F2xanniu1"),$(".F2 .F2xialaleft"),$(".F2anniuleft"),$(".F2anniuright"),$(".F2 .F2xialaleft2 img"))
F2($(".F6 .F6xialaleft1 img"),$(".F6xanniu1"),$(".F6 .F6xialaleft"),$(".F6anniuleft"),$(".F6anniuright"),$(".F6 .F6xialaleft2 img"))
F2($(".F7 .F7xialaleft1 img"),$(".F7xanniu1"),$(".F7 .F7xialaleft"),$(".F7anniuleft"),$(".F7anniuright"),$(".F7 .F7xialaleft2 img"))
F2($(".F8 .F8xialaleft1 img"),$(".F8xanniu1"),$(".F8 .F8xialaleft"),$(".F8anniuleft"),$(".F8anniuright"),$(".F8 .F8xialaleft2 img"))
F2($(".F9 .F9xialaleft1 img"),$(".F9xanniu1"),$(".F9 .F9xialaleft"),$(".F9anniuleft"),$(".F9anniuright"),$(".F9 .F9xialaleft2 img"))
function F2(a,b,c,d,e,f){
var F2now=0;
var F2next=0;
var F2flag=true;
var F2mw=a.width();
var F2t=setInterval(F2move,2000);
b.eq(0).css("background","#C81623");
a.css("left",F2mw).eq(0).css({"left":0});
f.css("left",F2mw).eq(0).css({"left":0});
c.hover(function(){
	clearInterval(F2t);
	d.css("display","block");
	e.css("display","block");
},function(){
    F2t=setInterval(F2move,2000);
    d.css("display","none");
	e.css("display","none");
})
 function F2move(){
    	F2next++;
    	if (F2next>=a.length) {
              F2next=0;
    	}
    	a.eq(F2next).css("left",F2mw).end().eq(F2now).animate({"left":-F2mw},function(){F2flag=true}).end().eq(F2next).animate({"left":0});
    	f.eq(F2next).css("left",F2mw).end().eq(F2now).animate({"left":-F2mw},function(){F2flag=true}).end().eq(F2next).animate({"left":0});
    	b.eq(F2now).css("background","#3e3e3e").end().eq(F2next).css("background","#C81623");
    	F2now=F2next;
    }
    function F2moveL(){
    	F2next--;
    	if (F2next<0) {
              F2next=a.length-1;
    	}
    	a.eq(F2next).css("left",-F2mw).end().eq(F2now).animate({"left":F2mw},function(){F2flag=true}).end().eq(F2next).animate({"left":0});
    	f.eq(F2next).css("left",-F2mw).end().eq(F2now).animate({"left":F2mw},function(){F2flag=true}).end().eq(F2next).animate({"left":0});
    	b.eq(F2now).css("background","#3e3e3e").end().eq(F2next).css("background","#C81623");
    	F2now=F2next;
    }
    e.click(function(){
    	if (F2flag) {
    	F2move();
    	F2flag=false;
    	}
    })
    d.click(function(){
    	if (F2flag) {
    	F2moveL();
    	F2flag=false;
    	}
    })
    b.click(function(){
    	var index=$(this).index();
    	if (F2now<index) {
            a.eq(index).css("left",F2mw).end().eq(F2now).animate({left:-F2mw}).end().eq(index).animate({left:0});
            f.eq(index).css("left",F2mw).end().eq(F2now).animate({left:-F2mw}).end().eq(index).animate({left:0});
    	}
    	else if(F2now>index){
    		a.eq(index).css("left",-F2mw).end().eq(F2now).animate({left:F2mw}).end().eq(index).animate({left:0});
    		f.eq(index).css("left",-F2mw).end().eq(F2now).animate({left:F2mw}).end().eq(index).animate({left:0});
    	}
    	else{
    		return;
    	}
    	b.eq(index).css("background","#C81623").end().eq(F2now).css("background","#3e3e3e");
    	F2now=index;
    	F2next=index;
    })
}
// 天天低价轮播
var ttt=setInterval(ttdj,2000);
var tt=$(".ttdjbottomrightn11").eq(0).outerHeight(true);
$(".ttdjbottomrightn").hover(function(){
	clearInterval(ttt);
},function(){
    ttt=setInterval(ttdj,2000);
})
function ttdj() {
	$(".ttdjbottomrightn11:last-child").insertBefore(".ttdjbottomrightn11:first-child");
        $(".ttdjbottomrightn1").css("top",-tt).animate({top:0});
}
// 右导航
$(".ydh1").hover(function(){
   var index=$(".ydh1").index($(this));
   $(".hq").eq(index).css("backgroundColor","#c81623");
   $(".ydhword").eq(index).css("background","#c81623").animate({left:-62});
},function(){
	var index=$(".ydh1").index($(this));
   $(".hq").eq(index).css("backgroundColor","#7a6e6e");
   $(".ydhword").eq(index).css("background","#7a6e6e").animate({left:0});
})
jQuery.backTop($(".ydh1:eq(6)"),1000);
// 左导航
  var s;
  var flag_0=true;
  var flag_1=true;
  var flag_2=true;
  $(".FF1").css({"margin":"0","fontSize":"13px"});
  $(".FF1D").css({"margin":"0"});
  $(".FF1z").css({"fontSize":"20px","marginTop":"0"});
  $(".Fx").each(function(index,val){
      $(".Fx").eq(index).data("h",$(".Fx").eq(index).offset().top);
  })
  $(window).on("scroll",function(){
  	if (flag_2) {
  		var obj=document.body.scrollTop?document.body:document.documentElement;
  		var Top=$(obj).scrollTop();
  		if (Top>=$(".Fx").eq(0).data("h")-300) {
          $(".zdh").css("display","block");
    }
    	else{
          $(".zdh").css("display","none");
      		
    	}
    	$(".Fx").each(function(index,val){
            if (Top<$(".Fx").eq(index).data("h")-300) {
                $(".FF1D").eq(index).css({"top":"0","display":"none"});
            }
    		if (Top>=$(".Fx").eq(index).data("h")-300) {
    			$(".Fx").each(function(index1,val1){
                  $(".zdhn1").eq(index1).css("display","block");
                  $(".zdhn2").eq(index1).css("display","none");
    			})
                  $(".zdhn1").eq(index).css("display","none");
                  $(".zdhn2").eq(index).css("display","block");
                  $(".FF1").eq(index).css("backgroundPosition","0 0");
                  $(".FF1D").eq(index).css("display","block").animate({"top":"26px"},1000);
                  s=index;
    		}
            if (Top>=$(".Fx").eq(index).data("h")+$(".Fx").eq(index).height()||Top<$(".Fx").eq(index).data("h")-300) {
                  $(".FF1").eq(index).css("backgroundPosition","0 -34px");
            }
    	})
   }
  })
  		$(".zdhn").each(function(index,val){
  			// $(".zdhn").eq(index).data("x",index);
           $(".zdhn").each(function(index,val){
            $(".zdhn").eq(index).click(function(){
                flag_2=false;
                $(document.body).animate({scrollTop:$(".Fx").eq(index).data("h")},function(){flag_2=true})
                $(document.documentElement).animate({scrollTop:$(".Fx").eq(index).data("h")},function(){flag_2=true})
                s=$(".zdhn").eq(index).data("x");
            })
  			$(".zdhn").eq(index).hover(function(){
                  $(".zdhn1").eq(index).css("display","none");
                  $(".zdhn2").eq(index).css({"display":"block","background":"red","color":"#fff"});
  			},function(){
  				if (index==s) {
		        return;
	       }
                  $(".zdhn1").eq(index).css("display","block");
                  $(".zdhn2").eq(index).css({"display":"none","background":"#fff","color":"red"});
                  
  			})
  		})
  		})
//懒加载
  $("img.lazy").lazyload({
    threshold:200,
     effect:"fadeIn"
  })
// 天天低价
$(".ttdjbottomleft1 img").hover(function(){
      $(".ttdjbottomleft1 img").animate({"marginLeft":"-10px"});
},function(){
      $(".ttdjbottomleft1 img").animate({"marginLeft":"0px"});
      
})
$(".ttdjbottommiddle1 img").hover(function(){
    var index=$(".ttdjbottommiddle1 img").index($(this));
      $(".ttdjbottommiddle1 img").eq(index).animate({"marginLeft":"-10px"});
},function(){
    var index=$(".ttdjbottommiddle1 img").index($(this));
      $(".ttdjbottommiddle1 img").eq(index).animate({"marginLeft":"0px"});
      
})
$(".ttdjbottommiddle2 img").hover(function(){
    var index=$(".ttdjbottommiddle2 img").index($(this));
      $(".ttdjbottommiddle2 img").eq(index).animate({"marginLeft":"-20px"});
},function(){
    var index=$(".ttdjbottommiddle2 img").index($(this));
      $(".ttdjbottommiddle2 img").eq(index).animate({"marginLeft":"0px"});
      
})

})