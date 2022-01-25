function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function is_dark(){
    $('#dark-status').prop('checked', true);
    $('<link/>', {
        id: 'dark-style',
        rel: 'stylesheet',
        type: 'text/css',
        href: 'css/style-dark.css'
    }).appendTo('head');
    setCookie('theme', 'dark', 3);
}

function is_light(){
    $('#dark-status').prop('checked', false);
    $('#dark-style').remove();
    setCookie('theme', 'light', 3);
}

$(function(){
    if(getCookie('theme') == 'dark'){
        is_dark();
    }else{
        is_light();
    }
});

$('.dark-toggle').on('click', function(){
    if(!$('#dark-status').is(':checked')){
        is_dark();
    }else{
        is_light();
    }
});