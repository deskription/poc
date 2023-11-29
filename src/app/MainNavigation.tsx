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

export default function MainNavigation() {
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
  const [selected, setSelected] = React.useState<string>();

  return (
    <List dense sx={{ width: 260 }}>
    <ListSubheader disableGutters>
        <ListItemButton>
        <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
        <ListItemText
            primaryTypographyProps={{
            fontSize: 20,
            fontWeight: 'bold',
            }}
        >POC</ListItemText>
        </ListItemButton>
    </ListSubheader>

    <Divider />

    <ListItemButton href="/dashboard" LinkComponent={NextLink}>
        <ListItemText inset primaryTypographyProps={{ fontWeight: 'bold' }}>Dashboard</ListItemText>
    </ListItemButton>
    <ListItemButton href="/apis" LinkComponent={NextLink}>
        <ListItemText inset primaryTypographyProps={{ fontWeight: 'bold' }}>APIs</ListItemText>
    </ListItemButton>
    <ListItemButton href="/crds" LinkComponent={NextLink}>
        <ListItemText inset primaryTypographyProps={{ fontWeight: 'bold' }}>CRDs</ListItemText>
    </ListItemButton>

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
                    return (
                        <ListItemButton
                        key={itemIndex}
                        selected={item.name === selected}
                        href={href}
                        LinkComponent={NextLink}
                        onClick={() => setSelected(item.name)}
                        >
                        <ListItemText inset>{item.name}</ListItemText>
                        </ListItemButton>
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