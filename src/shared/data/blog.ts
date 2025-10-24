export interface Blog {
  id: number;
  title: string;
  date: Date;
  views: number;
  imageUrl: string;
  excerpt: string;
  visited: string;
}


export const blogs: Blog[] = [
  {
    id: 1,
    title: "What To Wear for A Job Interview",
    date: new Date("2025-08-07"),
    views: 349,
    imageUrl:
      "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg",
    excerpt:
      "A hiring survey, involving several recruiters, numbers over 100, had more than 6 of them admitting that a candidate’s outfit is part of the attribute that impacts their final decision.",
    visited: "Visited 1 day ago",
  },
  {
    id: 2,
    title: "How to Ace Your Next Coding Interview",
    date: new Date("2025-09-15"),
    views: 512,
    imageUrl:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    excerpt:
      "Preparing for a coding interview can be daunting. Here’s how to structure your preparation and impress recruiters with both technical and soft skills.",
    visited: "Visited 3 days ago",
  },
  {
    id: 3,
    title: "The Psychology of First Impressions",
    date: new Date("2025-10-03"),
    views: 289,
    imageUrl:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    excerpt:
      "Your first impression can make or break a professional relationship. Learn how to convey confidence, competence, and warmth in just a few seconds.",
    visited: "Visited 5 days ago",
  },
];
