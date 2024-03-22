import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '10k+', label: 'Brands' },
    { value: '5000+', label: 'Shops' },
    { value: '2500k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Adidas Ultraboost 22",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Adidas Yeezy Boost 350 V3",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Adidas NMD R1",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Adidas Superstar",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Quick Delivery",
        subtext: "Get your orders delivered swiftly with our express shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Safe Transactions",
        subtext: "Shop securely with our trusted payment methods and robust data encryption."
    },
    {
        imgURL: support,
        label: "Customer Assistance",
        subtext: "Our dedicated support team is available round-the-clock to assist you with any queries."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Yusuf Khan',
        rating: 4.5,
        feedback: "Great product, exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Aisha Ahmed',
        rating: 4.5,
        feedback: "Fantastic product, exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Adidas Ultraboost 22", link: "/" },
            { name: "Adidas Yeezy Boost 350 V3", link: "/" },
            { name: "Adidas NMD R1", link: "/" },
            { name: "Adidas Superstar", link: "/" },
            { name: "Adidas Waffle Racer", link: "/" },
            { name: "Adudas Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Contact Us",
        links: [
            { name: "mohammadsaqlain253@gmail.com", link: "mailto:mohammadsaqlain253@gmail.com" },
            { name: "+923498725789", link: "tel:+923498725789" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "Facebook logo" },
    { src: twitter, alt: "Twitter logo" },
    { src: instagram, alt: "Instagram logo" },
];
