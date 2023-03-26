import Dots from './dots';
import { Button, ButtonsArea } from './styles';

type Props = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

export default function Pagination({ page, setPage, totalPages }: Props) {
  const array = Array.from({ length: totalPages }, (_, i) => (
    <Button key={i} onClick={() => setPage(i + 1)} disabled={page === i + 1}>
      {i + 1}
    </Button>
  ));

  let buttons = [];
  if (page < 5) {
    buttons = array.slice(0, 5);
    if (totalPages > 5) {
      buttons.push(<Dots key={'dot1'} />);
    }
    buttons.push(array[totalPages - 1]);
  } else if (page > totalPages - 4) {
    buttons = array.slice(0, 1);
    buttons.push(<Dots key={'dot1'} />);
    buttons = buttons.concat(array.slice(-5));
  } else {
    buttons = array.slice(0, 1);
    buttons.push(<Dots key={'dot1'} />);
    buttons = buttons.concat(array.slice(page - 2, page + 1));
    buttons.push(<Dots key={'dot2'} />);
    buttons.push(array[totalPages - 1]);
  }

  return <ButtonsArea>{new Set(buttons)}</ButtonsArea>;
}
