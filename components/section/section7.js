import PricingCard from "../ui/pricing-card";
import styles from './section7.module.css';

const ResumeBuilding = () => {
  const services = [
    <PricingCard
      key="resume"
      planName="Resume Rebuild"
      planDescription="Crafted for senior to VP-level professionals ready for their next big step."
      price="1000"
      priceType="one time"
      services={[
        "3× 30-min coaching",
        "Focused on storytelling, not just formatting",
        "Analyst + full application team on Pacific hours",
        "Tailored to your target industry, company, or role",
        "Direct work with our co-founder (ex-Google, JP Morgan)",
        "Executive coaching from UC Berkeley alum with 10+ yrs experience",
        "Resume Rebuild portfolio available upon request",
      ]}
    />,
    <PricingCard
      key="interview"
      planName="Interview Prep"
      planDescription="Two sessions to sharpen your story, confidence, and clarity — fast."
      price="500"
      priceType="one time"
      services={[
        "2× 45-min live coaching with our co-founder",
        "Real-time, practical feedback",
        "Build clarity, empathy & executive presence",
        "For senior and leadership roles — technical & non-technical",
      ]}
    />
  ];

  return (
    <section className={styles.resumeBuildingSection}>
      <h2 className={styles.resumeBuildingHeading}>
        Resume Building & Coaching
      </h2>
      <p className={styles.resumeBuildingDescription}>
        Let’s talk about where you’re headed — and how your resume can get you
        there.
        <br />
        <strong>Schedule a call to get started.</strong>
      </p>

      <div className={styles.servicesWrapper}>
        {services.map((card) => card)}
      </div>
    </section>
  );
};

export default ResumeBuilding;
