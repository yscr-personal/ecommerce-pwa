import { useIntl } from 'react-intl';
import messages from './messages';
import Select from '@/components/select';

type Props = {
  onChange: (value: string) => void;
  value: string;
};

export default function ProductsSorterSelect({ onChange, value }: Readonly<Props>) {
  const intl = useIntl();
  return (
    <div className="flex h-10 w-full flex-row items-center justify-end text-sm lg:w-auto">
      <Select
        label={intl.formatMessage(messages.sort_by)}
        className="cursor-pointer rounded-lg border bg-gray-100 p-2 outline-none"
        onChange={onChange}
        value={value}
        options={[
          {
            label: intl.formatMessage(messages.sort_by_price_asc),
            value: 'price-asc',
          },
          {
            label: intl.formatMessage(messages.sort_by_price_desc),
            value: 'price-desc',
          },
          {
            label: intl.formatMessage(messages.sort_by_rating),
            value: 'mean_rating-desc',
          },
          {
            label: intl.formatMessage(messages.sort_by_name),
            value: 'title-asc',
          },
        ]}
      />
    </div>
  );
}
