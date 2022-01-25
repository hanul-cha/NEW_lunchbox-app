CREATE TABLE "box_user" (
  "user_id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "joinday" TIMESTAMPTZ DEFAULT now(),
  "address" TEXT,
  PRIMARY KEY ("user_id")
);

CREATE TABLE "product-list" (
  "product_id" SERIAL,
  "product_type" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "img" TEXT NOT NULL,
  "explanation" TEXT NOT NULL,
  "new_product" BOOLEAN DEFAULT FALSE,
  PRIMARY KEY ("product_id")
);

CREATE TABLE "box_order-list" (
  "order_id" SERIAL,
  "user_id" TEXT NOT NULL,
  "product_id" INT NOT NULL,
  "order_time" TIMESTAMPTZ DEFAULT now(),
  "quentity" INT NOT NULL,
  "order_address" TEXT NOT NULL,
  "etc" TEXT,
  "order_bool" BOOLEAN DEFAULT FALSE,
  PRIMARY KEY ("order_id"),
  CONSTRAINT "FK_box_order-list.user_id"
    FOREIGN KEY ("user_id")
      REFERENCES "box_user"("user_id"),
  CONSTRAINT "FK_box_order-list.product_id"
    FOREIGN KEY ("product_id")
      REFERENCES "product-list"("product_id")
);

INSERT INTO "box_user" (
	user_id, name, password, address
) VALUES (
	'sssggg',
	'박석규',
	'123456',
    '경기도 안산시 상록구'
);

INSERT INTO "product-list" (
	product_type, name, img, explanation
) VALUES (
	'noodle',
	'봉골래파스타',
	'',
    '경기도 안산시 상록구'
);