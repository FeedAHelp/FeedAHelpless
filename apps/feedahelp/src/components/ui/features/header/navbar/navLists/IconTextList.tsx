type Props = {
  title?: string;
  list: IconTextProps[];
};

type IconTextProps = {
  title: string;
  image: string;
};

const IconTextList = ({ title, list }: Props) => {
  return (
    <ul role="menu">
      <li className="dropdown-title">
        <span className="dropdown-link-title">{title}</span>
      </li>
      {list?.map((item: IconTextProps, index: number) => (
        <li role="menuitem" key={`${index}`}>
          <a className="dropdown-link" href="#adobe-xd">
            <img src={item?.image} />
            {item?.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default IconTextList;
