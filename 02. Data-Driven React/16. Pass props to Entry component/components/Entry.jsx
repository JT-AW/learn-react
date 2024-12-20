export default function Entry({img, country, mapLink, entryTitle, tripDates, entryText}) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={img.src}
                    alt={img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{country}</span>
                <a href={mapLink}>View on Google Maps</a>
                <h2 className="entry-title">{entryTitle}</h2>
                <p className="trip-dates">{tripDates}</p>
                <p className="entry-text">{entryText}</p>
            </div>
            
        </article>
    )
}