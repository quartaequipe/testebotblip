var openBlipChat;

window.onload = function () {
		
	const appkey = "aGVucmlxdWVib3QxOmE5YTg2OGFmLTY5NDctNGQ3OC04NTUwLTU0ZGMxNjUyMjI3Ng==";

	var client = new BlipChat()
	.withAppKey(appkey)
	.withEventHandler(BlipChat.LOAD_EVENT, function(){
		var iframe = document.getElementById("blip-chat-iframe");
		iframe.contentWindow.postMessage({ code: "ShowCloseButton", showCloseButton: true }, iframe.src);	
	});
		
	client.build();

	openBlipChat = function() {
		client.widget._openChat();
	}

}