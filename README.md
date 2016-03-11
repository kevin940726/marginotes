# react-marginotes
Originally forked and inspired from [fdansv/marginotes](https://github.com/fdansv/marginotes). Use it within react. See the [live demo](https://kevin940726.github.io/react-marginotes).

![marginotes](https://cloud.githubusercontent.com/assets/3707222/13412271/5434e920-df42-11e5-8c53-c1a4aa25663d.gif)

### Install
via `npm`:
```
npm i --save react-marginotes
```

### Usage

react-marginotes is a higher-order component. Wrap it into another component you like:

```js
import Marginotes from 'react-marginotes';

let Link = ({ children, href="#" }) => (
    <a href={href}>{children}</a>
);
Link = Marginotes(Link);

let Span = ({ children }) => (
    <span style={{color: "blue"}}>{children}</span>
);
Span = Marginotes(Span);
```

Then use it like before but adding a `desc` attribute:

```js
<Link desc="...">...</Link>
<Span desc="..."></Span>
<Link href="#" desc="...">...</Link> // other attributes works as well.
```

### Attributes

`width`: sets the tooltip's width. Default is 100px.

```js
<Link width={120} desc="...">...</Link>
```
