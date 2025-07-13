HTML Basics and Elements

✅ 1. Using Google Fonts and Icons

Include in <head>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

<!-- Google Icons -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

HTML Example

<h1>Hello, this is Roboto Font!</h1>
<p>This is a paragraph using Google Fonts and Icons.</p>
<span class="material-icons">home</span>
<span class="material-icons">face</span>
<span class="material-icons">search</span>

CSS Example

body {
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    padding: 20px;
}
.material-icons {
    font-size: 36px;
    color: #007bff;
    margin-right: 10px;
}


⸻

✅ 2. Adding a Website Tab Icon (Favicon)

HTML in <head>

<link rel="icon" href="favicon.png" type="image/png">

	•	Recommended size: 32x32
	•	Place the image in your project folder

⸻

✅ 3. The <section> Tag

Purpose
	•	Groups related content
	•	Should contain a heading (<h1>–<h6>)

Example

<section>
  <h2>About Us</h2>
  <p>We are a web development company.</p>
</section>


⸻

✅ 4. Tags Commonly Used Inside <section>
	•	<h1>–<h6> for headings
	•	<p>, <img>, <ul>, <li>, <a>, <form>, <div>, <button>

⸻

✅ 5. Creating an Unordered List

<h3>Things cats love:</h3>
<ul>
  <li>Sunbeams</li>
  <li>Yarn</li>
  <li>Boxes</li>
</ul>


⸻

✅ 6. Clean HTML Template with Tags

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Link Use</title>
  <link rel="icon" href="./instagram.png" type="image/png">
</head>
<body>
  <section>
    <main>
      <h1>Insta Login</h1>
      <h2>Login here</h2>
      <a href="https://www.google.com" target="_blank">
        <figure>
          <img src="images.jpeg" alt="Instagram">
        </figure>
      </a>
      <a href="https://www.google.com" target="_blank">Google Link</a>
    </main>
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
    </ul>
  </section>
</body>
</html>


⸻

✅ 7. <em> Tag
	•	Used to emphasize text (usually rendered in italic)
	•	Semantic: screen readers emphasize it

Example

<p>I <em>really</em> like coding.</p>


⸻

✅ 8. <footer> Tag
	•	Used at the bottom of the page or section
	•	Contains copyright, contact, links

Example

<footer>
  <p>&copy; 2025 Insta Login. All rights reserved.</p>
  <a href="mailto:support@mywebsite.com">Contact Us</a>
</footer>


⸻

✅ 9. Anchor <a> Tag Fix Example

<p>No Copyright - 
  <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
</p>


⸻

✅ 10. HTML Entities

Character	Entity	Description
<	&lt;	Less-than
>	&gt;	Greater-than
&	&amp;	Ampersand
"	&quot;	Double quote
'	&apos;	Single quote
©	&copy;	Copyright
®	&reg;	Registered trademark
₹	&#8377;	Indian Rupee symbol
€	&euro;	Euro symbol
→	&rarr;	Right arrow
space	&nbsp;	Non-breaking space

Example

<p>Use &lt;em&gt; for emphasis. &copy; 2025</p>