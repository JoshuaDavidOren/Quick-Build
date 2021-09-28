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
        <h1> H1 Info Page</h1>
        <section id='info'>
        <div class="exampleHeadings">
        <h2> H2 Headings</h2>
      <h3> H3 The effect of ISO on image quality</h3>
        <p>The higher the ISO, the greater your
        ability to take photos in low light [...]</p>
      <h3> H3 High ISO cameras</h3>
        <p>Cameras with larger sensors are capable of
        higher ISO values [...]</p>
        <h2> H2 Links</h2>
      <h3> Examples of good Links</h3>
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
      <h3> H3 Vignetting</h3>
        <p>Vignetting occurs when a lens lets in less light
        around the edges than in the center [...]</p>
      <h3> H3 Diffraction</h3>
        <p>A small aperture can cause the light to
        diffract, which reduces the sharpness of the
        image, even though more of the image is
        in focus [...]</p>
        <h2> H2 Choose a shutter speed</h2>
      <h3> H3 Shutter speed limitations for hand-holding a camera</h3>
        <p>Hand-holding a camera at a slow shutter speed
        increases the chance of vibration and blur
        in the final image [...]</p>
      <h3> H3 Long exposures</h3>
        <p>Use a tripod when taking long exposures [...]</p>
      </div>
        </section>
      </main>
  );
}

export default InfoPage;
