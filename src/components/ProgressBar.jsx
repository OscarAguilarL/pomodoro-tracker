import styled from '@emotion/styled';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

const ProgressContainer = styled.div`
  max-width: 15rem;
  max-height: 15rem;
  padding: 0 3.25rem;
`;

const MinutesLabel = styled.p`
  font: var(--time);
  padding: 0;
  margin: 0;
  color: var(${(props) => (props.isPaused ? '--green' : '--pink')});
`;

const StatusLabel = styled.p`
  font: var(--button);
  color: var(${(props) => (props.isPaused ? '--green' : '--pink')});
`;

export const ProgressBar = ({ isPaused = true }) => {
  return (
    <ProgressContainer>
      <CircularProgressbarWithChildren
        value={50}
        styles={buildStyles({
          pathColor: isPaused ? '#3ab499' : '#e046d7',
          trailColor: '#E046D733',
          textColor: isPaused ? '#3ab499' : '#e046d7',
          strokeLinecap: 'round',
        })}
        strokeWidth="5"
      >
        <MinutesLabel isPaused={isPaused}>14:00</MinutesLabel>
        <StatusLabel isPaused={isPaused}>Session paused</StatusLabel>
      </CircularProgressbarWithChildren>
    </ProgressContainer>
  );
};
