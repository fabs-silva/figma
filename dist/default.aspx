<!DOCTYPE html>
<html>
    <head>
        <style>
            body { margin: 0; padding: 0; overflow: hidden; }
            .content { position:absolute; top:0; bottom:0; left:0; right:0; width:100%; height:100%; border: 0; }
            #Loading { 
                position: fixed; height:100%; width:100%; z-index:99999; font-size:3rem; font-family: 'Segoe UI', Helvetica, sans-serif;
                background: #000; opacity:.5; color:#fff; text-align:center; padding-top: 42vh;
            }
        </style>
    </head>
    <body>
        <div id="Loading">Loading... </div>
        <script>
var global = {
    cache: {},
    defaultUrl: 'index.html', // set to entry html page
    initialLocation: window.location.href,
    loadUrlParamQueryKey: '',
    loadUrlParamRe: /loadUrl=(.+)(?:&|$)/gi,
    pagePath: '',
}

/** initializes application */
function onInit() {
    var match = global.loadUrlParamRe.exec(global.initialLocation);
    if (match != null) {
        global.defaultUrl = decodeURIComponent(match[1]);
        global.initialLocation = global.initialLocation.replace(global.loadUrlParamRe, '').replace(/\?$/, '');
    }
    global.loadUrlParamQueryKey = ((global.initialLocation.indexOf('?') !== -1) ? '&' : '?') + 'loadUrl=';
    trackPopState();
    openPage(global.defaultUrl, false);
}

function getUrlPath(url) {
    var protocolEndIndex = url.indexOf('://') + 3;
    var lastSeperatorIndex = url.substring(protocolEndIndex).lastIndexOf('/');
    return (lastSeperatorIndex !== -1) ? url.substring(0, lastSeperatorIndex + protocolEndIndex + 1) : url + '/';
}

function openPage(url, addToState) {
    if (global.cache[url]) {
        replaceContent(global.cache[url], url, addToState);
    }
    else {
        document.getElementById('Loading').style.display = 'block';
        var req = new XMLHttpRequest();
        req.addEventListener("load", function (evt) {
            replaceContent(req.response, url, addToState);
            document.getElementById('Loading').style.display = 'none';
            global.cache[url] = req.response;
        });
        req.open("GET", url);
        req.send();
    }
}

function replaceContent(content, url, addToState) {
    if (addToState) {
        var stateUrl = global.initialLocation + global.loadUrlParamQueryKey + encodeURIComponent(url);
        history.pushState({ url: url }, url, stateUrl);
    }
    global.pagePath = url;

    var contentElements = document.getElementsByClassName('content');
    for (let i = contentElements.length - 1; i >= 0; i--) {
        contentElements[i].parentElement.removeChild(contentElements[i]);
    }
    var iframe = document.createElement('iframe');
    iframe.className = 'content';
    document.body.appendChild(iframe);
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write('<base href="' + global.pagePath + '" />');
    iframe.contentWindow.document.write(content);
    iframe.contentWindow.document.close();
    changeLinks(iframe);
}

function changeLinks(iframe) {
    var elements = iframe.contentWindow.document.getElementsByTagName('A');
    for (let i = 0; i < elements.length; i++) {
        changeLinkClick(elements[i]);
    }
}

function changeLinkClick(elem) {
    let hashIndex = (elem.getAttribute('href') || '').indexOf('#');

    if (hashIndex === -1) {
        elem.addEventListener('click', function (evt) {
            openPage(elem.href, true);
            evt.preventDefault();
            return false;
        });
    }
    else {
        elem.addEventListener('click', function (evt) {
            var targetName = elem.getAttribute('href').substring(hashIndex + 1);
            var target = elem.ownerDocument.querySelector('a[name="' + targetName + '"]');
            if (target != null) {
                target.scrollIntoView();
            }
            evt.preventDefault();
            return false;
        });
    }
}

/**
 * watches when history goes backwards and loads the url
 */
function trackPopState() {
    window.addEventListener('popstate', function(e) {
        var url = (e.state && e.state.url) ? e.state.url : global.defaultUrl;
        openPage(url, false);
    });
}

onInit();

        </script>
    </body>
</html>

