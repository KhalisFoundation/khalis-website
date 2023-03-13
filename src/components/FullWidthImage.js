import React from "react";
import PropTypes from "prop-types";

export default function FullWidthImage(props) {
  const { title, heading } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {(title || heading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3"
                style={{
                  lineHeight: "1.4",
                  paddingTop: "0.25rem",
                  paddingBottom: "0.25rem",
                }}
              >
                {title}
              </h1>
            )}
            {heading && (
              <h3
                className=" is-size-4"
                style={{
                  lineHeight: "1.4",
                  paddingTop: "0.25rem",
                  paddingBottom: "0.2rem",
                  marginTop: "0.5rem",
                }}
              >
                {heading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
