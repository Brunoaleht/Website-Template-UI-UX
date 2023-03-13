import { clients } from "@/constants";
import styles from '@/styles';
import Image from 'next/image';
export type ClientsProps = JSX.Element;

export const Clients = (): ClientsProps => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <Image src={client.logo} alt='client_logo' className='sm:w-[192px] w-[100px] object-contain'/>
          </div>
        ))}
      </div>
    </section>
  );
};
