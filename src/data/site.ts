import heroImage from "@/assets/rural-camps-hero.jpg";
import koraputImage from "@/assets/koraput-hills.jpg";
import ramachandiImage from "@/assets/ramachandi-coast.jpg";
import rentCampImage from "@/assets/rent-camp-sequence.jpg";

export type ExperienceSlug = "camp" | "rent-a-camp" | "tour" | "rural-stay";
export type DestinationStatus = "live" | "upcoming" | "planned";

export interface Destination {
  slug: "ramachandi" | "koraput";
  name: string;
  region: string;
  status: DestinationStatus;
  summary: string;
  experiences: ExperienceSlug[];
  highlights: string[];
  image: string;
  bookingEnabled: boolean;
}

export const media = {
  hero: heroImage,
  ramachandi: ramachandiImage,
  koraput: koraputImage,
  rentCamp: rentCampImage,
} as const;

export const destinations: Destination[] = [
  {
    slug: "ramachandi",
    name: "Ramachandi",
    region: "Puri–Konark Marine Drive",
    status: "live",
    summary: "Coastal camping and outdoor nights on the Puri–Konark side.",
    experiences: ["camp"],
    highlights: ["Coastal camping", "Group nights", "Outdoor stay"],
    image: ramachandiImage,
    bookingEnabled: true,
  },
  {
    slug: "koraput",
    name: "Koraput",
    region: "Eastern Ghats, Odisha",
    status: "live",
    summary: "Hills, valleys, camping, rural stays and curated journeys.",
    experiences: ["camp", "rent-a-camp", "tour", "rural-stay"],
    highlights: ["Talamali", "Deomali", "Duduma", "Gupteswar", "Kolab"],
    image: koraputImage,
    bookingEnabled: true,
  },
];

export const experiences = [
  {
    slug: "camp",
    name: "Camp With Us",
    description: "A managed outdoor night, made easy.",
    href: "/destinations",
    image: ramachandiImage,
  },
  {
    slug: "rent-a-camp",
    name: "Rent A Camp",
    description: "Your place. Our portable camp setup.",
    href: "/rent-a-camp",
    image: rentCampImage,
  },
  {
    slug: "tour",
    name: "Explore With Us",
    description: "Roads, waterfalls and highland journeys.",
    href: "/tours",
    image: koraputImage,
  },
  {
    slug: "rural-stay",
    name: "Rural Stay",
    description: "Stay closer to the place and its rhythm.",
    href: "/rural-stay",
    image: heroImage,
  },
] as const;

export const koraputStops = ["Talamali", "Deomali", "Duduma", "Gupteswar", "Kolab"] as const;

export const tour = {
  slug: "koraput-2-day",
  name: "Koraput 2-Day Journey",
  region: "Koraput, Odisha",
  durationLabel: "2 days",
  status: "live" as const,
  summary: "A compact road journey through Koraput's highlands, waterfalls and sacred landscapes.",
  stops: koraputStops.map((name, index) => ({ name, order: index + 1, day: index < 2 ? 1 : 2 })),
  price: null,
  bookingEnabled: true,
};

export const faqs = [
  {
    group: "Camping",
    question: "Where can I camp with Rural Camps?",
    answer:
      "Ramachandi and Koraput are the current destination hubs. The exact experience depends on date, conditions and confirmation.",
  },
  {
    group: "Rent A Camp",
    question: "Can you set up a camp anywhere?",
    answer:
      "Every requested location is checked for access, suitability and feasibility before a setup is confirmed.",
  },
  {
    group: "Tours",
    question: "Is the Koraput itinerary fixed?",
    answer:
      "The 2-day journey provides the route structure. Final stops and timing are confirmed directly for your travel date.",
  },
  {
    group: "Rural Stay",
    question: "Is Rural Stay available now?",
    answer:
      "Rural Stay enquiries are welcome, but the exact accommodation and operating status must be confirmed before travel.",
  },
  {
    group: "Payments",
    question: "How much does an experience cost?",
    answer:
      "Current pricing is shared after your destination, date, group size and requirements are confirmed.",
  },
  {
    group: "Weather",
    question: "What happens if weather changes?",
    answer:
      "Outdoor plans depend on conditions. Contact Rural Camps for the current weather and rescheduling guidance before travelling.",
  },
  {
    group: "Policies",
    question: "Where can I find the current policies?",
    answer:
      "Cancellation, ID, check-in and site-specific policies are shared during confirmation. They are not yet published on this website.",
  },
] as const;
