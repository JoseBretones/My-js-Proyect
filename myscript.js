//JSON ADMIN
var admin = {
    correo: "joseantoniobregar@gmail.com",
    contraseña: "daw",
    nombre: "Admin"
 }
 //JSON USERS
 var user1 = {
    correo: "javier.prada@eusa.es",
    contraseña: "cliente",
    nombre: "Javi"
 }
 var user2 = {
    correo: "josemanuelpinez.17@campuscamara.es",
    contraseña: "piñez",
    nombre: "Jose"
 } 
 var user3 = {
    correo: "joaquinbono.18@campuscamara.es",
    contraseña: "bono",
    nombre: "Joaquin"
 }
 //ARRAY USERS AND ADMIN
 var arrayUsersAndAdmin = [admin,user1,user2,user3];
 //LOGIN ACCESS
 function loginAccess(){ 
    let i=0;
    let login = document.getElementById("loginForm");
    let correoValidated = false;
    let passwordValidated = false;
    let correo = document.getElementById("userName").value;
    let password = document.getElementById("userPassword").value;
    console.log(correo)
    console.log(password)
    
    //validating user  
       do{
          if(arrayUsersAndAdmin[i].correo==correo){
             correoValidated = true;
          }else{
             console.log(arrayUsersAndAdmin[i].correo)
             i++;
          }
       }while(!correoValidated  && i<arrayUsersAndAdmin.length); 
       //validating password
       if(correoValidated){
          if(arrayUsersAndAdmin[i].contraseña == password){
             passwordValidated = true;
          }
       }
       if(correoValidated && passwordValidated){
          let loginButton = document.getElementById("loginButton");
          loginButton.style.display = "none";
          if(arrayUsersAndAdmin[i].nombre=="Admin"){
             let crud =  document.getElementById("crud");
             crud.style.display = "block";
          }else{
          let spanWelcome = document.getElementById("welcomeMessage");
          spanWelcome.innerHTML = "Bienvenido "+arrayUsersAndAdmin[i].nombre; 
          }
          mainPage();     
       }else{
          if(document.getElementById("spanError") == null){
             let span = document.createElement("span");
             span.setAttribute("id","spanError");
             span.setAttribute("class","spanErrors");
             span.innerHTML="Usuario o contraseña incorrectos";
             document.getElementById("loginForm").appendChild(span);
          }
       }
    }
    function removeSpanError(){
       if(document.getElementById("spanError")!=null){
          document.getElementById("loginForm").removeChild(document.getElementById("spanError"));
       }
    }
 //ADD SUBLIST CATALOGO//
 function addTiposCañas(){
    tiposCañas = document.getElementById("tiposCañas");
    if(tiposCañas.style.display == "block"){
       tiposCañas.style.display = "none";
    }else{
       tiposCañas.style.display = "block";
    }
 }
 function addTiposCarretes () {
    tiposCarretes = document.getElementById("tiposCarretes");
    if(tiposCarretes.style.display == "block"){
       tiposCarretes.style.display = "none";
    }else{
       tiposCarretes.style.display = "block";
    }
 }
 function addTiposAccesorios() {
    tiposAccesorios = document.getElementById("tiposAccesorios");
    if(tiposAccesorios.style.display == "block"){
       tiposAccesorios.style.display = "none";
    }else{
       tiposAccesorios.style.display = "block";
    }
 }
 //SHOW ALL FISHING RODS
 function showAllFishingRods(){
    let carousel = document.getElementById("carousel");
    carousel.style.display = "none";
    let cañasSurfcasting = document.getElementById("sectionCañasSurfcasting");
    cañasSurfcasting.style.display = "none";
    let cañasSpinning = document.getElementById("sectionCañasSpinning");
    cañasSpinning.style.display = "none";
    let cañas = document.getElementById("sectionCañas");
    cañas.style.display="block";
 }
 //SHOW MAIN PAGE
 function mainPage(){
    let cañasSurfcasting = document.getElementById("sectionCañasSurfcasting");
    cañasSurfcasting.style.display = "none";
    let cañasSpinning = document.getElementById("sectionCañasSpinning");
    cañasSpinning.style.display = "none";
    let cañas = document.getElementById("sectionCañas");
    cañas.style.display="none";
    let login = document.getElementById("containerLogin");
    login.style.display= "none";
    let principalContainer = document.getElementById("principalContainer");
    principalContainer.style.display="block";
    let carousel = document.getElementById("carousel");
    carousel.style.display = "block";
    let catalogo = document.getElementById("catalogo");
    catalogo.style.display="block";
 }
 //LOGIN
 function showContainerLogin(){
    let principalContainer = document.getElementById("principalContainer");
    principalContainer.style.display="none";
    let carousel = document.getElementById("carousel");
    carousel.style.display = "none";
    let catalogo = document.getElementById("catalogo");
    catalogo.style.display="none";
    let cañasSurfcasting = document.getElementById("sectionCañasSurfcasting");
    cañasSurfcasting.style.display = "none";
    let cañasSpinning = document.getElementById("sectionCañasSpinning");
    cañasSpinning.style.display = "none";
    let cañas = document.getElementById("sectionCañas");
    cañas.style.display="none";
    login = document.getElementById("containerLogin");
    login.style.display = "block";
 }
 //SHOW CAÑAS SURFCASTING
 function showCañasSurfcasting(){
    let carousel = document.getElementById("carousel");
    carousel.style.display = "none";
    let cañasSurfcasting = document.getElementById("sectionCañasSurfcasting");
    cañasSurfcasting.style.display = "block";
    let cañasSpinning = document.getElementById("sectionCañasSpinning");
    cañasSpinning.style.display = "none";
    let cañas = document.getElementById("sectionCañas");
    cañas.style.display="none";
 }
 //SHOW CAÑAS SPINNING
 function showCañasSpinning(){
    let carousel = document.getElementById("carousel");
    carousel.style.display = "none";
    let cañasSurfcasting = document.getElementById("sectionCañasSurfcasting");
    cañasSurfcasting.style.display = "none";
    let cañasSpinning = document.getElementById("sectionCañasSpinning");
    cañasSpinning.style.display = "block";
    let cañas = document.getElementById("sectionCañas");
    cañas.style.display="none";
 }