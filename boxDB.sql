CREATE TABLE "box_user" (
  "user_id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "joinday" TIMESTAMPTZ DEFAULT now(),
  "address" TEXT,
  PRIMARY KEY ("user_id")
);

CREATE TABLE "product_list" (
  "product_id" SERIAL,
  "product_type" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "img" TEXT NOT NULL,
  "explanation" TEXT NOT NULL,
  "price" INT NOT NULL,
  "new_product" BOOLEAN DEFAULT FALSE,
  PRIMARY KEY ("product_id")
);

CREATE TABLE "box_basket" (
  "basket_id" SERIAL,
  "user_id" TEXT,
  "order_address" TEXT,
  "basket_etc" TEXT,
  "save_basket" BOOLEAN,
  PRIMARY KEY ("basket_id"),
  CONSTRAINT "FK_box_basket.user_id"
    FOREIGN KEY ("user_id")
      REFERENCES "box_user"("user_id")
);

INSERT INTO "box_user" (
	user_id, name, password, address
) VALUES (
	'sssggg',
	'박석규',
	'123456',
    '경기도 안산시 상록구'
);

INSERT INTO "product_list" (
	product_type, name, img, explanation, price
) VALUES (
	'noodle',
	'매콤 봉골래파스타',
	'https://cdn.pixabay.com/photo/2018/06/18/18/06/pasta-3483010_960_720.jpg',
    '페퍼론치노를 첨가한 한국인이 사랑하는 매콤한 파스타. 해장용으로도 좋아요!!',
    10900
);

INSERT INTO "product_list" (
	product_type, name, img, explanation, price
) VALUES (
	'noodle',
	'팟타이',
	'https://cdn.pixabay.com/photo/2015/09/04/10/40/pad-thai-921884_960_720.jpg',
    '태국의 대표적인 쌀국수 요리로 입맛없는 분들도 먹고싶어지는 자극적인 음식입니다',
    8900
);

INSERT INTO "product_list" (
	product_type, name, img, explanation, price, new_product
) VALUES (
	'rice',
	'새우볶음밥',
	'https://cdn.pixabay.com/photo/2019/12/20/17/05/fried-rice-4708866_960_720.jpg',
    '새우와 각종 야채로 볶은 배트남식 볶음밥',
    8900,
    true
);
INSERT INTO "product_list" (
	product_type, name, img, explanation, price
) VALUES (
	'rice',
	'연어 롤 초밥',
	'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_960_720.jpg',
    '연어알, 생연어, 구운연어 3가지 연어 요리로 만든 부담없는 연어 롤 초밥!',
    9200
);
INSERT INTO "product_list" (
	product_type, name, img, explanation, price
) VALUES (
	'rice',
	'웰빙 캘리포니아 롤',
	'https://cdn.pixabay.com/photo/2014/06/21/02/28/sushi-373587_960_720.jpg',
    '건강하게 즐길수 있는 웰빙 캘리포니아 롤, 부담없이 즐겨요!',
    8700
);
INSERT INTO "product_list" (
	product_type, name, img, explanation, price
) VALUES (
	'drink',
	'오렌지 주스',
	'https://cdn.pixabay.com/photo/2016/08/23/15/52/fresh-orange-juice-1614822_960_720.jpg',
    '신선한 오렌지 주스, 주문즉시 갈아드려요!',
    3000
);
INSERT INTO "product_list" (
	product_type, name, img, explanation, price
) VALUES (
	'etc',
	'치킨 샤와르마',
	'https://cdn.pixabay.com/photo/2021/01/06/10/11/shawarma-5893935_960_720.jpg',
    '브리또의 먼 친척되는 샤와르마, 양고기 추가는 요청사항에 적어주세요.',
    6000
);
INSERT INTO "product_list" (
	product_type, name, img, explanation, price, new_product
) VALUES (
	'drink',
	'당근주스',
	'https://cdn.pixabay.com/photo/2016/08/26/20/40/carrot-juice-1623079_960_720.jpg',
    '건강하게 즐기고 싶은 분들을 위한 웰빙 음료',
    6000,
    TRUE
);