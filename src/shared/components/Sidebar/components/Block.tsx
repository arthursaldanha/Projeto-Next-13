import clsx from 'clsx';

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const Block = ({ title, className, children }: BlockProps) => {
  return (
    <ul className={clsx('space-y-3 pl-4 pr-6', className)}>
      <div>
        <span className="font-nunito text-sm font-semibold text-primary">
          {title}
        </span>
      </div>

      <div className="space-y-3">{children}</div>
    </ul>
  );
};
