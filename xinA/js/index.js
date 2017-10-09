 $(function(){
        var dHeight = $(document).height();
        $(document).scroll(function(){
            var top = $(document).scrollTop();
            if(top > dHeight){
                $('#d1').show();
            }else{
                $('#d1').hide();
            }
        });
        $("#d1").click(function(){
            var timer = setInterval(function(){
                var backtop = document.body.scrollTop;/*当前*/
                var speedtop = backtop / 5;/*当前的一半*/
                document.body.scrollTop = backtop - speedtop;/*再一半*/
                if(backtop == 0){
                    clearInterval(timer);
                }
            },30);
        })
    })