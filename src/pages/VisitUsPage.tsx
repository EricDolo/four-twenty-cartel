import { Phone, Clock, MapPin, LocateIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { ShopSidebar } from "../components/ShopSidebar";

export default function VisitUsPage() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-transparent smoke-bg">
        <ShopSidebar />
        <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center justify-start w-full">
          <SidebarTrigger />
          <header className="w-full max-w-4xl mx-auto text-center mt-8 mb-10">
            <Link to="/">
              <img
                src="/four-twenty-cartel-logo.jpg"
                alt="Four Twenty Cartel Logo"
                className="w-42 h-40 mx-auto"
              />
            </Link>
            <h1 className="text-4xl font-bold text-green-700 mt-6 mb-3">Visit Four Twenty Cartel</h1>
          </header>

          {/* Store Info */}
          <section className="flex flex-col items-center space-y-6 mb-12 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="text-secondary" size={24} />
              <span className="text-lg">
                Open every day: <strong>11am - 10pm</strong>
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Phone className="text-secondary" size={24} />
              <span className="text-lg">
                Call us:{" "}
                <a
                  href="https://wa.me/27677551674"
                  className="font-semibold text-green-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  067 755 1674 (WhatsApp)
                </a>
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <MapPin className="text-secondary" size={24} />
              <div className="text-lg">
                353 Rivonia Blvd, Edenburg,<br />
                Sandton, 2128
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/353+Rivonia+Blvd,+Edenburg,+Sandton,+2128"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-full font-medium transition"
            >
              <LocateIcon size={18} /> Get Directions
            </a>

            <p className="text-sm text-gray-600 mt-4">
              You must be 18+ to purchase. Please bring valid ID. Enjoy responsibly.
            </p>
          </section>

          {/* Store Photos */}
          <section className="w-full mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Take a Look Inside</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img src="/assets/store-front-2.jpg" alt="Inside View 1" className="rounded-xl shadow-md" />
              <img src="/assets/store-front-2.jpg" alt="Inside View 2" className="rounded-xl shadow-md" />
            </div>
          </section>

          {/* Google Map */}
          <section className="w-full mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary text-center">Find Us on the Map</h2>
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Four Twenty Cartel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.6013871580145!2d28.054016675179326!3d-26.056093277129066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950dbe0336d2a3%3A0x2fc3a6e07f08c978!2s353%20Rivonia%20Blvd%2C%20Edenburg%2C%20Sandton%2C%202128!5e0!3m2!1sen!2sza!4v1713969115950!5m2!1sen!2sza"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </main>
      </div>
    </SidebarProvider>
  );
}
// This code defines a React component for a "Visit Us" page of a cannabis store. It includes store information, contact details, and a Google Maps embed for directions. The layout is responsive and styled using Tailwind CSS classes.
// The component is wrapped in a SidebarProvider to manage the sidebar state, and it includes a header with the store's logo and name. The store information is displayed using icons and text, and there are sections for store photos and a Google Map.