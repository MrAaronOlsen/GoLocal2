chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
      let script = document.createElement('script');
      script.type = 'text/javascript';
  
      let code;
      let go_local = message.go_local;
  
      if ( go_local === false ) {
        code = 'window.nwtServerDebugRef.off();';
        console.log("[GO LOCAL]: Switching off debug mode");
      } else if ( go_local === true ) {
        let port = message.port;
        let url = message.url;
  
        code = `window.nwtServerDebugRef.on('${port}', '${url}');`;
        console.log(`[GO LIVE] Switching on debug mode. Port=${port}, URL=${url}`);
      } else {
        return;
      };
  
      script.appendChild(document.createTextNode(code));
  
      (document.head || document.documentElement).appendChild(script);
      script.remove();
    }
  );