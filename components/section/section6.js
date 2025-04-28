import { Button } from "../ui/button";
import { GreenRightIcon } from "../ui/icon";
import PricingCard from "../ui/pricing-card";
import styles from './section6.module.css';

const ServicePlans = [
  {
    planName: "April Promo",
    price: "35",
    services: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
      "Need more? Add extra apps for just $1.5 each",
      "Your own dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ],
  },
  {
    planName: "Starter",
    price: "50",
    services: [
      "All the perks of the Promo Plan, plus:",
      "Resume review & story-focused feedback",
      "Dedicated search specialist",
      "Up to 50 job apps/week",
      "Extra apps at $1.5 each",
      "Analyst support within 6 hours (SLA/PST hours)",
    ],
    popular: true,
  },
  {
    planName: "Plus",
    price: "100",
    services: [
      "Everything in Starter, with more muscle:",
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours",
    ],
  },
];

const advanceServicePlanService = [
  "Everything in Plus",
  "Custom Resumes & Cover Letters",
  "Help with complex job searches",
  "20 fully customized applications/week",
  "Access to senior resume experts, Founder & Exec Coaches",
];

const AdvancedPlanSection = ({ advanceServicePlanService }) => {
  return (
    <div className={styles.advancedPlanSection}>
      <div className={styles.advancedPlanContainer}>
        <div className={styles.advancedPlanContentWrapper}>
          {/* Left content */}
          <div className={styles.advancedPlanContentLeft}>
            <h3 className={styles.advancedPlanHeading}>Advance</h3>
            <p className={styles.advancedPlanSubheading}>
              Top-tier support for serious job hunters:
            </p>
            <hr className={styles.advancedPlanHr} />
            <div className={styles.advancedPlanServicesList}>
              {advanceServicePlanService.map((service, index) => (
                <div className={styles.advancedPlanService} key={index}>
                  <GreenRightIcon />
                  <span className={styles.advancedPlanServiceText}>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column with price and button */}
          <div className={styles.advancedPlanContentRight}>
            <div className={styles.advancedPlanPriceWrapper}>
              <span className={styles.advancedPlanPrice}>$150</span>
              <span className={styles.advancedPlanPriceDetails}>/week</span>
            </div>
            <div className={styles.advancedPlanButtonWrapper}>
              <Button variant="secondary" className={styles.getStartedButton}>
                Get Started →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPlans = () => {
  return (
    <section className={styles.pricingPlansSection}>
      <h2 className={styles.pricingPlansHeading}>
        Job Application Service Plans
      </h2>
      <div className={styles.pricingCardsWrapper}>
        {ServicePlans.map((plan, index) => (
          <PricingCard
            key={index}
            planName={plan.planName}
            price={plan.price}
            services={plan.services}
            popular={plan.popular || false}
          />
        ))}
      </div>

      {/* Advanced Plan */}
      <AdvancedPlanSection
        advanceServicePlanService={advanceServicePlanService}
      />
    </section>
  );
};

export default PricingPlans;
