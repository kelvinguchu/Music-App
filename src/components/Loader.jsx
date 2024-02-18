import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">{title && <h1 className="text-white text-2xl font-bold">{title}</h1>}<img src={loader} alt="loader" className="w-32 h-32 object-contain" /></div>
);

export default Loader;
