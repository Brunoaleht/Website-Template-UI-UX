import styles from "@/styles";
import { arrowUp } from "@/assets";
import Image from 'next/image';
export type GetStartedProps = JSX.Element;

export const GetStarted = (): GetStartedProps => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] p-[2px] cursor-pointer bg-blue-gradient rounded-full `}
    >
      <div
        className={`${styles.flexCenter} flex-col w-[100%] h-[100%] bg-primary rounded-full `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <Image src={arrowUp} alt='getStarted' className='w-[23px] h-[23px] object-contain' />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started</span>
          </p>
      </div>
    </div>
  );
};
