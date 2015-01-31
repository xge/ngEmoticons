ngEmoticons
===========

An angularjs filter for converting text into emoticons.

Supports chat codes like :) :P :( 3:) :D :/ ;)  (y) (^) <3 </3 etc.

Screenshot
==========
![screenshot](https://raw.github.com/ritz078/ngEmoticons/master/demo/screen.png)

Dependencies
============
+ AngularJs 1.2 or above
+ ng-Sanitize

Getting Started
===============
Install through bower
```html
bower install ng-emoticons --save
```
load css files
put this below code in the head of html
```html
 <link rel="stylesheet" href="ng-emoticons.min.css">
```

 Then load the following files
```html
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script src="js/ng-emoticon.min.js"></script>
```

Load 'Emoticons' as a dependency
```javascript
angular.module('ngEmoticonApp', ['ngSanitize','ngEmoticons'])
```

HTML:
```html
<div ng-bind-html="text | linky:'_blank' | emoticons"></div>
```

Version 1.0.0
=============
+ forked [ngEmoticons by Ritesh Kumar](https://github.com/ritz078/ngEmoticons)
+ upgraded bower and npm dependencies
+ added custom smileys

Version 0.2.0
=============
Using font instead of images provided by icomoon.

