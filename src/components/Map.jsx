import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export default function Map() {
  const { t } = useLanguage();
  const v = t.venue;
  const [activeTab, setActiveTab] = useState('directions'); // 'directions' | 'floorplan'
  const [selectedRoomId, setSelectedRoomId] = useState('auditorium');
  const [copied, setCopied] = useState(false);

  // Safety fallback if room is not found
  const selectedRoom = v.rooms.find((r) => r.id === selectedRoomId) || v.rooms[0];

  const fullAddress = `${v.addressLine1}, ${v.addressLine2}`;
  const mapsEmbedUrl = 'https://maps.google.com/maps?q=Cra.+11+%2379-52%2C+Bogot%C3%A1%2C+Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed';
  const mapsExternalUrl = 'https://www.google.com/maps/search/?api=1&query=Cra.+11+%2379-52%2C+Bogot%C3%A1%2C+Colombia';
  const wazeUrl = 'https://waze.com/ul?q=Cra.+11+%2379-52%2C+Bogot%C3%A1%2C+Colombia';

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullAddress).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <section id="venue" className="venue-section">
      <div className="container">
        <p className="section-label animate-item" style={{ '--delay': '0s' }}>
          {v.label}
        </p>
        <h2 className="section-title animate-item" style={{ '--delay': '0.1s' }}>
          {v.title}
        </h2>
        <p className="section-subtitle animate-item" style={{ '--delay': '0.2s', marginBottom: '28px' }}>
          {v.subtitle}
        </p>

        {/* Tab selection buttons */}
        <div className="venue-tabs animate-item" style={{ '--delay': '0.25s' }}>
          <button
            type="button"
            className={`venue-tab-btn ${activeTab === 'directions' ? 'active' : ''}`}
            onClick={() => setActiveTab('directions')}
          >
            🗺️ {v.tabDirections}
          </button>
          <button
            type="button"
            className={`venue-tab-btn ${activeTab === 'floorplan' ? 'active' : ''}`}
            onClick={() => setActiveTab('floorplan')}
          >
            🏢 {v.tabFloorplan}
          </button>
        </div>

        {/* TAB 1: Directions & City Map */}
        {activeTab === 'directions' && (
          <div className="venue-tab-panel">
            <div className="venue-grid">
              {/* Map container */}
              <div className="map-frame-wrapper">
                <iframe
                  title="EPAM Bogotá Venue Map"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-iframe"
                />
                <div className="map-frame-overlay">
                  <a
                    href={mapsExternalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-open-link"
                  >
                    {v.openMaps}
                  </a>
                </div>
              </div>

              {/* Information Cards */}
              <div className="venue-info-cards">
                {/* Address Card */}
                <div className="venue-card address-card">
                  <div className="venue-card-header">
                    <span className="venue-icon">📍</span>
                    <div>
                      <h3 className="venue-card-title">{v.addressTitle}</h3>
                      <p className="venue-card-address">{v.addressLine1}</p>
                      <p className="venue-card-city">{v.addressLine2}</p>
                    </div>
                  </div>

                  <div className="venue-action-buttons">
                    <button
                      type="button"
                      className={`venue-btn-copy ${copied ? 'copied' : ''}`}
                      onClick={handleCopyAddress}
                    >
                      {copied ? `✓ ${v.copied}` : `📋 ${v.copyAddress}`}
                    </button>
                    <a
                      href={mapsExternalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="venue-btn-link"
                    >
                      {v.openMaps}
                    </a>
                    <a
                      href={wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="venue-btn-link waze"
                    >
                      {v.openWaze}
                    </a>
                  </div>
                </div>

                {/* Transit & Access Card */}
                <div className="venue-card">
                  <div className="venue-card-header">
                    <span className="venue-icon">🚇</span>
                    <h3 className="venue-card-title">{v.transitTitle}</h3>
                  </div>

                  <div className="transit-items">
                    <div className="transit-row">
                      <span className="transit-bullet">🚆</span>
                      <p>{v.transitTransmilenio}</p>
                    </div>
                    <div className="transit-row">
                      <span className="transit-bullet">🚗</span>
                      <p>{v.transitParking}</p>
                    </div>
                    <div className="transit-row">
                      <span className="transit-bullet">🎟️</span>
                      <p>{v.transitAccess}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue Amenities Bar */}
            {v.amenities && (
              <div className="venue-amenities-section">
                <h4 className="amenities-heading">{v.amenitiesTitle}</h4>
                <div className="amenities-grid">
                  {v.amenities.map((item, idx) => (
                    <div key={idx} className="amenity-card">
                      <span className="amenity-icon">{item.icon}</span>
                      <div>
                        <h5 className="amenity-title">{item.title}</h5>
                        <p className="amenity-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Venue Floor Plan & Rooms */}
        {activeTab === 'floorplan' && (
          <div className="venue-tab-panel floorplan-layout">
            <div className="floorplan-header">
              <p className="floorplan-hint">{v.roomsSubtitle}</p>
            </div>

            {/* Visual Schematic Floor Plan */}
            <div className="floorplan-schematic-container">
              <div className="floorplan-blueprint">
                {/* Level / Area Title */}
                <div className="blueprint-tag">EPAM Tech Hub · Piso 2 / Floor 2</div>

                <div className="floorplan-schematic">
                  {/* Entrance */}
                  <div className="schematic-room schematic-entrance">
                    <div className="schematic-entrance-icon">🚪</div>
                    <div>
                      <span className="schematic-tag">Main Entrance</span>
                      <span className="schematic-name">Check-in, Badges & Security</span>
                    </div>
                  </div>

                  {/* Lounge & Terrace */}
                  <div
                    className={`schematic-room schematic-lounge ${selectedRoomId === 'lounge' ? 'is-selected' : ''}`}
                    onClick={() => setSelectedRoomId('lounge')}
                    style={{ '--room-accent': '#ec4899' }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedRoomId('lounge')}
                  >
                    <span className="schematic-badge" style={{ background: 'rgba(236, 72, 153, 0.2)', color: '#ec4899' }}>
                      Break & Connect
                    </span>
                    <h4 className="schematic-title">Networking Lounge & Terrace</h4>
                    <span className="schematic-meta">☕ Specialty Coffee · Atrium · Expo</span>
                  </div>

                  {/* Main Auditorium */}
                  <div
                    className={`schematic-room schematic-auditorium ${selectedRoomId === 'auditorium' ? 'is-selected' : ''}`}
                    onClick={() => setSelectedRoomId('auditorium')}
                    style={{ '--room-accent': '#00f5d4' }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedRoomId('auditorium')}
                  >
                    <span className="schematic-badge" style={{ background: 'rgba(0, 245, 212, 0.2)', color: '#00f5d4' }}>
                      Main Stage
                    </span>
                    <h4 className="schematic-title">Main Auditorium (Hall A)</h4>
                    <span className="schematic-meta">👥 Cap. 250 · Panoramic AV</span>
                  </div>

                  {/* Strategy Hall */}
                  <div
                    className={`schematic-room schematic-strategy ${selectedRoomId === 'strategy' ? 'is-selected' : ''}`}
                    onClick={() => setSelectedRoomId('strategy')}
                    style={{ '--room-accent': '#7b2ff7' }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedRoomId('strategy')}
                  >
                    <span className="schematic-badge" style={{ background: 'rgba(123, 47, 247, 0.2)', color: '#a78bfa' }}>
                      Strategy Track
                    </span>
                    <h4 className="schematic-title">Strategy Hall (Room B)</h4>
                    <span className="schematic-meta">👥 Cap. 100 · Executive</span>
                  </div>

                  {/* Tech Lab */}
                  <div
                    className={`schematic-room schematic-workshop ${selectedRoomId === 'workshop' ? 'is-selected' : ''}`}
                    onClick={() => setSelectedRoomId('workshop')}
                    style={{ '--room-accent': '#3b82f6' }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedRoomId('workshop')}
                  >
                    <span className="schematic-badge" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
                      Workshop
                    </span>
                    <h4 className="schematic-title">Tech Lab (Room C)</h4>
                    <span className="schematic-meta">👥 Cap. 60 · Power & Code</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Room Details Spotlight */}
            {selectedRoom && (
              <div
                className="room-detail-card"
                style={{ borderLeftColor: selectedRoom.color }}
              >
                <div className="room-detail-header">
                  <div>
                    <span
                      className="room-pill"
                      style={{
                        background: `${selectedRoom.color}22`,
                        color: selectedRoom.color,
                        borderColor: `${selectedRoom.color}55`,
                      }}
                    >
                      {selectedRoom.tag}
                    </span>
                    <h3 className="room-detail-title">{selectedRoom.name}</h3>
                  </div>
                  <span className="room-detail-capacity">👥 {selectedRoom.capacity}</span>
                </div>

                <p className="room-detail-desc">{selectedRoom.details}</p>

                {/* Features */}
                {selectedRoom.features && (
                  <div className="room-features">
                    {selectedRoom.features.map((feature, idx) => (
                      <span key={idx} className="room-feature-tag">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Sessions in this room */}
                {selectedRoom.sessions && selectedRoom.sessions.length > 0 && (
                  <div className="room-sessions-box">
                    <h5 className="room-sessions-title">{v.sessionsTitle}</h5>
                    <ul className="room-sessions-list">
                      {selectedRoom.sessions.map((session, idx) => (
                        <li key={idx} className="room-session-item">
                          <span className="session-bullet" style={{ background: selectedRoom.color }} />
                          <span>{session}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Room Selector Cards */}
            <div className="rooms-grid">
              {v.rooms.map((room) => {
                const isSelected = room.id === selectedRoomId;
                return (
                  <button
                    type="button"
                    key={room.id}
                    className={`room-card-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedRoomId(room.id)}
                    style={{ '--card-accent': room.color }}
                  >
                    <div className="room-card-top">
                      <span
                        className="room-dot"
                        style={{ background: room.color, boxShadow: `0 0 10px ${room.color}` }}
                      />
                      <span className="room-card-tag" style={{ color: room.color }}>
                        {room.tag}
                      </span>
                    </div>
                    <h4 className="room-card-name">{room.name}</h4>
                    <p className="room-card-cap">{room.capacity}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
