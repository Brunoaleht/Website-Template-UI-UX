import Image from 'next/image';
import { feedback} from '@/constants';
import {quotes} from '@/assets'
import styles from '@/styles';

export type FeedBackCardProps = {
  feedback: feedback;
};

export const FeedBackCard = ({ feedback }: FeedBackCardProps) => {
  const { content, img, name, title}  = feedback
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card'>
      <Image src={quotes} alt="dual_quotes" className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-[18px] text-white leading-[32px] my-10'>{content}</p>
      <div className='flex flex-row items-center'>
        <Image src={img} alt='client-img' className='w-[48px] h-[48px] mr-5'/>
        <div className='flex flex-col'>
          <h4 className='font-poppins font-normal text-[16px] text-white leading-[23px]'>{name}</h4>
          <p className={`${styles.paragraph}`}>{title}</p>
        </div>
      </div>
    </div>
  );
};
