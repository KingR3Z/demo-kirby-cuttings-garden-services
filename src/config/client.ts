export const client = {
  // Business Details
  name: "Kirby Cuttings Garden Services",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bristol.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07791 067838",
  email: "",
  website: "",

  // Location
  address: "Bristol",
  city: "Bristol",
  county: "",
  postcode: "",
  basedIn: "Bristol",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Amy Yip", rating: 5, text: "l've been a customer of Kirby Cuttings for many years, and they've helped with multiple jobs. Thanks Callum for installing a Durapost fence in at the last minute!. The tenants are over the moon with how it turned out and are loving their privacy again! The difference is night and day!", date: "a month ago" },
    { name: "Su Proud", rating: 5, text: "Our bespoke durapost fence and gate has been built to a very high standard of workmanship and looks lovely.  It was exactly what we wanted! Thanks Callum very much.  We would recommend your business.", date: "4 months ago" },
    { name: "Paul Reed", rating: 5, text: "Very happy with our new Durapost fence installed by Callum & Marc. Both were friendly, professional & clearly take pride in their work which is great to see. We will definitely be in touch for any future garden works.", date: "4 months ago" },
    { name: "Karen Williams", rating: 5, text: "Very impressed with the service and professionalism provided by Callum.  The standard of workmanship was exemplary and I would have no hesitation in recommending them.", date: "5 months ago" },
    { name: "Ray Stinchcombe", rating: 5, text: "Callum installed a Durapost fence into my front garden he did it in quick time while keeping it very clean! Great work highly recommend", date: "7 months ago" },
    { name: "Helen Simms", rating: 5, text: "We’ve used Callum a couple of times now for a driveway and custom built double gates, he’s now fitted custom built secure gate for my father. Very reliable, friendly and always provides a quality finish. Would use again and would highly recommend.", date: "7 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Kirby Cuttings Garden Services | Landscaper in Bristol",
    description: "Professional landscaper in Bristol. 5.0-star rated on Google. Call for a free quote.",
  },
};
