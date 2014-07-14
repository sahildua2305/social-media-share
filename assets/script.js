
function getCurrentURL(){
	chrome.tabs.query({
		active: true,
		lastFocusedWindow: true
	}, function(array_of_tabs){
		var tab = array_of_tabs[0];
		var url = tab.url;
		document.write(url);
	});
}

document.addEventListener('DOMContentLoaded', function(){
	getCurrentURL();
});