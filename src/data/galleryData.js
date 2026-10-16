/**
 * Gallery data with authentic photographs from Sri Sampradaya Family Restaurant & Banquet Hall
 */

import exteriorNight from '../assets/restaurant/hero_exterior_night.png';
import signboardLights from '../assets/restaurant/signboard_illuminated.png';
import interiorBooths from '../assets/restaurant/interior_booth_dining.png';
import interiorHall from '../assets/restaurant/interior_luxury_hall.png';
import familyCabins from '../assets/restaurant/interior_family_cabins.png';
import foodBiryani from '../assets/restaurant/food_royal_biryani.png';
import foodSundae from '../assets/restaurant/food_strawberry_sundae.png';
import foodNoodles from '../assets/restaurant/food_manchurian_noodles.png';
import banquetConf from '../assets/restaurant/banquet_conference_event.png';
import banquetDining from '../assets/restaurant/banquet_dining_setup.png';
import banquetTables from '../assets/restaurant/banquet_round_tables.png';
import banquetBuffet from '../assets/restaurant/banquet_buffet_counter.png';

export const galleryCategories = [
  { id: 'all', label: 'All Photos' },
  { id: 'exterior', label: 'Exterior & Signboard' },
  { id: 'interior', label: 'Restaurant Interiors' },
  { id: 'food', label: 'Food Highlights' },
  { id: 'banquet', label: 'Banquet & Catering' }
];

export const galleryImages = [
  {
    id: 'gal-1',
    src: exteriorNight,
    category: 'exterior',
    title: 'Restaurant Facade & Night Illumination',
    subtitle: 'Grand exterior view on Karimnagar Road, Jagtial with festive illumination',
    alt: 'Sri Sampradaya Family Restaurant exterior facade illuminated at night'
  },
  {
    id: 'gal-2',
    src: signboardLights,
    category: 'exterior',
    title: 'Illuminated Brand Signboard',
    subtitle: 'Warm and welcoming entry signboard adorned with golden fairy lights',
    alt: 'Sri Sampradaya Family Restaurant illuminated neon signboard'
  },
  {
    id: 'gal-3',
    src: familyCabins,
    category: 'interior',
    title: 'Private Family Dining Cabins',
    subtitle: 'Exclusive family dining spaces framed by fluted glass acoustic partitions',
    alt: 'Private family cabins with comfortable luxury seating at Sri Sampradaya'
  },
  {
    id: 'gal-4',
    src: interiorBooths,
    category: 'interior',
    title: 'Plush Booth Dining Area',
    subtitle: 'Ergonomic high-back tufted booth sofas for comfortable group & family meals',
    alt: 'Spacious restaurant booth sofa seating arrangements'
  },
  {
    id: 'gal-5',
    src: interiorHall,
    category: 'interior',
    title: 'Luxury Dining Hall',
    subtitle: 'Regal carved wooden dining chairs with pristine marble-finish tables',
    alt: 'Main dining hall with royal cushioned chairs at Sri Sampradaya'
  },
  {
    id: 'gal-6',
    src: foodBiryani,
    category: 'food',
    title: 'Signature Royal Dum Biryani',
    subtitle: 'Slow-cooked aromatic basmati rice layered with fragrant whole spices & fresh mint',
    alt: 'Authentic royal chicken and mutton dum biryani served on a traditional platter'
  },
  {
    id: 'gal-7',
    src: foodNoodles,
    category: 'food',
    title: 'Wok-Tossed Manchurian Noodles',
    subtitle: 'Sizzling Indo-Chinese noodles served with golden vegetable and chicken manchurian',
    alt: 'Savory Chinese noodles bowl with crispy Manchurian bites'
  },
  {
    id: 'gal-8',
    src: foodSundae,
    category: 'food',
    title: 'Strawberry Ice Cream Sundae',
    subtitle: 'Creamy artisanal strawberry scoops garnished with crispy wafer sticks & sprinkles',
    alt: 'Chilled strawberry ice cream sundae in glassware with wafer rolls'
  },
  {
    id: 'gal-9',
    src: banquetConf,
    category: 'banquet',
    title: 'Grand Banquet Event Hall',
    subtitle: 'Air-conditioned hall with chandeliers, audio-visual screen and stage setup',
    alt: 'Banquet hall arranged for celebratory seminars and corporate events'
  },
  {
    id: 'gal-10',
    src: banquetDining,
    category: 'banquet',
    title: 'Banquet Dining Table Setup',
    subtitle: 'Round guest tables dressed in traditional gold & deep maroon frills',
    alt: 'Party banquet hall round dining tables with matching decor'
  },
  {
    id: 'gal-11',
    src: banquetTables,
    category: 'banquet',
    title: 'Celebration Seating Arrangements',
    subtitle: 'Elegantly spaced banquet round tables with floral pattern dining chairs',
    alt: 'Banquet celebration seating layout for weddings and birthday functions'
  },
  {
    id: 'gal-12',
    src: banquetBuffet,
    category: 'banquet',
    title: 'Live Catering Buffet Spread',
    subtitle: 'Stainless steel chafing dishes with dedicated catering staff in uniform',
    alt: 'Grand buffet counter setup for banquet hall functions and outdoor catering'
  }
];
