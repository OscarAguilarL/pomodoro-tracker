import styled from '@emotion/styled'
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

const ProgressContainer = styled.div`
  max-width: 15rem;
  max-height: 15rem;
  padding: 0 3.25rem;
`;

export const ProgressBar = () => {
  return (
    <ProgressContainer>
      <CircularProgressbarWithChildren
        value={50}
        styles={buildStyles({
          pathColor: '#e046d7',
          trailColor: '#E046D733',
          textColor: '#e046d7',
          strokeLinecap: 'round',
        })}
        strokeWidth="5"
      >
        <h2>14:00</h2>
        <p>Session paused</p>
      </CircularProgressbarWithChildren>
    </ProgressContainer>
  );
};
