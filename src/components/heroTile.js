
import { Grid,Typography,Button } from "@mui/material"
function EachHeroTile(props){
    const {title,description,image,buttonText,pageLink}=props.eachItem
return <Grid >
    <div style={{
        height: "307px",
        width: "554px",
    }}>
    <div style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
    }}>
        <div >
            <img src={image} alt={title} style={{
                  borderRadius: "50%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "250px",
                  width:"250px",
            }} />
        </div>
        <div style={{width:'220px'}}>
        <Typography
        sx={{
            fontFamily: 'Lora',
            fontSize: "28px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "36px",
            textAlign: "left",
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: "none",
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
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk:"none" ,
                    color: "black",
                }}
                  variant="body2"
                  color="text.secondary"
                >
                  {description}
                </Typography>
        </div>
    </div>
    <div style={{textAlign:'center',paddingLeft:'150px'}}>
    <Button
    sx={
        {
            fontSize:"20px",
            fontWeight: 700,
            lineHeight: "30.01px",
            textAlign: "center",
            width: "236px",
            height: "53px",
            backgroundColor: "#FFFFFF",
            color: "#FE6526",
            borderRadius: "999px",
            textTransform: "none",
            border: "4px solid #FE6526",
            '&:hover':{
                backgroundColor: "#FFFFFF",
                color: "#FE6526",
            }
            }
    }
    href={pageLink}
          >
            {buttonText}
          </Button>
    </div>
    </div>
</Grid>
}
export default EachHeroTile


