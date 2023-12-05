'use client';

import * as React from 'react';
import NextLink from 'next/link'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { navigationItems } from '@/nav-items';
import { Collapse, Divider, ListItemIcon, ListSubheader } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MainNavigationSearchButton from '@/MainNavigationSearchButton';
import { usePathname, useSearchParams } from 'next/navigation'

interface Group {
  name: string;
  type: string;
}

const groups: Group[] = [
  { name: 'Workload', type: 'workload' },
];

interface ListLinkProps {
  href: string;
  label: string;
  selected: boolean;
  bold?: boolean;
}

const ListLink = (props: ListLinkProps) => {
  return (
    <ListItemButton href={props.href} selected={props.selected} LinkComponent={NextLink}>
      <ListItemText inset primaryTypographyProps={{ fontWeight: props.bold ? 'bold' : 'normal' }}>{props.label}</ListItemText>
    </ListItemButton>
  );
}

export default function MainNavigation() {
  const currentPathname = usePathname();
  const currentSearchParams = useSearchParams();

  const [closedGroups, setClosedGroups] = React.useState<Record<string, boolean>>({});

  // Lazy load this so that the SSR and initial rendering are the same
  React.useEffect(() => {
    setClosedGroups(JSON.parse(localStorage.getItem('_poc_closedGroups') || '{}'));
  }, []);
  const toggleGroup = (name: string) => {
    setClosedGroups(oldValue => {
      const newValue = { ...oldValue, [name]: !oldValue[name] };
      localStorage.setItem('_poc_closedGroups', JSON.stringify(newValue));
      return newValue;
    });
  };

  return (
    <List dense>

      <ListLink href="/" label="Dashboard" selected={currentPathname === '/'} bold />
      <ListLink href="/apis" label="APIs" selected={currentPathname === '/apis'} bold />
      <ListLink href="/crds" label="CRDs" selected={currentPathname === '/crds'} bold />
      <ListLink href="/deskriptions" label="Deskriptions" selected={currentPathname === '/deskriptions'} bold />

      <Divider />

      <MainNavigationSearchButton />

      <Divider />

      {navigationItems.map((group, groupIndex) => {
        const open = !closedGroups[group.name];
        const onClick = () => toggleGroup(group.name);
        return (
          <React.Fragment key={groupIndex}>
            <ListSubheader disableGutters>
              <ListItemButton onClick={onClick}>
                <ListItemIcon>{group.icon}</ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }}>{group.name}</ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListSubheader>

            {group.items?.length && (
              <>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List dense>
                    {group.items.map((item, itemIndex) => {
                      const params = new URLSearchParams();
                      if (item.apiGroup) {
                        params.set('apiGroup', item.apiGroup);
                      }
                      if (item.apiVersion) {
                        params.set('apiVersion', item.apiVersion);
                      }
                      if (item.plural) {
                        params.set('plural', item.plural);
                      }
                      if (item.scope) {
                        params.set('scope', item.scope);
                      }
                      const href = `/list?${params.toString()}`
                      let selected = currentPathname === '/list';
                      if (selected) {
                        params.forEach((value, name) => {
                          selected = selected && currentSearchParams.get(name) === value;
                        });
                      }
                      return (
                        <ListLink key={itemIndex} href={href} label={item.name} selected={selected} />
                      );
                    })}
                  </List>
                </Collapse>
                <Divider />
              </>
            )}
          </React.Fragment>
        )
      })}
    </List>
  );
}
