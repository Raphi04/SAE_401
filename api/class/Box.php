<?php
Class Box {
    private $conn;
    private $data_base;
    public $id;
    public $nom;
    public $piece;
    public $prix;
    public $image;

    public $fav;

    function __construct($db) {
        $this->conn = $db;
    }

    function getBox() {
        $sqlQuery = "SELECT * FROM box WHERE id=:id";
        $stmt = $this->conn->prepare($sqlQuery);
        $options = [
            "id" => $this->id
        ];
        if($stmt->execute($options)) {
            return $stmt;
        } else {
            return "Erreur base de donnée";
        }    
    }

    function getAllBoxes() {
        $sqlQuery = "SELECT * FROM box";
        $stmt = $this->conn->prepare($sqlQuery);
        if($stmt->execute()) {
            return $stmt;
        } else {
            return "Erreur base de donnée";
        }  
    }

    function getAliments() {
        //On récupère les informations de boxAliments
        $sqlQuery = "SELECT aliments.nom, quantité FROM boxaliments INNER JOIN aliments ON boxaliments.idAliment = aliments.id WHERE idBox=:id;";
        $stmt = $this->conn->prepare($sqlQuery);
        $options = [
            "id" => $this->id
        ];

        //Si l'éxécution fonctionne on continue
        if($stmt->execute($options)) {
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

            //On créer un tableau de tableau contenant les informations sur les alliments
            $allAliments = [];
            $oneAliment = [];
            foreach($results as $result) {
                $oneAliment["nom"] = $result["nom"];
                $oneAliment["quantite"] = $result ["quantité"];
                array_push($allAliments, $oneAliment);
            }
            return $allAliments;
        } else {
            return "Erreur base de donnée";
        }  
    }

    function getSaveur() {
        //On récupère les informations de boxAliments
        $sqlQuery = "SELECT saveurs.nom FROM boxsaveurs INNER JOIN saveurs ON boxsaveurs.idSaveur = saveurs.id WHERE idBox=:id;";
        $stmt = $this->conn->prepare($sqlQuery);
        $options = [
            "id" => $this->id
        ];

        //Si l'éxécution fonctionne on continue
        if($stmt->execute($options)) {
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

            //On créer un tableau contenant les informations sur les alliments
            $allSaveur = [];
            foreach($results as $result) {
                $allSaveur[] = $result["nom"];
            }
            return $allSaveur;
        } else {
            return "Erreur base de donnée";
        }  
    }
}