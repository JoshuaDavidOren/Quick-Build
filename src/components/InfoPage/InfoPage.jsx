import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function InfoPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'INFO_PAGE'});
    document. title = "This is info page title - JoshuaDavidOren"
    }, [])

  return (
    
      <main className='container'>
        <h1>Info Page [h1]</h1>
        <section id='info'>
        <div class="exampleHeadings">
        <h2> H2 Headings</h2>
      <h3> H3 The effect of ISO on image quality</h3>
        <p>The higher the ISO, the greater your
        ability to take photos in low light [...]</p>
      <h3> H3 High ISO cameras</h3>
        <p>Cameras with larger sensors are capable of
        higher ISO values [...]</p>
        <h2>Links [h2]</h2>
      <h3> Examples of good Links [h3]</h3>
        <p>
        <a href="/home">Home Page</a>
          This link is named to describe what it does (a screen reader will say "link, Home Page")
        </p>
        <p>
          <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fterm%2Fnew-window%2F&psig=AOvVaw2P5HOc5wBF0lfSXxYCT3Us&ust=1632500063660000&source=images&cd=vfe&ved=0CAwQjhxqFwoTCICwheW-lfMCFQAAAAAdAAAAABAD" target="_blank">
            Vector for "open new window image"
      <img src="https://static.thenounproject.com/png/299638-200.png" alt="opens new window" width="16" height="16"/>
        </a> This link opens a new window the image next to it not only provides a visual indication for the user, but also has alternative text that screen readers can relay to its users.
        </p>
        <h2> Tables [h2]</h2>
      <h3> Example [h3]</h3>
      <table>
    <caption>
       Greensprings Running Club Personal Bests<br/>
       (The first column lists the runners and the
       first row lists the race distances)
    </caption>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">1 mile</th>
    <th scope="col">5 km</th>
    <th scope="col">10 km</th>
    </tr>
  <tr>
    <th scope="row">Mary</th>
    <td>8:32</td>
    <td>28:04</td>
    <td>1:01:16</td>
    </tr>
  <tr>
    <th scope="row">Betsy</th>
    <td>7:43</td>
    <td>26:47</td>
    <td>55:38</td>
    </tr>
  <tr>
    <th scope="row">Matt</th>
    <td>7:55</td>
    <td>27:29</td>
    <td>57:04</td>
    </tr>
  <tr>
    <th scope="row">Todd</th>
    <td>7:01</td>
    <td>24:21</td>
    <td>50:35</td>
    </tr>
</table>
      <h3> Avoid complex tables [h3]</h3>
      <table class="complexexample">
  <caption>New Employee Orientation Schedule</caption>
  <tbody>
    <tr>
      <th rowspan="2" id="date">Date</th>
      <th colspan="2" id="schedule">Schedule</th>
      <th rowspan="2" id="location">Location</th>
      <th colspan="2" rowspan="2" id="topics1">Topics</th>
    </tr>
    <tr>
      <th id="start">Start</th>
      <th id="end">End</th>
    </tr>
    <tr>
      <th id="monday" rowspan="5">Monday, June 1</th>
      <td headers="schedule start monday">9:00 a.m.</td>
      <td headers="schedule end monday">10:30 a.m.</td>
      <td headers="location monday">RH 001</td>
      <td headers="topics1 monday">
        Introduction to Company: Vision and Mission</td>
    </tr>
    <tr>
      <td headers="schedule start monday">10:30 a.m.</td>
      <td headers="schedule end monday">12:00 p.m.</td>
      <td headers="location monday">RH 001</td>
      <td headers="topics1 monday">HR Policies Review</td>
    </tr>
    <tr>
      <td headers="schedule monday" colspan="5">
        <strong><em>
          Lunch from 12:00 p.m. to 1:00 p.m.
        </em></strong>
      </td>
    </tr>
    <tr>
      <td headers="schedule start monday">1:00 p.m.</td> 
      <td headers="schedule end monday">2:30 p.m.</td>
      <td headers="location monday">RH 001</td>
      <td headers="topics1 monday">Overview of Benefits</td>
    </tr>
    <tr>
      <td headers="schedule start monday">3:00 p.m.</td>
      <td headers="schedule end monday">4:30 p.m.</td>
      <td headers="location monday">RH 005</td>
      <td headers="topics1 monday">
        Health and Safety Procedures
      </td>
    </tr>
  </tbody>
</table>
<h2>Lists [h2]</h2>
<h3>Example of a list [h3]</h3>
<ul>
     <li>Raindrops on roses</li>
     <li>Whiskers on kittens</li>
     <li>Bright copper kettles</li>
     <li>Warm woolen mittens</li>
     <li>Brown paper packages tied up with strings</li>
     <li>Cream colored ponies</li>
     <li>Crisp apple strudels</li>
     <li>Doorbells and sleigh bells</li>
     <li>Schnitzel with noodles</li>
     <li>Wild geese that fly with the moon on their wings</li>
     <li>Girls in white dresses with blue satin sashes</li>
     <li>Snowflakes that stay on my nose and eyelashes</li>
     <li>Silver white winters that melt into springs</li>
 </ul>
 <h3>Exemple of  a nested list [h3]</h3>
  <ol>
    <li>
      <ul>
      <li>Raindrops on roses</li>
     <li>Whiskers on kittens</li>
     <li>Bright copper kettles</li>
     <li>Warm woolen mittens</li>
     <li>Brown paper packages tied up with strings</li>
      </ul>
    </li>
    <li>
      <ul>
     <li>Cream colored ponies</li>
     <li>Crisp apple strudels</li>
     <li>Doorbells and sleigh bells</li>
     <li>Schnitzel with noodles</li>
     <li>Wild geese that fly with the moon on their wings</li>
      </ul>
    </li>
    <li>
      <ul>
     <li>Girls in white dresses with blue satin sashes</li>
     <li>Snowflakes that stay on my nose and eyelashes</li>
     <li>Silver white winters that melt into springs</li>
      </ul>
    </li>
  </ol>
  <h2>iframe [h2]</h2>
<h3>Example of iframe [h3]</h3>
<iframe 
  title="Video: Specify the Language" 
  width="560" height="315" 
  src="https://www.youtube.com/embed/qyjDrUV_el8" 
  frameborder="0" allowfullscreen>
</iframe>
<h3>Hidden iframe</h3>
<p>somtimes iframes are more for style and do not need to be read on a screen reader</p>
<iframe 
  title="Intentionally blank"
  aria-hidden="true"
  src="http://bit.ly/2cfBoyE"
  width="120" height="50">
</iframe>
<h2>Hidden/clip method</h2>

      </div>
        </section>
      </main>
  );
}

export default InfoPage;
