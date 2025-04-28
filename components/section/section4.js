import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import TestimonialCard from "../ui/testimonial-card";
import styles from './section4.module.css';

const testimonials = [
  { href: "#testimonial1", video: "/demoVideo1.mp4" },
  { href: "#testimonial2", video: "/demoVideo2.mp4" },
  { href: "#testimonial3", video: "/demoVideo3.mp4" },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsWrapper}>
        <h2 className={styles.testimonialsHeading}>
          What our clients have to say
        </h2>

        <div className={styles.testimonialsList}>
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} buttonHref={t.href} videoSrc={t.video}>
              Holly is a <span className="font-semibold">senior executive</span>
              who got over <span className="font-semibold">10 job interviews</span>
              and an offer she accepted
            </TestimonialCard>
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            variant="secondary"
            className={styles.secondaryButton}
          >
            More customer testimonials <ArrowUpRight />
          </Button>
          <Button>Get Started →</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
