function anterior(){

    const scroll=document.querySelector(".scroll");
    const div=document.getElementById('testimoniosContenedor');
    scroll.scrollTop=scroll.scrollWidth;

}

function siguiente(){

    const scroll=document.querySelector(".scroll");
    const div=document.getElementById('testimoniosContenedor');
    scroll.scrollTop=0;
}

window.onscroll = function() {
    var y = window.scrollX;
    console.log(y);
};