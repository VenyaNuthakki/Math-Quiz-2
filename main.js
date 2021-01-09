function login(){
    player1_name=document.getElementById("player1_name").value;
    player2_name=document.getElementById("player2_name").value;
    localStorage.setItem("player_key",player1_name);
    localStorage.setItem("player2_key",player2_name);
    window.location="gamepage.html";
}