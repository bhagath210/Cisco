function ask_query() {
    var main3 = document.querySelector('body > div > div.main3');
    main3.style.display = "block";
    var main1 = document.querySelector('body > div > div.main1');
    main1.style.display = "none";
    var main2 = document.querySelector('body > div > div.main2');
    main2.style.display = "none";
}
function cancle_query() {
    var main3 = document.querySelector('body > div > div.main3');
    main3.style.display = "none";
    var main1 = document.querySelector('body > div > div.main1');
    main1.style.display = "block";
    var main2 = document.querySelector('body > div > div.main2');
    main2.style.display = "block";
}
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}   

function search(){
    document.querySelector('#search-btn').style.display="block";
}