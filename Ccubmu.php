<?php
// Made by ZheHacK
$email = "guest255@moratelindo.com";

if (!empty($email)) {
   
    $url = "http://apiserver.transvision.co.id:8080/api/account_external/login";

    $headers = array(
        "Origin: https://www.cubmu.com",
        "Referer: https://www.cubmu.com/",
        "User-Agent: Mozilla/5.0 (Linux; Android 10; RMX2030) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36"
    );

    $data = array(
        "email" => $email,
        "password" => "Z3Vlc3QyNTU=",
        "deviceId" => "1234567890",
        "deviceType" => "A",
        "deviceModel" => "A21",
        "deviceToken" => "",
        "serial" => "",
        "platformId" => "4028c685635a0c6301635a117a6e0002"
    );

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    if ($httpCode == 200) {
        $data_json = json_decode($response, true);
        if (isset($data_json['access_token'])) {
            
            $formatted_response = array(
                "userId" => $email,
                "sessionId" => $data_json['access_token'],
                "merchant" => "giitd_transvision"
            );

            // Mengenkripsi ke Base64
            $encoded_response = base64_encode(json_encode($formatted_response));

            header('Content-Type: application/json');

            echo $encoded_response;
        } else {
            echo "Tidak ada dalam respons.";
        }
    } else {
        echo "Gagal mengambil data.: " . $httpCode;
    }

    curl_close($ch);
} else {
    echo "Email tidak valid atau tidak ditemukan dalam parameter 'id'.";
}
?>
