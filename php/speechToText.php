<?php

$command = "python ../src/python/speech2text.py";
$string = system($command);
echo $string;

?>

