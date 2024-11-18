import { Grid, Typography, Button } from "@mui/material";

function EachHeroTile(props) {
  const { title, description, image, buttonText, pageLink } = props.eachItem;

  return (
    <Grid item>
      <div
        style={{
          height: "auto",
          width: "100%",
          maxWidth: "554px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <img
              src={image}
              alt={title}
              style={{
                borderRadius: "50%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "150px",
                width: "150px",
              }}
            />
          </div>
          <div style={{ width: "220px" }}>
            <Typography
              sx={{
                fontFamily: 'Lora',
                fontSize: "28px",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: "36px",
                textAlign: "left",
              }}
              variant="subtitle1"
              component="div"
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '30px',
                textAlign: "left",
                color: "black",
              }}
              variant="body2"
              color="text.secondary"
            >
              {description}
            </Typography>
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingLeft: '150px' }}>
          <Button
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              width: "236px",
              height: "53px",
              backgroundColor: "#FFFFFF",
              color: "#FE6526",
              borderRadius: "999px",
              textTransform: "none",
              border: "4px solid #FE6526",
              '&:hover': {
                backgroundColor: "#FFFFFF",
                color: "#FE6526",
              },
            }}
            href={pageLink}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Grid>
  );
}

export default EachHeroTile;
