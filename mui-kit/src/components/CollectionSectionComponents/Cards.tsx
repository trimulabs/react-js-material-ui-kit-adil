import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
function Card({
  image,
  name,
  count,
}: {
  image: string;
  name: string;
  count: number;
}) {
  const imageTemplate = (
    <Box>
      <Box component="img" src={image} alt={name} width="100%" my="auto" />
    </Box>
  );

  return (
    <Box position="relative">
      {imageTemplate}
      {name || count > 0 ? (
        <Box mt={1} ml={1} lineHeight={1}>
          {name && (
            <Typography
              variant="body1"
              fontWeight="700"
              color="rgb(52, 71, 103)"
            >
              {name}
            </Typography>
          )}
          {count > 0 && (
            <Typography variant="h6" color="rgb(123, 128, 154)">
              {count} {count === 1 ? "Example" : "Examples"}
            </Typography>
          )}
        </Box>
      ) : null}
    </Box>
  );
}

Card.defaultProps = {
  name: "",
  count: 0,
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  count: PropTypes.number,
};

export default Card;
