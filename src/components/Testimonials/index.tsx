import { feedbacks } from "@/constants";
import { FeedBackCard } from "../FeedBackCard";
import styles from "@/styles";
export type TestimonialsProps = JSX.Element;

export const Testimonials = (): TestimonialsProps => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedbacks.map((feedback) => (
          <FeedBackCard key={feedback.id} feedback={{ ...feedback }} />
        ))}
      </div>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
    </section>
  );
};
