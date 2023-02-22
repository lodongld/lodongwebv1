function postEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username : "lodong3000@gmail.com",
        Password : "!Newwing2015",
        To : 'cyj@lodong.co.kr',
        From : "lodong3000@gmail.com",
        Subject : "test_SMTP",
        Body : "test test test",
    }).then(
        message => alert(message)
    );
}
 function sendEmail(){
    if (!this.errors.length){
        const emailContent = {
            name:this.name,
            text:this.text,
            email:this.email }
        const JsonEmailContent = JSON.stringify(emailContent)
        axios.post('https://script.google.com/macros/s/AKfycbxeJK9-w09tVnzJ0_7oQFTtMczbyEf0y-Dv5ujgNaFnQJqgjdaswak1ntu9Nm-jT-m9YA/exec',JsonEmailContent)
            .then((response)=>{
                console.log(response)
            })
            .catch((reject)=>{
                console.log(reject)
            })
    }else{
        return
    }
}