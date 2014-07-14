
function shareCurrentURL(){
	chrome.tabs.query({
		active: true,
		lastFocusedWindow: true
	}, function(array_of_tabs){
		var tab = array_of_tabs[0];
		var url = tab.url;
		var title = tab.title;
		document.getElementById('url').innerHTML = url;
		var tweetCode = '<a target="_blank" href="https://twitter.com/intent/tweet?text='+encodeURIComponent(title)+'&url='+encodeURIComponent(url)+'">Tweet</a>';
		document.getElementById('twitter').innerHTML = tweetCode;
	});
}

document.addEventListener('DOMContentLoaded', function(){
	shareCurrentURL();
});