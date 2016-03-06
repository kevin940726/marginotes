# marginotes
Marginotes takes your jQuery selection and adds notes to the margin with the text provided in HTML attributes.

### Usage

Marginotes works by adding a `desc` attribute to an HTML element, which will be displayed as a tooltip:

![marginotes](https://cloud.githubusercontent.com/assets/3707222/13412271/5434e920-df42-11e5-8c53-c1a4aa25663d.gif)

```javascript
$("anyparagraphselector").marginotes(options)
```

It works with links, as well as with `<span>` elements:

```html
<span desc = "The rainiest place in Europe. Probably. Maybe.">Brión</span>
```

![marginotes](https://cloud.githubusercontent.com/assets/3707222/13556633/11447bde-e3df-11e5-8cc7-1d1f1ca9ac34.gif)


### Options

*width*: sets the tooltip's width. Default is 100px.

*field*: sets the html attribute to look for. Default is `desc`