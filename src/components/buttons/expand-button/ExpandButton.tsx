import { IconButton } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface ExpandButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({
  isExpanded,
  onClick
}) => {
  return (
    <IconButton onClick={onClick} color="primary" aria-expanded={isExpanded} aria-label="show more">
      {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </IconButton>
  )
}

export default ExpandButton