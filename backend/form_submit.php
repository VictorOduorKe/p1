<?php

if($_SERVER['REQUEST_METHOD']==='POST'){
    $name=htmlspecialchars(trim($_POST['name']));
    $email=htmlspecialchars(trim($_POST['email']));
    $message=htmlspecialchars(trim($_POST['message']));

    //validate data from user/////////
    if(!empty($email)&& filter_var($email,FILTER_VALIDATE_EMAIL)&& !empty($message)){

        //email details to receive message/

        $to='victoroduorxh2@gmail.com';
        $subject= 'New contact form submitted';
        $emailMessage="You have Received a new contact message from your portfolio form:
         name:$name
         Email:$email
         Message:$message
         ";

         $headers="From: $email\r\n";
         $headers="Reply to: $email\r\n";

         if(mail($to,$subject,$emailMessage,$headers)){
            echo json_encode(['success'=>true, 'message'=>'Your Message has been sent.']);
         }else{
            echo json_encode(['success'=>false,'message'=> 'Failed to send message please try again later.']);
         }
    }else{
        echo json_encode(['success'=>false,'message'=> 'Invalid input. Please fill all te fields correctly']);
    }
}else{
    http_response_code(405);

    echo json_encode(['success'=>false,'message'=> 'Invalid Request Method']);
}