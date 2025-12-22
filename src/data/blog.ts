export interface Author {
  id: string;
  name: string;
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

// Helper function to get category details by name or slug
export function getCategoryDetails(identifier: string): CategoryDetails | undefined {
  return categoryDetails.find(
    (cat) => cat.name.toLowerCase() === identifier.toLowerCase() || cat.slug === identifier.toLowerCase()
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
    image: "/images/blog/blog-1.jpg",
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
    image: "/images/blog/blog-2.jpg",
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
    image: "/images/blog/blog-3.jpg",
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
    image: "/images/blog/blog-4.jpg",
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
    image: "/images/blog/blog-5.jpg",
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
    image: "/images/blog/blog-6.jpg",
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
    image: "/images/blog/blog-7.jpg",
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
    image: "/images/blog/blog-8.jpg",
    publishedAt: "2024-11-05",
    readTime: 8,
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
