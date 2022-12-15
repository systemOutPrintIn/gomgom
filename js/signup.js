function signup() {
    var $id = $('#id');
    var $password = $('#password');

    
    var regId = /[a-z1-9]/g;
    var regPwd = /[a-z1-9]/g;
 


    if($id.val() == '' || $password.val() == '') return;
    if(regId.test($id) == true && regPwd.test($password) == true) {
        localStorage[$id.val()] = $password.val();
        alert("회원가입 완료!");
    }
    else {
        alert("아이디 또는 패스워드를 다시 확인해주세요. 아이디/패스워드는 영어 또는 숫자여야 합니다.")
    }

    $id.val('');
    $password.val('');


}

function login() {
    var key = $("#userId").val();
    console.log(key);
    var value = localStorage.getItem(key);
    console.log(value);
    
    console.log(key + " : " + value);

    if(value) {
        alert("로그인 되었습니다.");
    }
    else {
        alert("아이디를 찾을 수 없습니다.");
    }
}