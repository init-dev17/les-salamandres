import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";

const GOOGLE_CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&mode=MONTH&showTitle=0&src=YjZhMDhhZDhhYmE0ZDBlOTJmZDk2Nzg3NmI1Y2ZiNmY2ODBlMWU5NjdkZWM2ZGI4OGZkOWJmMWQzZmE5MDRhM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23d81b60";

export function CalendarPage() {
  return (
    <>
      <PageHero
        title="CALENDRIER"
        subtitle="Retrouvez tous nos événements"
        image="/photos/lh.webp"
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              subtitle="Les Salamandres"
              title="NOS ÉVÉNEMENTS"
              description="Consultez le calendrier pour assister à nos matchs, représentations et événements associatifs."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl overflow-hidden shadow-xl border border-packer-green/10"
          >
            <iframe
              title="Calendrier Les Salamandres"
              src={GOOGLE_CALENDAR_EMBED_URL}
              className="w-full"
              style={{ border: 0 }}
              width="100%"
              height="650"
              frameBorder="0"
              scrolling="no"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-salamandre-gray rounded-xl px-6 py-4">
              <Calendar className="w-5 h-5 text-packer-gold" />
              <p className="font-subheading text-sm text-packer-green/60 tracking-wide">
                Ajoutez ce calendrier à votre agenda Google pour ne manquer aucun événement !
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
