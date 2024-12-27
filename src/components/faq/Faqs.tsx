import "./faqs.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is Genesys Academy a paid internship?",
    answer: "Yes, it is a paid internship.",
  },
  {
    question: "Can I make payment in installments?",
    answer: "Yes, you can make payments in installments.",
  },
  {
    question: "Can I change my pathway after registration?",
    answer: "Yes, you can change your pathway after registration.",
  },
  {
    question: "Do I get a certificate at the end of the program?",
    answer: "Yes, a certificate is provided upon completion.",
  },
  {
    question: "How long will the learning at Genesys Academy take?",
    answer: "The duration depends on the chosen program.",
  },
  {
    question:
      "Can I get a job recommendation after my internship with Genesys?",
    answer:
      "Yes, job recommendations are possible after completing the internship.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <header>
        <h1 className="faq-header1">Frequently Asked Questions (FAQs)</h1>
        <p className="faq-header2">
          Necessary questions answered. Everything you need to know about
          Genesys Academy.
        </p>
      </header>

      <section className="wrap-faq">
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <article key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span className="faq-question-text">{item.question}</span>
                <span
                  className={`faq-arrow ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faAngleDown} className="faq-arrow" />
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faqs;
