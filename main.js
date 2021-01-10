function login(){
    player1name=document.getElementById("input1").value;
    player2name=document.getElementById("input2").value;
    localStorage.setItem("playerkey",player1name);
    localStorage.setItem("player2key",player2name);
    window.location="gamepage.html";
}