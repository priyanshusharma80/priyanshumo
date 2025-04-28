import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import book from '../../public/book.png';
import styles from './section1.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroHeading}>
            Land job interviews <br />
            <span className={styles.heroHighlight}>10x </span>
            faster
          </h1>
          <p className={styles.heroDescription}>
            Custom-built resumes that match your goals, keywords, and recruiter expectations.
          </p>
          <Button variant="secondary" href="/get-started">
            Get Started →
          </Button>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageContainer}>
              <Image
                src="/HiringTrendBook.png"
                alt="2024 Job Search Trends"
                width={250}
                height={320}
                className={styles.heroImage}
              />
              <div className={styles.heroIconWrapper}>
                <Image src="/book.png" alt="book" width={40} height={11} />
                <div className={styles.downloadLinkWrapper}>
                  <Link href="#downloads" className={styles.downloadLink}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="size-4 w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <p className={styles.downloadText}>
              Download Free E-Book
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
