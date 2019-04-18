import React, { useState, useEffect } from "react";
import classNames from "classNames";

interface Props {
  id?: string;
  className?: string;
  imageURL: string;
  loadingSpinner?: boolean;
  getSize?: () => void;
  onClick?: () => void;
}

const ImageBackground: React.FunctionComponent<Props> = ({
  children,
  id = undefined,
  className = undefined,
  imageURL,
  loadingSpinner = false,
  getSize = null,
  onClick = null
}) => {
  const [url, setURL] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const _className = classNames("img__background", className);

  useEffect(
    () => {
      if (imageURL) {
        setURL(imageURL);
      }
    },
    [imageURL]
  );

  useEffect(
    () => {
      if (url) {
        setIsLoaded(false);
        setHasError(false);

        const img = new Image();

        img.src = url;

        img.onload = () => {
          setIsLoaded(true);
          getSize && getSize({ width: img.width, height: img.height });
        };

        img.onerror = () => {
          setHasError(true);
        };
      } else {
        return undefined;
      }
    },
    [url]
  );
  return (
    <div
      id={id}
      className={_className}
      style={{ backgroundImage: `url(${url})` }}
      onClick={onClick}
    >
      {loadingSpinner ? (!isLoaded ? null : children) : children}
    </div>
  );
};

export default ImageBackground;
