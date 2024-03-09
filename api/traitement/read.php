<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require "../config/Database.php";
require "../class/Box.php";

//Connexion à la base de donnée
$database = new Database();
$db = $database->getConnection();

//Création de l'objet Box
$box = new Box($db);

//Si aucun JSON nous a été envoyé alors on récupère toutes les informations sinon on ne récupère que les informations d'une box
if(!isset($_GET["id"])) {

    //Utilisation de la fonction pour récupérer les informations des box
    $stmt = $box->getAllBoxes();
    $itemCount = $stmt->rowCount();
    if($itemCount > 0){
        $boxArr = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){      //Tant qu'il y a des lignes on continue
            extract($row);
            $box->id = $id;
            $aliments = $box->getAliments();        //On récupère les aliments pour une box avec un certain ID
            $saveurs = $box->getSaveur();           //On récupère les saveurs pour une box avec un certain ID

            //Création du tableau contenant les informations de la box
            $e = [          
                "id" => $id,
                "nom" => $nom,
                "pièces" => $pièces,
                "prix" => $prix,
                "image" => $image,
                "fav" => $fav,
                "stars" => $stars,
                "aliments" => $aliments,
                "saveurs" => $saveurs
            ];
            array_push($boxArr, $e);        //On ajoute le tableau au tableau général 
        }
        echo json_encode($boxArr);          //On renvoie le fichier JSON avec les informations
    }else{
        http_response_code(404);
        echo json_encode(["message" => "Erreur dans le traitement."]);
    }
} else {
    //On récupère l'ID du fichier JSON
    $box->id = $_GET["id"];
    
    //Utilisation de la fonction pour récupérer les informations de la box
    $stmt = $box->getBox();
    $itemCount = $stmt->rowCount();
    if($itemCount > 0){
        $boxArr = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){      //Tant qu'il y a des lignes on continue
            extract($row);
            $box->id = $id;
            $aliments = $box->getAliments();        //On récupère les aliments pour une box avec un certain ID
            $saveurs = $box->getSaveur();           //On récupère les saveurs pour une box avec un certain ID7

            //Création du tableau contenant les informations de la box
            $e = [
                "id" => $id,
                "nom" => $nom,
                "pièces" => $pièces,
                "prix" => $prix,
                "image" => $image,
                "aliments" => $aliments,
                "saveurs" => $saveurs
            ];
            array_push($boxArr, $e);        //On ajoute le tableau au tableau général
        }
        echo json_encode($boxArr);          //On renvoie le fichier JSON avec les informations
    }else{
        http_response_code(404);
        echo json_encode(["message" => "Erreur dans le traitement."]);
    }}

