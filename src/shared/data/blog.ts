import jobInterviewContent from "./job-interview-tips.md?raw";
export interface Blog {
  id: string;
  title: string;
  date: Date;
  views: number;
  imageUrl: string;
  excerpt: string;
  visited: string;
  content: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "What To Wear for A Job Interview",
    date: new Date("2025-08-07"),
    views: 349,
    imageUrl:
      "/image1.png",
    excerpt:
      "A hiring survey, involving over 100 recruiters, found that more than 60 admitted a candidate's outfit impacts their final decision.",
    visited: "Visited 1 day ago",
    content: jobInterviewContent,
  },
  {
    id: "2",
    title: "How to Ace Your Next Coding Interview",
    date: new Date("2025-09-15"),
    views: 512,
    imageUrl:
      "/image2.png",
    excerpt:
      "Preparing for a coding interview can be daunting. Here's how to structure your preparation and impress recruiters with both technical and soft skills.",
    visited: "Visited 3 days ago",
    content: jobInterviewContent,
  },
  {
    id: "3",
    title: "The Future of Remote Work in 2025",
    date: new Date("2025-07-30"),
    views: 280,
    imageUrl:
      "/image3.png",
    excerpt:
      "Remote work is here to stay — but how will technology, collaboration, and employee experience evolve in the next few years?",
    visited: "Visited 5 days ago",
    content: jobInterviewContent,
  },
  {
    id: "4",
    title: "10 Simple Tips to Improve Your Productivity",
    date: new Date("2025-08-25"),
    views: 875,
    imageUrl:
      "/image1.png",
    excerpt:
      "Feeling overwhelmed? These productivity strategies can help you focus better, get more done, and reduce burnout.",
    visited: "Visited 2 days ago",
    content: jobInterviewContent,
  },
  {
    id: "5",
    title: "The Power of Personal Branding in the Digital Age",
    date: new Date("2025-09-01"),
    views: 423,
    imageUrl:
      "/image2.png",
    excerpt:
      "Your personal brand can make or break your career online. Learn how to build a strong professional identity that stands out.",
    visited: "Visited 4 days ago",
    content: jobInterviewContent,
  },
  {
    id: "6",
    title: "Design Thinking: A Creative Approach to Problem Solving",
    date: new Date("2025-08-12"),
    views: 319,
    imageUrl:
      "/image3.png",
    excerpt:
      "Design thinking helps teams approach problems with empathy and innovation. Here’s how to apply it in your next project.",
    visited: "Visited 6 days ago",
    content: jobInterviewContent,
  },
  {
    id: "7",
    title: "Why Soft Skills Matter More Than Ever",
    date: new Date("2025-09-09"),
    views: 652,
    imageUrl:
      "/image1.png",
    excerpt:
      "Technical skills get you hired, but soft skills get you promoted. Discover why communication, empathy, and teamwork matter.",
    visited: "Visited 7 days ago",
    content: jobInterviewContent,
  },
  {
    id: "8",
    title: "Building Financial Discipline as a Young Professional",
    date: new Date("2025-08-15"),
    views: 391,
    imageUrl:
      "/image2.png",
    excerpt:
      "Your 20s are the perfect time to build strong financial habits. Here’s how to save, invest, and spend wisely.",
    visited: "Visited 1 week ago",
    content: jobInterviewContent,
  },
  {
    id: "9",
    title: "The Rise of AI in Everyday Life",
    date: new Date("2025-07-20"),
    views: 1042,
    imageUrl:
      "/images3.png",
    excerpt:
      "AI isn’t just for tech giants anymore. From healthcare to home automation, here’s how artificial intelligence is shaping our lives.",
    visited: "Visited 8 days ago",
    content: jobInterviewContent,
  },
  {
    id: "10",
    title: "How to Build Confidence Before Public Speaking",
    date: new Date("2025-09-11"),
    views: 478,
    imageUrl:
      "/images1.png",
    excerpt:
      "Speaking in front of people can be nerve-racking, but with these confidence-boosting techniques, you can master any stage.",
    visited: "Visited 9 days ago",
    content: jobInterviewContent,
  },
  {
    id: "11",
    title: "Mastering Time Management in a Busy World",
    date: new Date("2025-09-20"),
    views: 562,
    imageUrl:
      "/images2.png",
    excerpt:
      "Time is your most valuable resource. Learn practical ways to manage it effectively and make every hour count.",
    visited: "Visited 10 days ago",
    content: jobInterviewContent,
  },
  {
    id: "12",
    title: "Why Continuous Learning Is the Key to Career Growth",
    date: new Date("2025-10-01"),
    views: 694,
    imageUrl:
      "/images3.png",
    excerpt:
      "The modern workplace is evolving rapidly — continuous learning keeps you relevant, adaptable, and ahead of the curve.",
    visited: "Visited 12 days ago",
    content: jobInterviewContent,
  },
];


