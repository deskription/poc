import { get } from 'lodash';
import { dateTimeFormat } from './utils';
import Link from 'next/link';
import { ResourceDetailField, ResourceDetails } from '@/types/ResourceDetails';

export function Field({ object, field }: { object: any, field: ResourceDetailField }) {
  let value = get(object, field.path);

  if (field.path === 'metadata.name') {
    return (
      <div>
        {field.name}
        {': '}
        <Link href={`/details/${value}`}>{value}</Link>
      </div>
    );
  }

  if (field.type === 'enum' && field.enum) {
    value = field.enum[value] || field.enum.default;
  }

  if (typeof value === 'string') {
    if (value.match(/^https:\/\//)) {
      return (
        <div>
          {field.name}
          {': '}
          <a href={value} target="_blank" rel="noreferrer">{value}</a>
        </div>
      );
    }
    if (value.match(/^\d{4}-\d{2}-\d{2}/)) {
      const date = new Date(value);
      return (
        <div>
          {field.name}
          {': '}
          {dateTimeFormat.format(date)}
        </div>
      );
    }
  }

  return (
    <div>
      {field.name}
      {': '}
      {value}
    </div>
  );
}

export default function Details({ object, resourceDetails }: { object: any, resourceDetails: ResourceDetails }) {
  return (
    <>
      {resourceDetails.spec.fields.map((field, index) => <Field key={index} object={object} field={field} />)}
    </>
  );
}
