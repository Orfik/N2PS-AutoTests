<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>
<img
 src="../plane1b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:100px;top:100px;cursor:move;"
 onMousedown="DD.start(event)"
 oncontextmenu="return false"
 ondragstart="return false"
 ondragend="return DD.stop()"
>

<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:220px;top:100px;cursor:move;
 -moz-user-select:none;-khtml-user-select:none;user-select:none;"
>
<img class='drag'
 src="../plane2b.gif"
 alt='Перемещаемый объект'
 style="position:absolute;left:280px;top:150px;cursor:move;"
>

<script type="text/javascript">
var DD = {
    start: function(e) {
    if(typeof DDmove == 'boolean' && DDmove)return false;
    DDobj=getEventTarget(e);
    //if(!DDobj.className=='DRAG')return true;
    DDx=parseInt(DDobj.style.left) - (document.all? event.clientX : e.clientX)
    DDy=parseInt(DDobj.style.top) - (document.all? event.clientY : e.clientY)
    DDmove=true
    //document.onmousemove=DD.drag_drop
    addEvent(document, 'mousemove', DD.drag_drop)
    addEvent(DDobj, 'mouseup', DD.stop)
    //addEvent(DDobj, 'dragstart', DD.f)
    //addEvent(DDobj, 'dragend', DD.stop)
    //addEvent(DDobj, 'dragend', DD.stop)
    DDobj.style.zIndex=100; // сделать верхним
    //addEvent(DDobj, 'selectstart', DD.f, true);
},
    stop: function(e) {
        DDmove=false
    //document.onmousemove=null
    removeEvent(document, 'mousemove', DD.drag_drop)
    removeEvent(DDobj, 'mouseup', DD.stop)
    DDobj.style.zIndex=0;
    return true
},
    drag_drop: function(e) {
    if (document.all&&DDmove){
       DDobj.style.left=DDx+event.clientX
       DDobj.style.top =DDy+event.clientY
       return false
    }
    else if (document.getElementById&&!document.all&&DDmove){
       DDobj.style.left=DDx+e.clientX+"px"
       DDobj.style.top =DDy+e.clientY+"px"
       return false
    }
},
    init: function(c) {
    el=getElementsByClass('drag');
    for ( i=0;i < el.length;i++ ) {
       DDobj=el[i];
       addEvent(DDobj, 'mousedown', DD.start);
       addEvent(DDobj, 'contextmenu', DD.f, true);
       DDobj.draggable=false;
    }
},
    f:function(e){
    e = e || window.event
    if(e && e.stopPropagation) e.stopPropagation();       // для DOM-совместимых браузеров
    else window.event.cancelBubble = true; //для IE
    return false},

    t:function(e){return true}
}
DD.init();
</script>