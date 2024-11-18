import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const EachHeroTile = ({ eachItem }) => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const isSmallMobile = useMediaQuery("(max-width:480px)");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: isSmallMobile ? "10px" : "20px",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={eachItem.image}
        alt={eachItem.title}
        style={{
          width: isSmallMobile ? "80px" : "100px",
          height: isSmallMobile ? "80px" : "100px",
          marginBottom: "16px",
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />
      <h3
        style={{
          fontSize: isSmallMobile ? "16px" : "20px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "8px",
        }}
      >
        {eachItem.title}
      </h3>
      <p
        style={{
          fontSize: isSmallMobile ? "12px" : "14px",
          color: "#666",
          marginBottom: "16px",
        }}
      >
        {eachItem.description}
      </p>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{
          backgroundColor: "#FE6526",
          fontSize: isSmallMobile ? "10px" : "12px",
        }}
        href={eachItem.pageLink}
      >
        {eachItem.buttonText}
      </Button>
    </div>
  );
};

export default EachHeroTile;
