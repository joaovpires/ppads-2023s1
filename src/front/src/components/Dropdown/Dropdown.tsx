import { Menu, MenuItem, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Container } from './Dropdown.styles';
import { useTurmaContext } from '../../contexts/turma-context';

export const DropdownMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const { setSelectedTurma } = useTurmaContext();

    const turmas = [
        '1º Ano',
        '2º Ano',
        '3º Ano',
        '4º Ano',
        '5º Ano',
    ];

    console.log();

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (
      event: React.MouseEvent<HTMLElement>,
      index: number,
    ) => {
      setSelectedIndex(index);
      setAnchorEl(null);
      setSelectedTurma(turmas[index]);
    };

  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <Container>
        <List
          component="nav"
          aria-label="Device settings"
          sx={{ bgcolor: '#30F2CF', borderRadius: '20px'}}
        >
          <ListItem
            button
            id="lock-button"
            onClick={handleClickListItem}
          >
            <ListItemText
              primary="Selecione sua turma"
              secondary={turmas[selectedIndex]}
              className="my-list-item"
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {turmas.map((turmaSelected, index) => (
            <MenuItem
              key={turmaSelected}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {turmaSelected}
            </MenuItem>
          ))}
        </Menu>
      </Container>
    );
}