var openBlipChat;

window.onload = function () {
		
	const appkey = "c25yb3V0ZXI6MzE1ZGQzZDctMDM2OS00N2U4LTg1YzktN2E2YzljM2ExY2I2";

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
