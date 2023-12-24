function Map() {
  return (
    <div style={{ width: "100%"}}>
      <iframe
        title="Google Maps Location"
        width="100%"
        height="350"
        frameBorder="0"
        style={{ borderRadius: '12px' }}
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Dubininskaya%20Ulitsa,%2096,%20Moscow,%20Russia,%20115093+(ITHUB)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">Calculate population in area</a>
      </iframe>
    </div>
  );
}

export default Map;
