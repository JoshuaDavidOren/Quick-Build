import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return <footer>&copy; JoshuaDavidOren </footer>;
{/* <section className='menu' style="width: 100%; height: 5%; background: blue"><center>
        <button style='background: lightblue;'><a style="color: black;" href="https://github.com/JoshuaDavidOren" target="_blank">GitHub</a></button>
        <button style='background: lightblue;'><a style="color: black;" href="https://www.linkedin.com/in/joshua-oren/" target="_blank">LinkedIn</a></button>
        <button style='background: lightblue;'><a style="color: black;" href="https://www.bestbuy.com/" target="_blank">Best Buy</a></button>
        <button style='background: lightblue;' ><a style="color: black;" href="https://www.yahoo.com/" target="_blank">Yahoo</a></button>
    </center></section>
<div style="background: linear-gradient(20deg, orange, red);"">    
<center>
    <h1 style='color: darkblue;' >My First HTML Page</h1>
</center>

<p>This is not my first HTML page just wanted to let you guys know that because I was forced to write that it is in an H1 at the top of the screen. Is this thirty words yet?</p>

<div>
<div style="width: 300; height: 200px; float: left;">
    <img height='200px' width='300px' src='https://yorkdevtraining.com/images/york-solutions/p07t8gdj.jpg'/>
    <p>This is the picture you told me to put here.</p>
</div>

<div style="width: 300; height: 200px; float: right;">
    <img height='200px' width='300px' src='https://yorkdevtraining.com/images/york-solutions/unnamed.jpg'/>
    <p>This is a different picture with a different discription.</p>
</div>
</div>
<div style="width: 100%; height: 60%;"></div>
<section>
    <center>
<table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>City</th>
    <th>State</th>
    <th>Birth Month</th>
  </tr>
  <tr>
    <td>Fake</td>
    <td>Unreal</td>
    <td>There</td>
    <td>ZZ</td>
    <td>febtember</td>
  </tr>
  <tr>
    <td>Also</td>
    <td>Fake</td>
    <td>Here</td>
    <td>XX</td>
    <td>Septober</td>
  </tr>
  <tr>
    <td>Real</td>
    <td>Name</td>
    <td>Real Place</td>
    <td>VV</td>
    <td>Apcember</td>
  </tr>
  <tr>
    <td>Joshua</td>
    <td>Oren</td>
    <td>Knowhere</td>
    <td>II</td>
    <td>Mune</td>
  </tr>
  <tr>
    <td>LastOne</td>
    <td>MakeItCount</td>
    <td>Minneapolis</td>
    <td>MN</td>
    <td>Todays's Month</td>
  </tr>
</table>
</center>
</section>
</div> */}
}

export default Footer;
