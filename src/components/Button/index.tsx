
export type ButtonProps = {
  title?: string;
  styles?: string;
};

export const Button = ({ title, styles }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded ${styles}`}
    >
      {title}
    </button>
  );
};
