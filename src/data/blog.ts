export interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  postsCount?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  category: string;
  tags: string[];
  image: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
}

// Authors
export const authors: Author[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior Web Developer",
    bio: "Senior Web Developer with 8+ years of experience in building scalable digital solutions. Passionate about modern web technologies and UI/UX design.",
    image: "/images/authors/author-1.jpg",
    email: "sarah@cim.com",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Digital Marketing Strategist",
    bio: "Digital Marketing Strategist and SEO Expert. Helping businesses achieve sustainable organic growth through data-driven strategies.",
    image: "/images/authors/author-2.jpg",
    email: "michael@cim.com",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "3",
    name: "Emma Williams",
    title: "UI/UX Designer",
    bio: "UI/UX Designer and Brand Strategist. Creating beautiful, functional digital experiences that drive user engagement and business results.",
    image: "/images/authors/author-3.jpg",
    email: "emma@cim.com",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "4",
    name: "David Kumar",
    title: "Mobile App Developer",
    bio: "Mobile App Developer and AI Enthusiast. Specializing in cross-platform development and integrating AI workflows into applications.",
    image: "/images/authors/author-4.jpg",
    email: "david@cim.com",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

// Blog Categories
export const categories = [
  "Web Development",
  "Mobile Apps",
  "Digital Marketing",
  "AI & Automation",
  "UI/UX Design",
  "SEO",
  "Business Strategy",
  "Case Studies",
];

// Category Details Interface
export interface CategoryDetails {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  relatedTopics: string[];
  featuredTags: string[];
}

// Category Details Data
export const categoryDetails: CategoryDetails[] = [
  {
    name: "Web Development",
    slug: "web-development",
    description: "Modern web development techniques, frameworks, and best practices for building performant applications.",
    longDescription: "Dive deep into the world of modern web development. From cutting-edge frameworks like Next.js and React to performance optimization techniques, our Web Development articles cover everything you need to build fast, scalable, and user-friendly web applications. Whether you're a beginner learning the fundamentals or an experienced developer seeking advanced insights, our expert guides will help you stay ahead in the ever-evolving web landscape.",
    icon: "Code",
    color: "#6B00D7",
    relatedTopics: ["Frontend Development", "Backend Development", "Full-Stack", "APIs", "Performance"],
    featuredTags: ["Next.js", "React", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    name: "Mobile Apps",
    slug: "mobile-apps",
    description: "Cross-platform and native mobile app development strategies for iOS and Android.",
    longDescription: "Explore the latest trends and technologies in mobile app development. Our comprehensive guides cover cross-platform frameworks like React Native and Flutter, native iOS and Android development, app store optimization, and mobile-first design principles. Learn how to create engaging, high-performance mobile applications that users love and that drive business results.",
    icon: "Smartphone",
    color: "#00B5CA",
    relatedTopics: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization", "Mobile UX"],
    featuredTags: ["React Native", "Flutter", "Swift", "Kotlin", "Mobile Development"],
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing strategies to grow your online presence and drive conversions.",
    longDescription: "Master the art of digital marketing with our in-depth guides and strategies. From content marketing and social media management to paid advertising and marketing automation, we cover all aspects of modern digital marketing. Learn how to create compelling campaigns, reach your target audience, and measure your success with data-driven insights that drive real business growth.",
    icon: "TrendingUp",
    color: "#FF6B35",
    relatedTopics: ["Content Marketing", "Social Media", "Email Marketing", "PPC Advertising", "Analytics"],
    featuredTags: ["Marketing", "Strategy", "Growth", "Campaigns", "ROI"],
  },
  {
    name: "AI & Automation",
    slug: "ai-automation",
    description: "Leverage artificial intelligence and automation to streamline operations and boost productivity.",
    longDescription: "Discover how artificial intelligence and automation are transforming businesses across industries. Our articles explore AI workflows, machine learning integration, chatbots, process automation, and the future of work. Learn practical strategies for implementing AI solutions that reduce costs, improve efficiency, and create competitive advantages for your organization.",
    icon: "Bot",
    color: "#9B59B6",
    relatedTopics: ["Machine Learning", "Chatbots", "Process Automation", "AI Tools", "Workflow Optimization"],
    featuredTags: ["AI", "Automation", "Machine Learning", "Efficiency", "Innovation"],
  },
  {
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User-centered design principles and practices for creating exceptional digital experiences.",
    longDescription: "Create stunning, user-friendly digital experiences with our UI/UX design resources. From design systems and wireframing to prototyping and user research, we cover the complete design process. Learn how to balance aesthetics with functionality, conduct effective user testing, and create interfaces that delight users while achieving business objectives.",
    icon: "Palette",
    color: "#E91E63",
    relatedTopics: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    featuredTags: ["Design", "UI/UX", "Figma", "User Experience", "Interface Design"],
  },
  {
    name: "SEO",
    slug: "seo",
    description: "Search engine optimization strategies to improve visibility and drive organic traffic.",
    longDescription: "Dominate search rankings with our comprehensive SEO guides. Learn proven strategies for keyword research, on-page optimization, technical SEO, link building, and content optimization. Our expert insights help you understand search engine algorithms, improve your website's visibility, and drive sustainable organic traffic that converts.",
    icon: "Search",
    color: "#27AE60",
    relatedTopics: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO"],
    featuredTags: ["SEO", "Organic Growth", "Keywords", "Search Rankings", "Traffic"],
  },
  {
    name: "Business Strategy",
    slug: "business-strategy",
    description: "Strategic insights and frameworks for digital business growth and transformation.",
    longDescription: "Gain strategic insights for growing your digital business. Our Business Strategy articles cover market analysis, competitive positioning, digital transformation, growth frameworks, and leadership in the digital age. Learn from real-world examples and expert perspectives to make informed decisions that drive sustainable business success.",
    icon: "Target",
    color: "#3498DB",
    relatedTopics: ["Growth Strategy", "Digital Transformation", "Market Analysis", "Leadership", "Innovation"],
    featuredTags: ["Strategy", "Business Growth", "Leadership", "Innovation", "Planning"],
  },
  {
    name: "Case Studies",
    slug: "case-studies",
    description: "Real-world success stories showcasing digital transformation and measurable results.",
    longDescription: "Learn from real success stories that demonstrate the power of digital solutions. Our Case Studies showcase how businesses across industries have achieved remarkable results through strategic digital transformation. Discover the challenges they faced, the solutions we implemented, and the measurable outcomes that prove the value of investing in digital excellence.",
    icon: "FileText",
    color: "#F39C12",
    relatedTopics: ["Success Stories", "ROI Analysis", "Best Practices", "Implementation", "Results"],
    featuredTags: ["Case Study", "Success", "Results", "Transformation", "Growth"],
  },
];

// Helper function to generate URL-safe category slug from name
export function getCategorySlug(categoryName: string): string {
  return categoryName
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-|-$/g, "");
}

// Helper function to get category details by name or slug
export function getCategoryDetails(identifier: string): CategoryDetails | undefined {
  const normalizedId = identifier.toLowerCase().replace(/&/g, "").replace(/\//g, "");
  return categoryDetails.find(
    (cat) => cat.name.toLowerCase() === identifier.toLowerCase() ||
      cat.slug === identifier.toLowerCase() ||
      cat.slug === normalizedId
  );
}

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Next.js and Modern Frameworks",
    slug: "future-web-development-nextjs",
    excerpt: "Explore how Next.js is revolutionizing web development with server-side rendering, static generation, and API routes.",
    content: `
# The Future of Web Development: Next.js and Modern Frameworks

Web development is evolving at an unprecedented pace. With the rise of frameworks like Next.js, developers now have powerful tools to build fast, scalable, and SEO-friendly applications. In this comprehensive guide, we'll explore what makes Next.js special and how it's shaping the future of web development.

## Why Next.js Matters

Next.js has become the go-to framework for React developers worldwide. It provides a production-ready environment with features like:

- **Server-Side Rendering (SSR)**: Render pages on the server for better performance and SEO
- **Static Site Generation (SSG)**: Pre-render pages at build time for lightning-fast delivery
- **API Routes**: Build backend functionality without a separate server
- **Image Optimization**: Automatic image optimization for faster load times
- **Built-in CSS Support**: Write CSS modules or use Tailwind CSS seamlessly

## Key Features That Set Next.js Apart

### 1. File-Based Routing
The intuitive file-based routing system makes it easy to organize your application. Simply create files in the app directory, and Next.js automatically creates routes.

### 2. Incremental Static Regeneration (ISR)
ISR allows you to update static content without rebuilding your entire site. This is perfect for blogs, e-commerce sites, and news platforms.

### 3. Edge Functions
Deploy functions to the edge for ultra-low latency responses. Perfect for personalization, A/B testing, and dynamic content delivery.

### 4. Middleware
Run code before requests are processed. Use middleware for authentication, redirects, and request modifications.

## Best Practices for Next.js Development

When building Next.js applications, follow these best practices:

- Use dynamic imports for code splitting
- Optimize images with the Next.js Image component
- Implement proper error handling and loading states
- Use TypeScript for type safety
- Leverage the App Router for modern development patterns

## Conclusion

Next.js continues to evolve, bringing new features and improvements with each release. Whether you're building a simple blog or a complex enterprise application, Next.js provides the tools and flexibility you need to succeed in modern web development.
    `,
    author: authors[0],
    category: "Web Development",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-12-15",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    title: "Mastering SEO: A Complete Guide to Organic Growth",
    slug: "mastering-seo-organic-growth",
    excerpt: "Learn proven SEO strategies to increase your website visibility and drive sustainable organic traffic.",
    content: `
# Mastering SEO: A Complete Guide to Organic Growth

Search Engine Optimization (SEO) is the foundation of digital marketing. In this guide, we'll cover everything you need to know to improve your website's visibility and drive sustainable organic traffic.

## Understanding SEO Fundamentals

SEO is the practice of optimizing your website to rank higher in search engine results. It involves three main components:

### 1. On-Page SEO
Optimize individual pages with relevant keywords, meta descriptions, and quality content.

### 2. Off-Page SEO
Build authority through backlinks, social signals, and brand mentions.

### 3. Technical SEO
Ensure your website is fast, mobile-friendly, and easy for search engines to crawl.

## Keyword Research and Strategy

Effective SEO starts with thorough keyword research. Use tools like Google Keyword Planner, Ahrefs, and SEMrush to:

- Identify high-volume, low-competition keywords
- Understand user intent
- Analyze competitor keywords
- Create a keyword strategy aligned with your business goals

## Content Optimization

Quality content is king in SEO. Follow these guidelines:

- Write comprehensive, in-depth articles
- Use keywords naturally throughout your content
- Optimize headings and subheadings
- Include internal and external links
- Create engaging meta descriptions

## Technical SEO Essentials

Technical SEO ensures search engines can properly crawl and index your site:

- Improve page load speed
- Implement SSL certificates
- Create XML sitemaps
- Fix broken links
- Optimize for mobile devices

## Link Building Strategies

Backlinks remain a crucial ranking factor. Build quality links through:

- Guest posting on relevant blogs
- Creating linkable assets (infographics, tools, research)
- Reaching out to industry influencers
- Participating in industry forums and communities

## Measuring SEO Success

Track your progress with these key metrics:

- Organic traffic
- Keyword rankings
- Click-through rate (CTR)
- Conversion rate
- Bounce rate

## Conclusion

SEO is a long-term investment that requires patience and consistency. By implementing these strategies, you'll build a strong foundation for sustainable organic growth.
    `,
    author: authors[1],
    category: "SEO",
    tags: ["SEO", "Digital Marketing", "Organic Growth", "Keywords"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-12-10",
    readTime: 10,
    featured: true,
  },
  {
    id: "3",
    title: "Mobile App Development Trends in 2024",
    slug: "mobile-app-development-trends-2024",
    excerpt: "Discover the latest trends and technologies shaping mobile app development in 2024.",
    content: `
# Mobile App Development Trends in 2024

Mobile app development is constantly evolving. In this article, we'll explore the latest trends and technologies that are shaping the industry in 2024.

## Cross-Platform Development

Cross-platform frameworks like React Native and Flutter continue to dominate. They allow developers to write code once and deploy to multiple platforms, reducing development time and costs.

### React Native
React Native remains popular for building iOS and Android apps with JavaScript. Recent improvements in performance and stability make it an excellent choice for many projects.

### Flutter
Flutter's growing ecosystem and strong performance make it increasingly popular. Google's continued investment in Flutter ensures its long-term viability.

## AI and Machine Learning Integration

AI is no longer a luxury feature—it's becoming essential. Mobile apps now integrate:

- Machine learning models for personalization
- Natural language processing for chatbots
- Computer vision for image recognition
- Predictive analytics for user behavior

## Progressive Web Apps (PWAs)

PWAs bridge the gap between web and mobile apps. They offer:

- Offline functionality
- Push notifications
- Fast loading times
- Installation on home screen

## Security and Privacy

With increasing data breaches, security is paramount:

- End-to-end encryption
- Biometric authentication
- Privacy-first design
- Regular security audits

## Performance Optimization

Users expect fast, responsive apps:

- Optimize app size
- Reduce battery consumption
- Improve startup time
- Implement efficient caching

## Conclusion

The mobile app landscape is more exciting than ever. By staying updated with these trends, you'll build apps that meet user expectations and drive business success.
    `,
    author: authors[3],
    category: "Mobile Apps",
    tags: ["Mobile Development", "React Native", "Flutter", "Technology"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-12-05",
    readTime: 7,
  },
  {
    id: "4",
    title: "Creating Stunning UI/UX Designs: Principles and Best Practices",
    slug: "stunning-ui-ux-design-principles",
    excerpt: "Learn the fundamental principles and best practices for creating user-centered designs that convert.",
    content: `
# Creating Stunning UI/UX Designs: Principles and Best Practices

Great UI/UX design is the foundation of successful digital products. In this guide, we'll explore the principles and practices that make designs both beautiful and functional.

## Understanding UI vs UX

While often used interchangeably, UI and UX are distinct:

- **UI (User Interface)**: The visual elements users interact with
- **UX (User Experience)**: The overall experience and satisfaction

Both are essential for creating successful products.

## Core Design Principles

### 1. User-Centered Design
Always prioritize user needs and preferences. Conduct user research, create personas, and test with real users.

### 2. Consistency
Maintain consistent design patterns, colors, typography, and interactions throughout your application.

### 3. Clarity
Make it obvious what users should do. Use clear labels, intuitive navigation, and helpful feedback.

### 4. Accessibility
Design for everyone, including users with disabilities. Follow WCAG guidelines and test with accessibility tools.

### 5. Feedback
Provide immediate feedback for user actions. Use animations, notifications, and status indicators.

## Design Systems

A well-organized design system ensures consistency and speeds up development:

- Define color palettes
- Create typography scales
- Build component libraries
- Document design patterns

## Wireframing and Prototyping

Before diving into design:

- Create wireframes to plan layout and functionality
- Build prototypes to test interactions
- Gather feedback from stakeholders
- Iterate based on user testing

## Visual Hierarchy

Guide users' attention through visual hierarchy:

- Use size, color, and contrast to emphasize important elements
- Organize content logically
- Create clear focal points
- Use whitespace effectively

## Responsive Design

Design for all screen sizes:

- Use flexible layouts
- Optimize for mobile first
- Test on various devices
- Ensure touch-friendly interactions

## Conclusion

Great design is a balance of aesthetics and functionality. By following these principles, you'll create designs that users love and that drive business results.
    `,
    author: authors[2],
    category: "UI/UX Design",
    tags: ["Design", "UI/UX", "User Experience", "Best Practices"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-11-28",
    readTime: 9,
    featured: true,
  },
  {
    id: "5",
    title: "AI Workflows: Automating Your Business Processes",
    slug: "ai-workflows-automating-business",
    excerpt: "Discover how AI workflows can streamline operations and boost productivity across your organization.",
    content: `
# AI Workflows: Automating Your Business Processes

Artificial Intelligence is transforming how businesses operate. In this article, we'll explore how AI workflows can automate processes and drive efficiency.

## What Are AI Workflows?

AI workflows combine artificial intelligence with business process automation. They enable:

- Intelligent task automation
- Data processing and analysis
- Decision-making support
- Customer service automation

## Common Use Cases

### Customer Service
AI chatbots handle routine inquiries, reducing support costs and improving response times.

### Data Processing
Automate data entry, validation, and analysis tasks that would otherwise require manual effort.

### Marketing Automation
Use AI to personalize marketing messages, optimize campaigns, and predict customer behavior.

### Document Processing
Automatically extract information from documents, classify content, and route to appropriate departments.

## Implementing AI Workflows

### 1. Identify Opportunities
Look for repetitive, rule-based processes that are good candidates for automation.

### 2. Choose the Right Tools
Select AI platforms that fit your needs and integrate with existing systems.

### 3. Start Small
Begin with low-risk processes and expand gradually as you gain experience.

### 4. Monitor and Optimize
Track performance metrics and continuously improve your workflows.

## Benefits of AI Workflows

- **Cost Reduction**: Automate repetitive tasks and reduce manual labor
- **Improved Accuracy**: AI systems make fewer errors than humans
- **Faster Processing**: Automate tasks that would take hours manually
- **Better Insights**: Analyze data at scale to uncover patterns and opportunities
- **Enhanced Customer Experience**: Provide faster, more personalized service

## Challenges and Considerations

- Data quality and availability
- Integration with existing systems
- Employee training and adoption
- Privacy and security concerns
- Ethical considerations

## Conclusion

AI workflows are no longer a luxury—they're a necessity for competitive businesses. By strategically implementing AI automation, you can focus on high-value activities while AI handles routine tasks.
    `,
    author: authors[3],
    category: "AI & Automation",
    tags: ["AI", "Automation", "Business Process", "Efficiency"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-11-20",
    readTime: 8,
  },
  {
    id: "6",
    title: "Digital Marketing Strategy: From Planning to Execution",
    slug: "digital-marketing-strategy-planning-execution",
    excerpt: "A comprehensive guide to developing and executing a successful digital marketing strategy.",
    content: `
# Digital Marketing Strategy: From Planning to Execution

A well-executed digital marketing strategy is crucial for business growth. In this guide, we'll walk through the entire process from planning to execution.

## Understanding Digital Marketing

Digital marketing encompasses all marketing efforts using digital channels:

- Search engines
- Social media
- Email
- Content marketing
- Paid advertising
- Analytics

## Step 1: Define Your Goals

Start by setting clear, measurable goals:

- Increase brand awareness
- Generate leads
- Drive sales
- Improve customer retention
- Build community

Use the SMART framework: Specific, Measurable, Achievable, Relevant, Time-bound.

## Step 2: Know Your Audience

Create detailed buyer personas:

- Demographics
- Interests and behaviors
- Pain points
- Buying preferences
- Communication channels

## Step 3: Audit Your Current Presence

Evaluate your existing digital presence:

- Website performance
- Social media engagement
- Email list quality
- Competitor analysis
- Current marketing channels

## Step 4: Develop Your Strategy

Create a comprehensive strategy covering:

- Content marketing plan
- Social media strategy
- Email marketing approach
- Paid advertising budget
- SEO strategy
- Analytics and measurement

## Step 5: Create Quality Content

Content is the foundation of digital marketing:

- Blog posts
- Videos
- Infographics
- Podcasts
- Ebooks
- Webinars

## Step 6: Execute and Monitor

Launch your campaigns and track performance:

- Monitor key metrics
- Analyze results
- Gather feedback
- Make data-driven adjustments
- Optimize continuously

## Step 7: Measure and Optimize

Use analytics to understand what works:

- Track ROI
- Analyze user behavior
- A/B test campaigns
- Refine messaging
- Scale successful initiatives

## Conclusion

A successful digital marketing strategy requires planning, execution, and continuous optimization. By following these steps, you'll build a strategy that drives real business results.
    `,
    author: authors[1],
    category: "Digital Marketing",
    tags: ["Marketing", "Strategy", "Digital", "Business Growth"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-11-15",
    readTime: 10,
  },
  {
    id: "7",
    title: "Case Study: Transforming a Local Business with Digital Solutions",
    slug: "case-study-local-business-digital-transformation",
    excerpt: "Learn how we helped a local business achieve 300% growth through strategic digital transformation.",
    content: `
# Case Study: Transforming a Local Business with Digital Solutions

## The Challenge

A local retail business was struggling to compete with larger online retailers. They had minimal online presence and were losing customers to competitors with better digital strategies.

## The Solution

We implemented a comprehensive digital transformation strategy:

### 1. Website Development
Built a modern, mobile-responsive e-commerce website with:
- Product catalog with search functionality
- Secure payment processing
- Customer account management
- Blog for content marketing

### 2. Digital Marketing
Launched integrated marketing campaigns:
- SEO optimization for local search
- Google Ads for targeted traffic
- Social media marketing
- Email marketing to existing customers

### 3. Analytics and Optimization
Set up comprehensive tracking:
- Google Analytics for website performance
- Conversion tracking
- Customer behavior analysis
- Regular reporting and optimization

## Results

After 6 months of implementation:

- **300% increase** in online sales
- **150% increase** in website traffic
- **45% improvement** in customer retention
- **25% reduction** in customer acquisition cost

## Key Takeaways

1. **Mobile-first approach** is essential in today's market
2. **Content marketing** builds trust and drives organic traffic
3. **Data-driven decisions** lead to better results
4. **Continuous optimization** is crucial for sustained growth
5. **Integration across channels** amplifies marketing impact

## Conclusion

This case study demonstrates the power of strategic digital transformation. By combining modern technology with effective marketing strategies, businesses can achieve remarkable growth regardless of their size.
    `,
    author: authors[0],
    category: "Case Studies",
    tags: ["Case Study", "Digital Transformation", "Business Growth", "Success"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-11-10",
    readTime: 6,
  },
  {
    id: "8",
    title: "Web Performance Optimization: Speed Up Your Website",
    slug: "web-performance-optimization-speed",
    excerpt: "Essential techniques to optimize your website performance and improve user experience.",
    content: `
# Web Performance Optimization: Speed Up Your Website

Website speed is critical for user experience and SEO. In this guide, we'll explore techniques to optimize your website performance.

## Why Performance Matters

Fast websites:
- Improve user experience
- Increase conversion rates
- Boost SEO rankings
- Reduce bounce rates
- Improve accessibility

## Core Web Vitals

Google's Core Web Vitals measure website performance:

### 1. Largest Contentful Paint (LCP)
Measures loading performance. Aim for LCP < 2.5 seconds.

### 2. First Input Delay (FID)
Measures interactivity. Aim for FID < 100 milliseconds.

### 3. Cumulative Layout Shift (CLS)
Measures visual stability. Aim for CLS < 0.1.

## Performance Optimization Techniques

### 1. Image Optimization
- Use modern formats (WebP)
- Compress images
- Implement lazy loading
- Use responsive images

### 2. Code Splitting
- Split JavaScript bundles
- Load code on demand
- Reduce initial bundle size

### 3. Caching Strategies
- Browser caching
- Server-side caching
- CDN usage
- Service workers

### 4. Minification and Compression
- Minify CSS, JavaScript, and HTML
- Enable gzip compression
- Remove unused code

### 5. Optimize Fonts
- Use system fonts when possible
- Subset custom fonts
- Implement font-display strategy

## Tools for Performance Testing

- Google PageSpeed Insights
- WebPageTest
- Lighthouse
- GTmetrix
- Chrome DevTools

## Conclusion

Website performance optimization is an ongoing process. By implementing these techniques and regularly monitoring performance, you'll create a fast, user-friendly experience that drives results.
    `,
    author: authors[0],
    category: "Web Development",
    tags: ["Performance", "Optimization", "Web Development", "Speed"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-11-05",
    readTime: 8,
  },
  {
    id: "9",
    title: "E-commerce UX: Designing for Conversion",
    slug: "ecommerce-ux-designing-conversion",
    excerpt: "Master the art of e-commerce UX design to increase conversions, reduce cart abandonment, and create seamless shopping experiences.",
    content: `
# E-commerce UX: Designing for Conversion

In the competitive world of e-commerce, user experience can make or break your business. A well-designed shopping experience leads to higher conversions, customer loyalty, and increased revenue. Let's explore the key principles of e-commerce UX design.

## The Psychology of Online Shopping

Understanding how customers think and behave online is crucial:

### Decision Fatigue
Too many choices can overwhelm customers. Present products strategically and help users make decisions through filters, comparisons, and recommendations.

### Trust Signals
Customers need to trust your site before making a purchase. Include reviews, security badges, and clear return policies.

### Urgency and Scarcity
Limited-time offers and stock indicators can motivate purchasing decisions, but use them honestly.

## Essential E-commerce UX Elements

### 1. Product Pages That Convert
- High-quality images with zoom capability
- Clear pricing and availability
- Compelling product descriptions
- Customer reviews and ratings
- Related product suggestions

### 2. Streamlined Checkout Process
- Guest checkout option
- Progress indicators
- Multiple payment methods
- Clear shipping information
- Order summary visibility

### 3. Mobile-First Design
With over 60% of e-commerce traffic coming from mobile devices:
- Optimize for touch interactions
- Simplify navigation
- Ensure fast loading times
- Implement mobile payment options

## Reducing Cart Abandonment

Cart abandonment averages around 70%. Combat this with:
- Transparent pricing (no hidden fees)
- Cart persistence across devices
- Abandoned cart email reminders
- Exit-intent popups with incentives
- Multiple shipping options

## Trust and Security

Build customer confidence through:
- SSL certificates and security badges
- Clear privacy policies
- Easy-to-find contact information
- Authentic customer testimonials
- Professional design quality

## Conclusion

E-commerce UX is about removing friction from the buying journey. By focusing on customer needs, building trust, and optimizing every touchpoint, you can significantly increase your conversion rates and build lasting customer relationships.
    `,
    author: authors[2],
    category: "UI/UX Design",
    tags: ["E-commerce", "UX Design", "Conversion", "Online Shopping"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-10-28",
    readTime: 9,
  },
  {
    id: "10",
    title: "Social Media Strategy: Building Your Brand Online",
    slug: "social-media-strategy-building-brand",
    excerpt: "Learn how to create a winning social media strategy that builds brand awareness, engages your audience, and drives business growth.",
    content: `
# Social Media Strategy: Building Your Brand Online

Social media has become an essential channel for brand building and customer engagement. A strategic approach to social media can help you reach new audiences, build loyalty, and drive measurable business results.

## Defining Your Social Media Goals

Before creating content, define clear objectives:

### Awareness Goals
- Increase brand visibility
- Reach new audiences
- Establish thought leadership

### Engagement Goals
- Build community
- Increase interactions
- Foster customer relationships

### Conversion Goals
- Drive website traffic
- Generate leads
- Increase sales

## Choosing the Right Platforms

Not every platform is right for every business:

### LinkedIn
Best for B2B companies, professional services, and thought leadership content.

### Instagram
Ideal for visual brands, lifestyle products, and reaching younger demographics.

### Twitter/X
Great for real-time engagement, news, and customer service.

### TikTok
Perfect for reaching Gen Z and creating viral, entertaining content.

### Facebook
Still valuable for local businesses and community building.

## Content Strategy

### The 80/20 Rule
- 80% valuable, educational, or entertaining content
- 20% promotional content

### Content Pillars
Develop 3-5 core themes that align with your brand:
- Educational content
- Behind-the-scenes
- User-generated content
- Industry news
- Product highlights

### Content Calendar
Plan your content in advance:
- Weekly themes
- Seasonal campaigns
- Key dates and events
- Consistent posting schedule

## Engagement Best Practices

### Respond Quickly
Aim to respond to comments and messages within hours, not days.

### Be Authentic
Show personality and human connection in your interactions.

### Encourage Conversation
Ask questions, run polls, and create interactive content.

### Handle Negativity Gracefully
Address complaints professionally and take conversations offline when needed.

## Measuring Success

Track these key metrics:
- Reach and impressions
- Engagement rate
- Follower growth
- Click-through rate
- Conversion rate

## Conclusion

Social media success requires consistency, authenticity, and strategic thinking. By understanding your audience, creating valuable content, and measuring results, you can build a powerful social media presence that drives real business growth.
    `,
    author: authors[1],
    category: "Digital Marketing",
    tags: ["Social Media", "Branding", "Marketing Strategy", "Content"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-10-20",
    readTime: 10,
  },
  {
    id: "11",
    title: "React Best Practices for 2024",
    slug: "react-best-practices-2024",
    excerpt: "Stay ahead with the latest React best practices, patterns, and techniques for building modern, maintainable applications.",
    content: `
# React Best Practices for 2024

React continues to evolve, and staying current with best practices is essential for building high-quality applications. This guide covers the patterns and techniques you should be using in 2024.

## Modern React Patterns

### Server Components
React Server Components allow you to render components on the server:
- Reduced bundle size
- Direct database access
- Improved initial load time

### Suspense and Concurrent Features
Leverage React's concurrent features for better user experiences:
- Streaming server rendering
- Selective hydration
- Transition hooks

## State Management

### When to Use What

**Local State (useState)**
- UI state (open/closed modals)
- Form inputs
- Component-specific data

**Context API**
- Theme preferences
- User authentication
- Feature flags

**External Libraries (Zustand, Jotai)**
- Complex global state
- Frequent updates
- DevTools integration

## Component Design

### Composition Over Configuration
Build flexible components through composition:
- Render props
- Children as function
- Compound components

### Single Responsibility
Each component should do one thing well:
- Extract logic into custom hooks
- Create presentational and container components
- Keep components focused

## Performance Optimization

### Memoization
Use wisely, not everywhere:
- React.memo for expensive renders
- useMemo for expensive calculations
- useCallback for stable function references

### Code Splitting
Split your bundle strategically:
- Route-based splitting
- Component-based splitting
- Library splitting

### Lazy Loading
Load components only when needed:
- Dynamic imports
- Intersection Observer
- Suspense boundaries

## TypeScript Integration

### Type Safety
Leverage TypeScript for better developer experience:
- Component props typing
- Event handler types
- Generic components

### Best Practices
- Avoid 'any' type
- Use discriminated unions
- Leverage type inference

## Testing Strategies

### Testing Library Philosophy
Test user behavior, not implementation:
- Query by accessibility
- Simulate user events
- Assert on visible output

### Test Coverage
Focus on critical paths:
- User flows
- Edge cases
- Error states

## Conclusion

Modern React development is about leveraging the right tools and patterns for each situation. By following these best practices, you'll build applications that are performant, maintainable, and enjoyable to work with.
    `,
    author: authors[0],
    category: "Web Development",
    tags: ["React", "JavaScript", "Frontend", "Best Practices"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-10-15",
    readTime: 11,
    featured: true,
  },
  {
    id: "12",
    title: "Content Marketing: Strategies That Actually Work",
    slug: "content-marketing-strategies-work",
    excerpt: "Discover proven content marketing strategies that drive traffic, generate leads, and build authority in your industry.",
    content: `
# Content Marketing: Strategies That Actually Work

Content marketing remains one of the most effective ways to attract and engage customers. But with so much content being published daily, how do you stand out? Let's explore strategies that deliver real results.

## Understanding Content Marketing ROI

Content marketing costs 62% less than traditional marketing and generates 3x more leads. But success requires:
- Strategic planning
- Consistent execution
- Quality over quantity
- Long-term commitment

## Content Types That Perform

### Long-Form Blog Posts
In-depth articles (2000+ words) typically:
- Rank higher in search results
- Generate more backlinks
- Establish thought leadership

### Video Content
Video continues to dominate:
- Tutorial and how-to videos
- Behind-the-scenes content
- Expert interviews
- Product demonstrations

### Interactive Content
Engage users with:
- Quizzes and assessments
- Calculators and tools
- Interactive infographics
- Surveys and polls

### Podcasts
Audio content is growing rapidly:
- Lower production barrier
- Engaged, loyal audience
- Thought leadership opportunity

## Content Distribution

Creating great content is only half the battle:

### Owned Channels
- Website and blog
- Email newsletter
- Social media profiles

### Earned Channels
- Media coverage
- Guest posting
- Influencer mentions
- Organic social shares

### Paid Channels
- Social media ads
- Native advertising
- Sponsored content
- PPC campaigns

## SEO-Driven Content

### Keyword Strategy
- Target long-tail keywords
- Focus on search intent
- Build topic clusters
- Update existing content

### On-Page Optimization
- Compelling titles and meta descriptions
- Proper heading hierarchy
- Internal linking
- Image optimization

## Measuring Content Success

### Key Metrics
- Organic traffic growth
- Time on page
- Social shares
- Lead generation
- Conversion rate

### Attribution
Understand how content contributes to:
- First-touch conversions
- Multi-touch journeys
- Brand awareness

## Content Repurposing

Maximize your content investment:
- Turn blog posts into videos
- Create infographics from data
- Convert webinars to blog series
- Compile posts into ebooks

## Conclusion

Effective content marketing requires a strategic approach focused on providing genuine value to your audience. By creating high-quality content, distributing it effectively, and measuring results, you can build a content engine that drives sustainable business growth.
    `,
    author: authors[1],
    category: "Digital Marketing",
    tags: ["Content Marketing", "Strategy", "SEO", "Lead Generation"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-10-10",
    readTime: 9,
  },
  {
    id: "13",
    title: "Cybersecurity for Small Businesses",
    slug: "cybersecurity-small-businesses",
    excerpt: "Essential cybersecurity practices every small business should implement to protect against modern threats.",
    content: `
# Cybersecurity for Small Businesses

Small businesses are increasingly targeted by cybercriminals. In fact, 43% of cyber attacks target small businesses. This guide covers essential security measures to protect your business.

## Understanding the Threat Landscape

### Common Attack Types

**Phishing**
Fraudulent emails designed to steal credentials or install malware. Train employees to recognize suspicious emails.

**Ransomware**
Malicious software that encrypts data and demands payment. Regular backups are essential protection.

**Business Email Compromise**
Attackers impersonate executives to request unauthorized transfers. Implement verification procedures.

**Insider Threats**
Employees can accidentally or intentionally cause security incidents. Access controls and monitoring help.

## Essential Security Measures

### 1. Employee Training
Your employees are your first line of defense:
- Regular security awareness training
- Phishing simulation exercises
- Clear security policies
- Incident reporting procedures

### 2. Strong Authentication
Implement robust access controls:
- Multi-factor authentication (MFA)
- Strong password policies
- Password managers
- Single sign-on where appropriate

### 3. Regular Updates
Keep systems patched and current:
- Automatic updates where possible
- Regular security patches
- End-of-life software replacement
- Firmware updates

### 4. Backup Strategy
Follow the 3-2-1 rule:
- 3 copies of data
- 2 different storage types
- 1 offsite backup

### 5. Network Security
Protect your network perimeter:
- Business-grade firewall
- Secure Wi-Fi networks
- VPN for remote access
- Network segmentation

## Security Policies

Develop and enforce key policies:
- Acceptable use policy
- Password policy
- BYOD policy
- Incident response plan
- Data classification policy

## Vendor Security

Evaluate third-party security:
- Security questionnaires
- SOC 2 compliance
- Data processing agreements
- Regular vendor reviews

## Incident Response

Be prepared for security incidents:
- Defined response procedures
- Communication templates
- Legal and insurance contacts
- Regular testing and updates

## Cost-Effective Solutions

Security doesn't have to break the bank:
- Free and open-source tools
- Cloud-based security services
- Managed security providers
- Cyber insurance

## Conclusion

Cybersecurity is no longer optional for small businesses. By implementing these fundamental security measures, you can significantly reduce your risk and protect your business, customers, and reputation from cyber threats.
    `,
    author: authors[3],
    category: "Business Strategy",
    tags: ["Cybersecurity", "Small Business", "Security", "Risk Management"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-10-05",
    readTime: 10,
  },
  {
    id: "14",
    title: "Mobile UX Trends to Watch in 2024",
    slug: "mobile-ux-trends-2024",
    excerpt: "Explore the latest mobile UX trends shaping how users interact with apps and mobile websites in 2024.",
    content: `
# Mobile UX Trends to Watch in 2024

Mobile UX continues to evolve as user expectations grow and technology advances. Here are the trends defining mobile experiences in 2024.

## Gesture-Based Navigation

### Beyond the Tap
Modern mobile UX embraces natural gestures:
- Swipe navigation
- Pinch and zoom
- Long-press actions
- Pull-to-refresh variations

### Haptic Feedback
Tactile responses enhance interactions:
- Confirmation vibrations
- Error feedback
- Texture simulation
- Navigation cues

## Personalization at Scale

### AI-Powered Experiences
Machine learning enables:
- Predictive content
- Adaptive interfaces
- Smart recommendations
- Behavior-based layouts

### Contextual Adaptation
Apps that adapt to:
- Time of day
- Location
- User behavior patterns
- Device capabilities

## Micro-Interactions

### Delightful Details
Small animations that enhance UX:
- Button states
- Loading indicators
- Success celebrations
- Error feedback

### Purposeful Motion
Animation that serves a purpose:
- Guide attention
- Provide feedback
- Create continuity
- Express personality

## Voice and Audio UX

### Voice Integration
Voice is becoming standard:
- Voice search
- Voice commands
- Audio content
- Accessibility features

### Audio Feedback
Sound design for mobile:
- Notification sounds
- Confirmation audio
- Ambient sounds
- Audio branding

## Accessibility as Default

### Inclusive Design
Accessibility benefits everyone:
- Larger touch targets
- High contrast modes
- Screen reader optimization
- Reduced motion options

### Universal Design Principles
Design for all users:
- Clear navigation
- Readable typography
- Sufficient color contrast
- Keyboard accessibility

## Dark Mode and Theming

### System Integration
Apps that respect user preferences:
- Auto dark mode
- Custom themes
- Reduced eye strain
- Battery optimization

### Thoughtful Implementation
Dark mode done right:
- Adjusted color palettes
- Reduced contrast where appropriate
- Consistent across screens
- Toggle accessibility

## Minimalist Design

### Content-First Approach
Focus on what matters:
- Reduced chrome
- Clear hierarchy
- White space utilization
- Essential features only

### Progressive Disclosure
Show complexity gradually:
- Hidden menus
- Expandable sections
- Contextual actions
- Smart defaults

## Conclusion

Mobile UX in 2024 is about creating intuitive, personalized, and accessible experiences. By embracing these trends thoughtfully, you can build mobile experiences that delight users and stand out in a crowded marketplace.
    `,
    author: authors[2],
    category: "UI/UX Design",
    tags: ["Mobile UX", "Design Trends", "UX Design", "Mobile Apps"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-09-28",
    readTime: 8,
  },
  {
    id: "15",
    title: "Email Marketing Automation: A Complete Guide",
    slug: "email-marketing-automation-guide",
    excerpt: "Master email marketing automation to nurture leads, increase conversions, and build lasting customer relationships.",
    content: `
# Email Marketing Automation: A Complete Guide

Email marketing automation allows you to send targeted, timely messages to your subscribers without manual effort. When done right, it can significantly improve engagement and revenue.

## Understanding Email Automation

### What Is Email Automation?
Automated emails are triggered by:
- User actions (sign-ups, purchases)
- Time-based schedules
- Behavioral triggers
- Date-based events

### Benefits of Automation
- Consistent communication
- Personalized messaging
- Time savings
- Scalable engagement
- Measurable results

## Essential Automated Sequences

### Welcome Series
First impressions matter:
- Immediate welcome email
- Brand introduction
- Value proposition
- Onboarding steps
- Engagement prompt

### Abandoned Cart Sequence
Recover lost sales:
- Reminder after 1 hour
- Benefits reminder after 24 hours
- Urgency message after 48 hours
- Final offer after 72 hours

### Post-Purchase Sequence
Build loyalty and reviews:
- Order confirmation
- Shipping updates
- Delivery confirmation
- Usage tips
- Review request

### Re-engagement Campaign
Win back inactive subscribers:
- "We miss you" message
- Special offer
- Preference update
- Last chance email
- List cleanup

## Segmentation Strategies

### Demographic Segmentation
- Age and gender
- Location
- Job title/industry
- Company size

### Behavioral Segmentation
- Purchase history
- Email engagement
- Website activity
- Content preferences

### Lifecycle Segmentation
- New subscribers
- Active customers
- At-risk customers
- VIP customers

## Personalization Techniques

### Basic Personalization
- First name usage
- Company name
- Location-based content

### Advanced Personalization
- Product recommendations
- Dynamic content blocks
- Behavioral messaging
- Predictive content

## Testing and Optimization

### A/B Testing
Test one element at a time:
- Subject lines
- Send times
- CTAs
- Content length

### Key Metrics
Monitor these indicators:
- Open rate
- Click-through rate
- Conversion rate
- Unsubscribe rate
- Revenue per email

## Deliverability Best Practices

Ensure your emails reach the inbox:
- Clean email list regularly
- Use double opt-in
- Monitor bounce rates
- Avoid spam triggers
- Authenticate your domain (SPF, DKIM, DMARC)

## Conclusion

Email marketing automation is one of the highest-ROI marketing activities available. By implementing strategic automation sequences and continuously optimizing, you can build a powerful email program that nurtures relationships and drives revenue.
    `,
    author: authors[1],
    category: "Digital Marketing",
    tags: ["Email Marketing", "Automation", "Lead Nurturing", "Marketing"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-09-20",
    readTime: 11,
  },
  {
    id: "16",
    title: "Data Analytics: Turning Insights into Action",
    slug: "data-analytics-insights-action",
    excerpt: "Learn how to leverage data analytics to make informed decisions, optimize performance, and drive business growth.",
    content: `
# Data Analytics: Turning Insights into Action

Data is only valuable when it leads to better decisions. This guide explores how to effectively collect, analyze, and act on data to improve your business outcomes.

## Building a Data-Driven Culture

### Mindset Shift
Move from intuition to evidence:
- Question assumptions
- Test hypotheses
- Measure outcomes
- Iterate based on data

### Democratizing Data
Make data accessible:
- Self-service analytics tools
- Data literacy training
- Shared dashboards
- Regular reporting

## Key Analytics Frameworks

### AARRR (Pirate Metrics)
Measure your funnel:
- Acquisition: How do users find you?
- Activation: Do they have a great first experience?
- Retention: Do they come back?
- Revenue: How do you make money?
- Referral: Do they tell others?

### OKRs and KPIs
Align metrics with goals:
- Define clear objectives
- Set measurable key results
- Track leading indicators
- Review and adjust regularly

## Essential Analytics Tools

### Web Analytics
Understand user behavior:
- Google Analytics 4
- Adobe Analytics
- Mixpanel
- Amplitude

### Business Intelligence
Visualize and explore data:
- Tableau
- Power BI
- Looker
- Metabase

### Customer Analytics
Understand your customers:
- Customer lifetime value
- Cohort analysis
- Churn prediction
- Segmentation

## Data Collection Best Practices

### Quality Over Quantity
Focus on meaningful data:
- Define what you need to know
- Implement proper tracking
- Validate data accuracy
- Document data sources

### Privacy Compliance
Respect user privacy:
- Cookie consent
- Data minimization
- Retention policies
- GDPR/CCPA compliance

## From Analysis to Action

### Insight Generation
Turn data into insights:
- Ask the right questions
- Look for patterns and anomalies
- Consider context
- Validate findings

### Decision Making
Act on insights:
- Prioritize by impact
- Design experiments
- Implement changes
- Measure results

### Continuous Improvement
Create feedback loops:
- Regular analysis cycles
- Performance reviews
- Process optimization
- Learning and iteration

## Common Pitfalls

### Avoiding Analysis Paralysis
- Focus on actionable metrics
- Set decision deadlines
- Start with simple analyses
- Progress to complexity

### Correlation vs. Causation
- Don't assume cause from correlation
- Run controlled experiments
- Consider confounding variables
- Validate hypotheses

## Conclusion

Effective data analytics is about asking the right questions, finding meaningful answers, and taking action. By building a data-driven culture and implementing proper analytics practices, you can make decisions that lead to measurable business improvement.
    `,
    author: authors[3],
    category: "Business Strategy",
    tags: ["Data Analytics", "Business Intelligence", "Decision Making", "Growth"],
    image: "/images/blog/blog_image.png",
    publishedAt: "2024-09-15",
    readTime: 10,
  },
];

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getBlogPostsByAuthor(authorId: string): BlogPost[] {
  return blogPosts.filter((post) => post.author.id === authorId);
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find((author) => author.id === id);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((author) => author.name.toLowerCase() === name.toLowerCase());
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured).slice(0, 3);
}

export function getLatestPosts(limit: number = 6): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit);
}

export function getPopularPosts(limit: number = 5): BlogPost[] {
  return getLatestPosts(limit);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
