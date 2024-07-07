const daysofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const texasCaliCities = [
    'dallas',
    'houston',
    'austin',
    'san antonio',
    'richardson',
    'el paso',
    'fort worth',
    'lubbock',
    'corpus christi',
    'midland',
    'amarillo',
    'brownsville',
    'mcAllen',
    'harlingen',
    'killeen',
    'waco',
    'tyler',
    'college station',
    'laredo',
    'beaumont',
    'abilene',
    'los angeles',
    'san francisco',
    'san diego',
    'san jose',
    'sacramento',
    'oakland',
    'long beach',
    'fresno',
    'santa barbara',
    'burbank',
    'palm springs',
    'ontario',
    'john wayne (santa sna)',
    'sedding',
    'monterey',
    'bakersfield',
    'stockton',
    'santa rosa',
    'eureka',
    'san luis obispo'
];
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

    const div = document.getElementsByClassName("staysdetails")[0];
    const inp = div.getElementsByTagName("input");
    const lab = div.getElementsByTagName("label");
    const leg = div.getElementsByTagName("legend");
    const p = div.getElementsByTagName("p");
    const h3 = div.getElementsByTagName("h3");

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
    }
}
function updateInputchanges(){
    const savedBgColor = localStorage.getItem('backgroundColor');
    const backGroundCl = !!savedBgColor ? savedBgColor : document.getElementById('backgr').value;

    const div = document.getElementsByClassName("staysdetails")[0];
    const inp = div.getElementsByTagName("input");
    const lab = div.getElementsByTagName("label");
    const leg = div.getElementsByTagName("legend");
    const p = div.getElementsByTagName("p");
    const h3 = div.getElementsByTagName("h3");

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
function displayStayDetails(){
    let stayDiv = document.getElementById("displaystaydetails");
    const city = document.getElementById("city").value.trim();
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const adultcheck = parseInt(document.getElementById("adNum").value);
    const childcheck = parseInt(document.getElementById("childNum").value);
    const infantcheck = parseInt(document.getElementById("infNum").value);
    let totalpass = 0;
    if(document.getElementById("adults").checked){
        totalpass += adultcheck
    }
    if(document.getElementById("children").checked){
        totalpass += childcheck
    }
    if(document.getElementById("infants").checked){
        totalpass += infantcheck;
    }
    const totalrooms = Math.ceil(totalpass/2);
    stayDiv.innerHTML = `<p><b>City:</b> ${city}<p>`+
    `<p><b>Check In Date: </b> ${checkIn}</p>` + `<p><b>Check Out Date: </b> ${checkOut}</p>`+
    `<p><b>Adult Passengers: </b> ${adultcheck}</p>` + `<p><b>Children Passengers: </b> ${childcheck}</p>`+
    `<p><b>Infant Passengers: </b> ${infantcheck}</p>`+ `<p><b>Total Rooms: </b> ${totalrooms}</p>`;
}

function validateStayForm(){

    document.getElementById("displaystaydetails").innerHTML = "";
    const city = document.getElementById("city").value.trim().toLowerCase();
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const adultcheck = parseInt(document.getElementById("adNum").value);
    const childcheck = parseInt(document.getElementById("childNum").value);
    const infantcheck = parseInt(document.getElementById("infNum").value);
    
    let validForm = true;

    let cityerror = document.getElementById("cityerror");
    let outerror = document.getElementById("checkouterror");

    outerror.innerHTML = "";
    cityerror.innerHTML = "";

    if(checkIn > checkOut){
        validForm = false;
        outerror.innerHTML = "Checkout Date should be after CkeckIn Date";
    }if(!texasCaliCities.includes(city)){
        validForm = false;
        cityerror.innerHTML = "City should be from Texas or California";
    }
    if(adultcheck > 0){
        document.getElementById("adults").checked = true;
    }else{
        document.getElementById("adults").checked = false;
    }
    if(childcheck > 0){
        document.getElementById("children").checked = true;
    }else{
        document.getElementById("children").checked = false;
    }
    if(infantcheck > 0){
        document.getElementById("infants").checked = true;
    }else{
        document.getElementById("infants").checked = false;
    }
    if(validForm){
        displayStayDetails();
    }
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

    document.getElementById('formsstays').addEventListener('submit', function(event) {
        event.preventDefault();
        validateStayForm();
    });
});

