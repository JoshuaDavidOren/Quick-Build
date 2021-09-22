import React from 'react';
import { useEffect } from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  useEffect(() => {
    document. title = "This is info page title - JoshuaDavidOren"
    }, [])

  return (
    <main className='container'>
      <h1> H1 Info Page</h1>
      <section id='info'>
      <div class="exampleHeadings">
  <h2> H2 Setting the ISO</h2>
    <h3> H3 The effect of ISO on image quality</h3>
      <p>The higher the ISO, the greater your 
      ability to take photos in low light [...]</p>
    <h3> H3 High ISO cameras</h3>
      <p>Cameras with larger sensors are capable of 
      higher ISO values [...]</p>
  <h2> H2 Choose an aperture</h2>
    <h3> H3 The effect of aperture on depth of focus</h3>
      <p>The larger the aperture, the narrower 
      the plane of focus [...]</p>
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
