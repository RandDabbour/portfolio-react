import React from 'react';
import useServices from '../../Hooks/useServices';
import './Services.css';

const Services = () => {
  const { services, loading, error } = useServices();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading services: {error.message}</p>;
  }

  return (
    <section id="services">
      <p className="section-title">Services</p>
      <div className="card-container">
        {services.map((service, index) => (
          <div key={index} className="card">
            <p>
              <span className="material-symbols-outlined">{service.icon}</span>
            </p>
            <p className="service-card-title">{service.title}</p>
            <p className="service-card-description">{service.description}</p>
            <a href={service.link}>More Details</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
