import { useScrollTop } from '@/hooks';
import { ChevronDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const isScrollMenu = useScrollTop(90);

  return (
    <div
      className={`${
        isScrollMenu ? 'animate-menuDown fixed h-[70px] bg-[#fedb03]' : 'absolute h-[90px] bg-[#777]'
      } top-0 left-0 right-0 z-50`}
    >
      <div className='max-w-[1570px] px-4 h-full flex items-center justify-between'>
        <div className=''></div>
        <div>
          <ul className='flex items-center justify-center'>
            <li className='mx-[14px]'>
              <Link
                to={'/'}
                className='pt-[10px] pb-[6px] text-[#fff] leading-4 font-bold text-base border-b-[3px] border-solid border-transparent hover:border-[#fedb03] transition-all'
              >
                Trang chủ
              </Link>
            </li>
            <li className='mx-[14px]'>
              <Link
                to={'/'}
                className='pt-[10px] pb-[6px] text-[#fff] leading-4 font-bold text-base border-b-[3px] border-solid border-transparent hover:border-[#fedb03] transition-all'
              >
                Giới thiệu
              </Link>
            </li>
            <li className='mx-[14px]'>
              <Link
                to={'/'}
                className='flex items-center pt-[10px] pb-[6px] text-[#fff] leading-4 font-bold text-base border-b-[3px] border-solid border-transparent hover:border-[#fedb03] transition-all'
              >
                Thiết kế nội thất
                <ChevronDownIcon width={16} height={16} className='text-[#ccc]' />
              </Link>
            </li>
            <li className='mx-[14px]'>
              <Link
                to={'/'}
                className='flex items-center pt-[10px] pb-[6px] text-[#fff] leading-4 font-bold text-base border-b-[3px] border-solid border-transparent hover:border-[#fedb03] transition-all'
              >
                Thi công nội thất
                <ChevronDownIcon width={16} height={16} className='text-[#ccc]' />
              </Link>
            </li>
            <li className='mx-[14px]'>
              <Link
                to={'/'}
                className='flex items-center pt-[10px] pb-[6px] text-[#fff] leading-4 font-bold text-base border-b-[3px] border-solid border-transparent hover:border-[#fedb03] transition-all'
              >
                Thiết kế kiến trúc
                <ChevronDownIcon width={16} height={16} className='text-[#ccc]' />
              </Link>
            </li>
            <li className='mx-[14px]'>
              <Link
                to={'/'}
                className='pt-[10px] pb-[6px] text-[#fff] leading-4 font-bold text-base border-b-[3px] border-solid border-transparent hover:border-[#fedb03] transition-all'
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
