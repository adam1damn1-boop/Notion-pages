(function(){
  var SERVICE_ORDER=['cleaning','upgrade','software','repair','webcam','alarm','appliances','literacy','tutor','chess','development','design'];
  function dict(){return window.I18N.cs;}
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];});}
  function renderCards(){var d=dict(),g={care:[],security:[],learning:[],design:[]};SERVICE_ORDER.forEach(function(slug){var s=d.services[slug];if(s)g[s.cat].push(Object.assign({slug:slug},s));});Object.keys(g).forEach(function(cat){var w=document.querySelector('.cards[data-cat="'+cat+'"]');if(!w)return;w.innerHTML=g[cat].map(function(s){return '<article class="card reveal"><div class="card-media"><img class="main" src="./img/'+s.slug+'--main.png" alt="'+escapeHtml(s.title)+'"><img class="hover" src="./img/'+s.slug+'--hover.png" alt="" aria-hidden="true"></div><div class="card-num">§ '+escapeHtml(s.num)+'</div><h3>'+escapeHtml(s.title)+'</h3><p class="card-body">'+escapeHtml(s.body)+'</p></article>';}).join('');});}
  document.addEventListener('DOMContentLoaded',renderCards);
})();
