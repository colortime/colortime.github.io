//top
$(function(){
	$('.header-apply').hover(function(){
        $('.header-apply ul').show();
    },function(){
        $('.header-apply ul').hide();
    });
    $('.header-serve').hover(function(){
        $('.header-serve ul').show();
    },function(){
        $('.header-serve ul').hide();
    });
	 $('.switch-right').hover(function(){
        $('.switch-right-list').show();
    },function(){
        $('.switch-right-list').hide();
    });
});
// 首页轮播banner1
$(function(){
	var num=0;
	var timer=null;
	$('.main-top .ban-left ul .ban-run').mouseover(function(){
        var Lname=$(this).attr('name');
        //alert(Lname);
        if(Lname == 0){
            $(this).addClass('last-cur').siblings().removeClass('cur');
        }else{
            $(this).addClass('cur').siblings().removeClass('cur last-cur');
        }
		var index = $(this).index();
		num=index;
		//alert(num);
		$('.main-top .ban-right ul li').eq(num).fadeIn(100).siblings().fadeOut(100);
	});
	timer = setInterval(autoplay,3000);
	$('.main-top .banner').mouseover(function(){
		clearInterval( timer );
	}).mouseout(function(){
		timer = setInterval(autoplay,3000);
	});
	function autoplay(){
		num++;
		if(num==10){
			num=0;
		};
        if(num == 9){
            $('.main-top .ban-left ul .ban-run').eq(9).addClass('last-cur').siblings().removeClass('cur');
			$('.main-top .ban-right ul li').eq(9).fadeIn(1000).siblings().fadeOut(1000);
        }else{
            // alert(num);
            $('.main-top .ban-left ul .ban-run').eq(num).addClass('cur').siblings().removeClass('cur last-cur');
            $('.main-top .ban-right ul li').eq(num).fadeIn(1000).siblings().fadeOut(1000);
        };
	}
});

// 常见问题
$(function(){
	$('.quesition-nav ul li').hover(function(){
		$(this).addClass('cur');
	},function(){
		$(this).removeClass('cur');
	});
});
//关于我们——锚文本
$(function(){
	$('.gywm-con .gywm-nav ul li').click(function(){
		$(this).addClass('act').siblings().removeClass('act');
	});
});
//测试题——试题
$(function(){
	$('.quesition-list0').find('.rxcs-btn0 a').click(function(){
		$('.rxcs-btn1').css('display','block');
		$('.rxcs-btn1 .prev').css('visibility','hidden');
		$(this).parent().parent().parent().css('display','none');
		$(this).parent().parent().parent().next().addClass('cur');
	});
	var num=0;
	$('.rxcs-btn1 .next').click(function(){
			num++;
			if(num==14){
				$('.rxcs-btn1 .next').css('display','none');
				$('.quesition-list1').eq(14).addClass('cur').siblings().removeClass('cur');
			}else{
				$('.quesition-list1').eq(num).addClass('cur').siblings().removeClass('cur');
				$('.rxcs-btn1 .prev').css('visibility','visible');
			}
	});
	$('.rxcs-btn1 .prev').click(function(){
			num--;
			if(num==-1){
				$('.quesition-list1').removeClass('cur');
				$('.quesition-list0').css('display','block');
				$('.rxcs-btn1').css('display','none');
			}else{
				$('.quesition-list1').eq(num).addClass('cur').siblings().removeClass('cur');
			}
			if(num==0){
				$('.rxcs-btn1 .prev').css('visibility','hidden');
			}
            if(num==13){
                $('.rxcs-btn1 .next').css('display','block');
            }
            //alert(num);
	});
});
// 测试题
$(function(){
	//测试题——单选
	var num=0;
	$('.quesition-list1 .two-page p').click(function(){
		var score=$(this).attr('name');
		$(this).addClass('cur').siblings().removeClass('cur');
		$(this).siblings('input').attr('value',score);
	});
	var numl=0;
	$('#button').click(function(){
		var numk=0;
		$('.quesition-list1').each(function(){
			numk=Number($(this).find('input').val());
			numl=numl+numk;
		});
		$('#total').attr('value',numl);
	});
	
});
