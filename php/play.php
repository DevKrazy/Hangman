<?php
session_start();

$words = file("../database/dico.csv");
$word_count = count($words);
$rand_index = rand(0, $word_count - 1);
$random_word = explode(",", $words[$rand_index])[0];
$random_description = explode(",", $words[$rand_index])[1];

$_SESSION["word"] = $random_word;
$_SESSION["description"] = $random_description;
$_SESSION["current_word"] = "-------";
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="../css/general_style.css" rel="stylesheet" type="text/css"/>
    <link href="../css/play.css" rel="stylesheet" type="text/css"/>
    <script src="../js/play.js"></script>
    <script src="../js/simpleajax.js"></script>
    <title>Hangman by Nathan & Lise - Playing</title>
</head>
<body>
<div id="header">
    <h1>Devinez le mot</h1>
    <h3>Indication : ...</h3>
    <h1 id="word"><?php
        echo($_SESSION["current_word"]);
        ?></h1>
    <div id="potence">
        <img src="../graphics/potence1.png" alt="potence">
    </div>
    <?php
    $idx = 1;
    echo("<div class=\"letters\">");
    foreach(range('A','Z') as $letter) {
        if ($idx == 14) {
            echo("</div><div class=\"letters\">");
        }
        $idx += 1;
        echo("<img id=\"".$letter."\" src=\"../graphics/".$letter.".png\" alt=\"lettre\">");
    }
    echo("</div>");
    ?>
    <div id="menu">
        <a class="button" href="../index.html">ACCUEIL</a>
        <a class="button" href="play.php">REJOUER</a>
    </div>

</div>
</body>
</html>