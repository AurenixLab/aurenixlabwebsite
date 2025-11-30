/* Typewriter + Theme System */
const pageTexts={
"index.html":["Aurenix Lab – Intelligenz trifft Innovation.","Stabile und moderne Entwicklung für FiveM.","Effiziente Lösungen. Klarer Code. Saubere Systeme."],
"shop.html":["Kaufe Ressourcen direkt in unserem Shop.","Sichere Auslieferung über Tebex.","Einfache Installation. Sofort einsatzbereit."],
"products.html":["Entdecke die Aurenix Script-Auswahl.","Optimiert für ESX & QBCore.","Fortlaufend erweitert und verbessert."],
"docs.html":["Alle Installationsschritte verständlich erklärt.","Konfiguration, Fehlerbehebung & mehr.","Eine Dokumentation, die wirklich hilft."],
"updates.html":["Transparente Changelogs.","Regelmäßige Verbesserungen.","Alle Neuerungen auf einen Blick."],
"contact.html":["Direkter Support über Discord.","Schnelle Hilfe bei technischen Fragen.","Wir unterstützen dich zuverlässig."]
};
document.addEventListener("DOMContentLoaded",()=>{
 const file=window.location.pathname.split("/").pop()||"index.html";
 const texts=pageTexts[file]||["Aurenix Lab"];
 const tw=document.getElementById("typewriter");let i=0,j=0,del=false;
 function run(){
  const cur=texts[i];
  if(!del){tw.textContent=cur.substring(0,j++);if(j>cur.length){del=true;return setTimeout(run,1200);}}
  else{tw.textContent=cur.substring(0,j--);if(j<0){del=false;i=(i+1)%texts.length;}}
  setTimeout(run,del?40:60);
 }
 run();
 const saved=localStorage.getItem("theme");if(saved)document.body.className="theme-"+saved;
 document.getElementById("darkBtn").onclick=()=>{document.body.className="theme-dark";localStorage.setItem("theme","dark");};
 document.getElementById("lightBtn").onclick=()=>{document.body.className="theme-light";localStorage.setItem("theme","light");};
});
