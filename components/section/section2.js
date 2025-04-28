import styles from './section2.module.css';

const Content = ({ number, heading }) => {
  return (
    <div className={styles.contentItem}>
      <div className={styles.contentNumber}>
        {number}
      </div>
      <hr className={styles.contentDivider} />
      <h3 className={styles.contentHeading}>
        {heading}
      </h3>
    </div>
  );
};

const HowWeWork = () => {
  return (
    <section className={styles.howWeWorkSection}>
      <div className={styles.howWeWorkContainer}>
        <h2 className={styles.howWeWorkHeading}>
          How we work?
        </h2>
        <div className={styles.howWeWorkContentWrapper}>
          <Content number={1} heading="Submit Intake Form" />
          <Content
            number={2}
            heading="We do the search and curation for list of jobs"
          />
          <Content
            number={3}
            heading="You approve, we do the tedious part (applying)"
          />
          <Content number={4} heading="You get the interviews" />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
