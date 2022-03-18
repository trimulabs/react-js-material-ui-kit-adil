import data from "../../components/CollectionSectionComponents/ComponentButtonData";
import { Container, Grid, Box, Typography } from "@mui/material";
import Card from "./Cards";

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid>
        <Box position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <Typography variant="h3" color="rgb(52, 71, 103)" mb={1}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            fontWeight="400"
            color="rgb(123, 128, 154)"
            mb={1}
            pr={2}
            width="20%"
          >
            {description}
          </Typography>
        </Box>
        <Grid item xs={12} lg={9} ml="auto">
          <Grid container spacing={3}>
            {items.map(({ image, name, count }) => (
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
                sx={{ mb: 2, padding: "20px" }}
                key={name}
              >
                <Card image={image} name={name} count={count} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ));
  return (
    <Box component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="#344767"
            width="35%"
            mb="20px"
          >
            Huge collection of sections
          </Typography>
          <Typography variant="h4" fontWeight="400" color="#7b809a" width="50%">
            We have created multiple options for you to put together and
            customise into pixel perfect pages.
          </Typography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </Box>
  );
}

export default DesignBlocks;
