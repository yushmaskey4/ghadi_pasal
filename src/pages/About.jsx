const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen text-center">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-8">
        Our <span className="text-yellow-500">Legacy</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            Welcome to <span className="text-white font-bold">Time Fusion</span>, where we believe a watch is not just a tool to tell time, but a piece of art that tells your story.
          </p>
          <p>
            Established in 2026, our mission is to bring premium craftsmanship and timeless elegance to the modern generation. Every timepiece in our collection is curated with passion.
          </p>
          <div className="pt-4 border-t border-gray-900">
            <h4 className="text-yellow-500 font-bold uppercase text-xs tracking-widest mb-2">Designed By</h4>
            <p className="text-white text-lg font-bold">Balen Sampang Oli</p>
            <p className="text-xs uppercase text-gray-600">Full Stack Developer</p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?q=80&w=1964" 
            alt="Craftsmanship" 
            className="rounded-2xl opacity-80 grayscale hover:grayscale-0 transition duration-700"
          />
          <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-8 rounded-2xl hidden md:block">
            <p className="text-4xl font-black">100%</p>
            <p className="text-[10px] font-bold uppercase tracking-widest">Authentic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;