import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-gray-400 py-8 h-screen">
      <motion.div 
        className="container mx-auto px-4 flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4">About RentKaro</h2>
        <p className="text-lg mb-6">
          Welcome to RentKaro, the innovative platform that revolutionizes the way you find PG accommodations. Whether you're a college student or a working professional, we're here to simplify your search and enhance your living experience.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Walking Innovation</h3>
        <p className="text-lg mb-6">
          1.At RentKaro, we believe in continuous innovation to provide you with the best possible service. Our walking innovation approach ensures that we're always exploring new ideas and technologies to enhance our platform and meet your evolving needs.<br></br>
          <br></br>
         2. Exchange of Agreement Period: Users can exchange their agreement period with others, enabling flexibility in rental durations and accommodating situations where tenants need to leave earlier or extend their stay.

        </p>
        <h3 className="text-2xl font-semibold mb-2">Unique Features</h3>
        <motion.ul 
          className="list-disc pl-6 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <li>Roommate Matching: Our platform facilitates roommate matching based on various criteria like college student or working professionals, including lifestyle preferences, interests, and habits, to ensure compatibility and a positive living experience.</li>
          <li>Mediation Services for Conflict Resolution: We provide mediation services to help resolve conflicts between roommates, ensuring a harmonious living environment.</li>
          <li>Personalized Recommendations: Utilizing advanced algorithms, we offer personalized roommate recommendations tailored to each user's preferences and requirements.</li>
          <li>Enhanced Safety Measures: We prioritize the safety and security of our users by implementing user verification, background checks, and secure messaging systems.</li>
        </motion.ul>
        <h3 className="text-2xl font-semibold mb-2">Our Commitment to Safety</h3>
        <p className="text-lg mb-6">
          Your safety is our top priority. We have robust safety measures in place, including stringent verification processes, background checks, and secure messaging systems, to ensure a secure environment for finding roommates and shared accommodations.
        </p>
        <h3 className="text-2xl font-semibold mb-2">How RentKaro Solves Problems</h3>
        <p className="text-lg mb-6">
          RentKaro addresses the challenges faced by college students when searching for PG accommodations, such as finding compatible roommates, resolving conflicts, and ensuring safety. By offering innovative features and personalized services, we streamline the process and provide a reliable solution for students seeking shared living arrangements.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
        <p className="text-lg">
          Have questions or feedback? We'd love to hear from you! Contact us at <a href="mailto:contact@rentkaro.com" className="text-blue-500">customersupport@rentkaro.com</a>.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
