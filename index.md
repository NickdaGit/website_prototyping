---
layout: none
---

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap" rel="stylesheet">


<div style="position: absolute; top: 20px; left: 20px; z-index: 10;">
  <img src="assets/MM_LOGO.JPG" alt="Monkey Magic Logo" style="width: 80px; height: auto;" />
</div>



<div class="hero">
  <video autoplay loop muted playsinline>
    <source src="hero1.mp4" type="video/mp4">
  </video>
  <div class="hero-text">
    <h1>MonkeyMagic.ai</h1>
    <p>Where monkeys code, dream, and occasionally steal bananas</p>
  </div>
</div>

<!-- adding team here -->
<section class="team">
  <h2>Meet the Team</h2>
  
  <div class="grid">
  
    <div class="card">
      <img src="assets/GUNTHER2.JPG" alt="Gunther - Chief Banana Office and Lead Developer">
      <h3>Gunther</h3>
      <p>Lead Developer. Writes code faster than he eats bananas. Specializes in AI ethics... mostly.</p>
    </div>
    
    <div class="card">
      <img src="assets/ZARA.JPG" alt="Lila the UX Monkey">
      <h3>Lila</h3>
      <p>Design Queen. Makes interfaces so intuitive even humans can use them. Hates clutter—except banana peels.</p>
    </div>
    
    <div class="card">
      <img src="assets/LADY.JPG" alt="Zara the Data Monkey">
      <h3>Zara</h3>
      <p>Data Wizard. Sees patterns in chaos. Once predicted the next banana shortage from cloud data.</p>
    </div>
    
    <!-- Add more as needed -->
  </div>
</section>


<!-- end adding team here   -->

<style>
  /* all your hero CSS here */
  .hero { position: relative; width: 100%; height: 80vh; overflow: hidden; }
  .hero video { position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; transform: translate(-50%, -50%); object-fit: cover; }
  .hero-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; text-align: center; text-shadow: 2px 2px 8px black; z-index: 2; }
  h1 { font-size: 4rem; margin: 0; }
  p { font-size: 1.5rem; }
  @media (max-width: 768px) { .hero { height: 60vh; } h1 { font-size: 3rem; } p { font-size: 1.2rem; } }

  .team {
    padding: 4rem 2rem;
    text-align: center;
    background: #f9f9f9;  /* light bg for contrast */
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  .card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 1.5rem;
    transition: transform 0.3s;
  }
  .card:hover {
    transform: translateY(-8px);
  }
  .card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  .card h3 {
    font-size: 1.8rem;
    margin: 0.5rem 0;
  }
  .card p {
    color: #555;
    font-size: 1.1rem;
  }

 body, h1, h2, h3, p, .team-card {
    font-family: 'Inter', sans-serif !important;
  }
  h2.team {
    font-family: 'Inter', sans-serif !important;
    font-weight: 700;
  }

</style>


<div class="layout">
  <!-- your under-construction monkey stuff here -->
</div>


<div class="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
  <!-- Subtle animated bg -->
  <div class="absolute inset-0 bg-gradient-to-b from-blue-950 via-black to-black animate-gradient"></div>

<div style="text-align: center; margin-top: 4rem; color: #666;">
  Under construction—something irrepressible is brewing!
</div>






