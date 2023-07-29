let hr=document.getElementById('hour');                                 
let min=document.getElementById('min');                                 
let sec=document.getElementById('sec');   

function displayTime(){
    let date = new Date();
    let hh=date.getHours()
    let mm=date.getMinutes()
    let ss= date.getSeconds()

    let hrot=30*hh+mm/12;
    let mrot=6*mm;
    let srot=6*ss;

    hr.style.transform=`rotateZ(${hrot}deg)`;
    min.style.transform=`rotateZ(${mrot}deg)`;
    sec.style.transform=`rotateZ(${srot}deg)`;

    // Digital Clock

    let hrr=document.getElementById('hrr')
    let mn=document.getElementById('mn')
    let sc=document.getElementById('sc')
    let ampm=document.getElementById('ampm')
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    let am=h>=12 ? "PM":"AM"

    // 24 hrs to 12 hrs
    if(h>12){
        h=h-12;
    }


    //Adding zero

    h=(h<10) ? "0" + h : h;
    m=(m<10) ? "0" + m : m;
    s=(s<10) ? "0" + s : s;

    hrr.innerHTML=h;
    mn.innerHTML=m;
    sc.innerHTML=s;
    ampm.innerHTML=am;
}

setInterval(displayTime,1000);