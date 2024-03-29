export const TableIcon = (props: React.SVGProps<SVGPathElement>) => {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7C4 5.34315 5.34315 4 7 4H12H17C18.6569 4 20 5.34315 20 7V12V17C20 18.6569 18.6569 20 17 20H12H7C5.34315 20 4 18.6569 4 17V12V7ZM7 6C6.44772 6 6 6.44772 6 7V11H11V6H7ZM13 6V11H18V7C18 6.44772 17.5523 6 17 6H13ZM18 13H13V18H17C17.5523 18 18 17.5523 18 17V13ZM11 18V13H6V17C6 17.5523 6.44772 18 7 18H11Z"
        fill="#ffffff8c"
        {...props}
      />
    </svg>
  );
};
