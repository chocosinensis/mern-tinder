import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const SwipeButtons = () => {
  const [btns, setBtns] = useState([
    {
      Icon: ReplayIcon,
      className: 'repeat'
    },
    {
      Icon: CloseIcon,
      className: 'left'
    },    
    {
      Icon: StarRateIcon,
      className: 'star'
    },
    {
      Icon: FavoriteIcon,
      className: 'right'
    },
    {
      Icon: FlashOnIcon,
      className: 'lightning'
    }
  ]);

  const swiped = () => {}

  return (
    <div className="swipe-btns">
      {btns.map(({ Icon, className }) => (
        <IconButton
          onClick={swiped}
          className={`btn-main ${className}`}
        >
          <Icon fontSize="large" />
        </IconButton>
      ))}
    </div>
  );
}

export default SwipeButtons;
