# time-over-http

A proof-of-concept app that calculates a browser’s clock drift from the server’s based on the NTP clock sync algorithm.

#### What? 

Go to [https://time-over-http.herokuapp.com/](https://time-over-http.herokuapp.com/) and mess with your machine’s clock. The reported times will tell you how much your clock differs from the server’s clock. 

This app hooks onto AJAX requests that your app is probably already making and uses them to calculate clock differences.

#### Why? 

In some time-specific applications, you’ll probably want to know if your browser’s clock (the one behind `new Date()`) is significantly different than the one that your server is using (presumably synced through NTP). 

Inside a browser, of course, you cannot detect a machine’s NTP settings, nor can you configure them. This is a work-around to allow you to compensate as required (or notify the user of their clock drift). 

#### What’s up with the two numbers? Why do they differ? 

The first number, `difference_in_seconds_using_date`, is calculated without requiring any server changes. It uses the HTTP `Date` response header, and as such, is the easiest way of implementing this kind of clock drift calculation (but of course, HTTP dates only have second-level information, so it is not very precise at all). 

The second number, `difference_in_seconds_using_custom_header`, is using custom response headers that compensate for the time it takes to generate the server response, and also uses milliseconds for better precision. If you’re looking for greater accuracy, this is the way to go! 
