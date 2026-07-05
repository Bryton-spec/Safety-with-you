function login() {
  
  let employee =
    document.getElementById("employee").value;
  
  let password =
    document.getElementById("password").value;
  
  if (employee === "" || password === "") {
    
    alert("Preencha todos os campos.");
    
    return;
    
  }
  
  alert("Bem-vindo ao STIAD Digital!");
  
  window.location = "dashboard.html";
  
}