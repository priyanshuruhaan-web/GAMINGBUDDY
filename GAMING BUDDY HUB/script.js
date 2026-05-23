let userName = "";
let currentChat = "";

/* USERS DATABASE */
const users = [
  {name:"Aman", game:"Free Fire", skill:"Pro", style:"Neon"},
  {name:"Ravi", game:"PUBG", skill:"Beginner", style:"Fire"},
  {name:"John", game:"Valorant", skill:"Expert", style:"Dark"},
  {name:"Sara", game:"Minecraft", skill:"Pro", style:"Rainbow"},
  {name:"Karan", game:"BGMI", skill:"Pro", style:"Ice"},
  {name:"Alex", game:"Roblox", skill:"Expert", style:"Neon"},
  {name:"Mia", game:"Roblox", skill:"Beginner", style:"Rainbow"}
];

/* LOGIN */
function enterApp(){
  userName = document.getElementById("name").value;
  if(!userName) return;

  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "block";
}

/* SEARCH */
function searchPlayers(){

  let game = document.getElementById("game").value;
  let skill = document.getElementById("skill").value;
  let style = document.getElementById("style").value;

  let result = users.filter(u =>
    (game === "" || u.game === game) &&
    (skill === "" || u.skill === skill) &&
    (style === "" || u.style === style)
  );

  let box = document.getElementById("results");
  box.innerHTML = "";

  if(result.length === 0){
    box.innerHTML = "<p>No players found 😢</p>";
    return;
  }

  result.forEach(u=>{
    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${u.name}</h3>
      <p>🎮 ${u.game}</p>
      <p>⭐ ${u.skill}</p>
      <span class="tag">✨ ${u.style}</span>
      <br><br>

      <button onclick="addFriend('${u.name}')">➕ Add Friend</button>
      <button onclick="openChat('${u.name}')">💬 Chat</button>
    `;

    box.appendChild(div);
  });
}

/* FRIEND */
function addFriend(name){
  alert("Friend request sent to " + name);
}

/* CHAT OPEN */
function openChat(name){
  currentChat = name;

  let panel = document.getElementById("chatPanel");
  panel.style.display = "block";

  document.getElementById("chatWith").innerText = "💬 Chatting with " + name;

  document.getElementById("messages").innerHTML = "";

  // add system message so you SEE chat is open
  let div = document.createElement("div");
  div.innerText = "System: Chat started with " + name;
  div.style.color = "lime";

  document.getElementById("messages").appendChild(div);
}

/* SEND MESSAGE */
function sendMsg(){
  let msg = document.getElementById("msg").value;
  if(!msg) return;

  let box = document.getElementById("messages");

  let div = document.createElement("div");
  div.innerText = "You: " + msg;

  box.appendChild(div);

  document.getElementById("msg").value = "";
}

/* CLOSE CHAT */
function closeChat(){
  document.getElementById("chatPanel").style.display = "none";
}