import React from "react";

function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.0196379468775!2d-79.41351548793301!3d43.85542163920723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b13d60b5099%3A0xfe3a03d7518f638e!2s9160%20Bayview%20Ave%20Unit%20b01%2C%20Richmond%20Hill%2C%20ON%20L4B%200E6%2C%20Canada!5e0!3m2!1sen!2sfr!4v1692714466774!5m2!1sen!2sfr"
      className="lg:w-[580px] lg:h-[562px] w-full h-[257px] lg:rounded-[60px]"
      style={{ border: "0" }}
      title="location"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Map;
