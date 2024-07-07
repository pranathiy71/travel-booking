const daysofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const texasCaliCities = [
    'dallas',
    'houston',
    'austin',
    'san antonio',
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
    let hrs = currentDate.getHours();
    let mins = currentDate.getMinutes();
    let secs = currentDate.getSeconds();
    let hours = formatTimeComponent(hrs);
    let minutes = formatTimeComponent(mins);
    let seconds = formatTimeComponent(secs);
    let formattedDateTime = `${today}, ${currentDate.toLocaleDateString()} - ${hours}:${minutes}:${seconds}`;
    document.getElementById('datetime').innerText = formattedDateTime;
}

function displayform(){
    let selectedVal = document?.querySelector('input[name="flightoptions"]:checked').value;
    if(selectedVal == "roundtrip"){
        document.getElementById("roundtripform").classList.remove("hidden");
    }else{
        document.getElementById("roundtripform").classList.add("hidden");
    }
    let userDiv = document.getElementById("FinalUserDetails");
    userDiv.innerHTML = '';
}

let flightOptions = document.querySelectorAll('input[name="flightoptions"]');
flightOptions.forEach(function(val){
    val.addEventListener('change', displayform);
})

function openPassDetail(){
    document.getElementsByClassName("passengerList")[0].classList.remove("hidden");
}

function displayUserInfo(){
    let userDiv = document.getElementById("FinalUserDetails");
    const ori = document.getElementById('origin').value.trim();
    const dest = document.getElementById('destination').value.trim();
    const deDate = document.getElementById('depDate').value;
    const arDate = document.getElementById('arrDate').value;
    const returnDeDate = document?.getElementById('depDate1')?.value;
    const returnArDate = document?.getElementById('arrDate1')?.value;
    const adultcheck = document.getElementById("adNum").value;
    const childcheck = document.getElementById("childNum").value;
    const infantcheck = document.getElementById("infNum").value;
    const selectedVal = document?.querySelector('input[name="flightoptions"]:checked').value;
    
    userDiv.innerHTML = `<p><b>Origin:</b> ${ori}</p>`+
    `<p><b>Destination:</b> ${dest}</p>` + `<p><b>Departure Date:</b> ${deDate}</p>`+
    `<p><b>Arrival Date:</b> ${arDate}</p>`;
    if(selectedVal == "roundtrip"){
        userDiv.innerHTML += `<p><b>Return Departure Date:</b> ${returnDeDate}</p>`+
        `<p><b>Return Arrival Date:</b> ${returnArDate}</p>`;
    }
    adultcheck > 0 ? userDiv.innerHTML += `<p><b>Number of Adults:</b> ${adultcheck}</p>` : '';
    childcheck > 0 ? userDiv.innerHTML += `<p><b>Number of Children:</b> ${childcheck}</p>` : '';
    infantcheck > 0 ? userDiv.innerHTML += `<p><b>Number of Infants:</b> ${infantcheck}</p>` : '';
}

function checkForm(){
    document.getElementById("FinalUserDetails").innerHTML="";
    let validForm = true;
    const org = document.getElementById('origin').value.trim().toLowerCase();
    const dest = document.getElementById('destination').value.trim().toLowerCase();
    const deDate = document.getElementById('depDate').value;
    const arDate = document.getElementById('arrDate').value;
    const returnDeDate = document?.getElementById('depDate1')?.value;
    const returnArDate = document?.getElementById('arrDate1')?.value;
    const adultcheck = document.getElementById("adNum").value;
    const childcheck = document.getElementById("childNum").value;
    const infantcheck = document.getElementById("infNum").value;
    const selectedVal = document?.querySelector('input[name="flightoptions"]:checked').value;
    
    let oerr = document.getElementById("orerror");
    let derr = document.getElementById("desterror");
    let arrerr = document.getElementById("arrerror");
    let deperr1 = document.getElementById("deperror1");
    let arrerr1 = document.getElementById("arrerror1");

    oerr.innerHTML = "";
    derr.innerHTML = "";
    arrerr.innerHTML = "";
    deperr1.innerHTML = "";
    arrerr1.innerHTML = "";

    if(!texasCaliCities.includes(org)){
        validForm = false;
        oerr.innerHTML = "Origin must be a city in Texas or California."
    }
    if(!texasCaliCities.includes(dest)){
        validForm = false;
        derr.innerHTML = "Destination must be a city in Texas or California."
    }
    if(org == dest){
        validForm = false;
        oerr.innerHTML = "Origin and Destination cannot be same.";
        derr.innerHTML = "Origin and Destination cannot be same.";
    }
    if(deDate > arDate){
        validForm = false;
        arrerr.innerHTML = "Arrival Date cannot be before Departure Date."
    }
    if(returnDeDate && returnDeDate < arDate){
        validForm = false;
        deperr1.innerHTML = "Return Departure Date cannot be before Arrival Date."
    }
    if(returnArDate && returnDeDate && returnDeDate > returnArDate){
        validForm = false;
        arrerr1.innerHTML = "Departure Date cannot be after Arrival Date."
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
    if(selectedVal == "roundtrip"){
        if(returnDeDate == "Invalid Date"){
            validForm = false;
            deperr1.innerHTML = "This field is required";
        }
        if(returnArDate == "Invalid Date"){
            validForm = false;
            arrerr1.innerHTML = "This field is required";
        }
    }
    if(validForm){
        displayUserInfo();
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

    const div = document.getElementsByClassName("triptype")[0];
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

    const div = document.getElementsByClassName("triptype")[0];
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
    
    document.getElementById('formsflight').addEventListener('submit', function(event) {
        event.preventDefault();
        checkForm();
    });
});
