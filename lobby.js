const Client = require("./client");
window.client = new Client();
window.client.on("BATTLEOPENED",(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel) => {
	console.log("BATTLE OPENED!!!!!!!!!!!!!!")
	document.getElementById("gameEntry").innerHTML="<!--to be inserted by js--><li id = \"gameSubEntry\"><div style=\"cursor:pointer; width: 120%; background-color: rgba(100,100,100,0.3); \" type=\"button\" onmousedown=\"this.style.background=\'#1a1a1a\'\" onmouseleave=\"this.style.background='#ffffff';this.style.opacity=0.3;\" onmouseover=\"this.style.background=\'#ffffff\';this.style.opacity=1;\" onmouseup=\"this.style.background=\'#ffffff\';this.style.opacity=1;\"><p>Battle name:"+title+"</p></br><p>Battle host:"+founder+"</p><p>map:"+map+"</p></div></li><!--to be inserted by js-->"


});
