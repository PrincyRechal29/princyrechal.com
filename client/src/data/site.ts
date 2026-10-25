/*
 * All the words on the site live here, so updating a role or a product
 * never means touching layout code. Source of truth: Princy's CV (July 2026).
 */

export const person = {
  name: "Princy Rechal",
  fullName: "Princy Rechal Dommata",
  firstName: "Princy",
  role: "Site Reliability / DevOps Engineer",
  location: "Manchester, UK",
  timeZone: "Europe/London",
  email: "princy@deadlinemate.com",
  github: "https://github.com/PrincyRechal29",
  linkedin: "https://linkedin.com/in/princy-rechal-d-a68a1a342",
  /* The first thing a visitor reads. */
  hello: "Hi, I'm Princy.",
  oneLiner: "I'm the founder of deadlinemate.com",
  secondLine: "I'm a Site Reliability and DevOps engineer in Manchester, United Kingdom.",
  bio: [
    "For the last four-plus years I've run production Kubernetes across AWS, GCP and Azure: migrations with clear rollback paths, CI/CD that ships without drama, Terraform for everything that can be written down, and the observability to know what's really happening at 3 a.m.",
    "I started out freelancing for clients around the world, moved into platform roles in the UK, and along the way built the tool I wished students had: DeadlineMate, a planner that quietly makes sure nothing is missed.",
  ],
  /* Short facts, the kind you'd mention in the first five minutes. */
  quickFacts: [
    { label: "My company", value: "DeadlineMate, founder and CEO" },
    { label: "Based in", value: "Manchester, United Kingdom" },
    { label: "Day job", value: "Platform SRE at KubeGraf" },
    { label: "Studied", value: "BSc Computing, University of Lancashire" },
    { label: "Certified", value: "AWS Solutions Architect, Microsoft Azure" },
    { label: "Experience", value: "4+ years across AWS, GCP and Azure" },
  ],
  company: { label: "DeadlineMate", href: "https://www.deadlinemate.com" },
  employer: { label: "KubeGraf", href: "https://kubegraf.io" },
  /* Portrait in client/public. Set to undefined to fall back to the monogram. */
  photo: "/princy.jpg" as string | undefined,
  photoSmall: "/princy-600.jpg",
};

/* The stages of the page, in scroll order. The rail reads this. */
export const stages = [
  { id: "hello", label: "Hello" },
  { id: "about", label: "About me" },
  { id: "story", label: "My journey" },
  { id: "work", label: "DeadlineMate" },
  { id: "stack", label: "What I use" },
  { id: "contact", label: "Say hello" },
];

/* About, in two modes. */
export const modes = {
  founder: {
    label: "Founder",
    heading: ["The founder: I want students to never miss a deadline, and never feel ", "chased."],
    paragraphs: [
      "Outside my day job I founded DeadlineMate, and I run it as CEO. It's a planner that turns assignments, exams and modules into one prioritised plan, with reminders that reach you a week, a day and an hour before anything is due.",
      "It started from watching smart people miss things not because they were lazy, but because five half-used apps never agreed on what was due. DeadlineMate scores every deadline by due date, workload and weight, so the urgent work rises on its own.",
      "The same instinct runs both halves of my life. Calm is a feature. Production gets SLOs and error budgets. A student gets one view and a reminder at the right hour.",
    ],
    runbookTitle: "How I run a company",
    runbook: [
      { when: "A student misses a deadline", then: "The reminder was wrong, not the student. We fix the timing." },
      { when: "A feature needs a fifth tab", then: "It doesn't ship. One calm view is the whole product." },
      { when: "Someone's whole semester lives in Moodle", then: "They paste one link and it is imported. We do the typing." },
      { when: "A plan gets serious", then: "Pro is less than a coffee a month. Free stays free, forever." },
    ],
  },
  sre: {
    label: "SRE",
    heading: ["The engineer: I like platforms that stay up, and stay ", "boring."],
    paragraphs: [
      "I got into this work because I like being the person who makes things dependable. Four-plus years on, that means keeping platforms reliable, scalable and fast across AWS, GCP and Azure, and working where infrastructure meets the people who rely on it.",
      "That has meant migration pipelines with clear rollback paths, VM-to-Kubernetes and NGINX-to-Istio among them. CI/CD with GitHub Actions, GitLab CI, Jenkins and Argo CD. Terraform modules for the things every environment needs. And an observability stack, Prometheus through OpenTelemetry, that tells the truth at 3 a.m.",
      "Today that work happens at KubeGraf, where I run multi-cluster Kubernetes for the team building the autonomous SRE. The best compliment I get is that nobody noticed.",
    ],
    runbookTitle: "How I run production",
    runbook: [
      { when: "A deploy fails", then: "Roll back first. Ask questions after. Argo Rollouts makes that a button." },
      { when: "Something pages at 3 a.m.", then: "It should have been an SLO. By morning, it is one, with an error budget." },
      { when: "An incident closes", then: "A blameless review, a runbook update, and one fewer way for it to happen again." },
      { when: "A secret wants to live in a repo", then: "It doesn't. Vault or External Secrets, KMS underneath, or not at all." },
    ],
  },
};

