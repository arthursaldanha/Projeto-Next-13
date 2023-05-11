import { IoIosArrowForward } from 'react-icons/io';

interface ItemProps extends React.HTMLAttributes<HTMLLIElement> {
  title: string;
  content?: string;
}

export const Item = ({ title, content, ...props }: ItemProps) => {
  return (
    <li
      className="group flex cursor-pointer items-center justify-between py-3"
      {...props}
    >
      <div>
        <span className="font-nunito text-base font-semibold text-gray-900 transition-colors duration-200 ease-linear group-hover:text-gray-500">
          {title}
        </span>
      </div>

      {!content ? (
        <div>
          <IoIosArrowForward className="h-5 w-5 text-gray-500" />
        </div>
      ) : (
        <span className="font-nunito text-xs font-semibold text-primary transition-colors duration-200 ease-linear group-hover:text-gray-500">
          {content}
        </span>
      )}
    </li>
  );
};
