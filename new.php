<?php
if(isset($_POST['submit']))
{
$name = $_POST['name'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$study = $_POST['degree'];

$gender = $_POST['gender'];
$email = $_POST['email'];
$faculty = $_POST['faculty'];
}
//database connecion
$con = new mysqli('localhost','root','','test');
if ($con-> connect_error){
    die('Connection Failed : '.$con->connect_error);
}
else{
    $stmt = $con->prepare("insert into registration(name,address,phone,gender,email,degree,faculty) 
    values(?,?,?,?,?,?,?)");
$stmt->bind_param("ssissss",$name,$address,$phone,$gender,$email,$study,$faculty);
$stmt->execute();
echo"Registration successful";

$stmt->close();
$con->close();
}
?>

