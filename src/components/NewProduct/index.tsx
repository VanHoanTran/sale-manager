import Title from '../common/Title';
import Form from '../common/Form';
import InputField from '../common/InputField';
import ListContainer from '../common/Containers/ListContainer';
import Card from '../common/Containers/Card';

import { FormValues } from '../../constants/Props';
import ImageUploader from '../common/ImageUploader';

const defaultValues: FormValues = {
  productName: 'Blue Backpack',
  code: 'WSTPGYRJ5VHA8V2',
  desc: 'a backpack with usb connector',
  sku: 'BAG-1234',
  price: 50,
  wholesaleDiscount: 40,
  taxRate: 13,
  category: 'Bags',
  brand: 'Nike',
  vendor: 'Nike',
  images: [],
};

const stringValidate = {
  required: 'required',

  // validate: (value: string) => value.length > 1 || 'length check',
};

const numberValidate = {
  required: 'required',
  valueAsNumber: true,
};

const categoryOptions = [
  'Bag',
  'Shoes',
  'Watch',
  'Hat',
  'Gloves',
  'Jacket',
  'Socks',
  'Scarf',
  'Jeans',
  'Dress',
];

const NewProduct = () => {
  const onSubmit = (data: FormValues) => {
    console.log({ data });
  };

  return (
    <ListContainer>
      <Title>Add New Product</Title>
      <Form defaultValues={defaultValues} onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card
              stacked
              divided
              title="Basic Information"
              subtitle="Section to config basic product information"
            >
              <InputField
                type="text"
                placeholder="Luminaire Giotto Headphones"
                label="Product Name"
                name="productName"
                validate={stringValidate}
              />
              <InputField
                type="text"
                placeholder="BIS-012"
                validate={stringValidate}
                label="Code"
                name="code"
              />
              <InputField
                type="text"
                placeholder="Luminaire Giotto Headphones has modern design"
                validate={stringValidate}
                label="Description"
                name="desc"
              />
            </Card>

            <Card
              divided
              title="Pricing"
              subtitle="Section to config product sales information"
            >
              <InputField
                type="text"
                placeholder="46"
                label="SKU"
                name="sku"
                validate={stringValidate}
              />
              <InputField
                prefix="$"
                type="number"
                validate={numberValidate}
                label="Wholesale Discount"
                name="wholesaleDiscount"
              />
              <InputField
                prefix="$"
                type="number"
                validate={numberValidate}
                label="Price"
                name="price"
              />

              <InputField
                prefix="%"
                placeholder="13"
                type="number"
                validate={numberValidate}
                label="Tax Rate(%)"
                name="taxRate"
              />
            </Card>
            <Card
              title="Organizations"
              subtitle="Section to config the product attribute"
            >
              <InputField
                options={categoryOptions}
                placeholder="Select..."
                label="Category"
                name="category"
              />
              <InputField
                validate={stringValidate}
                label="Brand"
                name="brand"
              />
              <InputField
                validate={stringValidate}
                label="Vendor"
                name="vendor"
              />
            </Card>
          </div>
          <div className=" lg:col-span-1">
            <ImageUploader
              name="images"
              title="Product Image"
              subtitle="Add or change image for the product"
            />
          </div>
        </div>
      </Form>
    </ListContainer>
  );
};

export default NewProduct;
