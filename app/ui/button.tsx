import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center gap-5 self-start rounded-lg bg-chief-100 px-4 text-sm font-medium text-chief-400 transition-colors hover:bg-chief-300 hover:text-chief-50 md:text-base shadow-md dark:shadow-chief-100/50 dark:hover:shadow-chief-300/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chief-200 active:bg-chief-300 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}
