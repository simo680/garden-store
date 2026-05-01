const GoogleMap = () => {
  return (
    <div style={{ width: '100%', borderRadius: '12px' }}>
      <iframe
        title='Google Maps Location'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.813460885095!2d37.634066!3d55.717311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b10f37dc1f3%3A0x7a86f58b2e2d5d07!2sDubininskaya%20Ulitsa%2C%2096%2C%20Moskva%2C%20Russia%2C%20115093!5e0!3m2!1sen!2sru!4v1700000000000!5m2!1sen!2sru'
        width='100%'
        height='350'
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default GoogleMap;
