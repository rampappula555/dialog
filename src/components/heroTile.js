
import cssStyles from './hero_tile.module.scss'
import { Grid,Typography,Button } from "@mui/material"
function EachHeroTile(props){
    const {title,description,image,buttonText,pageLink}=props.eachItem
return <Grid >
    <div className={cssStyles.heroTileMainContainer}>
    <div className={cssStyles.imageAndContentContainer}>
        <div >
            <img src={image} alt={title} className={cssStyles.roomImage}  />
        </div>
        <div style={{width:'220px'}}>
        <Typography
        className={cssStyles.title}
                  variant="subtitle1"
                  component="div"  
                >
                  {title}
                </Typography>
                <Typography
                className={cssStyles.description}
                  variant="body2"
                  color="text.secondary"
                >
                  {description}
                </Typography>
        </div>
    </div>
    <div style={{textAlign:'center',paddingLeft:'150px'}}>
    <Button
    className={cssStyles.linkButton}
    href={pageLink}
          >
            {buttonText}
          </Button>
    </div>
    </div>
</Grid>
}
export default EachHeroTile


