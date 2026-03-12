import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (Backend connection pending)");
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black uppercase tracking-tighter">Get In <span className="text-yellow-500">Touch</span></h1>
        <p className="text-gray-500 mt-4 uppercase text-xs tracking-[0.3em]">We are here to help you</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="flex items-start gap-6">
            <div className="bg-gray-900 p-4 rounded-xl text-yellow-500"><MapPin /></div>
            <div>
              <h4 className="font-bold text-lg">Visit Us</h4>
              <p className="text-gray-500 text-sm">Itahari, Nepal</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-gray-900 p-4 rounded-xl text-yellow-500"><Phone /></div>
            <div>
              <h4 className="font-bold text-lg">Call Us</h4>
              <p className="text-gray-500 text-sm">+977 9812345678</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-gray-900 p-4 rounded-xl text-yellow-500"><Mail /></div>
            <div>
              <h4 className="font-bold text-lg">Email Us</h4>
              <p className="text-gray-500 text-sm">info@timefusion.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" required className="bg-black border border-gray-800 p-4 rounded-xl focus:border-yellow-500 outline-none transition" />
            <input type="email" placeholder="Email" required className="bg-black border border-gray-800 p-4 rounded-xl focus:border-yellow-500 outline-none transition" />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-black border border-gray-800 p-4 rounded-xl focus:border-yellow-500 outline-none transition" />
          <textarea placeholder="Message" rows="5" className="w-full bg-black border border-gray-800 p-4 rounded-xl focus:border-yellow-500 outline-none transition"></textarea>
          <button className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-white transition">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;