type Props = {
  list: CardProps[];
};
type CardProps = {
  title: string;
  image: string;
  content: string;
};
const CardList = ({ list }: Props) => {
  return (
    <ul role="menu">
      {list?.map((item: CardProps, index: number) => (
        <li role="menuitem" key={`${index}`}>
          <a className="dropdown-link" href="#best-of-the-day">
            <img src={item?.image} className="icon" />
            <div>
              <span className="dropdown-link-title">{item?.title}</span>
              <p>{item?.content}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CardList;
