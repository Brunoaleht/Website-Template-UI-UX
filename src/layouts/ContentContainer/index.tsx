import React from 'react';
import styles from '@/styles';


export type ContentContainerProps = {
  children?: React.ReactElement;
};

export const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {children}
      </div>
    </div>
  );
};
