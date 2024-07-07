const daysofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function formatTimeComponent(time){
    let formattedTime = time < 10 ? '0' : '';
    return formattedTime + time;
}
function displayDateTime(){
    let currentDate = new Date();
    let today = daysofWeek[currentDate.getDay()];
    let hours = currentDate.getHours();
    let mins = currentDate.getMinutes();
    let secs = currentDate.getSeconds();
    minutes = formatTimeComponent(mins);
    seconds = formatTimeComponent(secs);
    let formattedDateTime = `${today}, ${currentDate.toLocaleDateString()} - ${hours}:${minutes}:${seconds}`;
    document.getElementById('datetime').innerText = formattedDateTime;
}

function displayCarInfo(){
    let userDiv = document.getElementById("displaycardetails");
    const city = document.getElementById("city").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const cartype = document.getElementById("cartype").value;
    userDiv.innerHTML = `<p><b>City:</b> ${city}<p>`+
    `<p><b>Check In Date: </b> ${checkIn}</p>` + `<p><b>Check Out Date: </b> ${checkOut}</p>`+
    `<p><b>Car Model: </b> ${cartype}</p>`
}

function validatecarForm(){
    document.getElementById("displaycardetails").innerHTML = "";
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    let validForm = true;
    let outerror = document.getElementById("checkouterror");
    outerror.innerHTML = "";
    if(checkIn > checkOut){
        validForm = false;
        outerror.innerHTML = "Checkout Date should be after CkeckIn Date";
    }
    if(validForm){
        outerror.innerHTML = "";
        displayCarInfo();
    }
}

function changeFontSize() {
    const fontSize = document.getElementById('fontsize').value;
    let mainContent = document.getElementById('mainContent');
    const backGroundCl = document.getElementById('backgr').value;

    mainContent.className = fontSize;
    mainContent.classList.add(backGroundCl);
    localStorage.setItem('backgroundColor',backGroundCl);
    localStorage.setItem('fontSize', fontSize);
}
function changeBackgroundColor() {
    const backGroundCl = document.getElementById('backgr').value;
    let mainContent = document.getElementById('mainContent');
    const fontSize = document.getElementById('fontsize').value;

    mainContent.className = backGroundCl;
    mainContent.classList.add(fontSize);
    localStorage.setItem('backgroundColor',backGroundCl);
    localStorage.setItem('fontSize', fontSize);

    const div = document.getElementById("mainContent");
    const inp = div.getElementsByTagName("input");
    const lab = div.getElementsByTagName("label");
    const leg = div.getElementsByTagName("legend");
    const p = div.getElementsByTagName("p");
    const h3 = div.getElementsByTagName("h3");
    const sel = div.getElementsByTagName("select");

    if(backGroundCl == "black"){
        for(let input of inp){
            input.style.color = "white";
        }
        for(let label of lab){
            label.style.color = "white";
        }
        for(let legend of leg){
            legend.style.color = "white";
        }
        for(let ps of p){
            ps.style.color = "white";
        }
        for(let h3s of h3){
            h3s.style.color = "white";
        }
        for(let selec of sel){
            selec.style.color = "white";
        }
    }else{
        for(let input of inp){
            input.style.color = "black";
        }
        for(let label of lab){
            label.style.color = "black";
        }
        for(let legend of leg){
            legend.style.color = "black";
        }
        for(let ps of p){
            ps.style.color = "black";
        }
        for(let h3s of h3){
            h3s.style.color = "black";
        }
        for(let selec of sel){
            selec.style.color = "black";
        }
    }
}
function updateInputchanges(){
    const savedBgColor = localStorage.getItem('backgroundColor');
    const backGroundCl = !!savedBgColor ? savedBgColor : document.getElementById('backgr').value;

    const div = document.getElementById("mainContent");
    const inp = div.getElementsByTagName("input");
    const lab = div.getElementsByTagName("label");
    const leg = div.getElementsByTagName("legend");
    const p = div.getElementsByTagName("p");
    const h3 = div.getElementsByTagName("h3");
    const sel = div.getElementsByTagName("select");

    if(backGroundCl == "black"){
        for(let input of inp){
            input.style.color = "white";
        }
        for(let label of lab){
            label.style.color = "white";
        }
        for(let legend of leg){
            legend.style.color = "white";
        }
        for(let ps of p){
            ps.style.color = "white";
        }
        for(let h3s of h3){
            h3s.style.color = "white";
        }
        for(let selec of sel){
            selec.style.color = "white";
        }
    }else{
        for(let input of inp){
            input.style.color = "black";
        }
        for(let label of lab){
            label.style.color = "black";
        }
        for(let legend of leg){
            legend.style.color = "black";
        }
        for(let ps of p){
            ps.style.color = "black";
        }
        for(let h3s of h3){
            h3s.style.color = "black";
        }
        for(let selec of sel){
            selec.style.color = "black";
        }
    }
}
function applychanges(){
    const savedBgColor = localStorage.getItem('backgroundColor');
    const savedFontSize = localStorage.getItem('fontSize');
    let mainContent = document.getElementById('mainContent');
    let fontSize = document.getElementById('fontsize');
    let backGroundCl = document.getElementById('backgr');

    if(savedBgColor && savedFontSize){
        mainContent.className = savedBgColor;
        mainContent.classList.add(savedFontSize);
        fontSize.value = savedFontSize;
        backGroundCl.value = savedBgColor;
    }else if(savedBgColor){
        mainContent.className = savedBgColor;
        backGroundCl.value = savedBgColor;
    }else if(savedFontSize){
        mainContent.className = savedFontSize;
        fontSize.value = savedFontSize;
    }
    updateInputchanges();
}

function activePage(){
    const currentFullPath = window.location.pathname;
    const splitsPath = currentFullPath.split("/");
    const currentPath = "./" + splitsPath[splitsPath.length-1];
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') == currentPath) {
            link.classList.add('active');
        }else{
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayDateTime();
    setInterval(displayDateTime, 1000);
    applychanges();
    activePage();
    document.getElementById("formscars").addEventListener("submit", function(event){
        event.preventDefault();
        validatecarForm();
    });
});