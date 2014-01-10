# jquery.formyeah.js

jQuery plugin for keeping user input. Restores values in fields when page reloads. Uses `localStorage`.

_**Disclaimer.** I wrote this plugin quickly and then googled this: [Sisyphus.js](http://sisyphus-js.herokuapp.com/). Use Sisyphus, it should be more reliable. Well, in theory._

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/artpolikarpov/jquery.formyeah.js/master/dist/jquery.formyeah.min.js
[max]: https://raw.github.com/artpolikarpov/jquery.formyeah.js/master/dist/jquery.formyeah.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="jquery.formyeah.min.js"></script>
<script>
  $(function () {
    $('#form1').formyeah();
  });
</script>

<form id="form1" action="?">
  <input type="text" id="name" name="name" placeholder="Your name" />
  <textarea id="comment" name="comment" cols="30" rows="10" placeholder="Comment"></textarea>
  <label for="subscribe"><input type="checkbox" id="subscribe" name="subscribe" /> Subscribe</label>
  <button>Send</button>
</form>
```

Every input, textarea, or select should have an `id`.

Passwords fields won’t be stored as well as fields with the `data-recover="false"` attribute.

## [Simple demo →](http://artpolikarpov.github.io/jquery.formyeah.js/test/jquery.formyeah.html)

## Options
### emptyStorageOnSubmitAndReset
By default data will be released on the form submission/reset. Change this with `emptyStorageOnSubmitAndReset:false`:

```javascript
$('#form1, #form2').formyeah({
  emptyStorageOnSubmitAndReset: false
});
```

### pageIdentifier
Tells the plugin how to identify the current page. By default it’s a page slug taken from `location` object:

```javascript
$('#form1, #form2').formyeah({
  pageIdentifier: [location.pathname, location.search, location.hash].join('')
});
```

If you want your forms be the same on different pages pass the empty identifier `''`.

## Methods
### emptyStorage
Flush form’s data manually:

```javascript
$('#form1, #form2').formyeah('emptyStorage');
```

## Release History
#### 2014-01-11 v0.1.0
