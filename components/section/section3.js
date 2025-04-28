import Image from "next/image";
import styles from "./section3.module.css";

const FounderProfile = ({ name, title, image, children }) => {
  return (
    <div className={styles.founderProfileWrapper}>
      <Image
        src={image}
        alt={`${name} Profile`}
        width={260}
        height={260}
        className={styles.founderImage}
      />
      <div className={styles.founderDetails}>
        <p className={styles.founderDescription}>{children}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection} id="about">
      <div className="container">
        <div className="mx-auto">
          <h2 className={styles.aboutUsHeading}>About Us</h2>
          <div className={styles.foundersContainer}>
            <FounderProfile
              image={"/ashwin.png"}
              name="Ashwin"
              title="Founder of MobuisEngine"
            >
              <span className="font-bold"> Ashwin </span> is the founder of
              mobiusengine.ai. He is an accomplished senior executive with over
              20 years of experience in cloud infrastructure and financial
              services. With over 2 decades of experience at Google and JP
              Morgan, Ashwin held various product and GTM roles. Ashwin is an
              MBA holder from Yale University.
              <br />
              <br />
              Ashwin&apos;s vision with Mobius is to give job seekers a
              significant advantage in securing the roles of their dreams.
            </FounderProfile>

            <FounderProfile
              image={"/nicole.png"}
              name="Rachel"
              title="Executive Coach"
            >
              <span className="font-bold"> Nicole </span>
              is an Executive coach at Mobius specializing in resume builds and
              career advisory.
              <br />
              <br /> With a B.S. in Business Administration from UC Berkeley and
              7+ years of experience in AI-driven product strategy, she has seen
              firsthand how the proper positioning opens doors. She takes a
              targeted, results-driven approach to help clients confidently
              stand out and land roles that truly match their skills and
              potential.
            </FounderProfile>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
