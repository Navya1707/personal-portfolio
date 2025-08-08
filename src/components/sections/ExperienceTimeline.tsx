import React from "react";

 type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

const items: ExperienceItem[] = [
  {
    role: "Senior Member of Technical Staff ",
    company: "Oracle Health",
    period: "May 2025 – Aug 2025",
    description: [
      "Analyzed 15M+ healthcare records using multivariate statistical methods and Oracle Cloud ML to identify treatment efficacy patterns across 20+ cohorts; built and optimized classification models, boosting accuracy by 22% and reducing false positives by 17% through hyperparameter tuning and feature selection.",
    "Designed and contributed to an AI-first EHR platform leveraging a semantic data model, clinical knowledge graph, Generative AI, and embedded AI agents to automate clinician workflows and improve patient care."
    ]
  },
  {
    role: "Quantitative Strategist,",
    company: "Goldman Sachs",
    period: "May 2024 – April 2025",
    description: [
      "Constructed a reinvesting model using linear optimization by forecasting cash inflow/outflow from source and use unwinding, boosting allocation efficiency by 25% and minimizing idle cash by 18% across banking entities.",
      "Deployed a real-time Tableau dashboard with Python and Procmon to track actual vs. projected liquidity, trimming manual reconciliation time by 70% and monitoring forecasts across 10+ entities.",
    ]
  },
  {
    role: "Senior Software Developer",
    company: "Goldman Sachs",
    period: "July 2023 – April 2024",
    description: [
      "During the revamp of a legacy service, architected a Kafka-based data streaming provision, elevating client experience and reducing runtime by 30%.",
      "Migrated from Sybase to MongoDB with zero server downtime, cutting failures by 90%.",
      "Engineered an in-memory caching system for frequently executed SQL queries, decreasing database load by 50% and accelerating service response times.",
      "Crafted Java-based microservices and authored JUnit and integration tests. Integrated internal pipelines using Java and Groovy scripts to enrich API payload and transmit it to vendors."
    ]
  },
  {
    role: "Software Developer",
    company: "Goldman Sachs",
    period: "Aug 2021 – June 2023",
    description: [
      "Managed the payment pipeline processing over 45K transactions daily, ensuring efficient and reliable output.",
      "Created webhooks accessible over HTTP and facilitated by an API Gateway to process bill payments. Used Prometheus and Grafana for Monitoring and Analytics. Client engagement improved to 78%.",   
      "Built back-end services for Reconciliation system and Batching, strengthening system performance and reliability; actively participated in architectural reviews."
    ]
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 story-link">Experience</h2>
        <p className="text-muted-foreground">A quick look at my career so far.</p>
      </header>

      <ol aria-label="Work experience timeline" className="relative border-l border-border pl-6">
        {items.map((item, idx) => (
          <li key={idx} className="relative mb-10 pl-0">
            <span
              aria-hidden
              className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-primary border-2 border-background"
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="font-medium leading-tight">
                {item.role} • {item.company}
              </h3>
              <time className="text-sm text-muted-foreground">{item.period}</time>
            </div>
            <ul className="list-disc pl-5 space-y-1 mt-2">
      {item.description.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}