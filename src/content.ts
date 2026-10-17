import "@fontsource/chivo/900.css";
import type { Site } from "./lib";

export const SITE: Site = {
  name: "Backyard 82",
  sub: { en: "Tandoor, Chinese & thalis · Vatika Town Square", hi: "तंदूर, चाइनीज़ और थाली · वाटिका टाउन स्क्वेयर" },
  banner: { en: "Free delivery within 5 km on orders above ₹300 · closed Tuesdays", hi: "5 किमी तक ₹300 से ऊपर के ऑर्डर पर फ़्री डिलीवरी · मंगलवार बंद" },
  phone: "918447489784",
  phoneDisplay: "+91 84474 89784",
  lat: 28.3888035,
  lon: 76.9688043,
  hours: [[11, 23], [11, 23], [11, 11], [11, 23], [11, 23], [11, 23], [11, 23]],
  theme: {
    dark: true,
    bg: "#0f1110",
    bg2: "#171a18",
    panel: "#1c201d",
    ink: "#f1f3ee",
    ink2: "#b6bbb2",
    ink3: "#80867d",
    line: "#2a2f2b",
    accent: "#d9f24a",
    onAccent: "#141a03",
    display: "Chivo",
    weight: 900,
    upper: true,
  },
  scene: "lanterns",
  align: "left",
  hero: {
    title: [
      { en: "Malai chaap. Chicken 65.", hi: "मलाई चाप। चिकन 65।" },
      { en: "Shaandaar, every week.", hi: "हर हफ़्ते शानदार।" },
    ],
    proof: {
      en: "4.8 on Google from 82 reviews. Tandoori, Chinese and veg thalis in Vatika Town Square, Sector 82, with free delivery within 5 km on orders above ₹300.",
      hi: "गूगल पर 82 रिव्यू से 4.8। तंदूरी, चाइनीज़ और वेज थाली, वाटिका टाउन स्क्वेयर, सेक्टर 82 में। 5 किमी तक ₹300 से ऊपर के ऑर्डर पर फ़्री डिलीवरी।",
    },
    fallback: "/img/p3.jpg",
    slides: ["/img/p3.jpg", "/img/p1.jpg", "/img/p11.jpg"],
  },
  marquee: ["Malai Chaap", "Chicken 65", "Fried Rice", "Spicy Noodles", "Tandoori", "Veg Thali", "Free Delivery 5 km"],
  dishes: {
    title: { en: "The plates that bring people back", hi: "वो प्लेटें जिनके लिए लोग लौटते हैं" },
    body: { en: "Quoted from Google reviews.", hi: "गूगल रिव्यू से।" },
    layout: "list",
    items: [
      { name: { en: "Malai Chaap", hi: "मलाई चाप" }, quote: "Now i m here almost daily bcos of its new yummy tandoori menu I ordered malai chaap today It was Shaandaar jabardast zindabad 👌 Do visit once", img: "/img/p5.jpg" },
      { name: { en: "Chicken 65 & Fried Rice", hi: "चिकन 65 और फ़्राइड राइस" }, quote: "Had great dinner after long time at Backyard 82.. Chicken 65 is must to try out .. along with Fried rice .. Great job team .. keep it up !!", img: "/img/p3.jpg" },
      { name: { en: "From the tandoor", hi: "तंदूर से" }, quote: "The food preparation is too good...spices used in balanced proportion... We visit every week..", img: "/img/p6.jpg" },
    ],
  },
  gallery: {
    title: { en: "Inside Backyard 82", hi: "बैकयार्ड 82 के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p1.jpg", alt: "Dining room with red seats", wide: true },
      { src: "/img/p11.jpg", alt: "Malai tikka with salad" },
      { src: "/img/p13.jpg", alt: "Dining room decorated with balloons" },
      { src: "/img/p6.jpg", alt: "Tandoori starter with mint chutney" },
      { src: "/img/p8.jpg", alt: "Guests outside Backyard 82", wide: true },
    ],
  },
  feature: {
    kind: "hosts",
    title: { en: "Hosted by Mr Bablu and team", hi: "मिस्टर बबलू और टीम की मेहमाननवाज़ी" },
    body: { en: "A cozy room in Vatika Town Square. Here's what guests say about the welcome.", hi: "वाटिका टाउन स्क्वेयर में एक आरामदायक जगह। मेहमान स्वागत के बारे में क्या कहते हैं, पढ़िए।" },
    img: "/img/p4.jpg",
    hosts: [
      { name: "Mr Bablu", quote: "Very delicious food😋… and also hospitality was given by Mr Bablu" },
      { name: "The kitchen", quote: "Have good experience.... Spicy  noodles n chicken are delicious..." },
      { name: "The room", quote: "cozy atmosphere,#delicious food# very good service# totally recommendable to friends and family" },
    ],
  },
  reviews: {
    title: { en: "78 of 82 reviews are four or five stars", hi: "82 में से 78 रिव्यू चार या पांच स्टार" },
    rating: 4.8,
    dist: [74, 4, 2, 0, 2],
    quotes: [
      { quote: "Best food awesome service Malai chaap👌👌👌🥳", stars: 5 },
      { quote: "Food was very tasty and quantity was very much.  Liked the hospitality an dtge ambience also.", stars: 5 },
      { quote: "Ordered veg thali. Food was tasty and environment is nice", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Vatika Town Square, Sector 82", hi: "वाटिका टाउन स्क्वेयर, सेक्टर 82" },
    img: "/img/p7.jpg",
    alt: "Backyard 82 entrance",
    address: { en: "B-019 Vatika Town Square, Sector 82, Gurugram 122012", hi: "B-019 वाटिका टाउन स्क्वेयर, सेक्टर 82, गुरुग्राम 122012" },
    note: { en: "11 AM to 4 PM and 6 PM to 11 PM. Closed Tuesday.", hi: "सुबह 11 से शाम 4 और शाम 6 से रात 11 तक। मंगलवार बंद।" },
  },
  build: {
    title: { en: "Order in or book a table", hi: "ऑर्डर कीजिए या टेबल बुक कीजिए" },
    body: { en: "Pick delivery or dine-in, tap your dishes and the time. It goes to WhatsApp exactly as you see it.", hi: "डिलीवरी या डाइन-इन चुनें, डिश और समय टैप करें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: {
      label: { en: "How", hi: "कैसे" },
      options: [
        { name: { en: "Delivery", hi: "डिलीवरी" }, note: { en: "Free within 5 km above ₹300", hi: "5 किमी तक ₹300 से ऊपर फ़्री" } },
        { name: { en: "Dine-in", hi: "डाइन-इन" } },
        { name: { en: "Takeaway", hi: "टेकअवे" } },
      ],
    },
    items: [
      { en: "Malai Chaap", hi: "मलाई चाप" },
      { en: "Chicken 65", hi: "चिकन 65" },
      { en: "Fried Rice", hi: "फ़्राइड राइस" },
      { en: "Spicy Noodles", hi: "स्पाइसी नूडल्स" },
      { en: "Veg Thali", hi: "वेज थाली" },
    ],
    people: true,
    when: true,
    hello: { en: "Hi Backyard 82, I'd like:", hi: "नमस्ते Backyard 82, मुझे चाहिए:" },
  },
  waHello: {
    en: "Hi Backyard 82, I'd like to order. Delivery or dine-in: , items: , time: ",
    hi: "नमस्ते Backyard 82, मुझे ऑर्डर देना है। डिलीवरी या डाइन-इन: , आइटम: , समय: ",
  },
  order: ["dishes", "feature", "build", "gallery", "reviews", "visit"],
};
