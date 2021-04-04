<template>
  <div id="app">
    <!------------
    -   Header   -
    ------------->

    <header id="about_me" class="section">
      <h1>About Me</h1>
      <p>
        My name is Jacob Anderson, I am from Georgia and absolutely love music!
      </p>
    </header>

    <!----------------
    -   Navigation   -
    ----------------->

    <nav class="local">
      <ul id="real_list" class="flexbox_container">
        <li><a href="#about_me">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <!-- Note: this is a pseudo container, for design only -->
      <ul id="pseudo_list" class="flexbox_container">
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
      </ul>
    </nav>

    <!-----------------
    -   Router View   -
    ------------------>

    <router-view/>

    <!------------
    -   Footer   -
    ------------->

    <footer id="contact" class="section flexbox_container">
      <h2>Contact</h2>
      <nav class="footer_nav">
        <ul>
          <li>
            <a href="https://www.facebook.com/jacoba1100254352">Facebook</a>
          </li>
          <li><a href="https://www.github.com/Jacoba1100254352">Github</a></li>
          <li>
            <a href="https://www.instagram.com/jacoba1100254352">Instagram</a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video /* eslint-disable-line */
{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section /* eslint-disable-line */
{
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/**************
*   General   *
**************/

* {
  box-sizing: border-box;
}

body {
  margin: 20px 0%;
  background-color: lightblue;
  font-family: sans-serif;
  /* --size_adjustment: 1.5; */
}

/* header, nav, section, footer {
	margin: 0px 2%;
} */

/**************
*   Heading   *
**************/

header {
  margin: 10px;
}

header p {
  text-align: center;
}

h1 {
  font-weight: bold;
  text-align: center;
  font-size: 150%;
  padding-bottom: 5px;
}

a {
  color: black;
  text-decoration: none;
}

/*****************
*   Navigation   *
*****************/

nav.local {
  position: relative;
}

nav.local li {
  width: calc(100% / 4);
}

nav.local a {
  color: black;
  display: block;
  padding: 3%;
}

ul.flexbox_container {
  flex-flow: row nowrap;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}

li.pseudo_element {
  outline: 1px solid;
  background-color: rgb(160, 160, 160);
}

#pseudo_list li {
  min-width: 80px;
}

#pseudo_list {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

#real_list,
#real_list li {
  text-align: center;
  align-items: center;
  z-index: 1;
}

/**************
*   Section   *
**************/

.section {
  background-color: whitesmoke;
  padding: 10px 20px;
}

#italic {
  font-style: italic;
}

h2 {
  font-weight: bold;
  text-align: center;
  font-size: 125%;
  padding-bottom: 5px;
}

ul,
ol {
  list-style-position: inside;
}

ol {
  list-style-type: decimal;
}

ul {
  list-style-type: disc;
}

/**************
*   Article   *
**************/

@media screen and (min-width: 961px) {
  .flexbox_container {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }

  article {
    display: flex;
    flex-flow: column nowrap;
    width: 49%;
  }

  #experience ul {
    transform: translateX(2%);
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  body {
    width: 100%;
  }

  ul.flexbox_container {
    flex-flow: row wrap;
  }

  nav.local {
    width: 100%;
  }

  nav.local ul li {
    width: 100%;
  }

  .section {
    width: 100%;
  }
}

/*************
*   Footer   *
*************/

/* footer a{ display: block; } */
/* footer a:link, footer a:visited, footer a:focus{ background: rgb(128,128,128); }
footer a:hover{  background: rgb(110,110,110); }
footer a:active{ background: rgb(100,100,100); } */

/* @media screen and (min-width:1200px) { */
footer h2 {
  width: 100%;
}

footer nav {
  width: 100%;
}

footer ul {
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style: none;
}

/* } */
</style>
