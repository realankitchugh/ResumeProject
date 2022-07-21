var navMenu=document.querySelectorAll('.nav-menu a');
for(var i=0;i<navMenu.length;i++){
    navMenu[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetId=this.textContent.trim().toLowerCase();
        //console.log(targetId);
        var targetSection=document.getElementById(targetId);
        var interval=setInterval(function(){
            var targetCoordinates=targetSection.getBoundingClientRect();
            if(targetCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 50);
    });
}