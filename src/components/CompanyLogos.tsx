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
    logo: '/images/companies/invoice-cloud-logo.svg',
    alt: 'Invoice Cloud logo'
  },
  {
    name: 'Verizon Telecommunications',
    logo: '/images/companies/verizon-logo.svg',
    alt: 'Verizon Telecommunication Inc logo'
  },
  {
    name: 'Ally Financial',
    logo: '/images/companies/Ally.svg',
    alt: 'Ally Banking and Finance logo'
  },
  {
    name: 'Humana Health Insurance',
    logo: '/images/companies/humana-logos.svg',
    alt: 'Humana Inc logo'
  },
  {
    name: 'RXO Logistics',
    logo: '/images/companies/coyote-logistics-logo.svg',
    alt: 'Coyote Logistics logo'
  }
];

const CompanyLogos: React.FC = () => {
  return (
    <section className="company-logos-section">
      <div className="container">
        <div className="logos-container">
          <div className="section-header">Partnered with</div>
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