import { Phone, Clock, MapPin } from "lucide-react";

export function InfoCard() {
  return (
    <div className="glass-card p-6 flex flex-col gap-4 max-w-md mx-auto mt-8 text-center">
      <h2 className="text-xl font-bold mb-2 text-primary">Visit Us</h2>
      <div className="flex flex-col items-center gap-2 text-md">
        <Clock className="text-secondary" size={20} />
        <span>
          Open every day: <span className="font-semibold">11am - 10pm</span>
        </span>
      </div>
      <div className="flex flex-col items-center gap-2 text-md">
        <Phone className="text-secondary" size={20} />
        <span>
          Call us:{" "}
          <a className="font-semibold hover:underline" href="tel:0677551674">
            067 755 1674
          </a>
        </span>
      </div>
      <div className="flex flex-col items-center gap-2 text-md">
        <MapPin className="text-secondary" size={20} />
        <span>
          353 Rivonia Blvd, Edenburg,
          <br />
          Sandton, 2128
        </span>
      </div>
      <div className="mt-2 text-xs text-gray-500">
        ID required for purchase. Enjoy responsibly.
      </div>
    </div>
  );
}
