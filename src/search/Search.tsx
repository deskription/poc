'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation'
import SearchField from './SearchField';
import { NavigationItem, navigationItems } from '../nav-items';

export interface SearchProps {
  onClose?: () => void;
}

export default function Search(props: SearchProps) {
  const router = useRouter()

  const options = navigationItems.map((group) => group.items || []).flat();

  const onSelect = (option: NavigationItem) => {
    console.log('Search onSelect', option);
    props.onClose?.();

    const params = new URLSearchParams();
    if (option.apiGroup) {
      params.set('apiGroup', option.apiGroup);
    }
    if (option.apiVersion) {
      params.set('apiVersion', option.apiVersion);
    }
    if (option.plural) {
      params.set('plural', option.plural);
    }
    if (option.scope) {
      params.set('scope', option.scope);
    }
    const href = `/list?${params.toString()}`

    router.push(href);
  }

  return (
    <SearchField
      options={options}

      getOptionLabel={(option) => option.name}

      // renderOption={(props, option) => (
      //   <li {...props}>
      //     label: {option.label}
      //   </li>
      // )}

      // filterOptions={(options, state) => {
      //   console.log('SearchDialog filterOptions', options, state);
      //   return options;
      // }}

      onSelect={onSelect}
    />
  )
}
