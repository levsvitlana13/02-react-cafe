// import css from './VoteOptions.module.css';

// interface VoteOptionsProps {
//   onLeaveFeedback: (option: 'good' | 'neutral' | 'bad') => void;
//   onReset: () => void;
//   totalFeedback: number;
// }

// const VoteOptions = ({
//   onLeaveFeedback,
//   onReset,
//   totalFeedback,
// }: VoteOptionsProps) => {
//   return (
//     <div className={css.wrapper}>
//       <button className={css.btn} onClick={() => onLeaveFeedback('good')}>
//         Good
//       </button>
//       <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>
//         Neutral
//       </button>
//       <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>
//         Bad
//       </button>
//       {totalFeedback > 0 && (
//         <button className={css.btnReset} onClick={onReset}>
//           Reset
//         </button>
//       )}
//     </div>
//   );
// };

// export default VoteOptions;
import css from './VoteOptions.module.css';
import type { VoteType } from '../types/votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>

      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>

      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>

      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
