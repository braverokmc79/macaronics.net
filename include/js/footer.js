

 $(window).load(function(){
    	var fullWidth =true;
    	var controls =true;	
    	var responsive =true;
    	var dimensions_width ='1920';
	var dimensions_height ='450';
	var timeout ='5000';   
	var increase =true;
	var pauseOnHover =true;
	var slideEndAnimation =false;
	var autoChange =true;

	var dimensions =dimensions_width +","+dimensions_height;
	

    $('.slider').fractionSlider({
        'fullWidth': 			fullWidth,
        'controls': 			controls,
        'responsive': 			responsive,
        'dimensions': 			dimensions,
        'timeout' :             timeout,
        'increase': 			true,
        'pauseOnHover': 		pauseOnHover,
        'slideEndAnimation': 	false,
        'autoChange':           autoChange
	

    });
});
// WOW Animation
new WOW().init();


$(document).ready(function(){
    var m_addr ="<? echo $m_addr; ?> " ;
    var m_port ="<?  echo $m_port ; ?>";
    var m_agent = "<? echo  $m_agent ; ?>";
    
    $('#movieTicker').vTicker('init', {
        speed: 400, 
        pause: 1000,
        showItems: 5,
        padding:15});
        

       //search
    $("#searchsubmit_top").click(function(){
        
       
        if($("#s_top").val() ==''){
            alert("검색어를 입력하세요.");
            $("#s_top").focus();
            return false;
        }else{
            var sKeyword=$("#s_top").val();
            var str=encodeURIComponent(sKeyword).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
            var act='/index.php/user/search/lists/s/'+str+'/page/1';
            
            $("#site-searchform_top").attr("action", act).submit();
            
        }

    });
    
     $("#searchsubmit").click(function(){
        if($("#s").val() ==''){
            alert("검색어를 입력하세요.");
            $("#s").focus();
            return false;
        }else{
            var sKeyword=$("#s").val();
            var str=encodeURIComponent(sKeyword).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
            var act='/index.php/user/search/lists/s/'+str+'/page/1';
            
            $("#site-searchform").attr("action", act).submit();
            
        }

    });     


});

function board_search_enter(form){
          var keycode =window.event.keyCode;
          if(keycode==13){
                  $("#search_btn").click();
          }
}

function board_search_enter_top(form){
    
    var keycode =window.event.keyCode;
    if(keycode==13)$("#searchsubmit_top").click();  
    
}     