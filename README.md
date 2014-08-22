ng-video-preview
================

ngVideoPreview is an angular.js directive that generate the emdeddable iframe of a video url.
Actually are supported:

- Youtube
- Vimeo
- Vine 
- Bitlanders 
 
Install
------

```
bower install ng-video-preview
```

Include the video-preview.js script provided in bower_components and add `ngVideoPreview` in your app's dependencies. 

Usage
------

Youtube:
```html
<ng-video-preview source="youtube" url="http://youtu.be/VEUfscdqpNg"></ng-video-preview>
```

Vimeo:
```html
<ng-video-preview source="vimeo" url="http://vimeo.com/101266603"></ng-video-preview>
```

Vine:
```html
<ng-video-preview source="vine" url="https://vine.co/v/bnB77Z9QMZh"></ng-video-preview>
```

Bitlanders:
```html
<ng-video-preview source="bitlanders" url="http://www.bitlanders.com/movie/music-concert/54514"></ng-video-preview>
```

You can also manually specify player's width and height in pixels, for example:
```html
<ng-video-preview source="youtube" player-width="600" player-height="800" url="http://youtu.be/VEUfscdqpNg"></ng-video-preview>
```
