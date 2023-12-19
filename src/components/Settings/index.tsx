import { FieldValues } from 'react-hook-form';

import Card from '../common/Containers/Card';
import ListContainer from '../common/Containers/ListContainer';
import Form from '../common/Form';
import ImageUploader from '../common/ImageUploader';
import InputField from '../common/InputField';
import Title from '../common/Title';

import AccountButtons from '../common/Form/AccountButtons';

const defaultValues: FieldValues = {
  username: 'Carolyn',
  imgUrl: '',
  email: 'carolyn@gmail.com',
  role: 'Account Manager',
};

const stringValidate = {
  required: 'required',

  // validate: (value: string) => value.length > 1 || 'length check',
};

// const numberValidate = {
//   required: 'required',
//   valueAsNumber: true,
// };

const Settings = () => {
  const onSubmit = (data: FieldValues) => {
    console.log({ data });
  };
  return (
    <ListContainer>
      <Title>Account Settings</Title>
      <Form defaultValues={defaultValues} onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card
              stacked
              divided
              title="Profile"
              subtitle="Section to config basic profile information"
            >
              <InputField
                type="text"
                placeholder="Carolyn"
                label="User name"
                name="username"
                validate={stringValidate}
              />
              <InputField
                type="email"
                placeholder="carolyn@gmail.com"
                validate={stringValidate}
                label="Email"
                name="email"
              />
              <InputField
                type="text"
                placeholder="Account Manager"
                validate={stringValidate}
                label="Role"
                name="role"
              />
            </Card>

            <Card
              title="Change Password"
              subtitle="Section to config product sales information"
            >
              <InputField
                type="password"
                placeholder=""
                label="New Password"
                name="newPassword"
              />
              <InputField
                type="password"
                label="Confirm password"
                name="confirmPassword"
              />
            </Card>
          </div>
          <div className=" lg:col-span-1">
            <ImageUploader
              name="avatar"
              title="Avatar"
              subtitle="upload your own image"
            />
          </div>
        </div>
        <AccountButtons />
      </Form>
    </ListContainer>
  );
};

export default Settings;
