<?php
/* 
    如果要用register.php处理登陆
    传入用户名必须使用username这个键
    传入密码必须使用password这个键
*/
header('content-type:text/html;charset=utf-8;');
// print_r($_POST);
$uname = $_POST['username'];//获取前端传递的用户名
$upass = $_POST['password'];//获取前端传递的密码
// echo $uname;
// echo $upass;
$conn = mysqli_connect('localhost','root','root','users');
// $sql = "INSERT INTO `user` VALUES ('$uname','$upass')";
$sql = "INSERT INTO `user` (`username`,`password`) VALUES ('$uname','$upass')";
$res = mysqli_query($conn,$sql);
mysqli_close($conn);

if($res){
    header('location:../pages/login.html');
}else{
    echo "服务器错误";
}

?>