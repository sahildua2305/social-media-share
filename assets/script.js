function shareCurrentURL() {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(array_of_tabs) {
        var tab = array_of_tabs[0];
        var url = tab.url;
        var title = tab.title;

        var tweetCode = '<a target="_blank" href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(url) + '"><img src="' + chrome.extension.getURL('assets/share-icons/twitter.png') + '"></a>';
        document.getElementById('twitter').innerHTML = tweetCode;

        var fbShareCode = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank"><img src="' + chrome.extension.getURL('assets/share-icons/facebook.png') + '"></a>';
        document.getElementById('fb-share').innerHTML = fbShareCode;

        var gplusShareCode = '<a href="https://plus.google.com/share?url=' + url + '" target="_blank"><img src="' + chrome.extension.getURL('assets/share-icons/gplus.png') + '"></a>';
        document.getElementById('gp-share').innerHTML = gplusShareCode;

        var linkedInShareCode = '<a href="https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title + '&summary=&source=" target="_blank"><img src="' + chrome.extension.getURL('assets/share-icons/linkedin.png') + '"></a>';
        document.getElementById('linkedIn-share').innerHTML = linkedInShareCode;

    });
}

document.addEventListener('DOMContentLoaded', function() {
    shareCurrentURL();
});
