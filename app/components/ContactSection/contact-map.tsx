"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 0),
  backgroundColor: "#fff",
}));

const MapContainer = styled(Box) ({
  height: "500px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
});

export default function ContactMap() {
  return (
    <SectionContainer>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126107.69995098146!2d38.67264198188816!3d8.984510659890558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x164b8500e7fbfcb9%3A0x2609ddc6ab1af52f!2sXQM4%2BR23%20Gotera%20condominium%2C%20Addis%20Ababa!3m2!1d8.9845285!2d38.7550223!5e0!3m2!1sen!2set!4v1743752219240!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location"
        ></iframe>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256349542!2d-73.98784492346177!3d40.75798597138413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5m2!1s!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location"
        ></iframe> */}
      </MapContainer>
    </SectionContainer>
  );
}
