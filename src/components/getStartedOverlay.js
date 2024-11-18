import { Dialog, DialogContent, IconButton, DialogTitle, useMediaQuery } from "@mui/material";
import { Close } from "@mui/icons-material";
import EachHeroTile from "./heroTile";

const items = [
  {
    id: 1,
    title: "Start with a style.",
    description:
      "Get personalized recommendations by completing your style profile",
    buttonText: "Take a style quiz",
    pageLink: '/stylequiz',
    image: "https://s3-alpha-sig.figma.com/img/f141/3224/2a7d8672f9b5f496ea6ad4700ba853b0?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrcGg6mGTLOrFYNAA7W1OTYfVo1g1mu7bTmO5MXsMWHmzSRSJprQjLiWh2TOzDNTm5dS~l4Gi0ZNx33dis34y7MUZU11-t~gQdm3gM1DCnnpFU~2NOH3UUFUPRjoMkMj1motgQxJEyEJBzS8uvZ0~pCs4OLEIEV6Et8PTnV2TUB7ajK3Y4teSY7T8kR3MDw0Vo-Bht7gGbDm3GXHhWWq2TZNKi7ZtL2jhVWlu7mRNxn1U5zVzoJvYZk7aSYCHwiMva7xqCEwzWltxxAmSjfz4rz48UQCQtqKHyOOZA-ZlHkEjf8W0169q4ypZ6vft8B96Lh3t-CsECptkFVyo8okEA__",
  },
  {
    id: 2,
    title: "Have a room in mind?",
    description:
      "Start with a room and design your perfect space.",
    buttonText: "Select a room",
    pageLink: '/roomselection',
    image: "https://s3-alpha-sig.figma.com/img/e737/38bc/0e7b79e38e19b9d5be423828619a4b86?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bEVfLL1e0KxEqLri5cYfGW3pWyJOJT~QeqgQpnsoegnYFuPfIG6vdSLSeDHDDYcU87rEk7yiuTY2duRXUMQLpVjaPP-lC3dvq8AvUaFEBYtqLyVHcRV7uHccp5gIxISE739thYTEvlNaUNYtnaGCIofLH~W9P1qs4cCT0iYLpdWxnq7mNht~bAi-cMhOWQH9LxjiwIuljg1E8nkDCslHr9-OZ9plJ2Ccwzwfg53CtNivFjk8IjRurYcGwX4YJJqHmllOGcnutrrpDB31Q7WA3pTiqv56XDzk9LBa816~j8YB0M6rwagnJYlq3o-~a6di3muB1hEBtj-gbCaqi93B5A__",
  },
  { 
    id: 3,
    title: "Start with ideas & inspiration",
    description: "Browse ideas and get inspired",
    buttonText: "Browse ideas",
    pageLink: '/inspirations',
    image: "https://s3-alpha-sig.figma.com/img/1c81/dd2b/f5c9ed91080ec578a76ae0f5f6e56610?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UvjC-31oJRxnunw~UbNfWCUTUT1~1F5U0nJQKoaIOBqJW5XLgprrequKQqB4tWicnPLWf1QVz2TIJ2aqk3XlwH5nIn7AJq-Z2aaBHVFOpdK~phsyVIrFJNiAXCr3bs8N02ZjmR6g1WTN5PwtOgNSGg9COimzofyxr4vRDtywv92bugRT50vtQyROxlZOiDgvoD6IdNF3QWOuzOUbC1Nz5kWFSzW8N3qw8yV7gz-tf1PvvUDJ5a8RtzB62NJoozQA~69Ae7C1~i6WPteY-tdHbI8AoDjh9yZIvLQfTIZcH7sswosNPwvvMkg9bnIN03PM1b5PiO~y3X2bnJl-mKkG8g__",
  },
  {
    id: 4,
    title: "Shop high-quality furniture",
    description: "Get direct access to top brands",
    buttonText: "Shop top brands",
    pageLink: '/shop',
    image: "https://s3-alpha-sig.figma.com/img/94c9/7f01/4e03c17228a557bfcdce4e498140e3c7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UJkLnB9YUYMgxCpq2hO1RSLN007sEhCE9ajVkuOPkllyUpzLKUYnoAzMsD0c7PgtvY3FhJ7tQNiqLp0Ew8eGfsmcvOOIjRYFQ4FyJhgJOJE1UilBH1u7caLFns8smdgohL7seworB9HRVu-BCQvn0s8U4JaBMOazLDOmlf1ltf~MlyGQB5iw6WoRJRkZS8JuRouir7A8o0X2AoGgJaXkiYRDRK17qhRXDcR3ycCNmkTmb1ZhHr1135eXTfgBCIl9O3zWfHqzOc9dnij847sjZSKONdEQjTsAQL8XZL5BFgMZWDWSlWd6EB8P9lX34dkda3JtdzZi3aHJTPz7rh1qhQ__",
  },
];

function GetStartedOverlay(props) {
  const { open, onClose } = props;
  const isMobile = useMediaQuery("(max-width:800px)");
  const isSmallMobile = useMediaQuery("(max-width:480px)");

  return (
    <Dialog
      open={open}
      maxWidth="lg"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          height: '90vh',
          maxHeight: '90vh',
          borderRadius: '30px',
        },
      }}
    >
      <DialogTitle
        sx={{
          fontFamily: 'Nunito',
          fontSize: isSmallMobile ? "24px" : "36px",
          fontWeight: 700,
          lineHeight: "22px",
          letterSpacing: "0.2px",
          textAlign: "center",
          color: "#FE6526",
        }}
      >
        4 Easy Ways to Get Started
      </DialogTitle>
      <DialogContent
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: isSmallMobile ? "1fr" : isMobile ? "1fr" : "1fr 1fr",
          gap: "16px",
          alignItems: "center",
          justifyContent: "center",
          padding: isSmallMobile ? "5px" : isMobile ? "10px" : "20px",
        }}
      >
        <IconButton
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 15,
            backgroundColor: "white",
            color: "black",
            borderRadius: "50%",
            padding: "6px",
            zIndex: 10,
          }}
        >
          <Close />
        </IconButton>

        {items.map((eachItem) => (
          <EachHeroTile key={eachItem.id} eachItem={eachItem} />
        ))}

        {!isMobile && (
          <>
            <div
              style={{
                position: "absolute",
                top: "51%",
                left: "0",
                right: "0",
                height: "1px",
                backgroundColor: "#ddd",
                transform: "translateY(-50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                bottom: "0",
                width: "1px",
                backgroundColor: "#ddd",
                transform: "translateX(-50%)",
              }}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default GetStartedOverlay;
