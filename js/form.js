addEvent(window,'load',initForm);var highlight_array=new Array();function initForm(){browserDetect();initializeFocus();var activeForm=document.getElementsByTagName('form')[0];addEvent(activeForm,'submit',disableSubmitButton);ifInstructs();showRangeCounters();checkPaypal();checkMechanicalTurk();initAutoResize();}
function disableSubmitButton(){document.getElementById('saveForm').disabled=true;}
function initializeFocus(){fields=getElementsByClassName(document,"*","field");for(i=0;i<fields.length;i++){if(fields[i].type=='radio'||fields[i].type=='checkbox'){fields[i].onclick=function(){clearSafariRadios();addClassName(this.parentNode.parentNode.parentNode,"focused",true)};fields[i].onfocus=function(){clearSafariRadios();addClassName(this.parentNode.parentNode.parentNode,"focused",true)};highlight_array.splice(highlight_array.length,0,fields[i]);}
else if(fields[i].className.match('addr')){fields[i].onfocus=function(){clearSafariRadios();addClassName(this.parentNode.parentNode.parentNode,"focused",true)};fields[i].onblur=function(){removeClassName(this.parentNode.parentNode.parentNode,"focused")};}
else if(fields[i].className.match('other')){fields[i].onfocus=function(){clearSafariRadios();addClassName(this.parentNode.parentNode.parentNode,"focused",true)};}
else{fields[i].onfocus=function(){clearSafariRadios();addClassName(this.parentNode.parentNode,"focused",true)};fields[i].onblur=function(){removeClassName(this.parentNode.parentNode,"focused")};}}}
function initAutoResize(){var key='wufooForm';if(typeof(__EMBEDKEY)!='undefined')key=__EMBEDKEY;if(parent.postMessage){parent.postMessage(document.body.offsetHeight+'|'+key,"*");}
else createTempCookie(key,document.body.offsetHeight);}
function createTempCookie(name,value)
{var date=new Date();date.setTime(date.getTime()+(60*1000));var expires="; expires="+date.toGMTString();document.cookie=name+"="+value+expires+"; domain=.wufoo.com; path=/";if(readTempCookie(name)!=value){var script=document.createElement("script");script.setAttribute("src","http://wufoo.com/forms/height.js?action=set&embedKey="+name+"&height="+value+"&timestamp = "+new Date().getTime().toString());script.setAttribute("type","text/javascript");document.body.appendChild(script);}}
function readTempCookie(name)
{var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return'';}
function clearSafariRadios(){for(var i=0;i<highlight_array.length;i++){if(highlight_array[i].parentNode){removeClassName(highlight_array[i].parentNode.parentNode.parentNode,'focused');}}}
function ifInstructs(){var container=document.getElementById('public');if(container){removeClassName(container,'noI');var instructs=getElementsByClassName(document,"*","instruct");if(instructs==''){addClassName(container,'noI',true);}
if(container.offsetWidth<=450){addClassName(container,'altInstruct',true);}}}
function browserDetect(){var detect=navigator.userAgent.toLowerCase();var container=document.getElementsByTagName('html');if(detect.indexOf('firefox')+1){addClassName(container[0],'firefox',true);}
else if(detect.indexOf('chrome')+1){addClassName(container[0],'chrome',true);}
else if(detect.indexOf('safari')+1){addClassName(container[0],'safari',true);}}
function checkPaypal(){if(document.getElementById('merchant')){document.getElementById('merchantMessage').innerHTML='Your order is being processed. Please wait a moment while we redirect you to our payment page.';document.getElementById('merchantButton').style.display='none';document.getElementById('merchant').submit();}}
function checkMechanicalTurk(){if(document.getElementById('mechanicalTurk')){document.getElementById('merchantMessage').innerHTML='Your submission is being processed. You will be redirected shortly.';document.getElementById('merchantButton').style.display='none';document.getElementById('mechanicalTurk').submit();}}
function showRangeCounters(){counters=getElementsByClassName(document,"em","currently");for(i=0;i<counters.length;i++){counters[i].style.display='inline';}}
function validateRange(ColumnId,RangeType){if(document.getElementById('rangeUsedMsg'+ColumnId)){var field=document.getElementById('Field'+ColumnId);var msg=document.getElementById('rangeUsedMsg'+ColumnId);switch(RangeType){case'character':msg.innerHTML=field.value.length;break;case'word':var val=field.value;val=val.replace(/\n/g," ");var words=val.split(" ");var used=0;for(i=0;i<words.length;i++){if(words[i].replace(/\s+$/,"")!="")used++;}
msg.innerHTML=used;break;case'digit':msg.innerHTML=field.value.length;break;}}}
function getElementsByClassName(oElm,strTagName,strClassName){var arrElements=(strTagName=="*"&&oElm.all)?oElm.all:oElm.getElementsByTagName(strTagName);var arrReturnElements=new Array();strClassName=strClassName.replace(/\-/g,"\\-");var oRegExp=new RegExp("(^|\\s)"+strClassName+"(\\s|$)");var oElement;for(var i=0;i<arrElements.length;i++){oElement=arrElements[i];if(oRegExp.test(oElement.className)){arrReturnElements.push(oElement);}}
return(arrReturnElements)}
function addClassName(objElement,strClass,blnMayAlreadyExist){if(objElement.className){var arrList=objElement.className.split(' ');if(blnMayAlreadyExist){var strClassUpper=strClass.toUpperCase();for(var i=0;i<arrList.length;i++){if(arrList[i].toUpperCase()==strClassUpper){arrList.splice(i,1);i--;}}}
arrList[arrList.length]=strClass;objElement.className=arrList.join(' ');}
else{objElement.className=strClass;}}
function removeClassName(objElement,strClass){if(objElement.className){var arrList=objElement.className.split(' ');var strClassUpper=strClass.toUpperCase();for(var i=0;i<arrList.length;i++){if(arrList[i].toUpperCase()==strClassUpper){arrList.splice(i,1);i--;}}
objElement.className=arrList.join(' ');}}
function addEvent(obj,type,fn){if(obj.attachEvent){obj["e"+type+fn]=fn;obj[type+fn]=function(){obj["e"+type+fn](window.event)};obj.attachEvent("on"+type,obj[type+fn]);}
else{obj.addEventListener(type,fn,false);}}
Calendar=function(firstDayOfWeek,dateStr,onSelected,onClose){this.activeDiv=null;this.currentDateEl=null;this.getDateStatus=null;this.getDateToolTip=null;this.getDateText=null;this.timeout=null;this.onSelected=onSelected||null;this.onClose=onClose||null;this.dragging=false;this.hidden=false;this.minYear=1970;this.maxYear=2050;this.dateFormat=Calendar._TT["DEF_DATE_FORMAT"];this.ttDateFormat=Calendar._TT["TT_DATE_FORMAT"];this.isPopup=true;this.weekNumbers=true;this.firstDayOfWeek=typeof firstDayOfWeek=="number"?firstDayOfWeek:Calendar._FD;this.showsOtherMonths=false;this.dateStr=dateStr;this.ar_days=null;this.showsTime=false;this.time24=true;this.yearStep=2;this.hiliteToday=true;this.multiple=null;this.table=null;this.element=null;this.tbody=null;this.firstdayname=null;this.monthsCombo=null;this.yearsCombo=null;this.hilitedMonth=null;this.activeMonth=null;this.hilitedYear=null;this.activeYear=null;this.dateClicked=false;if(typeof Calendar._SDN=="undefined"){if(typeof Calendar._SDN_len=="undefined")
Calendar._SDN_len=3;var ar=new Array();for(var i=8;i>0;){ar[--i]=Calendar._DN[i].substr(0,Calendar._SDN_len);}
Calendar._SDN=ar;if(typeof Calendar._SMN_len=="undefined")
Calendar._SMN_len=3;ar=new Array();for(var i=12;i>0;){ar[--i]=Calendar._MN[i].substr(0,Calendar._SMN_len);}
Calendar._SMN=ar;}};Calendar._C=null;Calendar.is_ie=(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent));Calendar.is_ie5=(Calendar.is_ie&&/msie 5\.0/i.test(navigator.userAgent));Calendar.is_opera=/opera/i.test(navigator.userAgent);Calendar.is_khtml=/Konqueror|Safari|KHTML/i.test(navigator.userAgent);Calendar.getAbsolutePos=function(el){var SL=0,ST=0;var is_div=/^div$/i.test(el.tagName);if(is_div&&el.scrollLeft)
SL=el.scrollLeft;if(is_div&&el.scrollTop)
ST=el.scrollTop;var r={x:el.offsetLeft-SL,y:el.offsetTop-ST};if(el.offsetParent){var tmp=this.getAbsolutePos(el.offsetParent);r.x+=tmp.x;r.y+=tmp.y;}
return r;};Calendar.isRelated=function(el,evt){var related=evt.relatedTarget;if(!related){var type=evt.type;if(type=="mouseover"){related=evt.fromElement;}else if(type=="mouseout"){related=evt.toElement;}}
while(related){if(related==el){return true;}
related=related.parentNode;}
return false;};Calendar.removeClass=function(el,className){if(!(el&&el.className)){return;}
var cls=el.className.split(" ");var ar=new Array();for(var i=cls.length;i>0;){if(cls[--i]!=className){ar[ar.length]=cls[i];}}
el.className=ar.join(" ");};Calendar.addClass=function(el,className){Calendar.removeClass(el,className);el.className+=" "+className;};Calendar.getElement=function(ev){var f=Calendar.is_ie?window.event.srcElement:ev.currentTarget;while(f.nodeType!=1||/^div$/i.test(f.tagName))
f=f.parentNode;return f;};Calendar.getTargetElement=function(ev){var f=Calendar.is_ie?window.event.srcElement:ev.target;while(f.nodeType!=1)
f=f.parentNode;return f;};Calendar.stopEvent=function(ev){ev||(ev=window.event);if(Calendar.is_ie){ev.cancelBubble=true;ev.returnValue=false;}else{ev.preventDefault();ev.stopPropagation();}
return false;};Calendar.addEvent=function(el,evname,func){if(el.attachEvent){el.attachEvent("on"+evname,func);}else if(el.addEventListener){el.addEventListener(evname,func,true);}else{el["on"+evname]=func;}};Calendar.removeEvent=function(el,evname,func){if(el.detachEvent){el.detachEvent("on"+evname,func);}else if(el.removeEventListener){el.removeEventListener(evname,func,true);}else{el["on"+evname]=null;}};Calendar.createElement=function(type,parent){var el=null;if(document.createElementNS){el=document.createElementNS("http://www.w3.org/1999/xhtml",type);}else{el=document.createElement(type);}
if(typeof parent!="undefined"){parent.appendChild(el);}
return el;};Calendar._add_evs=function(el){with(Calendar){addEvent(el,"mouseover",dayMouseOver);addEvent(el,"mousedown",dayMouseDown);addEvent(el,"mouseout",dayMouseOut);if(is_ie){addEvent(el,"dblclick",dayMouseDblClick);el.setAttribute("unselectable",true);}}};Calendar.findMonth=function(el){if(typeof el.month!="undefined"){return el;}else if(typeof el.parentNode.month!="undefined"){return el.parentNode;}
return null;};Calendar.findYear=function(el){if(typeof el.year!="undefined"){return el;}else if(typeof el.parentNode.year!="undefined"){return el.parentNode;}
return null;};Calendar.showMonthsCombo=function(){var cal=Calendar._C;if(!cal){return false;}
var cal=cal;var cd=cal.activeDiv;var mc=cal.monthsCombo;if(cal.hilitedMonth){Calendar.removeClass(cal.hilitedMonth,"hilite");}
if(cal.activeMonth){Calendar.removeClass(cal.activeMonth,"active");}
var mon=cal.monthsCombo.getElementsByTagName("div")[cal.date.getMonth()];Calendar.addClass(mon,"active");cal.activeMonth=mon;var s=mc.style;s.display="block";if(cd.navtype<0)
s.left=cd.offsetLeft+"px";else{var mcw=mc.offsetWidth;if(typeof mcw=="undefined")
mcw=50;s.left=(cd.offsetLeft+cd.offsetWidth-mcw)+"px";}
s.top=(cd.offsetTop+cd.offsetHeight)+"px";};Calendar.showYearsCombo=function(fwd){var cal=Calendar._C;if(!cal){return false;}
var cal=cal;var cd=cal.activeDiv;var yc=cal.yearsCombo;if(cal.hilitedYear){Calendar.removeClass(cal.hilitedYear,"hilite");}
if(cal.activeYear){Calendar.removeClass(cal.activeYear,"active");}
cal.activeYear=null;var Y=cal.date.getFullYear()+(fwd?1:-1);var yr=yc.firstChild;var show=false;for(var i=12;i>0;--i){if(Y>=cal.minYear&&Y<=cal.maxYear){yr.innerHTML=Y;yr.year=Y;yr.style.display="block";show=true;}else{yr.style.display="none";}
yr=yr.nextSibling;Y+=fwd?cal.yearStep:-cal.yearStep;}
if(show){var s=yc.style;s.display="block";if(cd.navtype<0)
s.left=cd.offsetLeft+"px";else{var ycw=yc.offsetWidth;if(typeof ycw=="undefined")
ycw=50;s.left=(cd.offsetLeft+cd.offsetWidth-ycw)+"px";}
s.top=(cd.offsetTop+cd.offsetHeight)+"px";}};Calendar.tableMouseUp=function(ev){var cal=Calendar._C;if(!cal){return false;}
if(cal.timeout){clearTimeout(cal.timeout);}
var el=cal.activeDiv;if(!el){return false;}
var target=Calendar.getTargetElement(ev);ev||(ev=window.event);Calendar.removeClass(el,"active");if(target==el||target.parentNode==el){Calendar.cellClick(el,ev);}
var mon=Calendar.findMonth(target);var date=null;if(mon){date=new Date(cal.date);if(mon.month!=date.getMonth()){date.setMonth(mon.month);cal.setDate(date);cal.dateClicked=false;cal.callHandler();}}else{var year=Calendar.findYear(target);if(year){date=new Date(cal.date);if(year.year!=date.getFullYear()){date.setFullYear(year.year);cal.setDate(date);cal.dateClicked=false;cal.callHandler();}}}
with(Calendar){removeEvent(document,"mouseup",tableMouseUp);removeEvent(document,"mouseover",tableMouseOver);removeEvent(document,"mousemove",tableMouseOver);cal._hideCombos();_C=null;return stopEvent(ev);}};Calendar.tableMouseOver=function(ev){var cal=Calendar._C;if(!cal){return;}
var el=cal.activeDiv;var target=Calendar.getTargetElement(ev);if(target==el||target.parentNode==el){Calendar.addClass(el,"hilite active");Calendar.addClass(el.parentNode,"rowhilite");}else{if(typeof el.navtype=="undefined"||(el.navtype!=50&&(el.navtype==0||Math.abs(el.navtype)>2)))
Calendar.removeClass(el,"active");Calendar.removeClass(el,"hilite");Calendar.removeClass(el.parentNode,"rowhilite");}
ev||(ev=window.event);if(el.navtype==50&&target!=el){var pos=Calendar.getAbsolutePos(el);var w=el.offsetWidth;var x=ev.clientX;var dx;var decrease=true;if(x>pos.x+w){dx=x-pos.x-w;decrease=false;}else
dx=pos.x-x;if(dx<0)dx=0;var range=el._range;var current=el._current;var count=Math.floor(dx/10)%range.length;for(var i=range.length;--i>=0;)
if(range[i]==current)
break;while(count-->0)
if(decrease){if(--i<0)
i=range.length-1;}else if(++i>=range.length)
i=0;var newval=range[i];el.innerHTML=newval;cal.onUpdateTime();}
var mon=Calendar.findMonth(target);if(mon){if(mon.month!=cal.date.getMonth()){if(cal.hilitedMonth){Calendar.removeClass(cal.hilitedMonth,"hilite");}
Calendar.addClass(mon,"hilite");cal.hilitedMonth=mon;}else if(cal.hilitedMonth){Calendar.removeClass(cal.hilitedMonth,"hilite");}}else{if(cal.hilitedMonth){Calendar.removeClass(cal.hilitedMonth,"hilite");}
var year=Calendar.findYear(target);if(year){if(year.year!=cal.date.getFullYear()){if(cal.hilitedYear){Calendar.removeClass(cal.hilitedYear,"hilite");}
Calendar.addClass(year,"hilite");cal.hilitedYear=year;}else if(cal.hilitedYear){Calendar.removeClass(cal.hilitedYear,"hilite");}}else if(cal.hilitedYear){Calendar.removeClass(cal.hilitedYear,"hilite");}}
return Calendar.stopEvent(ev);};Calendar.tableMouseDown=function(ev){if(Calendar.getTargetElement(ev)==Calendar.getElement(ev)){return Calendar.stopEvent(ev);}};Calendar.calDragIt=function(ev){var cal=Calendar._C;if(!(cal&&cal.dragging)){return false;}
var posX;var posY;if(Calendar.is_ie){posY=window.event.clientY+document.body.scrollTop;posX=window.event.clientX+document.body.scrollLeft;}else{posX=ev.pageX;posY=ev.pageY;}
cal.hideShowCovered();var st=cal.element.style;st.left=(posX-cal.xOffs)+"px";st.top=(posY-cal.yOffs)+"px";return Calendar.stopEvent(ev);};Calendar.calDragEnd=function(ev){var cal=Calendar._C;if(!cal){return false;}
cal.dragging=false;with(Calendar){removeEvent(document,"mousemove",calDragIt);removeEvent(document,"mouseup",calDragEnd);tableMouseUp(ev);}
cal.hideShowCovered();};Calendar.dayMouseDown=function(ev){var el=Calendar.getElement(ev);if(el.disabled){return false;}
var cal=el.calendar;cal.activeDiv=el;Calendar._C=cal;if(el.navtype!=300)with(Calendar){if(el.navtype==50){el._current=el.innerHTML;addEvent(document,"mousemove",tableMouseOver);}else
addEvent(document,Calendar.is_ie5?"mousemove":"mouseover",tableMouseOver);addClass(el,"hilite active");addEvent(document,"mouseup",tableMouseUp);}else if(cal.isPopup){cal._dragStart(ev);}
if(el.navtype==-1||el.navtype==1){if(cal.timeout)clearTimeout(cal.timeout);cal.timeout=setTimeout("Calendar.showMonthsCombo()",250);}else if(el.navtype==-2||el.navtype==2){if(cal.timeout)clearTimeout(cal.timeout);cal.timeout=setTimeout((el.navtype>0)?"Calendar.showYearsCombo(true)":"Calendar.showYearsCombo(false)",250);}else{cal.timeout=null;}
return Calendar.stopEvent(ev);};Calendar.dayMouseDblClick=function(ev){Calendar.cellClick(Calendar.getElement(ev),ev||window.event);if(Calendar.is_ie){document.selection.empty();}};Calendar.dayMouseOver=function(ev){var el=Calendar.getElement(ev);if(Calendar.isRelated(el,ev)||Calendar._C||el.disabled){return false;}
if(el.ttip){if(el.ttip.substr(0,1)=="_"){el.ttip=el.caldate.print(el.calendar.ttDateFormat)+el.ttip.substr(1);}
el.calendar.tooltips.innerHTML=el.ttip;}
if(el.navtype!=300){Calendar.addClass(el,"hilite");if(el.caldate){Calendar.addClass(el.parentNode,"rowhilite");}}
return Calendar.stopEvent(ev);};Calendar.dayMouseOut=function(ev){with(Calendar){var el=getElement(ev);if(isRelated(el,ev)||_C||el.disabled)
return false;removeClass(el,"hilite");if(el.caldate)
removeClass(el.parentNode,"rowhilite");if(el.calendar)
el.calendar.tooltips.innerHTML=_TT["SEL_DATE"];return stopEvent(ev);}};Calendar.cellClick=function(el,ev){var cal=el.calendar;var closing=false;var newdate=false;var date=null;if(typeof el.navtype=="undefined"){if(cal.currentDateEl){Calendar.removeClass(cal.currentDateEl,"selected");Calendar.addClass(el,"selected");closing=(cal.currentDateEl==el);if(!closing){cal.currentDateEl=el;}}
cal.date.setDateOnly(el.caldate);date=cal.date;var other_month=!(cal.dateClicked=!el.otherMonth);if(!other_month&&!cal.currentDateEl)
cal._toggleMultipleDate(new Date(date));else
newdate=!el.disabled;if(other_month)
cal._init(cal.firstDayOfWeek,date);}else{if(el.navtype==200){Calendar.removeClass(el,"hilite");cal.callCloseHandler();return;}
date=new Date(cal.date);if(el.navtype==0)
date.setDateOnly(new Date());cal.dateClicked=false;var year=date.getFullYear();var mon=date.getMonth();function setMonth(m){var day=date.getDate();var max=date.getMonthDays(m);if(day>max){date.setDate(max);}
date.setMonth(m);};switch(el.navtype){case 400:Calendar.removeClass(el,"hilite");var text=Calendar._TT["ABOUT"];if(typeof text!="undefined"){text+=cal.showsTime?Calendar._TT["ABOUT_TIME"]:"";}else{text="Help and about box text is not translated into this language.\n"+"If you know this language and you feel generous please update\n"+"the corresponding file in \"lang\" subdir to match calendar-en.js\n"+"and send it back to <mihai_bazon@yahoo.com> to get it into the distribution  ;-)\n\n"+"Thank you!\n"+"http://dynarch.com/mishoo/calendar.epl\n";}
alert(text);return;case-2:if(year>cal.minYear){date.setFullYear(year-1);}
break;case-1:if(mon>0){setMonth(mon-1);}else if(year-->cal.minYear){date.setFullYear(year);setMonth(11);}
break;case 1:if(mon<11){setMonth(mon+1);}else if(year<cal.maxYear){date.setFullYear(year+1);setMonth(0);}
break;case 2:if(year<cal.maxYear){date.setFullYear(year+1);}
break;case 100:cal.setFirstDayOfWeek(el.fdow);return;case 50:var range=el._range;var current=el.innerHTML;for(var i=range.length;--i>=0;)
if(range[i]==current)
break;if(ev&&ev.shiftKey){if(--i<0)
i=range.length-1;}else if(++i>=range.length)
i=0;var newval=range[i];el.innerHTML=newval;cal.onUpdateTime();return;case 0:if((typeof cal.getDateStatus=="function")&&cal.getDateStatus(date,date.getFullYear(),date.getMonth(),date.getDate())){return false;}
break;}
if(!date.equalsTo(cal.date)){cal.setDate(date);newdate=true;}else if(el.navtype==0)
newdate=closing=true;}
if(newdate){ev&&cal.callHandler();}
if(closing){Calendar.removeClass(el,"hilite");ev&&cal.callCloseHandler();}};Calendar.prototype.create=function(_par){var parent=null;if(!_par){parent=document.getElementsByTagName("body")[0];this.isPopup=true;}else{parent=_par;this.isPopup=false;}
this.date=this.dateStr?new Date(this.dateStr):new Date();var table=Calendar.createElement("table");this.table=table;table.cellSpacing=0;table.cellPadding=0;table.calendar=this;Calendar.addEvent(table,"mousedown",Calendar.tableMouseDown);var div=Calendar.createElement("div");this.element=div;div.className="calendar";if(this.isPopup){div.style.position="absolute";div.style.display="none";}
div.appendChild(table);var thead=Calendar.createElement("thead",table);var cell=null;var row=null;var cal=this;var hh=function(text,cs,navtype,clsnm){cell=Calendar.createElement("td",row);cell.colSpan=cs;cell.className="button";if(navtype!=0&&Math.abs(navtype)<=2)
cell.className+=" nav";if(clsnm)cell.className+=" "+clsnm;Calendar._add_evs(cell);cell.calendar=cal;cell.navtype=navtype;cell.innerHTML="<div unselectable='on'>"+text+"</div>";return cell;};row=Calendar.createElement("tr",thead);var title_length=6;(this.isPopup)&&--title_length;(this.weekNumbers)&&++title_length;hh("?",1,400,'question').ttip=Calendar._TT["INFO"];this.title=hh("",title_length,300);this.title.className="title";if(this.isPopup){this.title.ttip=Calendar._TT["DRAG_TO_MOVE"];this.title.style.cursor="move";hh("&#x00d7;",1,200,'close').ttip=Calendar._TT["CLOSE"];}
row=Calendar.createElement("tr",thead);row.className="headrow";this._nav_py=hh("&#x00ab;",1,-2);this._nav_py.ttip=Calendar._TT["PREV_YEAR"];this._nav_pm=hh("&#x2039;",1,-1);this._nav_pm.ttip=Calendar._TT["PREV_MONTH"];this._nav_now=hh(Calendar._TT["TODAY"],this.weekNumbers?4:3,0);this._nav_now.ttip=Calendar._TT["GO_TODAY"];this._nav_nm=hh("&#x203a;",1,1);this._nav_nm.ttip=Calendar._TT["NEXT_MONTH"];this._nav_ny=hh("&#x00bb;",1,2);this._nav_ny.ttip=Calendar._TT["NEXT_YEAR"];row=Calendar.createElement("tr",thead);row.className="daynames";if(this.weekNumbers){cell=Calendar.createElement("td",row);cell.className="name wn";cell.innerHTML=Calendar._TT["WK"];}
for(var i=7;i>0;--i){cell=Calendar.createElement("td",row);if(!i){cell.navtype=100;cell.calendar=this;Calendar._add_evs(cell);}}
this.firstdayname=(this.weekNumbers)?row.firstChild.nextSibling:row.firstChild;this._displayWeekdays();var tbody=Calendar.createElement("tbody",table);this.tbody=tbody;for(i=6;i>0;--i){row=Calendar.createElement("tr",tbody);if(this.weekNumbers){cell=Calendar.createElement("td",row);}
for(var j=7;j>0;--j){cell=Calendar.createElement("td",row);cell.calendar=this;Calendar._add_evs(cell);}}
if(this.showsTime){row=Calendar.createElement("tr",tbody);row.className="time";cell=Calendar.createElement("td",row);cell.className="time";cell.colSpan=2;cell.innerHTML=Calendar._TT["TIME"]||"&nbsp;";cell=Calendar.createElement("td",row);cell.className="time";cell.colSpan=this.weekNumbers?4:3;(function(){function makeTimePart(className,init,range_start,range_end){var part=Calendar.createElement("span",cell);part.className=className;part.innerHTML=init;part.calendar=cal;part.ttip=Calendar._TT["TIME_PART"];part.navtype=50;part._range=[];if(typeof range_start!="number")
part._range=range_start;else{for(var i=range_start;i<=range_end;++i){var txt;if(i<10&&range_end>=10)txt='0'+i;else txt=''+i;part._range[part._range.length]=txt;}}
Calendar._add_evs(part);return part;};var hrs=cal.date.getHours();var mins=cal.date.getMinutes();var t12=!cal.time24;var pm=(hrs>12);if(t12&&pm)hrs-=12;var H=makeTimePart("hour",hrs,t12?1:0,t12?12:23);var span=Calendar.createElement("span",cell);span.innerHTML=":";span.className="colon";var M=makeTimePart("minute",mins,0,59);var AP=null;cell=Calendar.createElement("td",row);cell.className="time";cell.colSpan=2;if(t12)
AP=makeTimePart("ampm",pm?"pm":"am",["am","pm"]);else
cell.innerHTML="&nbsp;";cal.onSetTime=function(){var pm,hrs=this.date.getHours(),mins=this.date.getMinutes();if(t12){pm=(hrs>=12);if(pm)hrs-=12;if(hrs==0)hrs=12;AP.innerHTML=pm?"pm":"am";}
H.innerHTML=(hrs<10)?("0"+hrs):hrs;M.innerHTML=(mins<10)?("0"+mins):mins;};cal.onUpdateTime=function(){var date=this.date;var h=parseInt(H.innerHTML,10);if(t12){if(/pm/i.test(AP.innerHTML)&&h<12)
h+=12;else if(/am/i.test(AP.innerHTML)&&h==12)
h=0;}
var d=date.getDate();var m=date.getMonth();var y=date.getFullYear();date.setHours(h);date.setMinutes(parseInt(M.innerHTML,10));date.setFullYear(y);date.setMonth(m);date.setDate(d);this.dateClicked=false;this.callHandler();};})();}else{this.onSetTime=this.onUpdateTime=function(){};}
var tfoot=Calendar.createElement("tfoot",table);row=Calendar.createElement("tr",tfoot);row.className="footrow";cell=hh(Calendar._TT["SEL_DATE"],this.weekNumbers?8:7,300);cell.className="ttip";if(this.isPopup){cell.ttip=Calendar._TT["DRAG_TO_MOVE"];cell.style.cursor="move";}
this.tooltips=cell;div=Calendar.createElement("div",this.element);this.monthsCombo=div;div.className="combo";for(i=0;i<Calendar._MN.length;++i){var mn=Calendar.createElement("div");mn.className=Calendar.is_ie?"label-IEfix":"label";mn.month=i;mn.innerHTML=Calendar._SMN[i];div.appendChild(mn);}
div=Calendar.createElement("div",this.element);this.yearsCombo=div;div.className="combo";for(i=12;i>0;--i){var yr=Calendar.createElement("div");yr.className=Calendar.is_ie?"label-IEfix":"label";div.appendChild(yr);}
this._init(this.firstDayOfWeek,this.date);parent.appendChild(this.element);};Calendar.prototype._init=function(firstDayOfWeek,date){var today=new Date(),TY=today.getFullYear(),TM=today.getMonth(),TD=today.getDate();this.table.style.visibility="hidden";var year=date.getFullYear();if(year<this.minYear){year=this.minYear;date.setFullYear(year);}else if(year>this.maxYear){year=this.maxYear;date.setFullYear(year);}
this.firstDayOfWeek=firstDayOfWeek;this.date=new Date(date);var month=date.getMonth();var mday=date.getDate();var no_days=date.getMonthDays();date.setDate(1);var day1=(date.getDay()-this.firstDayOfWeek)%7;if(day1<0)
day1+=7;date.setDate(-day1);date.setDate(date.getDate()+1);var row=this.tbody.firstChild;var MN=Calendar._SMN[month];var ar_days=this.ar_days=new Array();var weekend=Calendar._TT["WEEKEND"];var dates=this.multiple?(this.datesCells={}):null;for(var i=0;i<6;++i,row=row.nextSibling){var cell=row.firstChild;if(this.weekNumbers){cell.className="day wn";cell.innerHTML=date.getWeekNumber();cell=cell.nextSibling;}
row.className="daysrow";var hasdays=false,iday,dpos=ar_days[i]=[];for(var j=0;j<7;++j,cell=cell.nextSibling,date.setDate(iday+1)){iday=date.getDate();var wday=date.getDay();cell.className="day";cell.pos=i<<4|j;dpos[j]=cell;var current_month=(date.getMonth()==month);if(!current_month){if(this.showsOtherMonths){cell.className+=" othermonth";cell.otherMonth=true;}else{cell.className="emptycell";cell.innerHTML="&nbsp;";cell.disabled=true;continue;}}else{cell.otherMonth=false;hasdays=true;}
cell.disabled=false;cell.innerHTML=this.getDateText?this.getDateText(date,iday):iday;if(dates)
dates[date.print("%Y%m%d")]=cell;if(this.getDateStatus){var status=this.getDateStatus(date,year,month,iday);if(this.getDateToolTip){var toolTip=this.getDateToolTip(date,year,month,iday);if(toolTip)
cell.title=toolTip;}
if(status===true){cell.className+=" disabled";cell.disabled=true;}else{if(/disabled/i.test(status))
cell.disabled=true;cell.className+=" "+status;}}
if(!cell.disabled){cell.caldate=new Date(date);cell.ttip="_";if(!this.multiple&&current_month&&iday==mday&&this.hiliteToday){cell.className+=" selected";this.currentDateEl=cell;}
if(date.getFullYear()==TY&&date.getMonth()==TM&&iday==TD){cell.className+=" today";cell.ttip+=Calendar._TT["PART_TODAY"];}
if(weekend.indexOf(wday.toString())!=-1)
cell.className+=cell.otherMonth?" oweekend":" weekend";}}
if(!(hasdays||this.showsOtherMonths))
row.className="emptyrow";}
this.title.innerHTML=Calendar._MN[month]+" "+year;this.onSetTime();this.table.style.visibility="visible";this._initMultipleDates();};Calendar.prototype._initMultipleDates=function(){if(this.multiple){for(var i in this.multiple){var cell=this.datesCells[i];var d=this.multiple[i];if(!d)
continue;if(cell)
cell.className+=" selected";}}};Calendar.prototype._toggleMultipleDate=function(date){if(this.multiple){var ds=date.print("%Y%m%d");var cell=this.datesCells[ds];if(cell){var d=this.multiple[ds];if(!d){Calendar.addClass(cell,"selected");this.multiple[ds]=date;}else{Calendar.removeClass(cell,"selected");delete this.multiple[ds];}}}};Calendar.prototype.setDateToolTipHandler=function(unaryFunction){this.getDateToolTip=unaryFunction;};Calendar.prototype.setDate=function(date){if(!date.equalsTo(this.date)){this._init(this.firstDayOfWeek,date);}};Calendar.prototype.refresh=function(){this._init(this.firstDayOfWeek,this.date);};Calendar.prototype.setFirstDayOfWeek=function(firstDayOfWeek){this._init(firstDayOfWeek,this.date);this._displayWeekdays();};Calendar.prototype.setDateStatusHandler=Calendar.prototype.setDisabledHandler=function(unaryFunction){this.getDateStatus=unaryFunction;};Calendar.prototype.setRange=function(a,z){this.minYear=a;this.maxYear=z;};Calendar.prototype.callHandler=function(){if(this.onSelected){this.onSelected(this,this.date.print(this.dateFormat));}};Calendar.prototype.callCloseHandler=function(){if(this.onClose){this.onClose(this);}
this.hideShowCovered();};Calendar.prototype.destroy=function(){var el=this.element.parentNode;el.removeChild(this.element);Calendar._C=null;window._dynarch_popupCalendar=null;};Calendar.prototype.reparent=function(new_parent){var el=this.element;el.parentNode.removeChild(el);new_parent.appendChild(el);};Calendar._checkCalendar=function(ev){var calendar=window._dynarch_popupCalendar;if(!calendar){return false;}
var el=Calendar.is_ie?Calendar.getElement(ev):Calendar.getTargetElement(ev);for(;el!=null&&el!=calendar.element;el=el.parentNode);if(el==null){window._dynarch_popupCalendar.callCloseHandler();return Calendar.stopEvent(ev);}};Calendar.prototype.show=function(){var rows=this.table.getElementsByTagName("tr");for(var i=rows.length;i>0;){var row=rows[--i];Calendar.removeClass(row,"rowhilite");var cells=row.getElementsByTagName("td");for(var j=cells.length;j>0;){var cell=cells[--j];Calendar.removeClass(cell,"hilite");Calendar.removeClass(cell,"active");}}
this.element.style.display="block";this.hidden=false;if(this.isPopup){window._dynarch_popupCalendar=this;Calendar.addEvent(document,"mousedown",Calendar._checkCalendar);}
this.hideShowCovered();};Calendar.prototype.hide=function(){if(this.isPopup){Calendar.removeEvent(document,"mousedown",Calendar._checkCalendar);}
this.element.style.display="none";this.hidden=true;this.hideShowCovered();};Calendar.prototype.showAt=function(x,y){var s=this.element.style;s.left=x+"px";s.top=y+"px";this.show();};Calendar.prototype.showAtElement=function(el,opts){var self=this;var p=Calendar.getAbsolutePos(el);if(!opts||typeof opts!="string"){this.showAt(p.x,p.y+el.offsetHeight);return true;}
function fixPosition(box){if(box.x<0)
box.x=0;if(box.y<0)
box.y=0;var cp=document.createElement("div");var s=cp.style;s.position="absolute";s.right=s.bottom=s.width=s.height="0px";document.body.appendChild(cp);var br=Calendar.getAbsolutePos(cp);document.body.removeChild(cp);br.y+=window.scrollY;br.x+=window.scrollX;var tmp=box.x+box.width-br.x;if(tmp>0)box.x-=tmp;tmp=box.y+box.height-br.y;if(tmp>0)box.y-=tmp;};this.element.style.display="block";Calendar.continuation_for_khtml_browser=function(){var w=self.element.offsetWidth;var h=self.element.offsetHeight;self.element.style.display="none";var valign=opts.substr(0,1);var halign="l";if(opts.length>1){halign=opts.substr(1,1);}
switch(valign){case"T":p.y-=h;break;case"B":p.y+=el.offsetHeight;break;case"C":p.y+=(el.offsetHeight-h)/2;break;case"t":p.y+=el.offsetHeight-h;break;case"b":break;}
switch(halign){case"L":p.x-=w;break;case"R":p.x+=el.offsetWidth;break;case"C":p.x+=(el.offsetWidth-w)/2;break;case"l":p.x+=el.offsetWidth-w;break;case"r":break;}
p.width=w;p.height=h+40;self.monthsCombo.style.display="none";fixPosition(p);self.showAt(p.x,p.y);};if(Calendar.is_khtml)
setTimeout("Calendar.continuation_for_khtml_browser()",10);else
Calendar.continuation_for_khtml_browser();};Calendar.prototype.setDateFormat=function(str){this.dateFormat=str;};Calendar.prototype.setTtDateFormat=function(str){this.ttDateFormat=str;};Calendar.prototype.parseDate=function(str,fmt){if(!fmt)
fmt=this.dateFormat;this.setDate(Date.parseDate(str,fmt));};Calendar.prototype.hideShowCovered=function(){if(!Calendar.is_ie&&!Calendar.is_opera)
return;function getVisib(obj){var value=obj.style.visibility;if(!value){if(document.defaultView&&typeof(document.defaultView.getComputedStyle)=="function"){if(!Calendar.is_khtml)
value=document.defaultView.getComputedStyle(obj,"").getPropertyValue("visibility");else
value='';}else if(obj.currentStyle){value=obj.currentStyle.visibility;}else
value='';}
return value;};var tags=new Array("applet","iframe","select");var el=this.element;var p=Calendar.getAbsolutePos(el);var EX1=p.x;var EX2=el.offsetWidth+EX1;var EY1=p.y;var EY2=el.offsetHeight+EY1;for(var k=tags.length;k>0;){var ar=document.getElementsByTagName(tags[--k]);var cc=null;for(var i=ar.length;i>0;){cc=ar[--i];p=Calendar.getAbsolutePos(cc);var CX1=p.x;var CX2=cc.offsetWidth+CX1;var CY1=p.y;var CY2=cc.offsetHeight+CY1;if(this.hidden||(CX1>EX2)||(CX2<EX1)||(CY1>EY2)||(CY2<EY1)){if(!cc.__msh_save_visibility){cc.__msh_save_visibility=getVisib(cc);}
cc.style.visibility=cc.__msh_save_visibility;}else{if(!cc.__msh_save_visibility){cc.__msh_save_visibility=getVisib(cc);}
cc.style.visibility="hidden";}}}};Calendar.prototype._displayWeekdays=function(){var fdow=this.firstDayOfWeek;var cell=this.firstdayname;var weekend=Calendar._TT["WEEKEND"];for(var i=0;i<7;++i){cell.className="day name";var realday=(i+fdow)%7;if(i){cell.ttip=Calendar._TT["DAY_FIRST"].replace("%s",Calendar._DN[realday]);cell.navtype=100;cell.calendar=this;cell.fdow=realday;Calendar._add_evs(cell);}
if(weekend.indexOf(realday.toString())!=-1){Calendar.addClass(cell,"weekend");}
cell.innerHTML=Calendar._SDN[(i+fdow)%7];cell=cell.nextSibling;}};Calendar.prototype._hideCombos=function(){this.monthsCombo.style.display="none";this.yearsCombo.style.display="none";};Calendar.prototype._dragStart=function(ev){if(this.dragging){return;}
this.dragging=true;var posX;var posY;if(Calendar.is_ie){posY=window.event.clientY+document.body.scrollTop;posX=window.event.clientX+document.body.scrollLeft;}else{posY=ev.clientY+window.scrollY;posX=ev.clientX+window.scrollX;}
var st=this.element.style;this.xOffs=posX-parseInt(st.left);this.yOffs=posY-parseInt(st.top);with(Calendar){addEvent(document,"mousemove",calDragIt);addEvent(document,"mouseup",calDragEnd);}};Date._MD=new Array(31,28,31,30,31,30,31,31,30,31,30,31);Date.SECOND=1000;Date.MINUTE=60*Date.SECOND;Date.HOUR=60*Date.MINUTE;Date.DAY=24*Date.HOUR;Date.WEEK=7*Date.DAY;Date.parseDate=function(str,fmt){var today=new Date();var y=0;var m=-1;var d=0;var a=str.split(/\W+/);var b=fmt.match(/%./g);var i=0,j=0;var hr=0;var min=0;for(i=0;i<a.length;++i){if(!a[i])
continue;switch(b[i]){case"%d":case"%e":d=parseInt(a[i],10);break;case"%m":m=parseInt(a[i],10)-1;break;case"%Y":case"%y":y=parseInt(a[i],10);(y<100)&&(y+=(y>29)?1900:2000);break;case"%b":case"%B":for(j=0;j<12;++j){if(Calendar._MN[j].substr(0,a[i].length).toLowerCase()==a[i].toLowerCase()){m=j;break;}}
break;case"%H":case"%I":case"%k":case"%l":hr=parseInt(a[i],10);break;case"%P":case"%p":if(/pm/i.test(a[i])&&hr<12)
hr+=12;else if(/am/i.test(a[i])&&hr>=12)
hr-=12;break;case"%M":min=parseInt(a[i],10);break;}}
if(isNaN(y))y=today.getFullYear();if(isNaN(m))m=today.getMonth();if(isNaN(d))d=today.getDate();if(isNaN(hr))hr=today.getHours();if(isNaN(min))min=today.getMinutes();if(y!=0&&m!=-1&&d!=0)
return new Date(y,m,d,hr,min,0);y=0;m=-1;d=0;for(i=0;i<a.length;++i){if(a[i].search(/[a-zA-Z]+/)!=-1){var t=-1;for(j=0;j<12;++j){if(Calendar._MN[j].substr(0,a[i].length).toLowerCase()==a[i].toLowerCase()){t=j;break;}}
if(t!=-1){if(m!=-1){d=m+1;}
m=t;}}else if(parseInt(a[i],10)<=12&&m==-1){m=a[i]-1;}else if(parseInt(a[i],10)>31&&y==0){y=parseInt(a[i],10);(y<100)&&(y+=(y>29)?1900:2000);}else if(d==0){d=a[i];}}
if(y==0)
y=today.getFullYear();if(m!=-1&&d!=0)
return new Date(y,m,d,hr,min,0);return today;};Date.prototype.getMonthDays=function(month){var year=this.getFullYear();if(typeof month=="undefined"){month=this.getMonth();}
if(((0==(year%4))&&((0!=(year%100))||(0==(year%400))))&&month==1){return 29;}else{return Date._MD[month];}};Date.prototype.getDayOfYear=function(){var now=new Date(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0);var then=new Date(this.getFullYear(),0,0,0,0,0);var time=now-then;return Math.floor(time/Date.DAY);};Date.prototype.getWeekNumber=function(){var d=new Date(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0);var DoW=d.getDay();d.setDate(d.getDate()-(DoW+6)%7+3);var ms=d.valueOf();d.setMonth(0);d.setDate(4);return Math.round((ms-d.valueOf())/(7*864e5))+1;};Date.prototype.equalsTo=function(date){return((this.getFullYear()==date.getFullYear())&&(this.getMonth()==date.getMonth())&&(this.getDate()==date.getDate())&&(this.getHours()==date.getHours())&&(this.getMinutes()==date.getMinutes()));};Date.prototype.setDateOnly=function(date){var tmp=new Date(date);this.setDate(1);this.setFullYear(tmp.getFullYear());this.setMonth(tmp.getMonth());this.setDate(tmp.getDate());};Date.prototype.print=function(str){var m=this.getMonth();var d=this.getDate();var y=this.getFullYear();var wn=this.getWeekNumber();var w=this.getDay();var s={};var hr=this.getHours();var pm=(hr>=12);var ir=(pm)?(hr-12):hr;var dy=this.getDayOfYear();if(ir==0)
ir=12;var min=this.getMinutes();var sec=this.getSeconds();s["%a"]=Calendar._SDN[w];s["%A"]=Calendar._DN[w];s["%b"]=Calendar._SMN[m];s["%B"]=Calendar._MN[m];s["%C"]=1+Math.floor(y/100);s["%d"]=(d<10)?("0"+d):d;s["%e"]=d;s["%H"]=(hr<10)?("0"+hr):hr;s["%I"]=(ir<10)?("0"+ir):ir;s["%j"]=(dy<100)?((dy<10)?("00"+dy):("0"+dy)):dy;s["%k"]=hr;s["%l"]=ir;s["%m"]=(m<9)?("0"+(1+m)):(1+m);s["%M"]=(min<10)?("0"+min):min;s["%n"]="\n";s["%p"]=pm?"PM":"AM";s["%P"]=pm?"pm":"am";s["%s"]=Math.floor(this.getTime()/1000);s["%S"]=(sec<10)?("0"+sec):sec;s["%t"]="\t";s["%U"]=s["%W"]=s["%V"]=(wn<10)?("0"+wn):wn;s["%u"]=w+1;s["%w"]=w;s["%y"]=(''+y).substr(2,2);s["%Y"]=y;s["%%"]="%";var re=/%./g;if(!Calendar.is_ie5&&!Calendar.is_khtml)
return str.replace(re,function(par){return s[par]||par;});var a=str.match(re);for(var i=0;i<a.length;i++){var tmp=s[a[i]];if(tmp){re=new RegExp(a[i],'g');str=str.replace(re,tmp);}}
return str;};Date.prototype.__msh_oldSetFullYear=Date.prototype.setFullYear;Date.prototype.setFullYear=function(y){var d=new Date(this);d.__msh_oldSetFullYear(y);if(d.getMonth()!=this.getMonth())
this.setDate(28);this.__msh_oldSetFullYear(y);};window._dynarch_popupCalendar=null;function selectDate(cal){var p=cal.params;var update=(cal.dateClicked||p.electric);year=p.inputField.id;day=year+'-2';month=year+'-1';document.getElementById(month).value=cal.date.print('%m');document.getElementById(day).value=cal.date.print('%e');document.getElementById(year).value=cal.date.print('%Y');}
function selectEuroDate(cal){var p=cal.params;var update=(cal.dateClicked||p.electric);year=p.inputField.id;day=year+'-1';month=year+'-2';document.getElementById(month).value=cal.date.print('%m');document.getElementById(day).value=cal.date.print('%e');document.getElementById(year).value=cal.date.print('%Y');}
Calendar._DN=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");Calendar._SDN=new Array("S","M","T","W","T","F","S","S");Calendar._FD=0;Calendar._MN=new Array("January","February","March","April","May","June","July","August","September","October","November","December");Calendar._SMN=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");Calendar._TT={};Calendar._TT["INFO"]="About the Calendar";Calendar._TT["ABOUT"]="DHTML Date/Time Selector\n"+"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n"+"For latest version visit:\n http://www.dynarch.com/projects/calendar/\n"+"Distributed under GNU LGPL.\n See http://gnu.org/licenses/lgpl.html for details."+"\n\n"+"Date selection:\n"+"- Use the \xab, \xbb buttons to select year\n"+"- Use the "+String.fromCharCode(0x2039)+", "+String.fromCharCode(0x203a)+" buttons to select month\n"+"- Hold mouse button for faster selection.";Calendar._TT["ABOUT_TIME"]="\n\n"+"Time selection:\n"+"- Click on any of the time parts to increase it\n"+"- or Shift-click to decrease it\n"+"- or click and drag for faster selection.";Calendar._TT["PREV_YEAR"]="Prev. Year (Hold for Menu)";Calendar._TT["PREV_MONTH"]="Prev. Month (Hold for Menu)";Calendar._TT["GO_TODAY"]="Go to Today";Calendar._TT["NEXT_MONTH"]="Next Month (Hold for Menu)";Calendar._TT["NEXT_YEAR"]="Next Year (Hold for Menu)";Calendar._TT["SEL_DATE"]="Select Date";Calendar._TT["DRAG_TO_MOVE"]="Drag to Move";Calendar._TT["PART_TODAY"]=" (Today)";Calendar._TT["DAY_FIRST"]="Display %ss first";Calendar._TT["WEEKEND"]="0,6";Calendar._TT["CLOSE"]="Close Calendar";Calendar._TT["TODAY"]="Today";Calendar._TT["TIME_PART"]="(Shift-)Click or Drag to Change Value";Calendar._TT["DEF_DATE_FORMAT"]="%Y-%m-%d";Calendar._TT["TT_DATE_FORMAT"]="%b %e, %Y";Calendar._TT["WK"]="wk";Calendar._TT["TIME"]="Time:";
Calendar.setup=function(params){function param_default(pname,def){if(typeof params[pname]=="undefined"){params[pname]=def;}};param_default("inputField",null);param_default("displayArea",null);param_default("button",null);param_default("eventName","click");param_default("ifFormat","%Y/%m/%d");param_default("daFormat","%Y/%m/%d");param_default("singleClick",true);param_default("disableFunc",null);param_default("dateStatusFunc",params["disableFunc"]);param_default("dateText",null);param_default("firstDay",null);param_default("align","BR");param_default("range",[1900,2999]);param_default("weekNumbers",false);param_default("flat",null);param_default("flatCallback",null);param_default("onSelect",null);param_default("onClose",null);param_default("onUpdate",null);param_default("date",null);param_default("showsTime",false);param_default("timeFormat","24");param_default("electric",true);param_default("step",2);param_default("position",null);param_default("cache",false);param_default("showOthers",false);param_default("multiple",null);var tmp=["inputField","displayArea","button"];for(var i in tmp){if(typeof params[tmp[i]]=="string"){params[tmp[i]]=document.getElementById(params[tmp[i]]);}}
if(!(params.flat||params.multiple||params.inputField||params.displayArea||params.button)){alert("Calendar.setup:\n  Nothing to setup (no fields found).  Please check your code");return false;}
function onSelect(cal){var p=cal.params;var update=(cal.dateClicked||p.electric);if(update&&p.inputField){p.inputField.value=cal.date.print(p.ifFormat);if(typeof p.inputField.onchange=="function")
p.inputField.onchange();}
if(update&&p.displayArea)
p.displayArea.innerHTML=cal.date.print(p.daFormat);if(update&&typeof p.onUpdate=="function")
p.onUpdate(cal);if(update&&p.flat){if(typeof p.flatCallback=="function")
p.flatCallback(cal);}
if(update&&p.singleClick&&cal.dateClicked)
cal.callCloseHandler();};if(params.flat!=null){if(typeof params.flat=="string")
params.flat=document.getElementById(params.flat);if(!params.flat){alert("Calendar.setup:\n  Flat specified but can't find parent.");return false;}
var cal=new Calendar(params.firstDay,params.date,params.onSelect||onSelect);cal.showsOtherMonths=params.showOthers;cal.showsTime=params.showsTime;cal.time24=(params.timeFormat=="24");cal.params=params;cal.weekNumbers=params.weekNumbers;cal.setRange(params.range[0],params.range[1]);cal.setDateStatusHandler(params.dateStatusFunc);cal.getDateText=params.dateText;if(params.ifFormat){cal.setDateFormat(params.ifFormat);}
if(params.inputField&&typeof params.inputField.value=="string"){cal.parseDate(params.inputField.value);}
cal.create(params.flat);cal.show();return false;}
var triggerEl=params.button||params.displayArea||params.inputField;triggerEl["on"+params.eventName]=function(){var dateEl=params.inputField||params.displayArea;var dateFmt=params.inputField?params.ifFormat:params.daFormat;var mustCreate=false;var cal=window.calendar;if(dateEl)
params.date=Date.parseDate(dateEl.value||dateEl.innerHTML,dateFmt);if(!(cal&&params.cache)){window.calendar=cal=new Calendar(params.firstDay,params.date,params.onSelect||onSelect,params.onClose||function(cal){cal.hide();});cal.showsTime=params.showsTime;cal.time24=(params.timeFormat=="24");cal.weekNumbers=params.weekNumbers;mustCreate=true;}else{if(params.date)
cal.setDate(params.date);cal.hide();}
if(params.multiple){cal.multiple={};for(var i=params.multiple.length;--i>=0;){var d=params.multiple[i];var ds=d.print("%Y%m%d");cal.multiple[ds]=d;}}
cal.showsOtherMonths=params.showOthers;cal.yearStep=params.step;cal.setRange(params.range[0],params.range[1]);cal.params=params;cal.setDateStatusHandler(params.dateStatusFunc);cal.getDateText=params.dateText;cal.setDateFormat(dateFmt);if(mustCreate)
cal.create();cal.refresh();if(!params.position)
cal.showAtElement(params.button||params.displayArea||params.inputField,params.align);else
cal.showAt(params.position[0],params.position[1]);return false;};return cal;};