export type Job = {
  period: string;
  status: "running" | "succeeded";
  title: string;
  org: string;
  orgHref?: string;
  type: string;
  location: string;
  summary: string;
  log: string[];
};

export type Run = { name: string; blurb: string; jobs: Job[] };

/* The runs, oldest first. Each job is a pipeline run; current roles are still running. */
export const runs: Run[] = [
  {
    name: "Foundations",
    blurb: "The degree and the certifications that made systems make sense.",
    jobs: [
      {
        period: "Before 2022",
        status: "succeeded",
        title: "BSc Computing",
        org: "University of Lancashire",
        type: "Degree",
        location: "Graduated with 84%",
        summary: "Computing with a lean towards systems: Linux, networking and the habit of reading logs before guessing.",
        log: [
          "AWS Certified Solutions Architect, Associate.",
          "Microsoft Azure: Implementing Microsoft Azure Infrastructure Solutions.",
        ],
      },
    ],
  },
  {
    name: "Craft",
    blurb: "Three years of other people's production, one client at a time.",
    jobs: [
      {
        period: "May 2022 to Dec 2024",
        status: "succeeded",
        title: "Freelance DevOps / SRE Engineer",
        org: "Self-employed",
        type: "Freelance",
        location: "International clients",
        summary:
          "Migration pipelines, infrastructure as code and CI/CD for clients around the world, with the runbooks and on-call support to keep it up afterwards.",
        log: [
          "Migrated client workloads from VM-based deployments to Kubernetes on AWS and GCP with minimal downtime.",
          "Provisioned AWS and GCP infrastructure with Terraform: VPCs, IAM, EKS and GKE clusters, storage and networking.",
          "Built CI/CD with Jenkins, GitLab CI and GitHub Actions for build, test, image publishing and automated deployment.",
          "Containerised applications with Docker, with registries and image scanning.",
          "Set up Prometheus and Grafana monitoring and alerting; wrote runbooks supporting incident response and uptime SLAs.",
          "Automated operational work with Bash, Shell and Python on Linux.",
        ],
      },
    ],
  },
  {
    name: "Platform",
    blurb: "Running production Kubernetes for real teams, and making it boring.",
    jobs: [
      {
        period: "Jan 2025 to Mar 2026",
        status: "succeeded",
        title: "DevOps Engineer and SRE",
        org: "Finden.me Ltd",
        type: "Full-time",
        location: "United Kingdom",
        summary:
          "Owned delivery and reliability for containerised services on GKE and EKS: GitOps releases, observability, cost, and the migrations in between.",
        log: [
          "Migrated production traffic from NGINX Ingress to Istio Gateway on GKE, standardising mTLS and AuthorizationPolicies with minimal disruption.",
          "Built CI/CD with GitHub Actions and GitLab CI for deployments to GKE and EKS via Helm and Kustomize.",
          "Terraform across AWS and GCP, CloudFormation for AWS deployments, artefacts on JFrog Artifactory.",
          "GitOps release automation with Argo CD (App-of-Apps, Kustomize overlays) across dev, UAT and production; progressive delivery with Argo Rollouts.",
          "Observability with Prometheus, Grafana, Loki and OpenTelemetry; DORA metrics through Apache DevLake, reporting in Metabase.",
          "Cut cost and improved scaling with Karpenter and OpenCost; supported on-call, incident response and uptime SLAs.",
          "Ran Redis on Kubernetes as cache and session store, RabbitMQ as the message broker; Cloudflare as CDN and edge security.",
        ],
      },
      {
        period: "Mar 2026 to present",
        status: "running",
        title: "Platform SRE and DevOps Engineer",
        org: "KubeGraf",
        orgHref: "https://kubegraf.io",
        type: "Full-time",
        location: "United Kingdom",
        summary:
          "Reliability, scalability and performance for multi-cluster Kubernetes workloads on AWS and GCP, at the company building the autonomous SRE.",
        log: [
          "Migrated north-south ingress from NGINX to Istio Gateway (mTLS, AuthorizationPolicies), converting legacy Ingress objects into Gateway and VirtualService resources with a zero-downtime cutover.",
          "Automated deployment and release with GitHub Actions (OIDC-federated to AWS and GCP) and Argo CD GitOps, with canary and blue-green rollouts via Argo Rollouts.",
          "Terraform modules for EKS, GKE, VPC, Cloud SQL, IAM and KMS supporting hybrid multi-cloud operations.",
          "Prometheus, Grafana, Loki, Tempo and OpenTelemetry; SLIs and SLOs, blameless post-incident reviews, DORA metrics via Apache DevLake.",
          "Runbooks, on-call rotations and operational procedures; least-privilege IAM, KMS, cert-manager TLS, mTLS and WAF at the edge.",
        ],
      },
    ],
  },
  {
    name: "Founder",
    blurb: "A company of my own, run with the same calm I bring to production.",
    jobs: [
      {
        period: "Present",
        status: "running",
        title: "Founder and CEO",
        org: "DeadlineMate",
        orgHref: "https://www.deadlinemate.com",
        type: "Company",
        location: "Manchester, UK",
        summary:
          "A student deadline planner that turns assignments, exams and modules into one prioritised plan, with reminders a week, a day and an hour before anything is due.",
        log: [
          "Deadline radar scores every assignment by due date, workload and weight, so the urgent work rises on its own.",
          "Reminders by email, push and SMS, on every device. Import a whole semester from Canvas, Moodle, Blackboard or Google Classroom.",
          "Free forever plan, Pro at £29 a year, and a Campus tier for departments and student support teams.",
        ],
      },
    ],
  },
];

