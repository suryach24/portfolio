import React from 'react';
import '../styles/CompanyLogos.css';

interface CompanyLogo {
  name: string;
  logo: string;
  alt: string;
}

const companyLogos: CompanyLogo[] = [
  {
    name: 'Invoice Cloud',
    logo: '/images/companies/InvoiceCloud.jpg',
    alt: 'Invoice Cloud logo'
  },
  {
    name: 'Verizon',
    logo: '/images/companies/verizon-logo.svg',
    alt: 'Verizon Telecommunication Inc logo'
  },
  {
    name: 'Ally',
    logo: '/images/companies/Ally.svg',
    alt: 'Ally Banking and Finance logo'
  },
  {
    name: 'Humana',
    logo: '/images/companies/humana-logos.svg',
    alt: 'Humana Inc logo'
  },
  {
    name: 'Coyote Logistics',
    logo: '/images/companies/coyote-logistics-logo.svg',
    alt: 'Coyote Logistics logo'
  }
];

const CompanyLogos: React.FC = () => {
  return (
    <section className="company-logos-section">
      <div className="container">
        <h3 className="section-title">Companies I've Worked With</h3>
        <div className="logos-container">
          <div className="logos-track">
            {/* First set of logos */}
            {companyLogos.map((company, index) => (
              <div className="logo-item" key={`logo-${index}`}>
                <img src={company.logo} alt={company.alt} />
                <span className="company-name">{company.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {companyLogos.map((company, index) => (
              <div className="logo-item" key={`logo-dup-${index}`}>
                <img src={company.logo} alt={company.alt} />
                <span className="company-name">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos; 