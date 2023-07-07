import styled from 'styled-components';
import Select from 'react-select';

export const ProjectSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--color-base)',
      color: 'var(--color-text)',
      padding: '3px',
      height: '50px',
      cursor: 'pointer'
    }),
    option: (provided, state) => ({
      ...provided,
      color: 'var(--color-text)',
      backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-base)',
    })
  },
})`
& * {
  color: var(--color-text) !important;
}
& > div[id] {
  background-color: var(--color-base);
}
`;