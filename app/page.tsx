export default function Home() {
  return (
    <main>
      
      {/* HERO SECTION */}
      <section className="bg-blue-900 min-h-screen flex items-center justify-center px-6">
  <div className="max-w-3xl mx-auto text-center">
    <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
      Malaysia's #1 Pickup Specialist
    </p>
    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
      Built Tough. Priced Smart. <br/> Built For Malaysia.
    </h1>
    <p className="text-blue-100 text-lg mb-10">
      Think Ford is expensive? Think again...
    </p>
    <div className="flex gap-4 justify-center">
      <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100">
        Compare Models
      </button>
      <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900">
        Calculate My Loan →
      </button>
    </div>
  </div>
</section>

     {/* MYTH BUSTING SECTION */}
<section className="bg-gray-50 py-20 px-6">
  
  <div className="max-w-5xl mx-auto text-center">
    
    <h2 className="text-3xl font-bold mb-10">
      Let's Bust Some Myths
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white rounded-2xl shadow-md p-6 text-left">
        <span className="text-red-500 font-bold text-sm">❌ Myth</span>
        <p className="font-bold mt-2">"Ford is more expensive than Hilux"</p>
        <span className="text-green-600 font-bold text-sm mt-4 block">✅ Truth</span>
        <p className="text-gray-600 mt-1">Base Ranger is actually priced lower than base Hilux. More features, smarter price.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-left">
        <span className="text-red-500 font-bold text-sm">❌ Myth</span>
        <p className="font-bold mt-2">"Diesel is too expensive now"</p>
        <span className="text-green-600 font-bold text-sm mt-4 block">✅ Truth</span>
        <p className="text-gray-600 mt-1">At RM2.15/litre with 5.8L/100km efficiency, your cost per km beats most SUVs.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-left">
        <span className="text-blue-500 font-bold text-sm">💪 Fact</span>
        <p className="font-bold mt-2">Military-grade high-strength steel body</p>
        <span className="text-green-600 font-bold text-sm mt-4 block">✅ Why it matters</span>
        <p className="text-gray-600 mt-1">Stronger in crashes. Tougher off-road. Lasts longer. Your investment is protected.</p>
      </div>

    </div>
  </div>
</section>
</main>
  );
}

