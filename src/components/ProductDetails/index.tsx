import Title from '../common/Title';
import Form from '../common/Form';
import InputField from '../common/InputField';
import ListContainer from '../common/Containers/ListContainer';
import Card from '../common/Containers/Card';

import ImageUploader from '../common/ImageUploader';
import ProductButtons from '../common/Form/ProductButtons';
import { FieldValues } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';

const defaultValues: FieldValues = {
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

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === id);
  const values = product || defaultValues;
  const onSubmit = (data: FieldValues) => {
    console.log({ data });
  };

  return (
    <ListContainer>
      <Title>{!id ? 'Add New Product' : 'Product Details'}</Title>
      <Form defaultValues={values} onSubmit={onSubmit}>
        <div>
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
                  label="Product Name"
                  name="productName"
                  validate={stringValidate}
                />
                <InputField
                  type="text"
                  validate={stringValidate}
                  label="Code"
                  name="id"
                />
                <InputField
                  type="text"
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
        </div>
        <ProductButtons isUpdate={!!id} />
      </Form>
    </ListContainer>
  );
};

export default ProductDetails;
