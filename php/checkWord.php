<?php
session_start();
$userLetter = strtolower($_POST["letter"]);
$word = $_SESSION["word"];
$currentWord = $_SESSION["current_word"];

$letters = str_split($word);
$currentLetters = str_split($currentWord);
if (in_array($userLetter, $letters)) {
    for ($i = 0; $i < count($letters); $i ++) {
        if ($letters[$i] == $userLetter) {
            $currentLetters[$i] = $userLetter;
        }
    }
    $_SESSION["current_word"] = implode("", $currentLetters);
}
echo($_SESSION["current_word"]);
