import Image from "next/image";
import styles from './section5.module.css';

const WhyChooseUsCard = ({ title, description, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Image src={img} alt={title} width={56} height={56} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Why Choose Us?</h2>
        <div className={styles.cardContainer}>
          <WhyChooseUsCard
            title="Tried, Tested, Trusted"
            description="Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back."
            img="/heartHands.svg"
          />
          <WhyChooseUsCard
            title="Real People, Real Help"
            description="A hands-on team that actually cares — guiding you through every twist in your career path."
            img="/peopleProfile.svg"
          />
          <WhyChooseUsCard
            title="Beat the Line"
            description="We search, shortlist, and apply for you, so your name shows up first — every single day."
            img="/star.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
