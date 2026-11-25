(function(){
  var root=document.documentElement;
  var drawer=document.getElementById('mob-drawer');
  var overlay=document.getElementById('mob-overlay');
  var toggle=document.getElementById('mob-toggle');
  var closeBtn=document.getElementById('mob-close');
  function setOpen(open){
    if(!drawer)return;
    drawer.classList.toggle('open',open);
    overlay.classList.toggle('open',open);
    toggle.setAttribute('aria-expanded',open?'true':'false');
    root.style.overflow=open?'hidden':'';
  }
  if(toggle){
    toggle.addEventListener('click',function(){setOpen(true)});
    closeBtn.addEventListener('click',function(){setOpen(false)});
    overlay.addEventListener('click',function(){setOpen(false)});
    drawer.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false)});
  }
  var items=document.querySelectorAll('.faq-item');
  for(var i=0;i<items.length;i++){
    (function(item){
      var q=item.querySelector('.faq-q');
      var a=item.querySelector('.faq-a');
      q.addEventListener('click',function(){
        var open=item.classList.toggle('open');
        q.setAttribute('aria-expanded',open?'true':'false');
        a.style.maxHeight=open?a.scrollHeight+'px':'0px';
      });
    })(items[i]);
  }
})();
