import { useEffect, useState } from 'react'
import {
  serviceDetails,
  type ServiceDetail,
} from '../data/projectData'

function Services() {
  const [selectedService, setSelectedService] =
    useState<ServiceDetail | null>(null)

  /* Lock main page scrolling while modal is open */
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedService])

  /* Open modal */
  const openModal = (service: ServiceDetail) => {
    setSelectedService(service)
  }

  /* Close modal */
  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <>
      {/* ==== SERVICES SECTION ==== */}

      <section
        className="Services animate-on-scroll"
        id="Services"
      >
        {/* Header */}

        <div className="services-header">
          <div>
            <span className="section-kicker">
              Services
            </span>

            <h2>
              Services I currently
              <span> offer.</span>
            </h2>
          </div>

          <p>
            Practical solutions for software, automation,
            and printing needs.
          </p>
        </div>

        {/* Service List */}

        <div className="services-list">
          {serviceDetails.map((service, index) => (
            <button
              key={`${service.title}-${index}`}
              type="button"
              className="service-item"
              onClick={() => openModal(service)}
            >
              <span className="service-number">
                {(index + 1)
                  .toString()
                  .padStart(2, '0')}
              </span>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="service-meta">
                <span>{service.price}</span>

                <span className="service-arrow">
                  ↗
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ==== SERVICE MODAL ==== */}

      {selectedService && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            {/* Close */}

            <button
              className="modal-close"
              type="button"
              onClick={closeModal}
              aria-label="Close service details"
            >
              ×
            </button>

            {/* Header */}

            <div className="modal-header">
              <div>
                <span className="modal-label">
                  Service
                </span>

                <h3
                  id="service-modal-title"
                  className="modal-title"
                >
                  {selectedService.title}
                </h3>
              </div>

              <span className="modal-price">
                {selectedService.price}
              </span>
            </div>

            <div className="modal-divider" />

            {/* Scrollable Modal Content */}

            <div className="modal-body-scroll">
              {/* Overview */}

              <div className="modal-section">
                <h4>Overview</h4>

                <p className="modal-description">
                  {selectedService.description}
                </p>
              </div>

              {/* Details */}

              <div className="modal-section">
                <h4>Details</h4>

                {selectedService.fullDetails
                  .split('\n')
                  .map((line, index) => {
                    const trimmedLine =
                      line.trim()

                    const isListItem =
                      trimmedLine.startsWith('-') ||
                      trimmedLine.startsWith('•')

                    const cleanLine = isListItem
                      ? trimmedLine
                          .slice(1)
                          .trim()
                      : trimmedLine

                    /* Preserve empty lines */
                    if (!cleanLine) {
                      return (
                        <div
                          key={`space-${index}`}
                          className="modal-spacing"
                        />
                      )
                    }

                    return (
                      <p
                        key={`${cleanLine}-${index}`}
                        className={`modal-line ${
                          isListItem
                            ? 'modal-list-item'
                            : ''
                        }`}
                      >
                        {cleanLine}
                      </p>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Services