---
title: Monkey Magics
---

<div class="min-h-screen bg-black text-white flex flex-col relative">
  <!-- Animated bg -->
  <div class="absolute inset-0 bg-gradient-to-b from-blue-950 via-black to-black animate-gradient"></div>

  <!-- Header with logo -->
  <header class="relative z-10 flex items-center justify-between px-8 py-6">
    <img src="logo.png" alt="Monkey Magic Logo" class="h-12 w-auto">
    <h1 class="text-5xl md:text-7xl font-black tracking-tight">Monkey Magic</h1>
  </header>

  <!-- Hero content -->
  <main class="flex-grow flex items-center justify-center px-8 py-12 z-10">
    <div class="text-center max-w-4xl">
      <p class="text-3xl md:text-4xl font-light opacity-90">Smarter Business. Primate-Powered.</p>
    </div>
  </main>

  <!-- Squad section -->
  <section class="relative z-10 max-w-6xl mx-auto px-8 py-20">
    <h2 class="text-5xl font-bold text-center mb-16 text-gray-200">Our Squad</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="bg-gray-800/60 backdrop-blur-lg p-10 rounded-2xl border border-gray-700 hover:border-blue-500 hover:shadow-2xl transition-all duration-500">
        <h3 class="text-4xl font-bold mb-6 text-white">Baboon</h3>
        <p class="text-lg text-gray-300">Strategic commander—leads without fear.</p>
      </div>
      <!-- Repeat for Chimpanzee and Capuchin -->
    </div>
  </section>
</div>

<style>
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    background: linear-gradient(270deg, #1e3a8a, #111827, #1e3a8a);
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
  }
</style>

<script src="https://cdn.tailwindcss.com"></script>










