import styled from '@emotion/styled';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { useClock } from '../hooks/useClock.js';

const ProgressContainer = styled.div`
  max-width: 15rem;
  max-height: 15rem;
  padding: 0 3.25rem;
`;

const MinutesLabel = styled.p`
  font: var(--time);
  padding-bottom: 2rem;
  margin: 0;
  color: var(${(props) => (props.isPaused ? '--green' : '--pink')});
`;

export const ProgressBar = ({ isPaused = true, value }) => {
  const clock = useClock(value);

  return (
    <ProgressContainer>
      <CircularProgressbarWithChildren
        value={value}
        minValue={0}
        maxValue={1500}
        styles={buildStyles({
          pathColor: isPaused ? 'var(--green)' : 'var(--pink)',
          trailColor: 'var(--trailColor)',
          textColor: isPaused ? 'var(--green)' : 'var(--pink)',
          strokeLinecap: 'round',
        })}
        strokeWidth="5"
      >
        <MinutesLabel isPaused={isPaused}>{clock}</MinutesLabel>
      </CircularProgressbarWithChildren>
    </ProgressContainer>
  );
};
