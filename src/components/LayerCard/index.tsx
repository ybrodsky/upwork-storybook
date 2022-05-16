import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MapImg from '../../assets/map.png';

type Props = {
  checked?: boolean;
}

const ShadowedBox = styled(Box)<Props>(({ theme, checked }) => ({
  boxShadow: checked ? `0px 0px 0px 2px #65E9D9` : '',

  '&:hover': {
    boxShadow: `0px 0px 0px 2px #65E9D9`,
  },

  border: checked
    ? `1px solid ${theme.palette.primary.dark}`
    : '1px solid #EFEFEF'
}));

const BackgroundedBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${MapImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'cover',
  height: '100px',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
}));

const LayerCard = ({
  checked,
}: Props) => {
  return (
    <ShadowedBox
      borderRadius="10px"
      width="229px"
      checked={checked}
    >
      <BackgroundedBox />
      <Box px={2} height="50px" display="flex" alignItems="center">
        <FormControlLabel
          control={<Checkbox checked={checked} color="primary" size="small" />}
          label="Flood zone 3"
        />
      </Box>
    </ShadowedBox>
  );
};

export default LayerCard;
