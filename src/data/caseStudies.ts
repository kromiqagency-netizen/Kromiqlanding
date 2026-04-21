export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  result: string;
  description: string;
  metrics: string[];
  challenge: string;
  solution: string;
  impact: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'alayaa',
    client: 'Alayaa.co.in',
    industry: 'Luxury Jewellery / D2C',
    result: '+210% online revenue in 6 months',
    description: 'End-to-end brand transformation — from visual identity and premium packaging to a high-conversion storefront and performance marketing engine for fine jewellery.',
    metrics: ['210% Revenue Growth', '3.8x ROAS', '45% Repeat Customers'],
    challenge: "Alayaa had a premium product but lacked the digital presence to command luxury prices. Their original storefront was slow, and their brand identity didn't resonate with high-net-worth individuals.",
    solution: "We re-architected the entire brand ecosystem. This involved a radical redesign of their visual identity, implementing a high-performance custom storefront, and deploying a surgical performance marketing strategy targeting luxury consumers.",
    impact: "Within 6 months, online revenue surged by 210%. The brand successfully shifted from a discount-driven model to a premium-value model, with a significant increase in average order value (AOV)."
  },
  {
    slug: 'wandersoul',
    client: 'WanderSoul.co.in',
    industry: 'Travel / Experiential Tourism',
    result: '5x booking volume in one quarter',
    description: 'Designed an immersive digital experience that converts wanderlust into bookings — complete with SEO strategy, content engine, and automated lead nurture.',
    metrics: ['5x Booking Volume', '68% Organic Traffic', '2.1s Page Load'],
    challenge: "WanderSoul was struggling to convert website visitors into actual bookings. Their site was informative but lacked the 'impulse' design required for experiential travel.",
    solution: "We built an 'experience-first' platform that used immersive storytelling and high-fidelity media to capture intent. We also implemented a robust SEO framework and an automated email nurture system to keep the brand top-of-mind.",
    impact: "The brand saw a 500% increase in booking volume in just three months. Organic traffic became their #1 source of revenue, drastically reducing their dependency on paid ads."
  },
  {
    slug: 'rojgaar',
    client: 'Rojgaar.co',
    industry: 'Staffing / Gig Economy',
    result: '12,000+ workers deployed per month',
    description: 'Architected the operational backbone connecting delivery partners to Zepto and other enterprise clients at scale.',
    metrics: ['12K+ Monthly Deploys', '99.2% Uptime', '3 City Expansion'],
    challenge: "Rojgaar needed a high-performance technological core to manage the rapid deployment of thousands of gig workers across multiple cities simultaneously.",
    solution: "We engineered a custom operational dashboard and real-time tracking system. This system streamlined the connection between workforce demand and supply, allowing for seamless integration with enterprise partners like Zepto.",
    impact: "Rojgaar now deploys over 12,000 workers monthly with near-perfect uptime. The infrastructure we built has enabled them to expand rapidly into three major cities with zero operational lag."
  }
];
