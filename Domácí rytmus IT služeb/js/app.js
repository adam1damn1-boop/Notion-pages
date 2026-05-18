(function(){
  const select=document.querySelector("[data-lang-select]");
  const saved=localStorage.getItem("site-lang")||"cs";
  if(select){select.value=saved;select.addEventListener("change",e=>{localStorage.setItem("site-lang",e.target.value);document.documentElement.lang=e.target.value;});}
  document.documentElement.lang=saved;
  const io="IntersectionObserver" in window?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");io.unobserve(entry.target);}})},{threshold:.16}):null;
  document.querySelectorAll(".reveal").forEach(el=>io?io.observe(el):el.classList.add("is-visible"));
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>anchor.addEventListener("click",event=>{const target=document.querySelector(anchor.getAttribute("href"));if(target){event.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"});}}));
})();
