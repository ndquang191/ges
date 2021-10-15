// let accountName = ["quang","tam","trang","tan","yen"]
// let accountPass = ["quangbeo","tambeo","trangbeo","tanbeo","yenbeo"]


let account = [
    {
        name : "quang",
        pass : "quangbeo"
    },
    {
        name : "trang",
        pass : "tranggay"
    }
]


function add(){
    var registerUsername = document.getElementById('new-username').value
	var registerPassword = document.getElementById('new-password').value
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}

    account.push(newUser)
}


function check(){
    let user = document.getElementById("username").value;
    let pw = document.getElementById("password").value;

    let login = false
    for( let i = 0 ; i < account.length ; i++){
        if( user == account[i].name && pw == account[i].pass){
            login = true;
            location = "main.html"
        }
    }
    if(login === false){
        alert("Ban da nhap sai tai khoan")
    }

}

