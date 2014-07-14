
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
		
		var fbLikeCode = '<iframe src="http://www.facebook.com/plugins/like.php?href='+encodeURIComponent(url)+'&send=false&layout=button_count&width=120&show_faces=true&font&colorscheme=light&action=like&height=20" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:120px; height:20px;" allowTransparency="true"></iframe>';
		document.getElementById('fb-like').innerHTML = fbLikeCode;
	});
}

document.addEventListener('DOMContentLoaded', function(){
	shareCurrentURL();
});