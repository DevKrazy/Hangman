<?php
/**
 * This script is called when the play window is loaded
 */

$words = file_get_contents("database/dico.csv");
$word_count = count($words);
$rand_index = rand(0, $word_count - 1);
$random_word = explode(",", $words[$rand_index])[0];
var_dump($random_word);


