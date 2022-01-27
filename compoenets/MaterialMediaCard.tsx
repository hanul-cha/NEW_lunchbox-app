import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MaterialMediaCardType {
  info: {
    explanation: string;
    img: string;
    name: string;
    new_product: boolean;
    price: number;
    product_id: number;
    product_type: string;
  }
}

const MaterialMediaCard = ({ info }: MaterialMediaCardType) => {
  return (
    <>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia component="img" height="140" image={info.img} alt={info.product_type + "이미지"} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.explanation}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">장바구니에 추가</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default MaterialMediaCard;
