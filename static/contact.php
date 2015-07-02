<?php
if(isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['subject']) && !empty($_POST['subject']) &&
    isset($_POST['message']) && !empty($_POST['message']) &&
    isset($_POST['number']) && !empty($_POST['number']) &&
    isset($_POST['website'])) {
        // TODO: Check that each method is valid.
        // For example, an email needs to be of the form 'name@example.com'.
        // This is not a very high priority as a malicious user would need to be
        // aware of exactly what kind of data and what fields are expected in
        // order to take advantage of this, but protection would be good to have
        // eventually.
        $from = urldecode($_POST['email']);
        $name = urldecode($_POST['name']);
        $subject = urldecode($_POST['subject']);
        $message = urldecode($_POST['message']);
        $website = urldecode($_POST['website']);
        $number = urldecode($_POST['number']);
        // When a user has JavaScript disabled, the user is requested to provide
        // our team number for authentication. If JavaScript is enabled, the
        // AJAX request will handle this automatically.    
        if ($number!= '2059') {
            header("HTTP/1.1 400 Bad Request");
            echo "Invalid team number.";
            die();
        }
        // This is not visible to the user, so it should never contain anything.
        if ($website !='' && $website != 'None') {
            header("HTTP/1.1 400 Bad Request");
            echo "Invalid request.";
            die();
        }
        if (preg_match( "/[\r\n]/", $name ) ||
            preg_match( "/[\r\n]/", $from)) {
                // A malicious user may attempt to set custom headers using
                // escape characters. If this seems to be a case, no message
                // ought to be sent.
                header("HTTP/1.1 400 Bad Request");
                echo "Something went wrong.";
                die();
        }
        $headers = "Reply-To: {$name} <{$from}>";
        include_once "config.php";
        $worked = mail($config['email'], $subject, $message, $headers);
        if ($worked) {
            header("HTTP/1.1 200 Ok");
            // Email was sent properly.
            // Redirect back to the contact page.
            if ($website != 'None') {
                // When a request is sent through AJAX, the website it set to
                // the string "None". Otherwise, this is blank.
                header("Location: http://team2059.org/contact#sucess");
            }        
            echo "Message sent.";    
            die();
        } else {
            // Something went wrong.
            header("HTTP/1.1 400 Bad Request");
            die();
        }
    } else {
        header("HTTP/1.1 400 Bad Request");
        echo "Missing fields.";
        die();
    }
?>
