<?php
/**
 * Created by PhpStorm.
 * User: Ashot Gharakeshishyan
 * Date: 6/6/18
 * Time: 12:27 PM
 */

$name=$_GET['name'];
$email= $_GET['mail'];
$content = $_GET['description'];

//    $aa = fopen("newfile7.txt","a");
//    $txt =" --".$name."-- --$email--------$content------\n";
//    fwrite($aa,$txt);
//    fclose($aa);

$to = 'laravel2019@gmail.com';
$subject = $name;
$message = $content;
$headers = $email;
mail($to, $subject, $message, $headers);
//header("Location: ../../");
