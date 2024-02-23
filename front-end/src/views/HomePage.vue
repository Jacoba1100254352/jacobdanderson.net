<template>
  <div class="Home">
    <!------------
    -   Header   -
    ------------->

    <header id="about" class="section">
      <h1>About</h1>
      <figure>
        <img
          id="prof_pic"
          alt="Jacob Anderson"
          src="../../public/Images/Jacob_Anderson.jpg"
        />
        <!--        <figcaption>David Anderson</figcaption>-->
      </figure>

      <p>
        My name is Jacob Anderson, I am from Georgia and absolutely love music!
      </p>
    </header>

    <!-------------
    -   Section   -
    -------------->

    <section class="home section flexbox_container">
      <article id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            I wrote a basic website for my Dad
            <span id="italic">(With HTML and CSS only)</span>
          </li>
          <li>
            I wrote and am writing a website for his student's startup he's
            helping with
          </li>
          <li>I did an eagle project creating an orienteering course</li>
        </ul>
      </article>

      <hr />

      <article id="experience">
        <h2>Experience</h2>
        <ul>
          <li>I worked at Chick-Fil-A for a few years</li>
          <li>I worked at Crumbl over the summer</li>
          <li>I worked for my dad writing websites over the summer</li>
          <li>I worked for my dad's student's startup over the summer</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
/**************
*   Heading   *
**************/

header {
  display: grid;
  margin: 10px;
  grid-template-areas:
    "h1  h1"
    "img info";
}

header p {
  grid-area: info;
  text-align: center;
}

h1 {
  grid-area: h1;
  font-weight: bold;
  text-align: center;
  font-size: 150%;
  padding-bottom: 5px;
  line-height: 5rem;
}

a {
  color: black;
  text-decoration: none;
}

figure {
  grid-area: img;
}

img {
  width: 50%;
  /*height: 25%;*/
  font-size: calc((25px) * var(--text_scalar));
}

figure {
  height: 100%;
}

figure,
p {
  width: 50%;
  text-align: center;
}

/**************
*   Section   *
**************/

#italic {
  font-style: italic;
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
</style>
