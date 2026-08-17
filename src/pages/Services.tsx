import { useState } from 'react'
import { serviceDetails, type ServiceDetail } from '../data/projectData'

function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null)

  const openModal = (service: ServiceDetail) => setSelectedService(service)
  const closeModal = () => setSelectedService(null)

  return (
    <section className="Services" id="Services">
      <h2 className="section-title">Services</h2>
      <p className="section-subtitle">Here’s what I can do for you.</p>

      <div className="services-grid">
        {serviceDetails.map((service, index) => (
          <div key={`${service.title}-${index}`} className="service-card" onClick={() => openModal(service)}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="price">{service.price}</span>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>

            <div className="modal-header">
              <h3 className="modal-title">{selectedService.title}</h3>
              <span className="modal-price">{selectedService.price}</span>
            </div>

            <div className="modal-divider" />
            <div className="modal-body-scroll">
              <div className="modal-section">
                <h4>Overview</h4>
                <p className="modal-description">{selectedService.description}</p>
              </div>

              <div className="modal-section">
                <h4>What’s Included</h4>
                {selectedService.fullDetails.split('\n').map((line, index) => {
                  const isListItem = line.trim().startsWith('-') || line.trim().startsWith('•')
                  const cleanLine = isListItem ? line.trim().slice(1).trim() : line
                  const formattedLine = cleanLine.replace(/<([^>]+)>/g, (_, match: string) => {
                    return `<span class="price-highlight">${match}</span>`
                  })

                  return (
                    <p
                      key={`${line}-${index}`}
                      className={`modal-line ${isListItem ? 'modal-list-item' : ''}`}
                      dangerouslySetInnerHTML={{ __html: formattedLine }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services
