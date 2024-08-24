import React, { useEffect } from 'react';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        image: "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "This is a wonderful service that has helped our company grow immensely.",
    },
    {
        id: 2,
        name: "Jane Smith",
        image: "https://via.placeholder.com/100",
        description: "The team was professional and delivered the project on time. Highly recommended!",
    },
    {
        id: 3,
        name: "Michael Johnson",
        image: "https://via.placeholder.com/100",
        description: "Excellent service with great attention to detail. Very satisfied.",
    },
    {
        id: 4,
        name: "Emily Davis",
        image: "https://via.placeholder.com/100",
        description: "They went above and beyond our expectations. Outstanding work!",
    },
    {
        id: 5,
        name: "Chris Brown",
        image: "https://via.placeholder.com/100",
        description: "Very reliable and easy to work with. Will definitely use their services again.",
    },
    {
        id: 6,
        name: "Sarah Wilson",
        image: "https://via.placeholder.com/100",
        description: "Great experience from start to finish. The results speak for themselves.",
    },
    {
        id: 7,
        name: "David Lee",
        image: "https://via.placeholder.com/100",
        description: "Professional, efficient, and results-driven. Highly recommended!",
    },
    {
        id: 8,
        name: "Laura Martinez",
        image: "https://via.placeholder.com/100",
        description: "The team was communicative and delivered quality work. Very impressed!",
    },
    {
        id: 9,
        name: "James Taylor",
        image: "https://via.placeholder.com/100",
        description: "Our experience was great. The project was handled with professionalism.",
    },
    {
        id: 10,
        name: "Linda White",
        image: "https://via.placeholder.com/100",
        description: "They provided excellent service and were a pleasure to work with.",
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true, // Right to Left
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 200,
            easing: 'ease-in-out',
            delay: 100,
            once: true,
        });
    }, []);

    return (
        <> 
            <div className="container mx-auto px-4 py-10" data-aos="fade-up">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black text-center">
                    What Our Clients Said
                </h1>
                <p className="text-gray-600 mb-6 text-center">
                    Discover what our clients have to say. Real experiences, real satisfaction.
                </p>
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="px-3" data-aos="fade-up" data-aos-delay={testimonial.id * 100}>
                            <div className="bg-white p-6 rounded-lg shadow-lg border-y-2 border-x-2 shadow-gray-400">
                                <div className="flex items-center mb-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-800">{testimonial.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Testimonials;