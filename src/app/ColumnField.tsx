import { get } from 'lodash';
import { dateTimeFormat } from './utils';
import { ResourceTableColumn } from '@/types/ResourceTable';
import Link from 'next/link';
import { Chip, Tooltip } from '@mui/material';

export default function ColumnField({ object, column }: { object: any, column: ResourceTableColumn }) {
  let value = get(object, column.path);

  if (column.path === 'metadata.name') {
    return <Link href={`/details/${value}`}>{value}</Link>
  }

  if (column.type === 'enum' && column.enum) {
    value = column.enum[value] || column.enum.default;
  }

  if (column.type === 'status') {
    return (
      <Tooltip title="asd" arrow placement="right">
        <Chip label="Running" color="success" size="small" variant="outlined" />
      </Tooltip>
    );
  }

  if (typeof value === 'string') {
    if (value.match(/^https:\/\//)) {
      return <a href={value} target="_blank" rel="noreferrer">{value}</a>
    }
    if (value.match(/^\d{4}-\d{2}-\d{2}/)) {
      const date = new Date(value);
      return dateTimeFormat.format(date);
    }
  }

  return value;
}
