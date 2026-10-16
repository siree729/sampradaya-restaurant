/**
 * Official Restaurant Information for Sri Sampradaya Family Restaurant and Banquet Hall
 * Sourced directly from development agreement and restaurant menu.
 */

export const restaurantData = {
  name: "Sri Sampradaya Family Restaurant and Banquet Hall",
  brandName: "Sri Sampradaya",
  teluguHindiName: "श्री Sampradaya",
  tagline: "A Taste of Tradition, A Feast of Flavours",
  subtitle: "Authentic Indian, Tandoori, Biryani & Chinese Delicacies with Luxury Family Cabins and Banquet Celebrations in Jagtial.",
  
  owner: "Sheela Srinivas",
  gstNumber: "36FNFS9632N1Z1",
  
  contact: {
    phone: "7207076170",
    phoneDisplay: "+91 72070 76170",
    phoneTel: "tel:7207076170",
    whatsappNumber: "917207076170",
    whatsappLink: "https://wa.me/917207076170?text=Hello%20Sri%20Sampradaya%20Restaurant,%20I%20would%20like%20to%20enquire%20about%20your%20menu%20and%20services.",
    banquetWhatsappLink: "https://wa.me/917207076170?text=Hello%20Sri%20Sampradaya%20Banquet%20Hall,%20I%20would%20like%20to%20enquire%20about%20booking%20an%20event.",
    email: "contact@srisampradaya.com", // client confirmation placeholder
  },
  
  address: {
    line1: "New Bus Stand Chowrasta, Karimnagar Road",
    landmark: "Beside Water Tank, Vani Nagar",
    city: "Jagtial",
    state: "Telangana",
    pincode: "505327",
    fullAddress: "New Bus Stand Chowrasta, Karimnagar Road, beside Water Tank, Vani Nagar, Jagtial, Telangana 505327",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Sri+Sampradaya+Family+Restaurant+Jagtial+Telangana+505327",
    googleMapsEmbedUrl: "https://www.google.com/maps?q=18.7958,78.9119&hl=en&z=15&output=embed"
  },
  
  // NOTE: As per instructions, opening hours require owner confirmation
  timings: {
    status: "To be confirmed by restaurant owner",
    display: "Open Daily: 11:30 AM – 11:00 PM (Awaiting Owner Confirmation)",
    lunch: "11:30 AM – 4:00 PM",
    dinner: "7:00 PM – 11:00 PM"
  },
  
  highlights: [
    {
      title: "Family First Atmosphere",
      description: "Dedicated private family dining cabins with plush tufted sofa seating designed for comfort and privacy."
    },
    {
      title: "Royal Dum Biryanis",
      description: "Signature biryanis prepared with fragrant basmati, hand-ground spices, available in single, family, and jumbo packs."
    },
    {
      title: "Grand Banquet Hall",
      description: "Spacious event venue suitable for birthdays, corporate conferences, family gatherings, and reception celebrations."
    },
    {
      title: "Outdoor Catering",
      description: "Full-service outdoor catering setups with live buffet counters and experienced hospitality team."
    }
  ],
  
  policies: [
    "Please allow 15–25 minutes for fresh preparation of every order.",
    "Private dining cabins are reserved exclusively for families.",
    "Home delivery and outdoor catering services are undertaken.",
    "Strictly prohibited: Outside food, smoking, and alcohol.",
    "Once placed, food orders cannot be cancelled.",
    "Management is not responsible for personal belongings.",
    "All dishes are subject to daily ingredient availability.",
    "Applicable government taxes extra as per menu guidelines."
  ],
  
  features: {
    dineIn: true,
    takeaway: true,
    homeDelivery: true,
    outdoorCatering: true,
    banquetHall: true,
    familyCabins: true,
    pureVegAndNonVegSeparation: true
  }
};
