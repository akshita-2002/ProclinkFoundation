# HTML & CSS
- Unordereed list
```html
<ul>
    <li></li>
    <li></li>
</ul>
```
- Ordered list
```html
<ol>
    <li>Trvalling</li>
    <li>Reading</li>
</ol>
```
- Nested list
```html
<ul>
    <li>Travelling</li>
    <li>Reading</li>
     <ol start="2"><!--  the numbering starts from 2  -->
        <li>Sapiens</li>
        <li>Think like a monk</li>
    </ol>
</ul>
```
- to write a paragraph text
```html
<p>lorem ipsum dolor sit</p>
```
- to attach links
```html
<a href="url">Name for the link</a>
<a href="url" target="_blank">Name for the link</a> <!-- redirects to new tab on clickling the link>
```
- to add telephone number
```html
<a href="tel:+919705725615">+91 9705725165</a>
<a href="mailto:akshitamandala@gmail.com">akshitamandala@gmail.com</a> <!--to add mail link>
```

### Types of CSS
![alt text](<Screenshot (24).png>)

- inline 
```html
<li style="color: red;">Travelling</li>
```
- internal 
```html
<style>
    h3{
        color: orange;
    }
</style>
```
- external : writing separate .css file and add in index.html file
```html
<link rel="stylesheet" href="practice.css">
```

- inline and internal reduces the rendering time => as for external new http request will be send to request for the file.

- external files can be used for separation of concern

- the same external file can be linked to different html files.

## CSS TERMINOLOGY
![alt text](<Screenshot (25).png>)

### Text Styling 
- font-size 
- font-weight - boldness of text
- font-style - italic , bold
- text-transform - change case
- text-align
- text-decoration - underline , dotted line,overline, line through(anchor and link have by default)
- letter-spacing
- line-height - space between two lines

- line height is inversly proportional to font size

```css
h1{
    font-size:48px;
    font-weight: normal;
    font-style: italic;
    color: crimson;
    letter-spacing:15px; /*for brands*/  
    text-transform: uppercase;
    text-align: center;
    text-decoration:underline;
    line-height: 1;
}
```
#### Color Formats
   - use color name, color code 

   - rgb(205,92,92)
   - Hex(#cd0384) => cd is R, 03 is G, 84 is B 
   - hsl(hue,saturation,lightness) -> hue is color , saturation -> This value represents the color's saturation. Here 100% is completely saturated, while 0% is completely unsaturated (gray). , lightness -> This value represents the color's lightness. Here 100% is white, 0% is black, and 50% is "normal".

```css
h1{
    font-size:60px;
    font-weight: normal;
    font-style: italic;
    color: crimson;
}
```
- rgb(205,92,92) => the value varies from 0-255

- two types of fonts => Serif and and Sans-serif 
- google fonts => to get free fonts

## BOX_MODEL

- every element must follow the box model

- box model is the margin-> border->padding->content

- margin is to push other elements , to create space between elements

- list comes with padding by default

- padding is used to create space around elements content

```css
border-radius /* the sharpness around the border*/