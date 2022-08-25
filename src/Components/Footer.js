import React from "react";
import {
  Box,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <p class="footer-heart" style={{ bottom: 0}}>
        <h2
          style={{
            color: "white",
            fontFamily: "Poppins",
            fontSize: "20px",
            whiteSpace: "pre",
          }}
        >
          Made with{" "}
          <g-emoji
            class="g-emoji"
            alias="heart"
            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
          >
            {" "}   
            <img
              class="emoji"
              alt="heart"
              height="20"
              width="20"
              src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
            />{" "}
          </g-emoji>{" "}
             by  Sameer Sinha
        </h2>
      </p>
    </Box>
  );
};
export default Footer;
