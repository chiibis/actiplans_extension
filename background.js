chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
        chrome.tabs.update( { "url": "https://online.actiplans.com/adtt/user/my_schedule.do" } );
    });
});
