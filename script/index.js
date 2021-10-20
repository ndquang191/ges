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

localStorage.setItem("account",JSON.stringify(account))

document.getElementById("addNewUser").addEventListener("click",function(e){
    e.preventDefault();

    var registerUsername = document.getElementById('new-username').value
	var registerPassword = document.getElementById('new-password').value
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}

    account = [...account,newUser]

    localStorage.setItem("account",JSON.stringify(account))


    console.log(account);
    account.push(newUser)


})



function check(){
    let user = document.getElementById("username").value;
    let pw = document.getElementById("password").value;


    account = JSON.parse( localStorage.getItem("account"))

    console.log(account);

    let login = false

    for( let i = 0 ; i < account.length ; i++){
    
        console.log(account[i].name + " " + account[i].pass + " : " +  user + " " + pw);

        
        if( user == account[i].name && pw == account[i].pass){

            login = true;
            location = "main.html"
            console.log("Dung tai khoan");
        }

    }
    if(login === false){
        alert("Ban da nhap sai tai khoan")
    }

}

