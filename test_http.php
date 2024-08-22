<?php
$url = 'https://www.google.com'; // Replace with a valid URL
$content = file_get_contents($url);

if ($content === FALSE) {
    echo 'Failed to fetch content from the URL.';
} else {
    echo 'Content fetched successfully.';
}
?>