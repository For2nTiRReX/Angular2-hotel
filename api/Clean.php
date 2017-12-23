<?php
class Clean {
    public function simple_clean($value) {
        $value = stripslashes($value);
        $value = strip_tags($value);
        $value = htmlentities($value);
        return $value;
    }
}

