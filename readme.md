# CHANGE THE WORDS

Change the words with jQuery. 

This is an adaptation of the original plugin here - https://github.com/taluttasgiran/changethewords

It allows for both animateIn and animateOut arguments.

Depends on animate.css library - https://github.com/daneden/animate.css

Best example I have of this working is the hero section of our company website home page - https://white-fire.co.uk

## Install
Install using bower
~~~
bower install jq-changethewords
~~~

## USAGE
Include plugin and animate.css in the project
~~~
<head>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css?ver=1.0.0">
  <script type="text/javascript" src="/path/to/jq-changethewords/jq-changethewords.min.js"></script>
</head>  
~~~
Markup
~~~
<div id="changethewords">I love
  <span data-id="1">Code</span>
  <span data-id="2">Spaghetti</span>
  <span data-id="3">Cats</span>
  <span data-id="4">Bikes</span>
  <span data-id="5">People</span>
  <span data-id="6">Me</span>
  <span data-id="7">You</span>
</div>
~~~
Initiate using Javascript
~~~
  <script type="text/javascript">
    $(function() {
      $("#changethewords").changeWords({
        time: 1500,
        animateIn: "fadeIn",
        animateOut: "fadeOut,
        selector: "span"
      });
    });
  </script>
~~~


## Animation List 
See - https://daneden.github.io/animate.css/
