// Target date — wedding ceremony: June 20, 2026 at 3 PM
export const weddingDate = new Date(2026, 5, 20, 15, 0, 0); // 2026-06-20 3:00 PM

export const content = {
  names: { bride: "Kristyna", groom: "Roman" },

  frontCover: {
    intro: "Please join us for a",
    title: "Double Shower",
    honoring: ["Honoring our love", "& our growing family"],
    closing: "We can't wait to celebrate with you",
  },

  welcome: {
    title: "Welcome",
    body:
      "We are so excited to celebrate our love and the newest addition to our family with you.",
    thanks:
      "Thank you for being a part of this special chapter in our lives.",
  },

  events: {
    title: "Event Details",
    tagline: "Two celebrations.",
    taglineEm: "One beautiful day.",
    wedding: {
      label: "Wedding Ceremony",
      date: "Saturday, June 20th, 2026",
      time: "1:30 PM",
      venue: "St. Clement's Parish",
      address: "745 Duke Street, Cambridge, Ontario N3H 3T7",
      mapUrl:
        "https://maps.google.com/?q=St+Clement's+Parish+745+Duke+St+Cambridge+Ontario",
    },
    babyShower: {
      label: "Reception & Gender Reveal",
      date: "Saturday, June 20th, 2026",
      time: "4:00 PM",
      venue: "1306 Mary Avenue,",
      address: "Cambridge, ON, N3H 4N9",
      mapUrl: "https://maps.google.com",
    },
  },

  location: {
    title: "Location",
  },

  rsvp: {
    title: "RSVP",
    deadline: "Kindly RSVP by May 20th, 2026",
    namePlaceholder: "Your name",
    prompt: "I will be attending the…",
    options: [
      { id: "ceremony", label: "Wedding Ceremony" },
      { id: "gender", label: "Gender Reveal" },
      { id: "both", label: "Both" },
      { id: "none", label: "Sadly can't attend" },
    ] as const,
    footer: "We look forward to celebrating with you.",
  },

  thankYou: {
    title: "Thank You",
    lines: [
      "Thank you for being a part of this special day.",
      "Your love and support mean the world to us.",
    ],
    em: "We can't wait to celebrate together.",
  },

  footer: { closing: "with love", line: "Krystyna & Roman" },
};
