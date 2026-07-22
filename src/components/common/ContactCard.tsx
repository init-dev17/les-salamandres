import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

interface Schedule {
  category: string;
  days: string;
  time: string;
}

interface ContactSection {
  id: string;
  name: string;
  logo: string;
  address: string;
  schedule?: Schedule[];
  email: string;
  phone: string;
  instagram: string;
  instagramLabel: string;
}

interface ContactCardProps {
  section: ContactSection;
  index: number;
}

export function ContactCard({ section, index }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(31,55,49,0.08)] border border-packer-green/5 flex flex-col items-center text-center"
    >
      <div className="w-24 h-24 sm:w-28 sm:h-28   overflow-hidden  flex items-center justify-center mb-6 ">
        <img
          src={section.logo}
          alt={section.name}
          className="w-full h-full object-contain p-2"
        />
      </div>

      <h3 className="font-heading text-2xl sm:text-3xl text-packer-green tracking-wider mb-6">
        {section.name.toUpperCase()}
      </h3>

      <div className="space-y-4 w-full text-left">
        

        {section.schedule && section.schedule.length > 0 && (
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-packer-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4 text-packer-gold" />
            </div>
            <div>
              <span className="font-subheading text-[10px] text-packer-green/40 tracking-[0.2em] uppercase block mb-1">
                Entraînements
              </span>
              {section.schedule.map((s) => (
                <p key={s.category} className="font-body text-sm text-packer-green leading-relaxed">
                  <span className="font-medium">{s.category}</span> : {s.days} — {s.time}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-packer-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            <Mail className="w-4 h-4 text-packer-gold" />
          </div>
          <div>
            <span className="font-subheading text-[10px] text-packer-green/40 tracking-[0.2em] uppercase block">
              Email
            </span>
            <a
              href={`mailto:${section.email}`}
              className="font-body text-sm text-packer-green hover:text-packer-gold transition-colors break-all"
            >
              {section.email}
            </a>
          </div>
        </div>

        {/* <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-packer-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            <Phone className="w-4 h-4 text-packer-gold" />
          </div>
          <div>
            <span className="font-subheading text-[10px] text-packer-green/40 tracking-[0.2em] uppercase block">
              Téléphone
            </span>
            <a
              href={`tel:${section.phone.replace(/\s/g, "")}`}
              className="font-body text-sm text-packer-green hover:text-packer-gold transition-colors"
            >
              {section.phone}
            </a>
          </div>
          
        </div> */}

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-packer-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-packer-gold" />
          </div>
          <div>
            <span className="font-subheading text-[10px] text-packer-green/40 tracking-[0.2em] uppercase block">
              Adresse
            </span>
            <span className="font-body text-sm text-packer-green">
              {section.address}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-packer-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            <InstagramIcon className="w-4 h-4 text-packer-gold" />
          </div>
          <div>
            <span className="font-subheading text-[10px] text-packer-green/40 tracking-[0.2em] uppercase block">
              Instagram
            </span>
            <a
              href={section.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-packer-green hover:text-packer-gold transition-colors"
            >
              {section.instagramLabel}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
