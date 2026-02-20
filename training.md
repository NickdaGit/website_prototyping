---
layout: none
permanlink: /training/
title: Training 101
---

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap" rel="stylesheet">

<div style="position: absolute; top: 20px; left: 15px; z-index: 10;">
  <img 
    src="assets/MM_LOGO5.PNG" 
    alt="Monkey Magic Logo" 
    class="logo" 
    style="height: auto; background: transparent;"
  />
</div>

<div class="hero">
  <h1>Training 101</h1>
  <p>How monkeys (and AIs) learn tricks without getting grounded</p>
</div>

<section class="content">
  <h2>Step 1: Feed the Monkey</h2>
  <p>Start with a pile of bananas—er, data. Photos, text, chats, videos. The more the better. Think of it as cramming a kid with every book ever. No smarts yet—just raw stuff.</p>

  <h2>Step 2: Guess & Fix</h2>
  <p>The AI guesses: "Is this a cat?" Wrong? "Nope, try again." It tweaks its dials (weights) a tiny bit. Repeat a million times. Like teaching a monkey to juggle—drop, adjust, drop, adjust... until it sticks.</p>

  <h2>Step 3: The Magic Pile (Weights)</h2>
  <p>After all that? You get billions of tiny numbers—the "weights." They're not brains, just patterns: "this word follows that," "this shape = banana." But hey—looks smart.</p>

  <h2>Why It Takes Forever</h2>
  <ul>
    <li>Compute: Needs beefy GPUs—like renting a supercomputer.</li>
    <li>Data: Terabytes of it. (Hugging Face has samples; S3 holds the real hoard.)</li>
    <li>Energy: Think "monkey on a treadmill"—electricity bill goes brrr.</li>
  </ul>

  <h2>Want to Try?</h2>
  <p>Grab a tiny model from Hugging Face. Run it locally (Ollama's easy). Or fine-tune one—teach it monkey jokes. No PhD required.</p>

  <p><a href="/index.md">← Back to Home</a></p>
</section>

<style>
  body { font-family: 'Inter', sans-serif; background: #f9f9f9; color: #222; margin: 0; padding: 0; }
  .hero { background: #111; color: white; text-align: center; padding: 6rem 2rem; }
  h1 { font-size: 3.5rem; margin: 0; }
  p { font-size: 1.4rem; max-width: 800px; margin: 1rem auto; }
  .content { max-width: 900px; margin: 4rem auto; padding: 0 2rem; }
  h2 { color: #0066cc; font-size: 2.5rem; margin-top: 3rem; }
  ul { list-style: none; padding: 0; }
  li { margin: 1rem 0; font-size: 1.2rem; }
  a { color: #0066cc; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .logo { width: 12vw; max-width: 180px; min-width: 100px; }
  @media (max-width: 768px) { .logo { width: 20vw; min-width: 110px; } }
</style>