/* DeadlineMate: the feature section and the sample plan in the mini-planner. */
export const product = {
  title: "DeadlineMate",
  kind: "Student deadline planner",
  summary:
    "DeadlineMate turns assignments, exams and modules into one prioritised plan, with reminders that reach you a week, a day and an hour before anything is due. One calm view instead of five half-used apps.",
  pillars: [
    { title: "Deadline radar", text: "Every assignment scored by due date, workload and weight. The most urgent work rises to the top on its own." },
    { title: "Reminders that reach you", text: "Email, push and SMS, a week, a day and an hour before each due date, on every device." },
    { title: "Import the whole semester", text: "Paste one calendar link from Canvas, Moodle, Blackboard or Google Classroom and every deadline stays in sync." },
  ],
  proof: ["Free forever plan", "Pro from £29 a year", "Keeping students on track at 40+ universities"],
  href: "https://www.deadlinemate.com",
  cta: "Visit deadlinemate.com",
};

export type PlanItem = { id: string; title: string; module: string; dueInMinutes: number; weight: number };
export const samplePlan: PlanItem[] = [
  { id: "pres", title: "Group presentation", module: "Marketing", dueInMinutes: 2 * 60 + 13, weight: 3 },
  { id: "essay", title: "Research essay", module: "Sociology", dueInMinutes: 26 * 60, weight: 2 },
  { id: "quiz", title: "Economics quiz", module: "Economics", dueInMinutes: 3 * 24 * 60 + 40, weight: 1 },
];

export type Pattern = { title: string; kind: string; summary: string; tags: string[] };
export const patterns: Pattern[] = [
  {
    title: "NGINX Ingress to Istio Gateway",
    kind: "Zero-downtime platform migration",
    summary:
      "Converted legacy Ingress objects into Gateway and VirtualService resources, standardised mTLS and AuthorizationPolicies, and cut over production traffic without anyone noticing.",
    tags: ["Istio", "GKE", "mTLS", "Migration"],
  },
  {
    title: "GitOps with progressive delivery",
    kind: "Release automation",
    summary:
      "Argo CD App-of-Apps with Kustomize overlays across dev, UAT and production, and canary or blue-green rollouts with Argo Rollouts. Rollback is a button, not a meeting.",
    tags: ["Argo CD", "Argo Rollouts", "Kustomize", "GitHub Actions"],
  },
  {
    title: "Observability and DORA",
    kind: "Seeing the platform clearly",
    summary:
      "Prometheus, Grafana, Loki, Tempo and OpenTelemetry for the signals, SLIs and SLOs for the promises, Apache DevLake for DORA metrics, OpenCost for the bill.",
    tags: ["Prometheus", "Grafana", "OpenTelemetry", "SLOs", "OpenCost"],
  },
];

export const stack = [
  { group: "Cloud", items: ["AWS", "GCP", "Azure"] },
  { group: "Kubernetes", items: ["EKS", "GKE", "AKS", "Helm", "Kustomize", "Istio", "Karpenter"] },
  { group: "Delivery", items: ["GitHub Actions", "GitLab CI", "Jenkins", "Argo CD", "Argo Rollouts"] },
  { group: "Infrastructure as code", items: ["Terraform", "CloudFormation", "Bicep"] },
  { group: "Observability", items: ["Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry", "Datadog", "OpenCost"] },
  { group: "Reliability", items: ["SLIs and SLOs", "Error budgets", "Blameless reviews", "Runbooks", "DORA via Apache DevLake"] },
  { group: "Security", items: ["IAM", "KMS", "cert-manager", "Vault", "External Secrets", "mTLS", "WAF", "Cloudflare"] },
  { group: "Data and messaging", items: ["RabbitMQ", "Redis"] },
  { group: "Scripting", items: ["Python", "Bash"] },
  { group: "AI tooling", items: ["Claude Code", "GitHub Copilot", "Cursor"] },
];
