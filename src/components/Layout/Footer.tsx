import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=" md:px-6 font-light text-sm px-4 h-12 absolute bottom-0 w-full flex items-center justify-between">
      <p>
        Copyright &copy;
        {` ${new Date().getFullYear()}`}
        <span className="font-bold"> Sale Manager</span> all rights reserved.
      </p>
      <p className=" text-right">
        <Link to="#">Term & Conditions </Link>|
        <Link to="#"> Privacy & Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
