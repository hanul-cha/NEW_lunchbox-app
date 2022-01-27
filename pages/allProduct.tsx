import type { NextPage } from "next";
import GlobalTitle from "../compoenets/GlobalTitle";
import MaterialMediaCard from "../compoenets/MaterialMediaCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

interface productListType {
  explanation: string;
  img: string;
  name: string;
  new_product: boolean;
  price: number;
  product_id: number;
  product_type: string;
}//제품에 할당된 타입

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}//테이블 타입

interface allProductType {
  allproduction: {
    productList: productListType[];
  };
}//현재 페이지 props type

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ div: 4 }}>
          {children}
        </Box>
      )}
    </div>
  );
}//material 페이지 지정함수

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AllProduct: NextPage<allProductType> = ({ allproduction }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const noodleList = allproduction.productList.filter(
    (type) => type.product_type == "noodle"
  );

  const riceList = allproduction.productList.filter(
    (type) => type.product_type == "rice"
  );

  const drinkList = allproduction.productList.filter(
    (type) => type.product_type == "drink"
  );
  //제품들을 타입별로 걸러줄 필터함수
  return (
    <>
      <GlobalTitle title="모든 제품" />
      <div className="allProduct">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="모든 메뉴" {...a11yProps(0)} />
              <Tab label="누들" {...a11yProps(1)} />
              <Tab label="라이스" {...a11yProps(2)} />
              <Tab label="음료" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="selectAll">
              {allproduction.productList.map((list, i) => {
                return <MaterialMediaCard info={list} key={i} />;
              })}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="noodle">
              {noodleList.map((list, i) => {
                return <MaterialMediaCard info={list} key={i} />;
              })}
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="rice">
              {riceList.map((list, i) => {
                return <MaterialMediaCard info={list} key={i} />;
              })}
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="drink">
              {drinkList.map((list, i) => {
                return <MaterialMediaCard info={list} key={i} />;
              })}
            </div>
          </TabPanel>
        </Box>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default AllProduct;

export const getServerSideProps = async () => {
  const allproduction = await (
    await fetch("http://localhost:3000/api/product")
  ).json();
  return {
    props: {
      allproduction,
    },
  };
};
