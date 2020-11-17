//ITSM-智能客服页面js文件
window.onload=function (){
    //Make the DIV element draggagle:
    dragElement(document.getElementById("contact_us_header"));
}
function close_contact_us_detail() {
    $('#contact_us_detail').hide();
}

function open_contact_us_detail() {
    $('#contact_us_detail').show();
}




function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup =  function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        };
        // call a function whenever the cursor moves:
        document.onmousemove = function elementDrag(e) {
            e = e || window.event;
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        };
    }


}