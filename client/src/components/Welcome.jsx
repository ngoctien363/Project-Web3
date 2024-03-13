import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Loader } from './';

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
    return (
      <div className='flex w-full justify-center items-center'>
        <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
          <div className='flex flex-1 justify-start flex-col md:mr-10'>
            <h1>Send Crypto <br/> across the world </h1>
          </div>
        </div>
      </div>
    )
  }
  
  Welcome.propTypes = {}
  
  export default Welcome