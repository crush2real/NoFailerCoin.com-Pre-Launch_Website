(function(){
  'use strict';

  // Image fallback (optional IPFS placeholder)
  const IPFS_IMG = "https://ipfs.io/ipfs/QmSwc4octw9Jkq6ph9CH8VrkxBeYyiaAMwj4Z9aVvGd5R";
  function addImgFallback(id){
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("error", () => { el.src = IPFS_IMG; }, { once:true });
  }
  addImgFallback("brandLogo");
  addImgFallback("heroImg");

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Placeholder for future countdown activation:
  // When you have a date, replace the "Launch coming soon!" text via JS
  // or swap in a countdown function here.
})();